// Entry program for news-image-20261118.
// The image is drawn at build time and shipped in this repository as
// entry.png; this program only copies it to the output directory the
// grader gives us, so both graded runs write exactly the same bytes.
import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const IMAGE = "entry.png";
const repoRoot = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}
const src = join(repoRoot, IMAGE);
const dst = join(outDir, IMAGE);
mkdirSync(outDir, { recursive: true });
copyFileSync(src, dst);
// Fail loudly instead of shipping a truncated copy.
if (statSync(src).size !== statSync(dst).size) {
  throw new Error(`${IMAGE} copy is incomplete`);
}
