import Link from "next/link";
import { Art } from "@/components/Art";
import { Arrow } from "@/components/ui";
import type { Room } from "@/lib/data";

export function RoomCard({
  room,
  index,
  count,
  ratio = "4/5",
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 92vw",
}: {
  room: Room;
  index: number;
  count?: number;
  ratio?: string;
  sizes?: string;
}) {
  return (
    <Link
      href={room.href}
      className="group relative block overflow-hidden"
      aria-label={`Enter ${room.name}`}
    >
      <div data-magnify>
        <Art
          image={room.image}
          alt={room.name}
          ratio={ratio}
          crop={room.focus}
          zoomable
          sizes={sizes}
        />
      </div>

      {/* darkening so captions stay readable */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-ink-deep/92 via-ink-deep/25 to-ink-deep/10 transition-opacity duration-700 group-hover:from-ink-deep/85"
      />

      <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 sm:p-7">
        <div className="flex items-center gap-3 label text-bone-muted">
          <span className="tabular">{String(index + 1).padStart(2, "0")}</span>
          <span className="h-px w-6 bg-[var(--hairline-gold)]" />
          <span>{typeof count === "number" ? `${count} works` : "The Rooms"}</span>
        </div>

        <h3 className="mt-3 font-display text-[1.7rem] leading-none text-bone transition-colors duration-500 group-hover:text-gold sm:text-4xl">
          {room.name}
        </h3>
        <p className="mt-2 text-sm text-bone-dim">{room.subtitle}</p>

        <p className="prose-serif mt-3 max-w-sm overflow-hidden text-[0.98rem] leading-relaxed text-bone-muted opacity-0 transition-all duration-700 ease-[var(--ease-museum)] [max-height:0] group-hover:opacity-100 group-hover:[max-height:8rem]">
          {room.blurb}
        </p>

        <span className="mt-4 inline-flex items-center gap-2 label label-gold opacity-70 transition-opacity duration-500 group-hover:opacity-100">
          Enter the room <Arrow className="transition-transform duration-500 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
