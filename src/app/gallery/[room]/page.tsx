import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Page";
import { Reveal } from "@/components/motion/Reveal";
import { ArtworkCard } from "@/components/ArtworkCard";
import { Kicker, Arrow, Hairline, ButtonLink } from "@/components/ui";
import {
  roomById,
  artworksByRoom,
  symbolById,
  type RoomId,
  type SymbolId,
} from "@/lib/data";

const GALLERY_ROOMS: RoomId[] = ["face", "body", "beast", "ritual", "absurd"];

export function generateStaticParams() {
  return GALLERY_ROOMS.map((room) => ({ room }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ room: string }>;
}): Promise<Metadata> {
  const { room } = await params;
  if (!GALLERY_ROOMS.includes(room as RoomId)) return {};
  const r = roomById(room as RoomId);
  return {
    title: r.name,
    description: r.blurb,
    openGraph: { images: [{ url: `/art/${r.image}` }] },
  };
}

export default async function RoomPage({
  params,
}: {
  params: Promise<{ room: string }>;
}) {
  const { room } = await params;
  if (!GALLERY_ROOMS.includes(room as RoomId)) notFound();

  const roomId = room as RoomId;
  const r = roomById(roomId);
  const works = artworksByRoom(roomId);

  const syms = new Set<SymbolId>();
  works.forEach((w) => w.symbols.forEach((s) => syms.add(s)));

  const idx = GALLERY_ROOMS.indexOf(roomId);
  const prev = roomById(GALLERY_ROOMS[(idx - 1 + GALLERY_ROOMS.length) % GALLERY_ROOMS.length]);
  const next = roomById(GALLERY_ROOMS[(idx + 1) % GALLERY_ROOMS.length]);

  return (
    <div className="pb-10">
      <Container className="pt-32 sm:pt-40">
        <Reveal>
          <Link
            href="/gallery"
            className="group label inline-flex items-center gap-2 text-bone-muted transition-colors hover:text-bone"
          >
            <Arrow className="rotate-180 transition-transform duration-500 group-hover:-translate-x-1" />
            All rooms
          </Link>
          <div className="mt-7 flex items-baseline gap-3 label text-bone-muted">
            <span className="tabular">{String(idx + 1).padStart(2, "0")}</span>
            <span className="h-px w-8 bg-[var(--hairline-gold)]" />
            <span>{works.length} works</span>
          </div>
          <h1 className="mt-4 font-display text-5xl text-bone sm:text-7xl">
            {r.name}
          </h1>
          <p className="prose-serif mt-6 max-w-2xl text-xl">{r.blurb}</p>

          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2">
            <Kicker className="text-bone-muted">Motifs in this room</Kicker>
            {Array.from(syms).map((s) => (
              <Link
                key={s}
                href={`/symbols/${s}`}
                className="text-sm text-bone-dim transition-colors hover:text-gold"
              >
                {symbolById(s).name}
              </Link>
            ))}
          </div>
        </Reveal>
      </Container>

      <Container className="mt-16 sm:mt-20">
        <div className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((art, i) => (
            <Reveal key={art.id} delay={(i % 3) * 0.07}>
              <ArtworkCard art={art} index={i} />
            </Reveal>
          ))}
        </div>
      </Container>

      <Container className="mt-28">
        <Hairline gold />
        <div className="mt-10 flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <Link href={prev.href} className="group">
            <span className="label text-bone-muted">Previous room</span>
            <span className="mt-1 block font-display text-2xl text-bone transition-colors group-hover:text-gold">
              {prev.name}
            </span>
          </Link>
          <ButtonLink href="/available" variant="ghost">
            View available works
          </ButtonLink>
          <Link href={next.href} className="group sm:text-right">
            <span className="label text-bone-muted">Next room</span>
            <span className="mt-1 block font-display text-2xl text-bone transition-colors group-hover:text-gold">
              {next.name}
            </span>
          </Link>
        </div>
      </Container>
    </div>
  );
}
