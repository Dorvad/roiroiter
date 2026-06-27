import type { Metadata } from "next";
import Link from "next/link";
import { Container, PageHeader } from "@/components/Page";
import { Reveal } from "@/components/motion/Reveal";
import { Art } from "@/components/Art";
import { ArtworkViewer } from "@/components/ArtworkViewer";
import { ArtworkCard } from "@/components/ArtworkCard";
import { Kicker, StatusBadge, Arrow, ButtonLink } from "@/components/ui";
import { carvedArtworks, artworkById } from "@/lib/data";

export const metadata: Metadata = {
  title: "The Carved Archive",
  description:
    "Wood carvings, carved faces and masks, wooden figures, and studio objects. Grain, tool marks, shadow, and the physicality of a thing made by hand.",
};

export default function CarvedArchivePage() {
  const works = carvedArtworks();
  const hero = artworkById("wooden-head-no-vii")!;
  const rest = works.filter((w) => w.id !== hero.id);

  return (
    <div className="pb-10">
      <PageHeader
        kicker="The Carved Archive"
        title="Objects with a presence"
        intro={
          <p>
            Between paintings, Roi Roiter carves &mdash; heads, masks, reluctant
            figures, boxes for safekeeping. The tool marks are left in place, the
            grain allowed to decide. Each object is an artifact, not a product;
            something to be turned in the hand and lived beside.
          </p>
        }
      />

      {/* Featured carving */}
      <Container className="mt-16 sm:mt-20">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-center lg:gap-14">
            <ArtworkViewer
              image={hero.image}
              alt={hero.title}
              caption={`${hero.title}, ${hero.year}`}
              priority
            />
            <div>
              <Kicker gold>The latest head</Kicker>
              <h2 className="mt-3 font-display text-4xl text-bone sm:text-5xl">
                {hero.title}
              </h2>
              <div className="mt-3 flex items-center gap-4 text-bone-dim">
                <span className="tabular">{hero.year}</span>
                <span className="h-1 w-1 rounded-full bg-bone-muted" />
                <StatusBadge status={hero.status} />
              </div>
              <p className="prose-serif mt-5 text-lg">{hero.poetic}</p>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {hero.details.slice(1, 4).map((d) => (
                  <Art
                    key={d.label}
                    image={hero.image}
                    alt={`${hero.title} — ${d.label}`}
                    ratio="1/1"
                    crop={d}
                    sizes="14vw"
                  />
                ))}
              </div>
              <Link
                href={`/artwork/${hero.id}`}
                className="group mt-7 inline-flex items-center gap-2 label label-gold"
              >
                View this carving
                <Arrow className="transition-transform duration-500 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>

      {/* The archive grid */}
      <Container className="mt-24 sm:mt-28">
        <Reveal>
          <h2 className="font-display text-3xl text-bone sm:text-4xl">
            In the archive
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((a, i) => (
            <Reveal key={a.id} delay={(i % 3) * 0.07}>
              <ArtworkCard art={a} index={i} />
            </Reveal>
          ))}
        </div>
      </Container>

      <Container className="mt-24">
        <Reveal>
          <div className="texture-wood flex flex-col items-start gap-6 border border-[var(--hairline)] p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div>
              <Kicker gold>The hand at work</Kicker>
              <p className="prose-serif mt-3 max-w-xl text-lg text-bone-dim">
                See the carvings take shape &mdash; shavings, gouges, and the slow
                argument with the grain &mdash; in the studio notes.
              </p>
            </div>
            <ButtonLink href="/studio-notes">Read the studio notes</ButtonLink>
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
