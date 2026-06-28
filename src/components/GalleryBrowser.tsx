"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { WorkCard } from "@/components/WorkCard";
import {
  rooms,
  symbols,
  works,
  worksInRoom,
  worksWithMotif,
  type RoomKey,
} from "@/lib/data";

function tabStyle(active: boolean): React.CSSProperties {
  return {
    cursor: "pointer",
    padding: "10px 16px",
    fontFamily: "var(--font-mono), monospace",
    fontWeight: 500,
    fontSize: 10,
    lineHeight: 1,
    letterSpacing: ".16em",
    textTransform: "uppercase",
    whiteSpace: "nowrap",
    border: `1px solid ${active ? "rgba(189,154,87,.5)" : "rgba(233,225,211,.13)"}`,
    background: active ? "rgba(189,154,87,.12)" : "transparent",
    color: active ? "#d9bd84" : "rgba(233,225,211,.64)",
    transition: "all .4s ease",
  };
}

function chipStyle(active: boolean): React.CSSProperties {
  return {
    cursor: "pointer",
    padding: "8px 14px",
    fontFamily: "var(--font-mono), monospace",
    fontWeight: 500,
    fontSize: 9.5,
    lineHeight: 1,
    letterSpacing: ".12em",
    textTransform: "uppercase",
    whiteSpace: "nowrap",
    borderRadius: 40,
    border: `1px solid ${active ? "rgba(189,154,87,.55)" : "rgba(233,225,211,.12)"}`,
    background: active ? "rgba(189,154,87,.14)" : "rgba(233,225,211,.02)",
    color: active ? "#d9bd84" : "rgba(233,225,211,.58)",
    transition: "all .4s ease",
  };
}

export function GalleryBrowser() {
  const params = useSearchParams();
  const initialRoom = (params.get("room") as RoomKey | null) ?? null;
  const initialMotif = params.get("motif");

  const [activeRoom, setActiveRoom] = useState<RoomKey | null>(
    rooms.some((r) => r.key === initialRoom) ? initialRoom : null,
  );
  const [activeMotif, setActiveMotif] = useState<string | null>(
    initialMotif && symbols.includes(initialMotif) ? initialMotif : null,
  );

  const selectRoom = (key: RoomKey) => {
    setActiveRoom(key);
    setActiveMotif(null);
  };
  const selectMotif = (motif: string) => {
    setActiveMotif(motif);
    setActiveRoom(null);
  };
  const clear = () => {
    setActiveRoom(null);
    setActiveMotif(null);
  };

  let shown = works;
  if (activeRoom) shown = worksInRoom(activeRoom);
  else if (activeMotif) shown = worksWithMotif(activeMotif);

  let title = "The Gallery";
  let sub =
    "Every room — paintings, carvings, drawings, and departed works, side by side.";
  if (activeRoom) {
    const r = rooms.find((x) => x.key === activeRoom)!;
    title = r.name;
    sub = r.blurb;
  } else if (activeMotif) {
    title = `Motif — ${activeMotif}`;
    sub = `Every work that carries the sign of ${activeMotif.toLowerCase()}.`;
  }

  return (
    <div style={{ paddingTop: 66 }}>
      <section
        style={{ position: "relative", padding: "clamp(40px,6vw,72px) clamp(20px,5vw,80px) 0", maxWidth: 1500, margin: "0 auto" }}
      >
        <div className="mono" style={{ fontWeight: 500, fontSize: 10, lineHeight: 1, letterSpacing: ".26em", textTransform: "uppercase", color: "rgba(168,156,137,.55)" }}>
          The Gallery
        </div>
        <h1 className="serif" style={{ margin: "18px 0 0", fontWeight: 500, fontSize: "clamp(2.3rem,5.2vw,4rem)", lineHeight: 1, color: "#f1ebde" }}>
          {title}
        </h1>
        <p
          className="serif"
          style={{ margin: "18px 0 0", maxWidth: 620, fontSize: "clamp(1.05rem,1.6vw,1.3rem)", lineHeight: 1.55, fontStyle: "italic", color: "rgba(233,225,211,.78)" }}
        >
          {sub}
        </p>

        <div style={{ marginTop: 34, display: "flex", gap: 9, flexWrap: "wrap", alignItems: "center" }}>
          <span role="button" tabIndex={0} onClick={clear} style={tabStyle(!activeRoom && !activeMotif)}>
            All Rooms
          </span>
          {rooms.map((r) => (
            <span key={r.key} role="button" tabIndex={0} onClick={() => selectRoom(r.key)} style={tabStyle(activeRoom === r.key)}>
              {r.name}
            </span>
          ))}
        </div>

        <div
          style={{
            marginTop: 16,
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
            alignItems: "center",
            paddingBottom: 26,
            borderBottom: "1px solid rgba(233,225,211,.09)",
          }}
        >
          <span
            className="mono"
            style={{ fontWeight: 500, fontSize: 9.5, lineHeight: 1, letterSpacing: ".2em", textTransform: "uppercase", color: "rgba(168,156,137,.5)", marginRight: 4 }}
          >
            By motif
          </span>
          {symbols.map((s) => (
            <span key={s} role="button" tabIndex={0} onClick={() => selectMotif(s)} style={chipStyle(activeMotif === s)}>
              {s}
            </span>
          ))}
        </div>
      </section>

      <section style={{ position: "relative", padding: "30px clamp(16px,5vw,80px) clamp(60px,10vh,120px)", maxWidth: 1500, margin: "0 auto" }}>
        <div
          className="mono"
          style={{ fontWeight: 500, fontSize: 10, lineHeight: 1, letterSpacing: ".2em", textTransform: "uppercase", color: "rgba(168,156,137,.55)", marginBottom: 24 }}
        >
          {shown.length} works
        </div>
        <div className="rr-works-grid" style={{ display: "grid", gap: "clamp(14px,1.6vw,24px)" }}>
          {shown.map((w) => (
            <WorkCard key={w.id} work={w} />
          ))}
        </div>
      </section>

      <style>{`
        .rr-works-grid { grid-template-columns: repeat(auto-fill,minmax(250px,1fr)); }
        @media (max-width: 560px) { .rr-works-grid { grid-template-columns: repeat(auto-fill,minmax(152px,1fr)); } }
      `}</style>
    </div>
  );
}
