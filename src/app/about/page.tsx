import type { Metadata } from "next";
import Link from "next/link";
import { artUrl } from "@/lib/asset";

export const metadata: Metadata = {
  title: "About the Artist",
  description:
    "Roi Roiter keeps a private mythology, and lets a little of it out at a time.",
};

const sectionLabel: React.CSSProperties = {
  fontFamily: "var(--font-mono), monospace",
  fontWeight: 500,
  fontSize: 10,
  lineHeight: 1,
  letterSpacing: ".24em",
  textTransform: "uppercase",
  color: "rgba(189,154,87,.72)",
  marginBottom: 14,
};

const body: React.CSSProperties = {
  margin: 0,
  fontSize: 15,
  lineHeight: 1.72,
  color: "rgba(200,189,170,.86)",
};

const showings: [string, string][] = [
  ["2025", "A Cabinet of Faces — studio exhibition, by appointment"],
  ["2024", "The Visitation — included in a private collectors’ salon"],
  ["2022", "Beasts & Bodies — group showing of works on paper"],
];

export default function AboutPage() {
  return (
    <div style={{ paddingTop: 66 }}>
      <section style={{ maxWidth: 1400, margin: "0 auto", padding: "clamp(46px,7vw,96px) clamp(20px,5vw,72px) clamp(30px,4vw,50px)" }}>
        <div className="kicker">About the Artist</div>
        <h1
          className="serif"
          style={{ margin: "20px 0 0", maxWidth: "18ch", fontWeight: 500, fontSize: "clamp(2.4rem,5vw,4.2rem)", lineHeight: 1.02, color: "#f1ebde", textWrap: "balance" }}
        >
          Roi Roiter keeps a private mythology, and lets a little of it out at a
          time.
        </h1>
      </section>

      <section
        className="rr-about-grid"
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          padding: "0 clamp(20px,5vw,72px)",
          display: "grid",
          gap: "clamp(28px,4vw,64px)",
          alignItems: "start",
        }}
      >
        <div style={{ position: "relative" }}>
          <div style={{ position: "relative", aspectRatio: "3 / 4", overflow: "hidden", background: "#0b0907", border: "1px solid rgba(233,225,211,.12)" }}>
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `url(${artUrl("carving-blue-cry.jpg")})`,
                backgroundSize: "cover",
                backgroundPosition: "50% 36%",
                filter: "saturate(.95) brightness(.92)",
              }}
            />
            <div style={{ position: "absolute", inset: 0, boxShadow: "inset 0 0 90px rgba(0,0,0,.5)" }} />
            <div
              className="serif"
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
                padding: "16px 16px 14px",
                background: "linear-gradient(transparent,rgba(8,6,5,.85))",
                fontSize: ".95rem",
                lineHeight: 1.3,
                fontStyle: "italic",
                color: "rgba(233,225,211,.85)",
              }}
            >
              In the studio — <span style={{ color: "rgba(189,154,87,.9)" }}>Blue Cry</span>, mid-carving.
            </div>
          </div>
          <div style={{ marginTop: 14, padding: "18px 20px", background: "rgba(233,225,211,.03)", border: "1px solid rgba(233,225,211,.1)" }}>
            <div className="mono" style={{ fontWeight: 500, fontSize: 9.5, lineHeight: 1, letterSpacing: ".2em", textTransform: "uppercase", color: "rgba(189,154,87,.72)", marginBottom: 12 }}>
              Materials
            </div>
            <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.65, color: "rgba(200,189,170,.85)" }}>
              Oil on linen and canvas; ink, marker and coloured pencil on paper;
              driftwood, walnut, olive and boxwood, carved with gouge and knife,
              sealed and sometimes painted.
            </p>
          </div>
        </div>

        <div>
          <p
            className="serif"
            style={{ margin: 0, fontSize: "clamp(1.15rem,1.7vw,1.4rem)", lineHeight: 1.55, fontStyle: "italic", color: "rgba(240,233,220,.92)" }}
          >
            “Roi Roiter’s work stages impossible encounters between faces, bodies,
            beasts, machines, wounds and memory. His paintings and carved objects
            feel like fragments from a private mythology: intimate, strange, and
            quietly theatrical.”
          </p>

          <div style={{ marginTop: 34 }}>
            <div style={sectionLabel}>Biography</div>
            <p style={body}>
              Roi Roiter is a painter and carver working between the easel and the
              workbench. Trained first by copying the old masters and later by
              ruining a great deal of good wood, he makes faces above all —
              painted, drawn, and cut from logs — alongside beasts, sleeping bodies,
              and the small absurd machinery of modern life. He works alone, slowly,
              and shows rarely.
            </p>
          </div>

          <div style={{ marginTop: 30 }}>
            <div style={sectionLabel}>Statement</div>
            <p style={body}>
              I am interested in the moment a face stops being a likeness and
              becomes a presence — when a portrait turns into a mask, a mask into a
              skull, a log into a head that watches the room. I keep the recurring
              characters of a mythology I never decided on: the witness, the
              sleeper, the beast at the edge of the bed, the small man with his
              obsolete machine. The work is a way of letting them out without having
              to explain them.
            </p>
          </div>

          <div style={{ marginTop: 30 }}>
            <div style={sectionLabel}>Process</div>
            <p style={body}>
              Paintings begin as studies in old varnish and end somewhere stranger.
              Carvings begin with whatever the wood already wants to be — a hollow
              becomes a mouth, a knot an eye. Tool marks are left visible; the grain
              is allowed to keep breathing under the paint. Nothing is finished until
              it can hold a room’s attention on its own.
            </p>
          </div>

          <div style={{ marginTop: 30 }}>
            <div style={sectionLabel}>Selected Showings</div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {showings.map(([year, text], i) => (
                <div
                  key={year}
                  style={{
                    display: "flex",
                    gap: 16,
                    padding: "13px 0",
                    borderTop: "1px solid rgba(233,225,211,.09)",
                    borderBottom: i === showings.length - 1 ? "1px solid rgba(233,225,211,.09)" : undefined,
                  }}
                >
                  <span className="mono" style={{ flex: "none", width: 48, fontWeight: 500, fontSize: 12, lineHeight: 1.5, color: "rgba(189,154,87,.7)" }}>
                    {year}
                  </span>
                  <span style={{ fontSize: 14, lineHeight: 1.5, color: "rgba(233,225,211,.84)" }}>{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 30, display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-gold">
              Studio Visit & Inquiries
            </Link>
            <Link href="/studio-notes" className="btn btn-line">
              Read the Studio Notes
            </Link>
          </div>
        </div>
      </section>
      <div style={{ height: "clamp(60px,9vh,110px)" }} />

      <style>{`
        .rr-about-grid { grid-template-columns: .85fr 1.15fr; }
        @media (max-width: 980px) { .rr-about-grid { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  );
}
