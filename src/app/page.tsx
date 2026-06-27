import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Container, SectionHead } from "@/components/Page";
import { Reveal } from "@/components/motion/Reveal";
import { RoomCard } from "@/components/RoomCard";
import { FaceTile } from "@/components/FaceTile";
import { ArtworkCard } from "@/components/ArtworkCard";
import {
  activeRooms,
  artworks,
  artworksByRoom,
  faces,
  featuredArtworks,
  heroArtwork,
  symbols,
  symbolCount,
} from "@/lib/data";

export default function HomePage() {
  const hero = heroArtwork();
  const roomList = activeRooms();
  const faceList = faces().slice(0, 6);
  const featured = featuredArtworks().slice(0, 3);

  return (
    <>
      <Hero
        image={hero?.image}
        alt={hero?.title}
        focus={
          hero?.face
            ? { x: hero.face.x, y: hero.face.y }
            : { x: 50, y: 45 }
        }
      />

      {roomList.length > 0 && (
        <section className="py-20 sm:py-24">
          <Container>
            <Reveal>
              <SectionHead kicker="Rooms" title="Four rooms" href="/gallery" hrefLabel="All works" />
            </Reveal>
            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {roomList.map((room, i) => (
                <Reveal key={room.id} delay={(i % 2) * 0.06}>
                  <RoomCard
                    room={room}
                    index={i}
                    count={artworksByRoom(room.id).length}
                    ratio="3/4"
                  />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      {faceList.length > 0 && (
        <section className="py-20 sm:py-24">
          <Container>
            <Reveal>
              <SectionHead
                kicker="Index"
                title="Faces"
                href="/index-of-faces"
                hrefLabel="Full index"
              />
            </Reveal>
            <div className="mt-10 grid grid-cols-3 gap-3 sm:grid-cols-6">
              {faceList.map((art, i) => (
                <Reveal key={art.id} delay={(i % 6) * 0.04}>
                  <FaceTile art={art} />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      {featured.length > 0 && (
        <section className="py-20 sm:py-24">
          <Container>
            <Reveal>
              <SectionHead kicker="Works" title="Selected" href="/available" hrefLabel="Available" />
            </Reveal>
            <div className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((art, i) => (
                <Reveal key={art.id} delay={(i % 3) * 0.06}>
                  <ArtworkCard art={art} />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      {symbols.length > 0 && artworks.length > 0 && (
        <section className="pb-24 pt-8">
          <Container>
            <Reveal>
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {symbols
                  .filter((s) => symbolCount(s.id) > 0)
                  .map((s) => (
                    <Link
                      key={s.id}
                      href={`/symbols/${s.id}`}
                      className="font-display text-2xl text-bone-dim transition-colors hover:text-gold"
                    >
                      {s.name}
                      <span className="ml-2 text-sm text-bone-muted">
                        {symbolCount(s.id)}
                      </span>
                    </Link>
                  ))}
              </div>
            </Reveal>
          </Container>
        </section>
      )}
    </>
  );
}
