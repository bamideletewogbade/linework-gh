/**
 * Pre-generates responsive WebP versions of every JPG/PNG in /public/assets.
 * The site is a static export (no Next image server), so we do the optimisation
 * at build time and a custom loader (src/lib/imageLoader.js) picks the right size.
 *
 * Output: public/assets/opt/<name>-<width>.webp
 * Run: npm run images   (also runs automatically before `npm run build`)
 */
import sharp from 'sharp';
import { readdir, mkdir, stat } from 'node:fs/promises';
import path from 'node:path';

const SRC_DIR = path.resolve('public/assets');
const OUT_DIR = path.join(SRC_DIR, 'opt');
// Keep in sync with src/lib/imageLoader.js
const WIDTHS = [384, 640, 960, 1280];

await mkdir(OUT_DIR, { recursive: true });

const files = (await readdir(SRC_DIR)).filter((f) => /\.(jpe?g|png)$/i.test(f));

for (const file of files) {
  const name = file.replace(/\.(jpe?g|png)$/i, '');
  const input = path.join(SRC_DIR, file);
  const srcTime = (await stat(input)).mtimeMs;

  for (const width of WIDTHS) {
    const out = path.join(OUT_DIR, `${name}-${width}.webp`);
    try {
      if ((await stat(out)).mtimeMs >= srcTime) continue; // up to date
    } catch {
      /* not generated yet */
    }
    await sharp(input)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: width <= 640 ? 70 : 74, effort: 5 })
      .toFile(out);
  }
  console.log(`✓ ${file}`);
}
