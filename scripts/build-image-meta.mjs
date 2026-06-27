#!/usr/bin/env node
/**
 * Regenerates src/lib/image-meta.json from the images in public/art.
 *
 * Reads each image's intrinsic width/height (no dependencies) and merges the
 * result into the existing metadata, preserving any blur-up placeholders that
 * were generated previously. Run after adding new artwork files:
 *
 *   npm run art:meta
 */
import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { join, extname, basename } from "node:path";

const ART_DIR = join(process.cwd(), "public", "art");
const META = join(process.cwd(), "src", "lib", "image-meta.json");

function pngSize(buf) {
  return { w: buf.readUInt32BE(16), h: buf.readUInt32BE(20) };
}

function jpegSize(buf) {
  let off = 2; // skip SOI (FFD8)
  while (off < buf.length) {
    if (buf[off] !== 0xff) {
      off++;
      continue;
    }
    let marker = buf[off + 1];
    while (marker === 0xff) {
      off++;
      marker = buf[off + 1];
    }
    off += 2;
    if (marker === 0xd8 || marker === 0xd9) continue;
    if (marker >= 0xd0 && marker <= 0xd7) continue; // restart markers
    const len = buf.readUInt16BE(off);
    const isSOF =
      marker >= 0xc0 &&
      marker <= 0xcf &&
      marker !== 0xc4 &&
      marker !== 0xc8 &&
      marker !== 0xcc;
    if (isSOF) {
      return { h: buf.readUInt16BE(off + 3), w: buf.readUInt16BE(off + 5) };
    }
    off += len;
  }
  return null;
}

function dimensions(file) {
  const buf = readFileSync(file);
  if (buf[0] === 0x89 && buf[1] === 0x50) return pngSize(buf);
  if (buf[0] === 0xff && buf[1] === 0xd8) return jpegSize(buf);
  return null;
}

const existing = existsSync(META)
  ? JSON.parse(readFileSync(META, "utf8"))
  : {};

const files = readdirSync(ART_DIR).filter((f) =>
  /\.(jpe?g|png)$/i.test(f),
);

const out = {};
for (const file of files.sort()) {
  const name = basename(file, extname(file));
  const dim = dimensions(join(ART_DIR, file));
  if (!dim) {
    console.warn(`! could not read dimensions for ${file}`);
    continue;
  }
  out[name] = {
    blur: existing[name]?.blur ?? "",
    h: dim.h,
    w: dim.w,
  };
  const status = existing[name] ? "kept" : "added";
  console.log(`${status.padEnd(6)} ${name}  ${dim.w}x${dim.h}`);
}

writeFileSync(META, JSON.stringify(out, null, 0) + "\n");
console.log(`\nWrote ${Object.keys(out).length} entries to ${META}`);
