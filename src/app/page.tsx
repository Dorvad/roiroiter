import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Container, SectionHead } from "@/components/Page";
import { Reveal } from "@/components/motion/Reveal";
import { Parallax } from "@/components/motion/Parallax";
import { RoomCard } from "@/components/RoomCard";
import { FaceTile } from "@/components/FaceTile";
import { ArtworkCard } from "@/components/ArtworkCard";
import { Art } from "@/components/Art";
import { Kicker, Arrow, ButtonLink } from "@/components/ui";
import { site } from "@/lib/site";
import {
  rooms,
  artworksByRoom,
  faces,
  symbols,
  symbolCount,
  featuredArtworks,
} from "@/lib/data";

export default function HomePage() {
  const faceList = faces().slice(0, 6);
  const featured = featuredArtworks().slice(0, 3);

  return (
    <>
      <Hero />

      {/* Manifesto */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.5fr_1fr]">
            <Reveal>
              <Kicker gold>The Premise</Kicker>
              <p className="mt-7 font-display text-3xl font-light leading-snug text-bone-dim sm:text-[2.6rem] sm:leading-[1.18]">
                {site.manifesto}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <ButtonLink href="/about" variant="ghost">
                  About Roi Roiter
                </ButtonLink>
                <ButtonLink href="/studio-notes" variant="ghost">
                  Studio Notes
                </ButtonLink>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <Parallax amount={26}>
                <Art
                  image="ritual-offering.jpg"
                  alt="A still life offering table"
                  ratio="4/5"
                  crop={{ x: 50, y: 50, zoom: 1.25 }}
                  sizes="(min-width: 1024px) 30vw, 90vw"
                />
              </Parallax>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* The Rooms */}
      <section className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHead
              kicker="Six Rooms"
              title="A museum kept by one person, at night"
              href="/gallery"
              hrefLabel="Enter the gallery"
            >
              Each room gathers paintings, carvings, drawings, and sold works
              under a single obsession. Step through and let your eye wander.
            </SectionHead>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rooms.map((room, i) => (
              <Reveal key={room.id} delay={(i % 3) * 0.08}>
                <RoomCard
                  room={room}
                  index={i}
                  count={artworksByRoom(room.id).length}
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Index of Faces teaser */}
      <section className="py-24 sm:py-32">
        <Container>
          <Reveal>
            <SectionHead
              kicker="A Recurring Population"
              title="The Index of Faces"
              href="/index-of-faces"
              hrefLabel="Open the full index"
            >
              The same heads return across paintings and carvings, wearing
              different centuries. Hover a face to glimpse the work it came from.
            </SectionHead>
          </Reveal>
          <div className="mt-12 grid grid-cols-3 gap-3 sm:gap-4 md:grid-cols-6">
            {faceList.map((art, i) => (
              <Reveal key={art.id} delay={(i % 6) * 0.05}>
                <FaceTile art={art} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured works */}
      <section className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHead
              kicker="Currently in the Rooms"
              title="Recent works"
              href="/available"
              hrefLabel="See available works"
            />
          </Reveal>
          <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((art, i) => (
              <Reveal key={art.id} delay={(i % 3) * 0.08}>
                <ArtworkCard art={art} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Symbols */}
      <section className="py-24 sm:py-32">
        <Container>
          <Reveal>
            <SectionHead
              kicker="A Private Language"
              title="Browse by symbol"
              href="/symbols"
              hrefLabel="All motifs"
            >
              Follow an obsession instead of a medium &mdash; the face, the wound,
              the animal, the machine, the wood.
            </SectionHead>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-wrap items-baseline gap-x-7 gap-y-4">
              {symbols.map((s) => (
                <Link
                  key={s.id}
                  href={`/symbols/${s.id}`}
                  className="group inline-flex items-baseline gap-2 font-display text-2xl text-bone-dim transition-colors duration-300 hover:text-gold sm:text-3xl"
                >
                  {s.name}
                  <span className="tabular text-xs text-bone-muted group-hover:text-gold">
                    {symbolCount(s.id)}
                  </span>
                </Link>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Cabinet + Carved teasers */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            <Reveal>
              <Link href="/cabinet" className="group relative block" aria-label="Open The Cabinet">
                <div data-magnify>
                  <Art
                    image="studio-sketch.jpg"
                    alt="A sketchbook of studies"
                    ratio="16/10"
                    crop={{ x: 50, y: 50, zoom: 1.1 }}
                    zoomable
                    sizes="(min-width: 768px) 44vw, 92vw"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-ink-deep/90 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 z-20 p-7">
                  <Kicker gold>An Interactive Drawer</Kicker>
                  <h3 className="mt-3 font-display text-3xl text-bone group-hover:text-gold sm:text-4xl">
                    The Cabinet
                  </h3>
                  <p className="prose-serif mt-2 max-w-md text-base text-bone-muted">
                    Open the drawers of the studio: small works, studies,
                    experiments, unfinished pieces, and strange objects.
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 label label-gold">
                    Open the cabinet <Arrow className="transition-transform duration-500 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>

            <Reveal delay={0.08}>
              <Link
                href="/carved-archive"
                className="group relative block"
                aria-label="Open the Carved Archive"
              >
                <div data-magnify>
                  <Art
                    image="carved-listening-mask.jpg"
                    alt="A carved listening mask"
                    ratio="16/10"
                    crop={{ x: 50, y: 45, zoom: 1.2 }}
                    zoomable
                    sizes="(min-width: 768px) 44vw, 92vw"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-ink-deep/90 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 z-20 p-7">
                  <Kicker gold>Objects with a Presence</Kicker>
                  <h3 className="mt-3 font-display text-3xl text-bone group-hover:text-gold sm:text-4xl">
                    The Carved Archive
                  </h3>
                  <p className="prose-serif mt-2 max-w-md text-base text-bone-muted">
                    Wood carvings, masks and figures &mdash; grain, tool marks,
                    and shadow. Each piece an artifact, not a product.
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 label label-gold">
                    Enter the archive <Arrow className="transition-transform duration-500 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
