import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Page";
import { Reveal } from "@/components/motion/Reveal";
import { ArtworkCard } from "@/components/ArtworkCard";
import { Arrow, ButtonLink } from "@/components/ui";
import {
  roomById,
  artworksByRoom,
  activeRooms,
  type RoomId,
} from "@/lib/data";

const GALLERY_ROOMS: RoomId[] = ["face", "body", "beast", "absurd"];

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
  return { title: roomById(room as RoomId).name };
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
  const list = activeRooms();
  const idx = list.findIndex((x) => x.id === roomId);
  const prev = list[(idx - 1 + list.length) % list.length];
  const next = list[(idx + 1) % list.length];

  return (
    <div className="pb-10">
      <Container className="pt-32 sm:pt-36">
        <Reveal>
          <Link
            href="/gallery"
            className="group label inline-flex items-center gap-2 text-bone-muted hover:text-bone"
          >
            <Arrow className="rotate-180 group-hover:-translate-x-1" />
            Gallery
          </Link>
          <h1 className="mt-6 font-display text-5xl text-bone sm:text-6xl">{r.name}</h1>
          <p className="mt-2 text-bone-muted">{r.subtitle}</p>
        </Reveal>
      </Container>

      <Container className="mt-14">
        {works.length === 0 ? (
          <p className="text-bone-muted">No works in this room yet.</p>
        ) : (
          <div className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {works.map((art, i) => (
              <Reveal key={art.id} delay={(i % 3) * 0.06}>
                <ArtworkCard art={art} index={i} />
              </Reveal>
            ))}
          </div>
        )}
      </Container>

      {list.length > 1 && idx >= 0 && (
        <Container className="mt-20 flex justify-between gap-6">
          <Link href={prev.href} className="group">
            <span className="label text-bone-muted">Previous</span>
            <span className="block font-display text-xl group-hover:text-gold">{prev.name}</span>
          </Link>
          <ButtonLink href="/available" variant="ghost">
            Available
          </ButtonLink>
          <Link href={next.href} className="group text-right">
            <span className="label text-bone-muted">Next</span>
            <span className="block font-display text-xl group-hover:text-gold">{next.name}</span>
          </Link>
        </Container>
      )}
    </div>
  );
}
