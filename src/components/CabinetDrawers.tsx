"use client";

import { useState } from "react";
import { WorkCard } from "@/components/WorkCard";
import { drawerItems, drawers } from "@/lib/data";

export function CabinetDrawers() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      {drawers.map((d) => {
        const isOpen = open === d.key;
        const items = drawerItems(d);
        return (
          <div key={d.key}>
            <div
              role="button"
              tabIndex={0}
              onClick={() => setOpen(isOpen ? null : d.key)}
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "clamp(14px,2vw,26px)",
                padding: "clamp(20px,2.4vw,30px) clamp(18px,2.4vw,32px)",
                background: isOpen
                  ? "linear-gradient(100deg,#241910,#1a120b)"
                  : "linear-gradient(100deg,#1c140d,#150f09)",
                border: `1px solid ${isOpen ? "rgba(189,154,87,.32)" : "rgba(233,225,211,.1)"}`,
                transition: "all .5s ease",
              }}
            >
              <span
                className="serif"
                style={{
                  flex: "none",
                  width: 30,
                  height: 30,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: `1px solid ${isOpen ? "rgba(189,154,87,.5)" : "rgba(233,225,211,.2)"}`,
                  color: isOpen ? "#d9bd84" : "rgba(233,225,211,.6)",
                  fontWeight: 300,
                  fontSize: 18,
                  lineHeight: 1,
                  transition: "all .5s ease",
                  transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                }}
              >
                +
              </span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className="serif" style={{ fontWeight: 500, fontSize: "clamp(1.3rem,2.2vw,1.9rem)", lineHeight: 1.1, color: "#ece4d6" }}>
                  {d.label}
                </div>
                <div
                  className="mono"
                  style={{ marginTop: 5, fontWeight: 500, fontSize: 9.5, lineHeight: 1, letterSpacing: ".2em", textTransform: "uppercase", color: "rgba(168,156,137,.6)" }}
                >
                  {d.sub}
                </div>
              </div>
              <span
                className="mono"
                style={{ flex: "none", fontWeight: 500, fontSize: 10, lineHeight: 1, letterSpacing: ".16em", textTransform: "uppercase", color: "rgba(189,154,87,.7)" }}
              >
                {items.length} pieces
              </span>
            </div>

            <div
              className="drawer-body"
              style={{
                maxHeight: isOpen ? 3000 : 0,
                opacity: isOpen ? 1 : 0,
                borderLeft: `1px solid ${isOpen ? "rgba(189,154,87,.18)" : "transparent"}`,
                borderRight: `1px solid ${isOpen ? "rgba(189,154,87,.18)" : "transparent"}`,
                borderBottom: `1px solid ${isOpen ? "rgba(189,154,87,.18)" : "transparent"}`,
              }}
            >
              <div
                className="rr-drawer-grid"
                style={{
                  padding: "clamp(18px,2.4vw,30px)",
                  background: "#100c08",
                  display: "grid",
                  gap: "clamp(14px,1.6vw,20px)",
                }}
              >
                {items.map((w) => (
                  <WorkCard key={w.id} work={w} />
                ))}
              </div>
            </div>
          </div>
        );
      })}

      <style>{`
        .rr-drawer-grid { grid-template-columns: repeat(auto-fill,minmax(250px,1fr)); }
        @media (max-width: 560px) { .rr-drawer-grid { grid-template-columns: repeat(auto-fill,minmax(152px,1fr)); } }
      `}</style>
    </div>
  );
}
