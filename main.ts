// Why this word: home Wi-Fi has moods — full bars in the kitchen,
// dead in the bedroom, gone mid-call, perfect at 3 a.m. when nobody
// needs it. It works exactly when it feels like it, and never when you do.
// One Word for Your Wi-Fi — entry program.
// Writes a single word describing home Wi-Fi to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "moodswings";

// Gate (RULES.txt): entry.txt must be UTF-8 text of 1 to 20 characters,
// not only whitespace, a single word on one line.
if (WORD.length < 1 || WORD.length > 20) {
  throw new Error(`word must be 1-20 characters, got ${WORD.length}`);
}
if (WORD.trim().length === 0 || /\s/.test(WORD) || WORD.includes("\n")) {
  throw new Error("word must be a single non-blank word on one line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
console.log(`wrote ${WORD.length}-character word to ${join(outDir, "entry.txt")}`);
