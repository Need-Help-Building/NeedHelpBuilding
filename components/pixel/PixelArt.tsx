import { PALETTE, spriteSize, type Sprite } from "@/lib/pixel-sprites";
import { cn } from "@/lib/cn";

/**
 * Renders a sprite as crisp SVG. Horizontal runs of the same colour are merged into one rect, so even the
 * dino is only a few dozen elements. Decorative by default (aria-hidden); pass `label` to expose it.
 */
export default function PixelArt({
  sprite,
  scale = 4,
  className,
  label,
  flip = false,
  colors,
}: {
  sprite: Sprite;
  /** CSS pixels per sprite pixel. */
  scale?: number;
  className?: string;
  label?: string;
  flip?: boolean;
  /** Override palette entries, e.g. { "#": "#ffd000" } for a yellow silhouette. */
  colors?: Partial<Record<string, string>>;
}) {
  const { w, h } = spriteSize(sprite);
  const palette = { ...PALETTE, ...colors };
  const rects: { x: number; y: number; len: number; fill: string }[] = [];
  sprite.forEach((row, y) => {
    let x = 0;
    while (x < row.length) {
      const ch = row[x];
      if (ch === "." || ch === " " || !palette[ch]) {
        x++;
        continue;
      }
      let len = 1;
      while (row[x + len] === ch) len++;
      rects.push({ x, y, len, fill: palette[ch]! });
      x += len;
    }
  });

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      width={w * scale}
      height={h * scale}
      shapeRendering="crispEdges"
      className={cn("block shrink-0", className)}
      {...(label ? { role: "img", "aria-label": label } : { "aria-hidden": true })}
    >
      <g transform={flip ? `translate(${w} 0) scale(-1 1)` : undefined}>
        {rects.map((r, i) => (
          <rect key={i} x={r.x} y={r.y} width={r.len} height={1} fill={r.fill} />
        ))}
      </g>
    </svg>
  );
}
