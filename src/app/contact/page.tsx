import type { Metadata } from "next";
import { CollectorSignup } from "@/components/CollectorSignup";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Collector List",
  description:
    "Write to the studio — for prices, more images, a reservation, a studio visit, a commission, or to join the collector list.",
};

function Direct({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div
        className="mono"
        style={{ fontWeight: 500, fontSize: 9.5, lineHeight: 1, letterSpacing: ".16em", textTransform: "uppercase", color: "rgba(168,156,137,.55)", marginBottom: 7 }}
      >
        {label}
      </div>
      <div style={{ fontSize: 15, lineHeight: 1.5, color: "rgba(233,225,211,.88)" }}>{value}</div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div style={{ paddingTop: 66 }}>
      <section style={{ maxWidth: 1300, margin: "0 auto", padding: "clamp(46px,7vw,96px) clamp(20px,5vw,72px) clamp(30px,4vw,50px)" }}>
        <div className="kicker">Contact &amp; Collector List</div>
        <h1
          className="serif"
          style={{ margin: "20px 0 0", maxWidth: "16ch", fontWeight: 500, fontSize: "clamp(2.4rem,5.2vw,4.2rem)", lineHeight: 1.02, color: "#f1ebde", textWrap: "balance" }}
        >
          Write to the studio.
        </h1>
        <p
          className="serif"
          style={{ margin: "22px 0 0", maxWidth: 600, fontSize: "clamp(1.1rem,1.7vw,1.35rem)", lineHeight: 1.55, fontStyle: "italic", color: "rgba(233,225,211,.8)" }}
        >
          For prices, more images, a reservation, a studio visit or a commission —
          or simply to join the quiet circle who see new work first.
        </p>
      </section>

      <section
        className="rr-contact-grid"
        style={{
          maxWidth: 1300,
          margin: "0 auto",
          padding: "0 clamp(20px,5vw,72px) clamp(60px,9vh,120px)",
          display: "grid",
          gap: "clamp(28px,4vw,60px)",
          alignItems: "start",
        }}
      >
        <div>
          <div className="mono" style={{ fontWeight: 500, fontSize: 10, lineHeight: 1, letterSpacing: ".24em", textTransform: "uppercase", color: "rgba(189,154,87,.72)", marginBottom: 18 }}>
            Direct
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <Direct label="Studio" value={site.email} />
            <Direct label="Acquisitions & Commissions" value={site.emailCollect} />
            <Direct label="Visits" value="By appointment, in person or by video." />
          </div>
        </div>

        <div
          style={{
            position: "relative",
            overflow: "hidden",
            border: "1px solid rgba(233,225,211,.1)",
            background: "linear-gradient(120deg,#1a120c,#120d08)",
            padding: "clamp(28px,3.5vw,48px)",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(120% 130% at 85% 10%,rgba(120,78,44,.2),transparent 55%)",
              pointerEvents: "none",
            }}
          />
          <div style={{ position: "relative" }}>
            <div style={{ width: 30, height: 1, background: "rgba(189,154,87,.5)", marginBottom: 22 }} />
            <h2 className="serif" style={{ margin: 0, fontWeight: 500, fontSize: "clamp(1.6rem,3vw,2.3rem)", lineHeight: 1.15, color: "#f0e9dc" }}>
              Join the Collector List
            </h2>
            <p style={{ margin: "14px 0 0", fontSize: 14.5, lineHeight: 1.65, color: "rgba(200,189,170,.85)" }}>
              Receive new works, private releases, studio notes and early access to
              available pieces. Sent rarely. Never marketing.
            </p>
            <CollectorSignup />
          </div>
        </div>
      </section>

      <style>{`
        .rr-contact-grid { grid-template-columns: .85fr 1.15fr; }
        @media (max-width: 980px) { .rr-contact-grid { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  );
}
