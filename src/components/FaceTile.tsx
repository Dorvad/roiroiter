import Link from "next/link";
import { styleFromCss } from "@/lib/css";
import { cropBackground, type Face } from "@/lib/data";

/**
 * A single face in the Index of Faces. `caption` toggles the hover label
 * (shown on the full index, hidden on the home-page teaser).
 */
export function FaceTile({ face, caption = true }: { face: Face; caption?: boolean }) {
  return (
    <Link href={`/artwork/${face.id}`} className="facetile" title={face.label}>
      <div className="facetile-bg" style={styleFromCss(cropBackground(face.img, face.cx, face.cy, face.z))} />
      <div style={{ position: "absolute", inset: 0, boxShadow: "inset 0 0 55px rgba(0,0,0,.62)", pointerEvents: "none" }} />
      {caption && (
        <div className="facetile-cap">
          <div className="serif" style={{ fontSize: ".98rem", lineHeight: 1.15, fontStyle: "italic", color: "#f0e9dc" }}>
            {face.label}
          </div>
          <div
            className="mono"
            style={{ marginTop: 3, fontWeight: 500, fontSize: 8, lineHeight: 1, letterSpacing: ".18em", textTransform: "uppercase", color: "rgba(189,154,87,.85)" }}
          >
            View work →
          </div>
        </div>
      )}
    </Link>
  );
}
