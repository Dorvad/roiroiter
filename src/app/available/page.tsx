import type { Metadata } from "next";
import Link from "next/link";
import { WorkCard } from "@/components/WorkCard";
import {
  availableCarvings,
  availableEditions,
  availablePaintings,
  type Work,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Available Works",
  description:
    "Originals offered quietly, by inquiry — a conversation, a price when you ask for one, and a viewing before it changes hands.",
};

function Section({ title, note, works }: { title: string; note: string; works: Work[] }) {
  return (
    <section style={{ maxWidth: 1500, margin: "0 auto", padding: "clamp(44px,6vw,80px) clamp(16px,5vw,72px) 0" }}>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: 16,
          flexWrap: "wrap",
          paddingBottom: 20,
          borderBottom: "1px solid rgba(233,225,211,.1)",
          marginBottom: 30,
        }}
      >
        <h2 className="serif" style={{ margin: 0, fontWeight: 500, fontSize: "clamp(1.6rem,3vw,2.4rem)", lineHeight: 1, color: "#ece4d6" }}>
          {title}
        </h2>
        <span
          className="mono"
          style={{ fontWeight: 500, fontSize: 9.5, lineHeight: 1, letterSpacing: ".2em", textTransform: "uppercase", color: "rgba(168,156,137,.55)" }}
        >
          {note}
        </span>
      </div>
      <div className="rr-works-grid" style={{ display: "grid", gap: "clamp(14px,1.6vw,22px)" }}>
        {works.map((w) => (
          <WorkCard key={w.id} work={w} />
        ))}
      </div>
    </section>
  );
}

export default function AvailablePage() {
  return (
    <div style={{ paddingTop: 66 }}>
      <section style={{ maxWidth: 1500, margin: "0 auto", padding: "clamp(46px,7vw,96px) clamp(20px,5vw,72px) clamp(20px,3vw,38px)" }}>
        <div style={{ maxWidth: 660 }}>
          <div className="kicker">The Private Viewing Room</div>
          <h1 className="serif" style={{ margin: "20px 0 0", fontWeight: 500, fontSize: "clamp(2.5rem,5.6vw,4.4rem)", lineHeight: 1, color: "#f1ebde" }}>
            Available Works
          </h1>
          <p
            className="serif"
            style={{ margin: "22px 0 0", fontSize: "clamp(1.1rem,1.7vw,1.35rem)", lineHeight: 1.55, fontStyle: "italic", color: "rgba(233,225,211,.8)" }}
          >
            Originals are offered quietly, by inquiry. There is no checkout here —
            only a conversation, a price when you ask for one, and the option to see
            a piece in person or by video before it changes hands.
          </p>
        </div>
      </section>

      <div style={{ paddingTop: "clamp(6px,2vw,14px)" }}>
        <Section title="Original Paintings" note="oil & canvas · one of one" works={availablePaintings()} />
        <Section title="Wood Carvings & Objects" note="carved by hand · made to hold" works={availableCarvings()} />
        <Section title="Drawings, Prints & Editions" note="works on paper · small editions" works={availableEditions()} />
      </div>

      {/* Commissions */}
      <section style={{ maxWidth: 1500, margin: "0 auto", padding: "clamp(50px,7vw,90px) clamp(20px,5vw,72px) clamp(60px,9vh,120px)" }}>
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            border: "1px solid rgba(233,225,211,.1)",
            background: "linear-gradient(120deg,#1a120c,#120d08)",
            padding: "clamp(30px,4.5vw,60px)",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(120% 130% at 88% 12%,rgba(120,78,44,.22),transparent 55%)",
              pointerEvents: "none",
            }}
          />
          <div style={{ position: "relative", maxWidth: 600 }}>
            <div className="mono" style={{ fontWeight: 500, fontSize: 10, lineHeight: 1, letterSpacing: ".3em", textTransform: "uppercase", color: "rgba(189,154,87,.8)" }}>
              Commissions
            </div>
            <h2 className="serif" style={{ margin: "16px 0 0", fontWeight: 500, fontSize: "clamp(1.7rem,3.4vw,2.7rem)", lineHeight: 1.1, color: "#f1ebde" }}>
              Ask for a face that does not exist yet.
            </h2>
            <p style={{ margin: "18px 0 0", fontSize: 15, lineHeight: 1.7, color: "rgba(200,189,170,.85)" }}>
              A limited number of painted and carved commissions are accepted each
              year — portraits that are not quite portraits, masks, carved figures,
              and private mythologies built around something you bring me. The
              process is slow and discussed in person.
            </p>
            <Link href="/contact" className="btn btn-gold" style={{ marginTop: 26 }}>
              Discuss a Commission
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .rr-works-grid { grid-template-columns: repeat(auto-fill,minmax(250px,1fr)); }
        @media (max-width: 560px) { .rr-works-grid { grid-template-columns: repeat(auto-fill,minmax(152px,1fr)); } }
      `}</style>
    </div>
  );
}
