import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "84svh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "120px clamp(24px,6vw,96px) 80px",
      }}
    >
      <div className="kicker">A locked door</div>
      <h1
        className="serif"
        style={{ margin: "22px 0 0", fontWeight: 500, fontSize: "clamp(3rem,9vw,6rem)", lineHeight: 1, color: "#f1ebde" }}
      >
        This room is dark
      </h1>
      <p
        className="serif"
        style={{ margin: "22px auto 0", maxWidth: 460, fontSize: "1.2rem", lineHeight: 1.55, fontStyle: "italic", color: "rgba(233,225,211,.8)" }}
      >
        Whatever you were looking for has been moved, sold, or was only ever a
        dream. The rest of the cabinet is still open.
      </p>
      <div style={{ marginTop: 36, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 13 }}>
        <Link href="/" className="btn btn-gold">
          Return to the entrance
        </Link>
        <Link href="/gallery" className="btn btn-line">
          Enter the Gallery
        </Link>
      </div>
      <Link
        href="/index-of-faces"
        className="mono lnk"
        style={{ marginTop: 40, fontSize: 10, letterSpacing: ".2em", textTransform: "uppercase", color: "rgba(168,156,137,.6)" }}
      >
        Or wander the Index of Faces
      </Link>
    </div>
  );
}
