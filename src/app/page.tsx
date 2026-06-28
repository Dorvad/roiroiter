import Link from "next/link";
import { Hero } from "@/components/Hero";
import { RoomTile } from "@/components/RoomTile";
import { FaceTile } from "@/components/FaceTile";
import { CollectorSignup } from "@/components/CollectorSignup";
import { faces, rooms } from "@/lib/data";

export default function HomePage() {
  const facesTeaser = faces.slice(0, 10);

  return (
    <div>
      <Hero />

      {/* Collection statement */}
      <section
        style={{
          position: "relative",
          padding: "clamp(72px,12vh,150px) clamp(24px,6vw,96px) clamp(40px,7vh,80px)",
          maxWidth: 1000,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <div
          className="mono"
          style={{ fontWeight: 500, fontSize: 11, lineHeight: 1, letterSpacing: ".34em", textTransform: "uppercase", color: "rgba(189,154,87,.72)" }}
        >
          The Collection
        </div>
        <p
          className="serif"
          style={{
            margin: "30px auto 0",
            maxWidth: 780,
            fontWeight: 400,
            fontSize: "clamp(1.45rem,2.7vw,2.15rem)",
            lineHeight: 1.42,
            color: "rgba(240,233,220,.92)",
            textWrap: "pretty",
          }}
        >
          Roi Roiter stages impossible encounters between faces, bodies, beasts,
          machines, wounds, and memory. The works gathered here behave less like a
          catalogue than like rooms in a house you have dreamt before.
        </p>
      </section>

      {/* Six Rooms */}
      <section
        style={{
          position: "relative",
          padding: "clamp(30px,5vh,60px) clamp(16px,4vw,72px) clamp(50px,8vh,100px)",
          maxWidth: 1500,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            gap: 16,
            padding: "0 8px 26px",
            borderBottom: "1px solid rgba(233,225,211,.1)",
            marginBottom: 32,
          }}
        >
          <h2 className="serif" style={{ margin: 0, fontWeight: 500, fontSize: "clamp(1.9rem,3.4vw,2.7rem)", lineHeight: 1, color: "#ece4d6" }}>
            Six Rooms
          </h2>
          <span
            className="mono"
            style={{ fontWeight: 500, fontSize: 10, lineHeight: 1, letterSpacing: ".22em", textTransform: "uppercase", color: "rgba(168,156,137,.6)" }}
          >
            Enter where you like
          </span>
        </div>
        <div className="rr-rooms-grid" style={{ display: "grid", gap: "clamp(13px,1.5vw,20px)" }}>
          {rooms.map((room) => (
            <RoomTile key={room.key} room={room} />
          ))}
        </div>
      </section>

      {/* Index of Faces teaser */}
      <section
        style={{
          position: "relative",
          padding: "clamp(40px,6vh,72px) clamp(16px,4vw,72px) clamp(50px,8vh,100px)",
          maxWidth: 1500,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            background: "#0c0a08",
            border: "1px solid rgba(233,225,211,.08)",
            padding: "clamp(30px,4.5vw,64px)",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(120% 120% at 85% 15%,rgba(90,58,36,.22),transparent 55%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 20,
              marginBottom: 30,
            }}
          >
            <div style={{ maxWidth: 560 }}>
              <div
                className="mono"
                style={{ fontWeight: 500, fontSize: 11, lineHeight: 1, letterSpacing: ".3em", textTransform: "uppercase", color: "rgba(189,154,87,.8)" }}
              >
                A signature room
              </div>
              <h2 className="serif" style={{ margin: "16px 0 0", fontWeight: 500, fontSize: "clamp(2rem,4vw,3.2rem)", lineHeight: 1, color: "#f1ebde" }}>
                The Index of Faces
              </h2>
              <p
                className="serif"
                style={{ margin: "18px 0 0", fontSize: "clamp(1rem,1.4vw,1.18rem)", lineHeight: 1.6, fontStyle: "italic", color: "rgba(233,225,211,.78)" }}
              >
                Every recurring face, mask and head — gathered from paintings and
                carvings into one wall of eyes. Touch a face to find the work it
                belongs to.
              </p>
            </div>
            <Link href="/index-of-faces" className="btn btn-line" style={{ whiteSpace: "nowrap" }}>
              Open the Index&nbsp;→
            </Link>
          </div>
          <div className="rr-faces-grid" style={{ position: "relative", display: "grid", gap: 10 }}>
            {facesTeaser.map((face, i) => (
              <FaceTile key={`${face.id}-${i}`} face={face} caption={false} />
            ))}
          </div>
        </div>
      </section>

      {/* Collector list */}
      <section
        style={{
          position: "relative",
          padding: "clamp(50px,9vh,110px) clamp(24px,6vw,96px) clamp(70px,12vh,140px)",
          maxWidth: 880,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <div style={{ width: 34, height: 1, background: "rgba(189,154,87,.5)", margin: "0 auto 28px" }} />
        <div
          className="mono"
          style={{ fontWeight: 500, fontSize: 11, lineHeight: 1, letterSpacing: ".34em", textTransform: "uppercase", color: "rgba(189,154,87,.78)" }}
        >
          The Collector List
        </div>
        <h2
          className="serif"
          style={{ margin: "22px 0 0", fontWeight: 500, fontSize: "clamp(1.7rem,3.4vw,2.7rem)", lineHeight: 1.25, color: "#f0e9dc", textWrap: "balance" }}
        >
          Join a small circle of people who see the work first.
        </h2>
        <p
          style={{ margin: "18px auto 0", maxWidth: 520, fontSize: "1rem", lineHeight: 1.65, color: "rgba(168,156,137,.85)" }}
        >
          New works, private releases, studio notes, and early access to available
          pieces — sent rarely, and only when there is something worth showing.
        </p>
        <CollectorSignup compact />
      </section>

      <style>{`
        .rr-rooms-grid { grid-template-columns: repeat(auto-fill,minmax(min(440px,100%),1fr)); }
        .rr-faces-grid { grid-template-columns: repeat(auto-fill,minmax(150px,1fr)); }
        @media (max-width: 560px) {
          .rr-rooms-grid { grid-template-columns: 1fr; }
          .rr-faces-grid { grid-template-columns: repeat(auto-fill,minmax(92px,1fr)); }
        }
      `}</style>
    </div>
  );
}
