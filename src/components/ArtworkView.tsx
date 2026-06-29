"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { styleFromCss } from "@/lib/css";
import { artUrl } from "@/lib/asset";
import { WorkCard } from "@/components/WorkCard";
import {
  coverBackground,
  cropBackground,
  phBase,
  statusColor,
  type Work,
} from "@/lib/data";

interface Lightbox {
  style: string;
  cap: string;
}

const monoLabel: React.CSSProperties = {
  fontFamily: "var(--font-mono), monospace",
  fontWeight: 500,
  letterSpacing: ".2em",
  textTransform: "uppercase",
};

export function ArtworkView({
  work,
  related,
  roomName,
  roomHref,
}: {
  work: Work;
  related: Work[];
  roomName: string;
  roomHref: string;
}) {
  const [lightbox, setLightbox] = useState<Lightbox | null>(null);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [inquirySent, setInquirySent] = useState(false);

  useEffect(() => {
    const open = lightbox || inquiryOpen;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox, inquiryOpen]);

  const hasImg = Boolean(work.img);
  const fullStyle = hasImg
    ? coverBackground(work.img!, work.cropx ?? 50, work.cropy ?? 50)
    : `background:${phBase(work.kind)};`;
  const forSale = work.status === "Available" || work.status === "Inquiry";

  const openInquiry = () => {
    setInquirySent(false);
    setInquiryOpen(true);
  };

  const inquireButtons = [
    "Request Price",
    "Reserve This Piece",
    "Request More Images",
    "Arrange Studio Visit",
  ];

  return (
    <div style={{ paddingTop: 66 }}>
      <section
        style={{ maxWidth: 1400, margin: "0 auto", padding: "clamp(26px,4vw,48px) clamp(20px,5vw,72px) 0" }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
          <Link href={roomHref} className="mono lnk" style={{ ...monoLabel, fontSize: 10, color: "rgba(233,225,211,.6)" }}>
            ← {roomName}
          </Link>
          <span style={{ width: 5, height: 5, borderRadius: "50%", background: "rgba(189,154,87,.5)" }} />
          <span className="mono" style={{ ...monoLabel, fontSize: 10, color: "rgba(168,156,137,.5)" }}>
            {work.no}
          </span>
        </div>
      </section>

      <section
        className="rr-art-grid"
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          padding: "clamp(22px,3vw,38px) clamp(20px,5vw,72px) 0",
          display: "grid",
          gap: "clamp(28px,4vw,64px)",
          alignItems: "start",
        }}
      >
        {/* Image column */}
        <div>
          <div
            role={hasImg ? "button" : undefined}
            tabIndex={hasImg ? 0 : undefined}
            onClick={
              hasImg
                ? () =>
                    setLightbox({
                      style: `background-image:url(${artUrl(work.img!)});background-size:contain;background-position:center;background-color:#0b0907;`,
                      cap: `${work.title}  ·  ${work.year}`,
                    })
                : undefined
            }
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "4 / 5",
              overflow: "hidden",
              background: "#0b0907",
              border: "1px solid rgba(233,225,211,.1)",
              cursor: hasImg ? "zoom-in" : "default",
            }}
          >
            <div style={{ ...styleFromCss(fullStyle), position: "absolute", inset: 0 }} />
            <div style={{ position: "absolute", inset: 0, boxShadow: "inset 0 0 100px rgba(0,0,0,.5)", pointerEvents: "none" }} />
            {hasImg ? (
              <div
                className="mono"
                style={{
                  position: "absolute",
                  bottom: 13,
                  right: 14,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "7px 12px",
                  background: "rgba(11,9,7,.62)",
                  backdropFilter: "blur(3px)",
                  border: "1px solid rgba(233,225,211,.14)",
                  fontWeight: 500,
                  fontSize: 9,
                  letterSpacing: ".18em",
                  textTransform: "uppercase",
                  color: "rgba(233,225,211,.82)",
                }}
              >
                <span style={{ color: "#bd9a57" }}>◉</span> Enlarge
              </div>
            ) : (
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div
                  className="mono"
                  style={{
                    textAlign: "center",
                    fontWeight: 500,
                    fontSize: 11,
                    lineHeight: 1.5,
                    letterSpacing: ".2em",
                    textTransform: "uppercase",
                    color: "rgba(189,154,87,.6)",
                  }}
                >
                  Studio photographs
                  <br />
                  forthcoming
                </div>
              </div>
            )}
          </div>

          {work.crops.length > 0 && hasImg && (
            <div style={{ marginTop: 14 }}>
              <div
                className="mono"
                style={{ ...monoLabel, fontSize: 9.5, color: "rgba(168,156,137,.55)", marginBottom: 11 }}
              >
                Details
              </div>
              <div className="rr-crop-grid" style={{ display: "grid", gap: 10 }}>
                {work.crops.map((c) => (
                  <div
                    key={c.cap}
                    role="button"
                    tabIndex={0}
                    title={c.cap}
                    className="crop"
                    onClick={() =>
                      setLightbox({ style: coverBackground(work.img!, c.cx, c.cy), cap: c.cap })
                    }
                    style={{
                      position: "relative",
                      aspectRatio: "1 / 1",
                      overflow: "hidden",
                      cursor: "zoom-in",
                      background: "#0b0907",
                      border: "1px solid rgba(233,225,211,.09)",
                    }}
                  >
                    <div className="crop-bg" style={styleFromCss(cropBackground(work.img!, c.cx, c.cy, c.z))} />
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        bottom: 0,
                        padding: "8px 9px 7px",
                        background: "linear-gradient(transparent,rgba(8,6,5,.82))",
                        fontSize: 10,
                        lineHeight: 1.3,
                        color: "rgba(233,225,211,.85)",
                      }}
                    >
                      {c.cap}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Info column */}
        <div>
          <h1
            className="serif"
            style={{ margin: 0, fontWeight: 500, fontSize: "clamp(2.1rem,4vw,3.3rem)", lineHeight: 1.02, color: "#f1ebde", textWrap: "balance" }}
          >
            {work.title}
          </h1>
          <div style={{ marginTop: 14, display: "flex", alignItems: "center", gap: 10 }}>
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: statusColor(work.status),
                boxShadow: `0 0 9px ${statusColor(work.status)}`,
              }}
            />
            <span className="mono" style={{ ...monoLabel, fontSize: 10.5, color: "rgba(233,225,211,.82)" }}>
              {work.status}
            </span>
          </div>

          <div
            style={{
              marginTop: 26,
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              gap: "11px 20px",
              padding: "22px 0",
              borderTop: "1px solid rgba(233,225,211,.1)",
              borderBottom: "1px solid rgba(233,225,211,.1)",
            }}
          >
            <DetailRow label="Year" value={work.year} />
            <DetailRow label="Medium" value={work.medium} />
            <DetailRow label="Dimensions" value={work.dims} />
            <DetailRow label="Price" value={work.price} valueColor="#d9bd84" />
          </div>

          <p
            className="serif"
            style={{ margin: "24px 0 0", fontWeight: 400, fontSize: "clamp(1.2rem,1.8vw,1.5rem)", lineHeight: 1.5, fontStyle: "italic", color: "rgba(240,233,220,.92)", textWrap: "pretty" }}
          >
            {work.poetic}
          </p>
          <p style={{ margin: "18px 0 0", fontSize: 15, lineHeight: 1.72, color: "rgba(200,189,170,.84)" }}>
            {work.note}
          </p>

          <div style={{ marginTop: 22, display: "flex", gap: 7, flexWrap: "wrap" }}>
            {work.sym.map((s) => (
              <Link key={s} href={`/gallery?motif=${encodeURIComponent(s)}`} style={chipStyle}>
                {s}
              </Link>
            ))}
          </div>

          {forSale ? (
            <div style={{ marginTop: 30, display: "flex", flexDirection: "column", gap: 10 }}>
              <button type="button" onClick={openInquiry} className="btn btn-gold" style={{ width: "100%", padding: 16 }}>
                Inquire About This Work
              </button>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {inquireButtons.map((label) => (
                  <button key={label} type="button" onClick={openInquiry} className="btn btn-line" style={{ padding: 14, letterSpacing: ".16em" }}>
                    {label}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div style={{ marginTop: 30, padding: "20px 22px", background: "rgba(233,225,211,.03)", border: "1px solid rgba(233,225,211,.1)" }}>
              <div className="serif" style={{ fontSize: "1.05rem", lineHeight: 1.5, fontStyle: "italic", color: "rgba(233,225,211,.82)" }}>
                This work has found its collection. Its likeness remains here, and
                related pieces may still be available.
              </div>
              <div style={{ marginTop: 16, display: "flex", gap: 10, flexWrap: "wrap" }}>
                <button type="button" onClick={openInquiry} className="btn btn-line" style={{ padding: "13px 18px", letterSpacing: ".16em" }}>
                  Request More Images
                </button>
                <Link href="/contact" className="btn btn-line" style={{ padding: "13px 18px", letterSpacing: ".16em" }}>
                  Join the Collector List
                </Link>
              </div>
            </div>
          )}

          <div style={{ marginTop: 26, display: "flex", flexDirection: "column", gap: 13 }}>
            {[
              "Shipping & framing arranged worldwide; works ship unframed unless requested, crated and insured from the studio.",
              "Each work is sold with a signed Certificate of Authenticity and a note in the artist’s hand.",
              "Private viewings by video or in person can be arranged before any acquisition.",
            ].map((line) => (
              <div key={line} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <span style={{ color: "rgba(189,154,87,.7)", fontSize: 13, lineHeight: 1.5 }}>◆</span>
                <span style={{ fontSize: 13, lineHeight: 1.55, color: "rgba(168,156,137,.78)" }}>{line}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section style={{ maxWidth: 1400, margin: "0 auto", padding: "clamp(50px,7vw,90px) clamp(16px,5vw,72px) clamp(40px,6vw,70px)" }}>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              gap: 14,
              paddingBottom: 22,
              borderBottom: "1px solid rgba(233,225,211,.1)",
              marginBottom: 30,
            }}
          >
            <h2 className="serif" style={{ margin: 0, fontWeight: 500, fontSize: "clamp(1.5rem,2.6vw,2.1rem)", lineHeight: 1, color: "#ece4d6" }}>
              From the same room
            </h2>
            <Link href={roomHref} className="mono lnk" style={{ ...monoLabel, fontSize: 10, color: "rgba(168,156,137,.6)" }}>
              See all →
            </Link>
          </div>
          <div className="rr-works-grid" style={{ display: "grid", gap: "clamp(14px,1.6vw,22px)" }}>
            {related.map((w) => (
              <WorkCard key={w.id} work={w} />
            ))}
          </div>
        </section>
      )}

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 10000,
            background: "rgba(6,4,3,.95)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            padding: "clamp(20px,5vw,70px)",
            cursor: "zoom-out",
          }}
        >
          <div
            style={{
              ...styleFromCss(lightbox.style),
              width: "min(86vw,1000px)",
              height: "min(78vh,1000px)",
              backgroundRepeat: "no-repeat",
              border: "1px solid rgba(233,225,211,.14)",
              boxShadow: "0 40px 90px rgba(0,0,0,.7)",
            }}
          />
          <div style={{ marginTop: 20, display: "flex", alignItems: "center", gap: 14 }}>
            <span className="serif" style={{ fontSize: ".95rem", lineHeight: 1, fontStyle: "italic", color: "rgba(233,225,211,.8)" }}>
              {lightbox.cap}
            </span>
            <span className="mono" style={{ ...monoLabel, fontSize: 9.5, letterSpacing: ".24em", color: "rgba(168,156,137,.6)" }}>
              click to close
            </span>
          </div>
        </div>
      )}

      {/* Inquiry modal */}
      {inquiryOpen && (
        <div
          onClick={() => setInquiryOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 10000,
            background: "rgba(6,4,3,.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: "min(540px,100%)",
              maxHeight: "90vh",
              overflow: "auto",
              background: "#14100b",
              border: "1px solid rgba(233,225,211,.14)",
              padding: "clamp(28px,4vw,46px)",
              boxShadow: "0 40px 90px rgba(0,0,0,.7)",
            }}
          >
            <button
              type="button"
              onClick={() => setInquiryOpen(false)}
              aria-label="Close"
              style={{
                position: "absolute",
                top: 16,
                right: 16,
                background: "transparent",
                border: "1px solid rgba(233,225,211,.18)",
                color: "#e9e1d3",
                width: 36,
                height: 36,
                fontSize: 18,
                cursor: "pointer",
              }}
            >
              ×
            </button>
            <div className="mono" style={{ ...monoLabel, fontSize: 10, letterSpacing: ".3em", color: "rgba(189,154,87,.8)" }}>
              Private Inquiry
            </div>
            <h3 className="serif" style={{ margin: "14px 0 0", fontWeight: 500, fontSize: "1.9rem", lineHeight: 1.1, color: "#f1ebde" }}>
              {work.title}
            </h3>
            {inquirySent ? (
              <p className="serif" style={{ margin: "22px 0 0", fontSize: "1.05rem", lineHeight: 1.6, fontStyle: "italic", color: "rgba(233,225,211,.82)" }}>
                Your note has been placed on the studio table. Roi, or someone
                close to him, will write back soon — usually with more images, and
                a price, if you have asked for one.
              </p>
            ) : (
              <>
                <p style={{ margin: "14px 0 22px", fontSize: ".98rem", lineHeight: 1.55, color: "rgba(168,156,137,.85)" }}>
                  Tell us a little about your interest. There is no obligation —
                  only a conversation.
                </p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setInquirySent(true);
                  }}
                  style={{ display: "flex", flexDirection: "column", gap: 13 }}
                >
                  <input required placeholder="Your name" className="field" style={{ background: "#0c0a08" }} />
                  <input required type="email" placeholder="Email" className="field" style={{ background: "#0c0a08" }} />
                  <textarea
                    rows={3}
                    placeholder="Message — ask for a price, more images, or a viewing"
                    className="field"
                    style={{ background: "#0c0a08", resize: "vertical" }}
                  />
                  <button type="submit" className="btn btn-gold" style={{ marginTop: 4, width: "100%" }}>
                    Send Inquiry
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      <style>{`
        .rr-art-grid { grid-template-columns: 1.08fr .92fr; }
        .rr-crop-grid { grid-template-columns: repeat(auto-fill,minmax(190px,1fr)); }
        .rr-works-grid { grid-template-columns: repeat(auto-fill,minmax(250px,1fr)); }
        @media (max-width: 980px) {
          .rr-art-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 560px) {
          .rr-crop-grid { grid-template-columns: 1fr 1fr; }
          .rr-works-grid { grid-template-columns: repeat(auto-fill,minmax(152px,1fr)); }
        }
      `}</style>
    </div>
  );
}

function DetailRow({ label, value, valueColor }: { label: string; value: string; valueColor?: string }) {
  return (
    <>
      <span className="mono" style={{ fontWeight: 500, fontSize: 10, lineHeight: 1.6, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(168,156,137,.55)" }}>
        {label}
      </span>
      <span style={{ fontSize: 14, lineHeight: 1.5, color: valueColor ?? "rgba(233,225,211,.9)" }}>{value}</span>
    </>
  );
}

const chipStyle: React.CSSProperties = {
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
  border: "1px solid rgba(233,225,211,.12)",
  background: "rgba(233,225,211,.02)",
  color: "rgba(233,225,211,.58)",
};
