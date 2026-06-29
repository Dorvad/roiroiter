import type { Metadata } from "next";
import Link from "next/link";
import { styleFromCss } from "@/lib/css";
import { cropBackground, studioNotes } from "@/lib/data";

export const metadata: Metadata = {
  title: "Studio Notes",
  description:
    "Process, false starts, carving details and small reflections from the workbench.",
};

export default function StudioNotesPage() {
  return (
    <div style={{ paddingTop: 66 }}>
      <section style={{ maxWidth: 1300, margin: "0 auto", padding: "clamp(46px,7vw,96px) clamp(20px,5vw,72px) clamp(26px,4vw,46px)" }}>
        <div className="kicker">From the Workbench</div>
        <h1 className="serif" style={{ margin: "20px 0 0", fontWeight: 500, fontSize: "clamp(2.5rem,5.6vw,4.4rem)", lineHeight: 1, color: "#f1ebde" }}>
          Studio Notes
        </h1>
        <p
          className="serif"
          style={{ margin: "22px 0 0", maxWidth: 620, fontSize: "clamp(1.1rem,1.7vw,1.35rem)", lineHeight: 1.55, fontStyle: "italic", color: "rgba(233,225,211,.8)" }}
        >
          Process, false starts, carving details and small reflections — kept
          loosely, the way they happen. Each note opens the work it belongs to.
        </p>
      </section>

      <section style={{ maxWidth: 1300, margin: "0 auto", padding: "8px clamp(20px,5vw,72px) clamp(60px,10vh,120px)" }}>
        <div className="rr-notes-grid" style={{ display: "grid", gap: "clamp(18px,2.4vw,30px)" }}>
          {studioNotes.map((n) => (
            <Link key={n.id} href={`/artwork/${n.id}`} className="notecard">
              <div style={{ position: "relative", aspectRatio: "16 / 10", overflow: "hidden", background: "#0b0907" }}>
                <div className="notecard-bg" style={styleFromCss(cropBackground(n.img, n.cx, n.cy, n.z))} />
                <div style={{ position: "absolute", inset: 0, boxShadow: "inset 0 0 70px rgba(0,0,0,.5)" }} />
                <div style={{ position: "absolute", top: 13, left: 14, display: "flex", gap: 8, alignItems: "center" }}>
                  <span
                    className="mono"
                    style={{
                      padding: "5px 10px",
                      background: "rgba(11,9,7,.62)",
                      backdropFilter: "blur(3px)",
                      border: "1px solid rgba(233,225,211,.14)",
                      fontWeight: 500,
                      fontSize: 8.5,
                      lineHeight: 1,
                      letterSpacing: ".18em",
                      textTransform: "uppercase",
                      color: "rgba(189,154,87,.95)",
                    }}
                  >
                    {n.tag}
                  </span>
                </div>
              </div>
              <div style={{ padding: "clamp(20px,2.4vw,30px)" }}>
                <div className="mono" style={{ fontWeight: 500, fontSize: 9.5, lineHeight: 1, letterSpacing: ".2em", textTransform: "uppercase", color: "rgba(168,156,137,.55)" }}>
                  {n.date}
                </div>
                <h3 className="serif" style={{ margin: "11px 0 0", fontWeight: 500, fontSize: "clamp(1.4rem,2.2vw,1.85rem)", lineHeight: 1.12, color: "#ece4d6" }}>
                  {n.title}
                </h3>
                <p style={{ margin: "12px 0 0", fontSize: 14.5, lineHeight: 1.7, color: "rgba(200,189,170,.82)" }}>{n.body}</p>
                <div className="mono" style={{ marginTop: 16, fontWeight: 500, fontSize: 9.5, lineHeight: 1, letterSpacing: ".18em", textTransform: "uppercase", color: "rgba(189,154,87,.8)" }}>
                  Open the work →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <style>{`
        .rr-notes-grid { grid-template-columns: repeat(auto-fill,minmax(min(420px,100%),1fr)); }
        @media (max-width: 980px) { .rr-notes-grid { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  );
}
