/** GitHub Pages subpath — set at build via next.config env */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function assetPath(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}

export function artSrc(image: string): string {
  return assetPath(`/art/${image}`);
}
