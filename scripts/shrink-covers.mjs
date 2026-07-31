/**
 * Shrinks book-cover photographs for the Resources page.
 *
 * Covers render at roughly 96 x 134 CSS pixels, so 260px wide is ample even on
 * a high-density screen. Drop full-size photos into public/covers/original/
 * and run:
 *
 *   npm run covers
 *
 * Each image is resized, stripped of metadata, and written to public/covers/
 * as a .jpg under the same base name.
 */
import sharp from "sharp";
import { readdir, mkdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, parse } from "node:path";

const SRC = join("public", "covers", "original");
const OUT = join("public", "covers");
const WIDTH = 260;

if (!existsSync(SRC)) {
  console.log(`No ${SRC} directory — nothing to do.`);
  console.log("Create it and drop the full-size cover photos inside, then rerun.");
  process.exit(0);
}

await mkdir(OUT, { recursive: true });

const files = (await readdir(SRC)).filter((f) =>
  /\.(jpe?g|png|webp|avif|heic)$/i.test(f)
);

if (files.length === 0) {
  console.log(`No images found in ${SRC}.`);
  process.exit(0);
}

for (const file of files) {
  const from = join(SRC, file);
  const to = join(OUT, `${parse(file).name}.jpg`);
  const before = (await stat(from)).size;

  await sharp(from)
    .rotate() // honour EXIF orientation on phone photos
    .resize({ width: WIDTH, withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(to);

  const after = (await stat(to)).size;
  const meta = await sharp(to).metadata();
  console.log(
    `${file} -> ${to}  ${meta.width}x${meta.height}  ` +
      `${(before / 1024).toFixed(0)}kB -> ${(after / 1024).toFixed(0)}kB`
  );
}
