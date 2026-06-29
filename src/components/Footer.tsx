import Link from "next/link";
import { asset } from "@/lib/asset";
import { footerStudio, footerWander, type NavItem } from "@/lib/site";

function Column({ title, items }: { title: string; items: NavItem[] }) {
  return (
    <div>
      <div
        className="mono"
        style={{
          fontWeight: 500,
          fontSize: 9.5,
          lineHeight: 1,
          letterSpacing: ".24em",
          textTransform: "uppercase",
          color: "rgba(189,154,87,.7)",
          marginBottom: 18,
        }}
      >
        {title}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="lnk"
            style={{ fontSize: 14, lineHeight: 1, color: "rgba(233,225,211,.72)" }}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        zIndex: 1,
        borderTop: "1px solid rgba(233,225,211,.08)",
        background: "#080605",
        padding: "clamp(46px,7vw,76px) clamp(24px,6vw,96px) clamp(34px,5vw,52px)",
      }}
    >
      <div
        className="rr-footer-grid"
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          display: "grid",
          gap: "clamp(28px,4vw,60px)",
          alignItems: "start",
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 13 }}>
            <img
              src={asset("/brand/monogram-gold.png")}
              alt=""
              width={38}
              height={38}
              style={{ width: 38, height: 38, objectFit: "contain", opacity: 0.9 }}
            />
            <span
              className="serif"
              style={{
                fontWeight: 600,
                fontSize: 13,
                lineHeight: 1.3,
                letterSpacing: ".3em",
                textTransform: "uppercase",
                color: "#ece4d6",
              }}
            >
              Roi&nbsp;Roiter
            </span>
          </div>
          <p
            className="serif"
            style={{
              margin: "20px 0 0",
              maxWidth: 300,
              fontSize: "1.02rem",
              lineHeight: 1.6,
              fontStyle: "italic",
              color: "rgba(168,156,137,.8)",
            }}
          >
            Faces, bodies, beasts, and carved objects from a surreal private
            mythology.
          </p>
        </div>

        <Column title="Wander" items={footerWander} />
        <Column title="The Studio" items={footerStudio} />
      </div>

      <div
        style={{
          maxWidth: 1400,
          margin: "clamp(40px,5vw,60px) auto 0",
          paddingTop: 26,
          borderTop: "1px solid rgba(233,225,211,.07)",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <span
          className="mono"
          style={{
            fontSize: 10.5,
            lineHeight: 1.5,
            letterSpacing: ".08em",
            color: "rgba(168,156,137,.5)",
          }}
        >
          © Roi Roiter. All works and images remain the property of the artist.
        </span>
        <span
          className="mono"
          style={{
            fontSize: 10.5,
            lineHeight: 1.5,
            letterSpacing: ".08em",
            color: "rgba(168,156,137,.5)",
          }}
        >
          Studio by appointment · Catalogue raisonné in progress
        </span>
      </div>

      <style>{`
        .rr-footer-grid { grid-template-columns: 1.5fr 1fr 1fr; }
        @media (max-width: 980px) { .rr-footer-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 560px) { .rr-footer-grid { grid-template-columns: 1fr; } }
      `}</style>
    </footer>
  );
}
