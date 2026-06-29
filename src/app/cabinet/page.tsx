import type { Metadata } from "next";
import { CabinetDrawers } from "@/components/CabinetDrawers";

export const metadata: Metadata = {
  title: "The Studio Cabinet",
  description:
    "Small works, carvings, studies, experiments and strange objects — kept the way they are kept in the studio.",
};

export default function CabinetPage() {
  return (
    <div style={{ paddingTop: 66 }}>
      <section
        style={{ maxWidth: 1100, margin: "0 auto", padding: "clamp(46px,7vw,96px) clamp(20px,5vw,72px) clamp(26px,4vw,44px)" }}
      >
        <div className="kicker">The Studio Cabinet</div>
        <h1 className="serif" style={{ margin: "20px 0 0", fontWeight: 500, fontSize: "clamp(2.5rem,5.6vw,4.6rem)", lineHeight: 1, color: "#f1ebde" }}>
          Open the drawers.
        </h1>
        <p
          className="serif"
          style={{ margin: "22px 0 0", maxWidth: 640, fontSize: "clamp(1.1rem,1.7vw,1.35rem)", lineHeight: 1.55, fontStyle: "italic", color: "rgba(233,225,211,.8)" }}
        >
          Small works, carvings, studies, experiments and strange objects, kept the
          way they are kept in the studio — in drawers, some half-finished, some
          already spoken for. Pull one open.
        </p>
      </section>

      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "6px clamp(20px,5vw,72px) clamp(60px,10vh,120px)" }}>
        <CabinetDrawers />
      </section>
    </div>
  );
}
