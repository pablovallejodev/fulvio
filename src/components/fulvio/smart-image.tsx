import fs from "node:fs";
import path from "node:path";

export type PhotoSlot = {
  src: string;
  fallback: string;
  hint: string;
};

const cache = new Map<string, boolean>();

function localPhotoExists(src: string) {
  if (!src.startsWith("/")) return false;
  const cached = cache.get(src);
  if (cached !== undefined) return cached;
  const filepath = path.join(process.cwd(), "public", src);
  const exists = fs.existsSync(filepath);
  cache.set(src, exists);
  return exists;
}

export function resolvePhoto(slot: PhotoSlot): string {
  return localPhotoExists(slot.src) ? slot.src : slot.fallback;
}
