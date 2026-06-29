import type { CSSProperties } from "react";

/**
 * Parse a small inline `key:value;` css string (as produced by the data
 * helpers in data.ts) into a React style object. Values never contain a
 * semicolon, and only the first colon of each declaration separates the
 * property from its value, so gradients and urls survive intact.
 */
export function styleFromCss(text: string): CSSProperties {
  const style: Record<string, string> = {};
  for (const decl of text.split(";")) {
    const idx = decl.indexOf(":");
    if (idx === -1) continue;
    const prop = decl.slice(0, idx).trim();
    const value = decl.slice(idx + 1).trim();
    if (!prop) continue;
    const camel = prop.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());
    style[camel] = value;
  }
  return style as CSSProperties;
}
