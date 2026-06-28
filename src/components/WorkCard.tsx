import Link from "next/link";
import { styleFromCss as cssText } from "@/lib/css";
import { cropBackground, phBase, statusColor, type Work } from "@/lib/data";

/**
 * Catalogue card — a single work as it appears in grids across the gallery,
 * cabinet drawers, available works, and related sections.
 */
export function WorkCard({ work }: { work: Work }) {
  const hasImg = Boolean(work.img);
  const fill = hasImg
    ? cropBackground(work.img!, work.cropx ?? 50, work.cropy ?? 50, work.zoom ?? 130)
    : `background:${phBase(work.kind)};`;

  const metaLine = `${work.no} · ${work.medium}`;

  return (
    <Link
      href={`/artwork/${work.id}`}
      className="workcard"
      aria-label={`View ${work.title}`}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "4 / 5",
          overflow: "hidden",
          background: "#0b0907",
        }}
      >
        {hasImg ? (
          <div className="workcard-bg" style={cssText(fill)} />
        ) : (
          <div
            className="workcard-bg"
            style={{
              ...cssText(fill),
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ position: "relative", textAlign: "center", padding: "0 18px" }}>
              <div
                className="mono"
                style={{
                  fontWeight: 500,
                  fontSize: 11,
                  lineHeight: 1.5,
                  letterSpacing: ".22em",
                  textTransform: "uppercase",
                  color: "rgba(233,225,211,.5)",
                }}
              >
                {work.medium}
              </div>
              <div
                className="mono"
                style={{
                  marginTop: 10,
                  fontWeight: 400,
                  fontSize: 9.5,
                  lineHeight: 1,
                  letterSpacing: ".28em",
                  textTransform: "uppercase",
                  color: "rgba(189,154,87,.5)",
                }}
              >
                image forthcoming
              </div>
            </div>
          </div>
        )}

        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            boxShadow:
              "inset 0 0 90px rgba(0,0,0,.55), inset 0 -40px 60px rgba(0,0,0,.4)",
          }}
        />

        {/* hover overlay */}
        <div className="workcard-overlay">
          <span
            className="mono"
            style={{
              fontWeight: 500,
              fontSize: 10,
              lineHeight: 1,
              letterSpacing: ".26em",
              textTransform: "uppercase",
              color: "rgba(233,225,211,.82)",
            }}
          >
            View work
          </span>
          <span
            className="mono"
            style={{ fontWeight: 500, fontSize: 12, lineHeight: 1, color: "rgba(189,154,87,.95)" }}
          >
            →
          </span>
        </div>

        <div
          className="mono"
          style={{
            position: "absolute",
            top: 11,
            left: 13,
            fontWeight: 500,
            fontSize: 9.5,
            lineHeight: 1,
            letterSpacing: ".2em",
            color: "rgba(233,225,211,.42)",
          }}
        >
          {work.no}
        </div>
      </div>

      <div style={{ padding: "16px 16px 18px" }}>
        <div
          className="serif"
          style={{
            fontWeight: 500,
            fontSize: "1.18rem",
            lineHeight: 1.2,
            color: "#e9e1d3",
            letterSpacing: ".01em",
          }}
        >
          {work.title}
        </div>
        <div
          className="mono"
          style={{
            marginTop: 7,
            fontSize: 10.5,
            lineHeight: 1.6,
            letterSpacing: ".1em",
            textTransform: "uppercase",
            color: "rgba(168,156,137,.78)",
          }}
        >
          {metaLine}
        </div>
        <div
          className="mono"
          style={{
            marginTop: 3,
            fontSize: 10.5,
            lineHeight: 1.6,
            letterSpacing: ".1em",
            textTransform: "uppercase",
            color: "rgba(168,156,137,.62)",
          }}
        >
          {work.dims}
        </div>
        <div style={{ marginTop: 13, display: "flex", alignItems: "center", gap: 8 }}>
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: statusColor(work.status),
              boxShadow: `0 0 8px ${statusColor(work.status)}`,
              flex: "none",
            }}
          />
          <span
            className="mono"
            style={{
              fontWeight: 500,
              fontSize: 9.5,
              lineHeight: 1,
              letterSpacing: ".2em",
              textTransform: "uppercase",
              color: "rgba(233,225,211,.72)",
            }}
          >
            {work.status}
          </span>
        </div>
      </div>
    </Link>
  );
}
