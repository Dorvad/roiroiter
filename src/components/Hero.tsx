"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { artUrl } from "@/lib/asset";

export function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);
  const fgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const y = window.scrollY || 0;
        const limit = window.innerHeight * 1.3;
        if (y >= limit) return;
        if (bgRef.current) {
          bgRef.current.style.transform = `translate3d(0,${y * 0.18}px,0)`;
        }
        if (fgRef.current) {
          fgRef.current.style.transform = `translateY(${y * -0.05}px)`;
          fgRef.current.style.opacity = String(
            Math.max(0.05, 1 - y / (window.innerHeight * 0.85)),
          );
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section style={{ position: "relative", minHeight: "100svh", overflow: "hidden", background: "#0a0806" }}>
      <div ref={bgRef} style={{ position: "absolute", inset: "-10% 0", willChange: "transform" }}>
        <div
          className="rr-ken"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${artUrl("the-reliquary.jpg")})`,
            backgroundSize: "cover",
            backgroundPosition: "50% 28%",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(82% 72% at 64% 30%,transparent 0%,rgba(10,8,6,.32) 52%,rgba(10,8,6,.93) 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg,rgba(10,8,6,.5) 0%,transparent 24%,transparent 46%,rgba(10,8,6,.88) 100%)",
        }}
      />
      <div
        ref={fgRef}
        style={{
          position: "relative",
          zIndex: 2,
          minHeight: "100svh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "0 clamp(24px,6vw,96px) clamp(46px,8vh,104px)",
          maxWidth: 1500,
          margin: "0 auto",
        }}
      >
        <div style={{ maxWidth: 700 }}>
          <div
            className="mono"
            style={{
              fontWeight: 500,
              fontSize: 11,
              lineHeight: 1,
              letterSpacing: ".4em",
              textTransform: "uppercase",
              color: "rgba(189,154,87,.88)",
            }}
          >
            A surreal private museum
          </div>
          <h1
            className="serif"
            style={{
              margin: "22px 0 0",
              fontWeight: 500,
              fontSize: "clamp(2.5rem,6.6vw,5.7rem)",
              lineHeight: 0.97,
              color: "#f1ebde",
              textWrap: "balance",
            }}
          >
            Faces, bodies, beasts,
            <br />
            and carved objects.
          </h1>
          <p
            className="serif"
            style={{
              margin: "24px 0 0",
              maxWidth: 560,
              fontSize: "clamp(1.05rem,1.5vw,1.3rem)",
              lineHeight: 1.6,
              fontStyle: "italic",
              color: "rgba(233,225,211,.85)",
            }}
          >
            Drawn from a surreal private mythology — intimate, strange, and
            quietly theatrical.
          </p>
          <div style={{ marginTop: 38, display: "flex", flexWrap: "wrap", gap: 13 }}>
            <Link href="/gallery" className="btn btn-gold">
              Enter the Gallery
            </Link>
            <Link href="/available" className="btn btn-line">
              View Available Works
            </Link>
            <Link href="/gallery?room=carved" className="btn btn-line">
              Explore the Carved Archive
            </Link>
          </div>
        </div>
        <div style={{ marginTop: 46, display: "flex", alignItems: "center", gap: 13, color: "rgba(233,225,211,.4)" }}>
          <span
            className="mono"
            style={{ fontWeight: 500, fontSize: 9.5, lineHeight: 1, letterSpacing: ".3em", textTransform: "uppercase" }}
          >
            Scroll to enter
          </span>
          <span style={{ width: 46, height: 1, background: "rgba(233,225,211,.3)" }} />
        </div>
      </div>
    </section>
  );
}
