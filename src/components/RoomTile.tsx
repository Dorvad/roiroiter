import Link from "next/link";
import { styleFromCss } from "@/lib/css";
import { roomFill, type Room } from "@/lib/data";

export function RoomTile({ room }: { room: Room }) {
  return (
    <Link href={`/gallery?room=${room.key}`} className="room">
      <div className="room-bg" style={styleFromCss(roomFill(room))} />
      <div className="room-scrim" />
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "clamp(20px,2.4vw,34px)" }}>
        <div
          className="mono"
          style={{
            fontWeight: 500,
            fontSize: 10,
            lineHeight: 1,
            letterSpacing: ".26em",
            textTransform: "uppercase",
            color: "rgba(189,154,87,.92)",
            marginBottom: 11,
          }}
        >
          {room.sub}
        </div>
        <h3
          className="serif"
          style={{ margin: 0, fontWeight: 500, fontSize: "clamp(1.55rem,2.5vw,2.2rem)", lineHeight: 1.03, color: "#f2ecdf" }}
        >
          {room.name}
        </h3>
        <p className="room-blurb">{room.blurb}</p>
      </div>
      <div className="room-tick">Enter&nbsp;→</div>
    </Link>
  );
}
