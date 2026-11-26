import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "Monday morning: the weekend didn't end, it just put on a tie and started charging me rent.";

if (joke.length > 195 || joke.includes("\n")) {
  throw new Error("entry must be one line of at most 195 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke, "utf8");
