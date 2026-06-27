import type { Metadata } from "next";
import Link from "next/link";
import { Container, PageHeader } from "@/components/Page";
import { Reveal } from "@/components/motion/Reveal";
import { Parallax } from "@/components/motion/Parallax";
import { Art } from "@/components/Art";
import { Arrow, Hairline } from "@/components/ui";
import {
  rooms,
  artworksByRoom,
  symbolById,
  type SymbolId,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "The Gallery",
  description:
    "Six symbolic rooms \u2014 faces, bodies, beasts, ritual, the absurd, and the carved archive. Paintings, carvings, drawings, and sold works gathered by obsession, not by medium.",
};

function roomSymbols(roomId: Parameters<typeof artworksByRoom>[0]): SymbolId[] {
  const set = new Set<SymbolId>();
  artworksByRoom(roomId).forEach((a) => a.symbols.forEach((s) => set.add(s)));
  return Array.from(set).slice(0, 6);
}

export default function GalleryPage() {
  return (
    <div className="pb-10">
      <PageHeader
        kicker="The Gallery"
        title={
          <>
            Six rooms,
            <br />
            one obsession each
          </>
        }
        intro={
          <p>
            The gallery is not arranged by medium. Paintings, carvings, drawings,
            studies, and sold works share each room, gathered instead around a
            single preoccupation. Choose a door and let your eye wander into the
            dark.
          </p>
        }
      />

      <Container className="mt-20 space-y-24 sm:mt-28">
        {rooms.map((room, i) => {
          const count = artworksByRoom(room.id).length;
          const syms = roomSymbols(room.id);
          const flip = i % 2 === 1;
          return (
            <Reveal key={room.id}>
              <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                <Link
                  href={room.href}
                  className={`group relative block ${flip ? "lg:order-2" : ""}`}
                  aria-label={`Enter ${room.name}`}
                >
                  <div data-magnify>
                    <Parallax amount={22}>
                      <Art
                        image={room.image}
                        alt={room.name}
                        ratio="5/4"
                        crop={room.focus}
                        zoomable
                        sizes="(min-width: 1024px) 48vw, 92vw"
                      />
                    </Parallax>
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-deep/55 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                </Link>

                <div className={flip ? "lg:order-1" : ""}>
                  <div className="flex items-baseline gap-3 label text-bone-muted">
                    <span className="tabular">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px w-8 bg-[var(--hairline-gold)]" />
                    <span>{count} works</span>
                  </div>
                  <h2 className="mt-4 font-display text-4xl text-bone sm:text-5xl">
                    {room.name}
                  </h2>
                  <p className="mt-3 text-base text-bone-dim">{room.subtitle}</p>
                  <p className="prose-serif mt-5 max-w-md text-lg">{room.blurb}</p>

                  <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                    {syms.map((s) => (
                      <Link
                        key={s}
                        href={`/symbols/${s}`}
                        className="text-sm text-bone-muted transition-colors hover:text-gold"
                      >
                        {symbolById(s).name}
                      </Link>
                    ))}
                  </div>

                  <Link
                    href={room.href}
                    className="group mt-8 inline-flex items-center gap-2 label label-gold"
                  >
                    Enter {room.name}
                    <Arrow className="transition-transform duration-500 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </Reveal>
          );
        })}
      </Container>

      <Container className="mt-28">
        <Hairline gold />
      </Container>
    </div>
  );
}
