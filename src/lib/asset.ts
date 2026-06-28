/**
 * Prefix a public path with the configured base path so assets resolve
 * correctly both at the domain root (Vercel / local) and under a GitHub
 * Pages subpath. `NEXT_PUBLIC_BASE_PATH` is inlined at build time.
 *
 * Use this for plain <img src> and CSS background-image urls — next/font and
 * next/link handle the base path themselves, but raw asset urls do not.
 */
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const asset = (path: string): string =>
  `${base}${path.startsWith("/") ? path : `/${path}`}`;

/** Url for an artwork image stored in /public/art. */
export const artUrl = (file: string): string => asset(`/art/${file}`);
