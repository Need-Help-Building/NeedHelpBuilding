/**
 * NHB pixel sprites, drawn for the business-card identity. One source of truth for the playable runner
 * (canvas) and the decorative SVG pieces across the site.
 *
 * Each sprite is a list of rows; every character is one pixel:
 *   "#" ink · "Y" construction yellow · "g" pixel grey · "c" charcoal · "w" off-white · "r" signal red · "." empty
 * Rows are padded to the widest row, so they don't need to be the same length.
 */

export const PALETTE: Record<string, string> = {
  "#": "#171717",
  Y: "#ffd000",
  g: "#b8b8b8",
  c: "#252525",
  w: "#f5f3ed",
  r: "#e5484d",
};

export type Sprite = string[];

export function spriteSize(sprite: Sprite) {
  return { w: Math.max(...sprite.map((r) => r.length)), h: sprite.length };
}

/* ---------------------------------------------------------------- dinosaur
 * NHB's builder dino: a stocky pixel T-rex in a yellow hard hat. Body rows are shared; legs swap per frame.
 */
const DINO_BODY: Sprite = [
  "...........YYYYYY",
  "..........YYYYYYYY",
  ".........YYYYYYYYYYYY",
  "..........##########",
  ".........###########",
  ".........##w#########",
  ".........############",
  ".........############",
  ".........#######",
  ".........##########",
  "........#######",
  "#......########",
  "#.....##########",
  "##...##########.##",
  "###..#########..#",
  "##############",
  ".############",
  "..##########",
  "...########",
];

const LEGS_A: Sprite = ["....###.##", "....##...#", "....#....##", "....##"];
const LEGS_B: Sprite = ["....##..###", "....#....#", "...##....#", ".........##"];
const LEGS_JUMP: Sprite = ["....##..##", "....#....#", "....##...##", ""];

/** Same body with a wide, startled eye for the game-over frame. */
const DINO_BODY_HIT: Sprite = DINO_BODY.map((row, i) =>
  i === 4 ? ".........##ww########" : i === 5 ? ".........##ww########" : row,
);

export const DINO = {
  runA: [...DINO_BODY, ...LEGS_A],
  runB: [...DINO_BODY, ...LEGS_B],
  jump: [...DINO_BODY, ...LEGS_JUMP],
  hit: [...DINO_BODY_HIT, ...LEGS_JUMP],
  /** Standing pose for static illustrations. */
  stand: [...DINO_BODY, ...LEGS_A],
};

/** Hit boxes for the dino, relative to its top-left (x, y, w, h), deliberately a little forgiving. */
export const DINO_HITBOXES: [number, number, number, number][] = [
  [10, 3, 11, 6], // head
  [2, 11, 13, 7], // body and tail
  [4, 18, 7, 4], // legs
];

/* ---------------------------------------------------------------- cacti */
export const CACTI: Sprite[] = [
  // small
  [
    "...#",
    "..###",
    "..###",
    "#.###",
    "#.###.#",
    "#.###.#",
    "#####.#",
    "..#####",
    "..###",
    "..###",
    "..###",
    "..###",
  ],
  // tall saguaro (the card's cactus)
  [
    "....##",
    "...####",
    "...####",
    "...####..#",
    "#..####.###",
    "##.####.###",
    "##.####.###",
    "##.#######",
    "#######",
    ".######",
    "...####",
    "...####",
    "...####",
    "...####",
    "...####",
    "...####",
  ],
  // pair
  [
    "...#.......#",
    "..###.....###",
    "#.###.#...###",
    "#.###.#.#.###.#",
    "#####.#.#.###.#",
    "..#####.#####.#",
    "..###.....#####",
    "..###.....###",
    "..###.....###",
    "..###.....###",
    "..###.....###",
  ],
];

/* ---------------------------------------------------------------- pterodactyl
 * Flies right-to-left: long beak on the left, crest and tail to the right. Two wing frames, same height,
 * so the body stays on one line while the wings flap.
 */
export const PTERO_UP: Sprite = [
  "......#",
  "......##",
  "......###",
  "......####",
  "......#####",
  "..##..######",
  ".#w##.#######",
  "################",
  "......#############",
  ".......########",
  "",
  "",
  "",
  "",
];

export const PTERO_DOWN: Sprite = [
  "",
  "",
  "",
  "",
  "",
  "..##",
  ".#w##",
  "################",
  "......#############",
  ".......#######",
  ".......#####",
  ".......####",
  ".......###",
  ".......##",
];

/** Pterodactyl hit box (body and head only; wing tips are forgiving). */
export const PTERO_HITBOX: [number, number, number, number] = [1, 5, 17, 5];

/* ---------------------------------------------------------------- scenery */
export const CLOUD: Sprite = [
  "........gggg",
  "......gggggggg",
  "...gggggggggggggg",
  "gggggggggggggggggggggg",
];

export const CLOUD_SMALL: Sprite = ["....ggg", "..ggggggg", "ggggggggggggg"];

export const SUN: Sprite = [
  "....YYYY",
  "..YYYYYYYY",
  ".YYYYYYYYYY",
  ".YYYYYYYYYY",
  "YYYYYYYYYYYY",
  "YYYYYYYYYYYY",
  "YYYYYYYYYYYY",
  "YYYYYYYYYYYY",
  ".YYYYYYYYYY",
  ".YYYYYYYYYY",
  "..YYYYYYYY",
  "....YYYY",
];

export const FOOTPRINT: Sprite = ["#.#.#", "#.#.#", ".###", ".###", "..#"];

/** Small "offline" Wi-Fi glyph with a red cross, as on the card. */
export const WIFI_OFF: Sprite = [
  "..#######",
  ".#.......#",
  "#..#####..#",
  "..#.....#",
  "....###......r.r",
  "...#...#......r",
  "......#......r.r",
];

/** Height of the PixelHorizon flat ground; anything "on the ground" sits at bottom: GROUND_H (px). */
export const GROUND_H = 14;
