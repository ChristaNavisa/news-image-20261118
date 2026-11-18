import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
  statSync,
} from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "entry.png");
if (!existsSync(src)) {
  throw new Error("entry.png not found next to main.ts");
}
const dest = join(outDir, "entry.png");
copyFileSync(src, dest);
const head = readFileSync(dest).subarray(0, 8);
if (!head.equals(PNG_MAGIC)) {
  throw new Error("entry.png is not a PNG file");
}
console.log(`wrote ${dest} (${statSync(dest).size} bytes)`);
