"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { asset } from "@/lib/asset";
import { primaryNav } from "@/lib/site";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu on navigation.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock scroll while the full-screen menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 66,
          padding: "0 clamp(18px,5vw,80px)",
          background: "rgba(10,8,6,.74)",
          backdropFilter: "blur(13px) saturate(1.1)",
          WebkitBackdropFilter: "blur(13px) saturate(1.1)",
          borderBottom: "1px solid rgba(233,225,211,.08)",
        }}
      >
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 13 }}>
          <img
            src={asset("/brand/monogram-white.png")}
            alt="Roi Roiter"
            width={30}
            height={30}
            style={{ width: 30, height: 30, objectFit: "contain", opacity: 0.92 }}
          />
          <span
            className="serif"
            style={{
              fontWeight: 600,
              fontSize: 13,
              lineHeight: 1,
              letterSpacing: ".36em",
              textTransform: "uppercase",
              color: "#ece4d6",
            }}
          >
            Roi&nbsp;Roiter
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="rr-nav" style={{ alignItems: "center", gap: "clamp(13px,1.5vw,24px)" }}>
          {primaryNav.map((item) =>
            item.cta ? (
              <Link
                key={item.href}
                href={item.href}
                className="mono lnk"
                style={{
                  fontWeight: 500,
                  fontSize: 10.5,
                  letterSpacing: ".18em",
                  textTransform: "uppercase",
                  color: "#bd9a57",
                  border: "1px solid rgba(189,154,87,.4)",
                  padding: "9px 14px",
                }}
              >
                {item.label}
              </Link>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="mono lnk"
                style={{
                  fontWeight: 500,
                  fontSize: 10.5,
                  letterSpacing: ".18em",
                  textTransform: "uppercase",
                  color: "rgba(233,225,211,.72)",
                }}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        {/* Mobile burger */}
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Menu"
          className="rr-burger"
          style={{
            flexDirection: "column",
            gap: 5,
            width: 42,
            height: 42,
            alignItems: "center",
            justifyContent: "center",
            background: "transparent",
            border: "1px solid rgba(233,225,211,.18)",
            cursor: "pointer",
          }}
        >
          <span style={{ width: 18, height: 1.5, background: "#e9e1d3" }} />
          <span style={{ width: 18, height: 1.5, background: "#e9e1d3" }} />
        </button>
      </header>

      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1400,
            background: "rgba(8,6,5,.97)",
            backdropFilter: "blur(6px)",
            display: "flex",
            flexDirection: "column",
            padding: 24,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: 42,
            }}
          >
            <span
              className="serif"
              style={{
                fontWeight: 600,
                fontSize: 13,
                lineHeight: 1,
                letterSpacing: ".36em",
                textTransform: "uppercase",
                color: "#ece4d6",
              }}
            >
              Roi&nbsp;Roiter
            </span>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close"
              style={{
                background: "transparent",
                border: "1px solid rgba(233,225,211,.2)",
                color: "#e9e1d3",
                width: 42,
                height: 42,
                fontSize: 20,
                cursor: "pointer",
              }}
            >
              ×
            </button>
          </div>
          <nav
            style={{
              margin: "auto 0",
              display: "flex",
              flexDirection: "column",
              gap: 6,
            }}
          >
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="serif"
                style={{
                  fontWeight: 500,
                  fontSize: "2rem",
                  lineHeight: 1.25,
                  color: item.cta ? "#bd9a57" : "#ece4d6",
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}

      <style>{`
        .rr-nav { display: flex; }
        .rr-burger { display: none; }
        @media (max-width: 980px) {
          .rr-nav { display: none; }
          .rr-burger { display: flex; }
        }
      `}</style>
    </>
  );
}
