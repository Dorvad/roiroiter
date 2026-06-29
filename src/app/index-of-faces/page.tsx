import type { Metadata } from "next";
import { FaceTile } from "@/components/FaceTile";
import { faces } from "@/lib/data";

export const metadata: Metadata = {
  title: "The Index of Faces",
  description:
    "Every recurring face, mask and head, gathered onto a single wall of eyes.",
};

export default function IndexOfFacesPage() {
  return (
    <div style={{ paddingTop: 66 }}>
      <section
        style={{
          position: "relative",
          maxWidth: 1500,
          margin: "0 auto",
          padding: "clamp(46px,7vw,96px) clamp(20px,5vw,72px) clamp(30px,4vw,46px)",
          textAlign: "center",
        }}
      >
        <div className="kicker">A signature room</div>
        <h1
          className="serif"
          style={{ margin: "20px auto 0", maxWidth: "14ch", fontWeight: 500, fontSize: "clamp(2.6rem,6vw,5rem)", lineHeight: 0.98, color: "#f1ebde" }}
        >
          The Index of Faces
        </h1>
        <p
          className="serif"
          style={{ margin: "22px auto 0", maxWidth: 600, fontSize: "clamp(1.1rem,1.7vw,1.35rem)", lineHeight: 1.55, fontStyle: "italic", color: "rgba(233,225,211,.8)" }}
        >
          Every recurring face, mask and head, lifted from the paintings and
          carvings and gathered onto a single wall of eyes. Touch one to find the
          work it belongs to.
        </p>
        <div
          className="mono"
          style={{ marginTop: 24, fontWeight: 500, fontSize: 10, lineHeight: 1, letterSpacing: ".2em", textTransform: "uppercase", color: "rgba(168,156,137,.5)" }}
        >
          {faces.length} faces in the index
        </div>
      </section>

      <section style={{ maxWidth: 1500, margin: "0 auto", padding: "0 clamp(14px,4vw,56px) clamp(60px,10vh,120px)" }}>
        <div className="rr-faces-grid" style={{ display: "grid", gap: "clamp(8px,1vw,12px)" }}>
          {faces.map((face, i) => (
            <FaceTile key={`${face.id}-${i}`} face={face} />
          ))}
        </div>
      </section>

      <style>{`
        .rr-faces-grid { grid-template-columns: repeat(auto-fill,minmax(150px,1fr)); }
        @media (max-width: 560px) { .rr-faces-grid { grid-template-columns: repeat(auto-fill,minmax(92px,1fr)); } }
      `}</style>
    </div>
  );
}
