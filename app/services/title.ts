const ACRONYMS = new Set(["AI", "UI", "UX", "QA", "CTO", "&", "/"]);

/** "FULL STACK WEB DEVELOPMENT" → "Full Stack Web Development" (keeps acronyms). */
export function toTitle(value: string) {
  return value
    .split(" ")
    .map((word) => (ACRONYMS.has(word) ? word : word.charAt(0) + word.slice(1).toLowerCase()))
    .join(" ");
}
