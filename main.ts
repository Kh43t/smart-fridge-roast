// Roast the Smart Fridge: One Line, Best Laugh Wins
// Entry program: writes a single roast line (1-160 chars, one line)
// to /output/entry.txt. Deterministic, no network, no secrets.

import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My smart fridge knows every item inside it except the leftovers I hid behind the pickles \u2014 three grand of AI, outsmarted by a jar.";

const line = ROAST.trim();

// Gate guard, mirroring the sealed scorer: UTF-8 text, 1-160 chars,
// not only whitespace, exactly one line.
if (line.length < 1 || line.length > 160) {
  throw new Error(`roast must be 1-160 characters, got ${line.length}`);
}
if (!/\S/.test(line)) {
  throw new Error("roast must not be only whitespace");
}
if (line.includes("\n") || line.includes("\r")) {
  throw new Error("roast must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(`wrote ${line.length} chars to /output/entry.txt`);
