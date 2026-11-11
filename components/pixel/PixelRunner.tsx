"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { CACTI, CLOUD, CLOUD_SMALL, DINO, DINO_HITBOXES, PALETTE, spriteSize, type Sprite } from "@/lib/pixel-sprites";
import { cn } from "@/lib/cn";

/**
 * NHB Runner — an original pixel endless-runner (the business card, playable).
 *
 * - Attract mode: until someone plays, the dino runs and hops cacti on its own (skipped under reduced motion).
 * - Controls: Space / Arrow Up (while the game has focus, or during a game), click or tap anywhere on it.
 *   Holding the key or finger jumps higher; a quick tap gives a short hop.
 * - Score rises with distance, speed ramps up, collision ends the run, any input restarts.
 * - Every 100 points the "offline" Wi-Fi gets a bar back; at 300 the business is ONLINE.
 * - Rendering pauses when the game is off-screen or the tab is hidden.
 *
 * World units are sprite pixels ("art px"); each is drawn as `scale` CSS pixels.
 */

type Mode = "attract" | "idle" | "play" | "over";

interface Obstacle {
  x: number;
  sprite: number;
}
interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  max: number;
  color: string;
}
interface Cloud {
  x: number;
  y: number;
  small: boolean;
}

const ART_H = 70; // logical height (art px)
const GROUND = 54; // y of the ground surface (leaves headroom for the jump apex)
const SPEED_START = 0.115; // art px per ms
const SPEED_MAX = 0.27;
const RAMP_DISTANCE = 9000; // distance over which speed reaches max
const JUMP_V = 0.2; // initial upward velocity (apex ≈ 27 art px)
const JUMP_CUT = 0.09; // velocity cap when the jump is released early
const MIN_HOP = 12; // a released jump still rises at least this high (clears the small cactus)
const GRAVITY = 0.00075;
const HI_KEY = "nhb-runner-hi";

/** Pre-renders a sprite at 1 canvas pixel per art pixel, for crisp scaled drawImage. */
function bake(sprite: Sprite): HTMLCanvasElement {
  const { w, h } = spriteSize(sprite);
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  const ctx = c.getContext("2d")!;
  sprite.forEach((row, y) => {
    for (let x = 0; x < row.length; x++) {
      const color = PALETTE[row[x]];
      if (color) {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, 1, 1);
      }
    }
  });
  return c;
}

const pad = (n: number) => String(Math.min(n, 99999)).padStart(5, "0");

function readHi(): number {
  try {
    return Number(window.localStorage.getItem(HI_KEY)) || 0;
  } catch {
    return 0;
  }
}
function writeHi(n: number) {
  try {
    window.localStorage.setItem(HI_KEY, String(n));
  } catch {
    /* storage unavailable: high score lasts for this visit only */
  }
}

export default function PixelRunner({ className, label = "NHB Runner" }: { className?: string; label?: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scoreRef = useRef<HTMLSpanElement>(null);
  const hiRef = useRef<HTMLSpanElement>(null);
  const wifiRef = useRef<HTMLSpanElement>(null);
  const [mode, setModeState] = useState<Mode>("attract");
  const [announce, setAnnounce] = useState("");
  const instructionsId = useId();

  // Mutable game state lives in a ref so the rAF loop never re-renders React.
  const g = useRef({
    mode: "attract" as Mode,
    w: 300, // logical width (art px)
    scale: 3,
    dinoX: 24,
    y: 0, // height above ground
    vy: 0,
    holding: false,
    distance: 0,
    speed: SPEED_START,
    obstacles: [] as Obstacle[],
    particles: [] as Particle[],
    clouds: [] as Cloud[],
    groundOffset: 0,
    dustTimer: 0,
    legTimer: 0,
    legFrame: 0,
    bars: 0,
    hi: 0,
    overAt: 0,
    visible: true,
    reduced: false,
    last: 0,
    raf: 0,
    sprites: null as null | {
      runA: HTMLCanvasElement;
      runB: HTMLCanvasElement;
      jump: HTMLCanvasElement;
      hit: HTMLCanvasElement;
      cacti: HTMLCanvasElement[];
      cloud: HTMLCanvasElement;
      cloudSmall: HTMLCanvasElement;
    },
  });

  const setMode = useCallback((m: Mode) => {
    g.current.mode = m;
    setModeState(m);
  }, []);

  /* ------------------------------------------------------------- helpers */
  const score = () => Math.floor(g.current.distance / 9);

  const updateHud = useCallback(() => {
    const s = g.current;
    if (scoreRef.current) scoreRef.current.textContent = s.mode === "attract" ? "DEMO" : pad(score());
    const bars = s.mode === "attract" ? 0 : Math.min(3, Math.floor(score() / 100));
    if (bars !== s.bars) {
      if (bars > s.bars) burst(s.dinoX + 12, GROUND - 20, PALETTE.Y, 14);
      s.bars = bars;
      wifiRef.current?.setAttribute("data-bars", String(bars));
    }
  }, []);

  function burst(x: number, y: number, color: string, n: number) {
    const s = g.current;
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2;
      const v = 0.02 + Math.random() * 0.05;
      s.particles.push({ x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v - 0.02, life: 0, max: 380 + Math.random() * 300, color });
    }
  }

  const resetWorld = useCallback((keepScenery: boolean) => {
    const s = g.current;
    s.distance = 0;
    s.speed = SPEED_START;
    s.y = 0;
    s.vy = 0;
    s.bars = 0;
    wifiRef.current?.setAttribute("data-bars", "0");
    // Clear anything the dino would hit straight away.
    s.obstacles = keepScenery ? s.obstacles.filter((o) => o.x > s.dinoX + 70) : [];
    s.particles = [];
  }, []);

  /* ------------------------------------------------------------- input */
  const jump = useCallback(() => {
    const s = g.current;
    if (s.mode === "over") {
      if (performance.now() - s.overAt < 350) return; // avoid instant restarts from a held key
      resetWorld(false);
      setMode("play");
      setAnnounce("");
    } else if (s.mode === "attract" || s.mode === "idle") {
      resetWorld(true);
      setMode("play");
    }
    if (s.y === 0) {
      s.vy = JUMP_V;
      s.holding = true;
      burst(s.dinoX + 6, GROUND, PALETTE.g, 5);
    }
    if (!s.raf) start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetWorld, setMode]);

  const release = useCallback(() => {
    g.current.holding = false;
  }, []);

  /* ------------------------------------------------------------- simulation */
  function spawnGap(speed: number) {
    return (speed * 760 + 34) * (1 + Math.random() * 0.85);
  }

  function step(dt: number) {
    const s = g.current;
    const playing = s.mode === "play" || s.mode === "attract";
    if (!playing) return;

    s.speed = SPEED_START + (SPEED_MAX - SPEED_START) * Math.min(1, s.distance / RAMP_DISTANCE);
    const dx = s.speed * dt;
    s.distance += dx;
    s.groundOffset = (s.groundOffset + dx) % 4096;

    // Obstacles
    for (const o of s.obstacles) o.x -= dx;
    s.obstacles = s.obstacles.filter((o) => o.x > -20);
    const last = s.obstacles[s.obstacles.length - 1];
    if (!last || last.x < s.w - spawnGap(s.speed)) {
      const big = s.distance > 1500 ? 3 : 2;
      s.obstacles.push({ x: Math.max(s.w + 4, (last?.x ?? 0) + 40), sprite: Math.floor(Math.random() * big) });
    }

    // Clouds drift at a fraction of the ground speed
    for (const c of s.clouds) {
      c.x -= dx * (c.small ? 0.15 : 0.22);
      if (c.x < -30) {
        c.x = s.w + Math.random() * 60;
        c.y = 4 + Math.random() * 16;
      }
    }

    // Attract mode: hop when a cactus gets close
    if (s.mode === "attract" && s.y === 0) {
      const next = s.obstacles.find((o) => o.x + 14 > s.dinoX + 4);
      if (next && next.x - (s.dinoX + 18) < s.speed * 165 + 4) {
        s.vy = JUMP_V;
        s.holding = Math.random() > 0.4;
        window.setTimeout(release, 140 + Math.random() * 120);
      }
    }

    // Jump physics. Releasing early shortens the jump, but only once the dino is MIN_HOP up, so even a quick
    // tap clears a small cactus.
    if (s.y > 0 || s.vy > 0) {
      if (!s.holding && s.vy > JUMP_CUT && s.y >= MIN_HOP) s.vy = JUMP_CUT;
      s.y += s.vy * dt;
      s.vy -= GRAVITY * dt;
      if (s.y <= 0) {
        s.y = 0;
        s.vy = 0;
        burst(s.dinoX + 8, GROUND, PALETTE.g, 4);
      }
    }

    // Legs + trailing "offline" pixels behind the dino
    s.legTimer += dt;
    if (s.legTimer > 95) {
      s.legTimer = 0;
      s.legFrame ^= 1;
    }
    s.dustTimer += dt;
    if (s.y === 0 && s.dustTimer > 70) {
      s.dustTimer = 0;
      const colors = [PALETTE["#"], PALETTE.g, PALETTE.g];
      s.particles.push({
        x: s.dinoX + 1 + Math.random() * 3,
        y: GROUND - 2 - Math.random() * 6,
        vx: -s.speed * (0.35 + Math.random() * 0.4),
        vy: -0.004 - Math.random() * 0.01,
        life: 0,
        max: 260 + Math.random() * 260,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // Collision (only when a person is playing)
    if (s.mode === "play") {
      const dinoTop = GROUND - 23 - Math.round(s.y);
      const cacti = s.sprites!.cacti;
      for (const o of s.obstacles) {
        const c = cacti[o.sprite];
        const ox = o.x + 1;
        const oy = GROUND - c.height + 1;
        const ow = c.width - 2;
        const oh = c.height - 1;
        for (const [hx, hy, hw, hh] of DINO_HITBOXES) {
          const ax = s.dinoX + hx;
          const ay = dinoTop + hy;
          if (ax < ox + ow && ax + hw > ox && ay < oy + oh && ay + hh > oy) {
            gameOver();
            return;
          }
        }
      }
    }
  }

  function gameOver() {
    const s = g.current;
    const final = score();
    s.overAt = performance.now();
    burst(s.dinoX + 16, GROUND - 12, PALETTE["#"], 16);
    if (final > s.hi) {
      s.hi = final;
      writeHi(final);
      if (hiRef.current) hiRef.current.textContent = pad(final);
    }
    setMode("over");
    setAnnounce(`Game over. Score ${final}.${final >= s.hi && final > 0 ? " New high score." : ""} Press Space or tap to play again.`);
  }

  function updateParticles(dt: number) {
    const s = g.current;
    for (const p of s.particles) {
      p.life += dt;
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.vy += 0.00012 * dt;
    }
    s.particles = s.particles.filter((p) => p.life < p.max);
  }

  /* ------------------------------------------------------------- drawing */
  function draw() {
    const s = g.current;
    const canvas = canvasRef.current;
    const sp = s.sprites;
    if (!canvas || !sp) return;
    const ctx = canvas.getContext("2d")!;
    const dpr = canvas.width / (s.w * s.scale) || 1;
    ctx.setTransform(s.scale * dpr, 0, 0, s.scale * dpr, 0, 0);
    ctx.imageSmoothingEnabled = false;
    ctx.clearRect(0, 0, s.w, ART_H);

    for (const c of s.clouds) ctx.drawImage(c.small ? sp.cloudSmall : sp.cloud, Math.round(c.x), Math.round(c.y));

    // Ground: jagged yellow crust, yellow band, black earth with scrolling specks (as on the card)
    const off = Math.floor(s.groundOffset);
    ctx.fillStyle = PALETTE.Y;
    ctx.fillRect(0, GROUND, s.w, 4);
    for (let x = -((off % 23) + 23); x < s.w + 23; x += 23) {
      ctx.fillRect(x + 3, GROUND - 1, 5, 1);
      ctx.fillRect(x + 14, GROUND - 1, 2, 1);
      ctx.fillRect(x + 18, GROUND - 2, 1, 1);
    }
    ctx.fillStyle = PALETTE["#"];
    ctx.fillRect(0, GROUND + 4, s.w, ART_H - GROUND - 4);
    for (let x = -((off % 17) + 17); x < s.w + 17; x += 17) {
      ctx.fillRect(x + 2, GROUND + 2, 2, 1);
      ctx.fillRect(x + 9, GROUND + 3, 1, 1);
    }
    ctx.fillStyle = PALETTE.Y;
    for (let x = -((off % 29) + 29); x < s.w + 29; x += 29) {
      ctx.fillRect(x + 4, GROUND + 7, 2, 1);
      ctx.fillRect(x + 19, GROUND + 11, 1, 1);
    }
    ctx.fillStyle = PALETTE.c;
    for (let x = -((off % 13) + 13); x < s.w + 13; x += 13) ctx.fillRect(x + 6, GROUND + 9, 3, 1);

    for (const o of s.obstacles) {
      const c = sp.cacti[o.sprite];
      ctx.drawImage(c, Math.round(o.x), GROUND - c.height);
    }

    for (const p of s.particles) {
      ctx.globalAlpha = Math.max(0, 1 - p.life / p.max);
      ctx.fillStyle = p.color;
      ctx.fillRect(Math.round(p.x), Math.round(p.y), 1, 1);
    }
    ctx.globalAlpha = 1;

    const frame =
      s.mode === "over" ? sp.hit : s.y > 0 ? sp.jump : s.mode === "idle" ? sp.runA : s.legFrame ? sp.runB : sp.runA;
    ctx.drawImage(frame, s.dinoX, GROUND - 23 - Math.round(s.y));
  }

  /* ------------------------------------------------------------- loop */
  function tick(now: number) {
    const s = g.current;
    s.raf = 0;
    if (!s.visible || document.hidden) return; // resumed by the visibility observers
    const dt = Math.min(34, now - (s.last || now));
    s.last = now;
    step(dt);
    updateParticles(dt);
    draw();
    updateHud();
    const animating = s.mode === "play" || s.mode === "attract" || s.particles.length > 0;
    if (animating) s.raf = requestAnimationFrame(tick);
  }

  function start() {
    const s = g.current;
    if (s.raf) return;
    s.last = performance.now();
    s.raf = requestAnimationFrame(tick);
  }

  /* ------------------------------------------------------------- setup */
  useEffect(() => {
    const s = g.current;
    const wrap = wrapRef.current!;
    const canvas = canvasRef.current!;
    s.sprites = {
      runA: bake(DINO.runA),
      runB: bake(DINO.runB),
      jump: bake(DINO.jump),
      hit: bake(DINO.hit),
      cacti: CACTI.map(bake),
      cloud: bake(CLOUD),
      cloudSmall: bake(CLOUD_SMALL),
    };
    s.hi = readHi();
    if (hiRef.current) hiRef.current.textContent = pad(s.hi);

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    s.reduced = mq.matches;
    if (s.reduced) setMode("idle");

    const resize = () => {
      const cssW = wrap.clientWidth;
      s.scale = cssW < 640 ? 2 : 3;
      s.w = Math.ceil(cssW / s.scale);
      s.dinoX = Math.round(Math.min(Math.max(16, s.w * 0.12), 90));
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(cssW * dpr);
      canvas.height = Math.round(ART_H * s.scale * dpr);
      canvas.style.height = `${ART_H * s.scale}px`;
      if (s.clouds.length === 0) {
        s.clouds = [
          { x: s.w * 0.55, y: 8, small: false },
          { x: s.w * 0.85, y: 16, small: true },
          { x: s.w * 0.25, y: 4, small: true },
        ];
      }
      if (s.obstacles.length === 0) s.obstacles = [{ x: Math.max(s.dinoX + 80, s.w * 0.62), sprite: 1 }];
      draw();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);

    const io = new IntersectionObserver(
      ([entry]) => {
        s.visible = entry.isIntersecting;
        if (s.visible && (s.mode === "attract" || s.mode === "play")) start();
      },
      { threshold: 0.05 },
    );
    io.observe(wrap);

    const onVis = () => {
      if (!document.hidden && s.visible && (s.mode === "attract" || s.mode === "play")) start();
    };
    document.addEventListener("visibilitychange", onVis);

    // Keyboard: always when the game has focus; also mid-game while nothing else is focused.
    const isJumpKey = (e: KeyboardEvent) => e.code === "Space" || e.code === "ArrowUp" || e.key === " ";
    const owns = () => {
      const active = document.activeElement;
      if (active === wrap) return true;
      const free = !active || active === document.body;
      return free && s.visible && s.mode === "play";
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (!isJumpKey(e) || !owns()) return;
      e.preventDefault();
      if (!e.repeat) jump();
    };
    const onKeyUp = (e: KeyboardEvent) => {
      if (isJumpKey(e) && owns()) release();
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);

    if (!s.reduced) start();

    return () => {
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
      cancelAnimationFrame(s.raf);
      s.raf = 0;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    if (e.button !== 0) return;
    e.preventDefault();
    // Focus so Space works next, without the keyboard focus ring a pointer user didn't ask for.
    wrapRef.current?.focus({ preventScroll: true, focusVisible: false } as FocusOptions);
    (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
    jump();
  };

  const statusText =
    mode === "over" ? "Game over" : mode === "play" ? null : mode === "idle" ? "Tap or press Space to play" : "Tap to play";

  return (
    <div
      ref={wrapRef}
      tabIndex={0}
      role="application"
      aria-label={`${label} — a playable mini-game`}
      aria-describedby={instructionsId}
      onPointerDown={onPointerDown}
      onPointerUp={release}
      onPointerCancel={release}
      className={cn(
        "group/runner relative w-full touch-manipulation select-none outline-none",
        "focus-visible:after:pointer-events-none focus-visible:after:absolute focus-visible:after:inset-x-4 focus-visible:after:top-0 focus-visible:after:bottom-[22px] focus-visible:after:border-2 focus-visible:after:border-dashed focus-visible:after:border-ink/40",
        className,
      )}
      style={{
        cursor:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='22' height='22' shape-rendering='crispEdges'%3E%3Cpath d='M2 2h3v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1H9v1h1v1h1v2H9v-1H8v-1H7v-1H6v1H5v1H2z' fill='%23171717'/%3E%3Cpath d='M3 4h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h-3v1h1v1h1v1H9v-1H8v-1H7v-1H6v1H5v1H3z' fill='%23ffd000'/%3E%3C/svg%3E\") 2 2, pointer",
      }}
    >
      <p id={instructionsId} className="sr-only">
        Press Space or the Up arrow, or tap, to jump over the cacti. Hold to jump higher. Every 100 points brings the
        Wi-Fi back one bar.
      </p>

      <canvas ref={canvasRef} aria-hidden className="block w-full" style={{ imageRendering: "pixelated" }} />

      {/* HUD */}
      <div aria-hidden className="pointer-events-none absolute top-1 right-4 flex items-center gap-4 sm:right-6">
        <span className="t-arcade flex items-center gap-2 text-ink/45">
          HI <span ref={hiRef}>00000</span>
        </span>
        <span ref={scoreRef} className="t-arcade min-w-[5ch] text-right text-ink">
          DEMO
        </span>
        <span ref={wifiRef} data-bars="0" className="pixel-wifi relative flex h-4 items-end gap-[2px]">
          <span className="w-[3px] bg-current" style={{ height: 5 }} />
          <span className="w-[3px] bg-current" style={{ height: 9 }} />
          <span className="w-[3px] bg-current" style={{ height: 13 }} />
          <span className="pixel-wifi-x t-arcade absolute -right-2.5 -bottom-0.5 text-[10px] leading-none text-[#e5484d]">×</span>
          <span className="pixel-wifi-online t-arcade absolute top-[calc(100%+4px)] right-0 hidden text-[9px] whitespace-nowrap">
            Online
          </span>
        </span>
      </div>

      {statusText && (
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-[38%] flex justify-center">
          <span
            className={cn(
              "t-arcade rounded-[2px] bg-ivory/85 px-2.5 py-1.5 text-[11px] text-ink sm:text-xs",
              mode === "attract" && "opacity-0 transition-opacity duration-300 group-hover/runner:opacity-100 group-focus-visible/runner:opacity-100",
            )}
          >
            {statusText}
            {mode === "over" && <span className="ml-2 text-ink/60">· tap or Space to retry</span>}
          </span>
        </div>
      )}

      <p aria-live="polite" className="sr-only">
        {announce}
      </p>
    </div>
  );
}
