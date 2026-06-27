import type { Metadata } from "next";
import Link from "next/link";
import { Container, PageHeader } from "@/components/Page";
import { Reveal } from "@/components/motion/Reveal";
import { Art } from "@/components/Art";
import {
  symbols,
  artworksBySymbol,
  type SymbolId,
  type Crop,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Browse by Symbol",
  description:
    "Follow a motif instead of a medium. Face, mask, animal, hand, wound, body, machine, desert, sleep, death, wood, ritual, absurdity \u2014 the private language of Roi Roiter's work.",
};

function representative(sym: SymbolId): { image: string; crop: Crop } | null {
  const works = artworksBySymbol(sym);
  if (!works.length) return null;
  const withFace = works.find((w) => w.face);
  if (withFace?.face) return { image: withFace.image, crop: withFace.face };
  const first = works[0];
  const crop = first.details[0] ?? { label: "", x: 50, y: 48, zoom: 1.2 };
  return { image: first.image, crop };
}

export default function SymbolsPage() {
  return (
    <div className="pb-10">
      <PageHeader
        kicker="A Private Language"
        title="Browse by symbol"
        intro={
          <p>
            The work is built from a small vocabulary of obsessions that recur,
            mutate, and answer one another across paintings and carvings. Follow a
            motif and watch it change its mind.
          </p>
        }
      />

      <Container className="mt-16 sm:mt-20">
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {symbols.map((s, i) => {
            const rep = representative(s.id);
            const count = artworksBySymbol(s.id).length;
            return (
              <Reveal key={s.id} delay={(i % 3) * 0.06}>
                <Link
                  href={`/symbols/${s.id}`}
                  className="group flex items-center gap-5"
                >
                  <div className="w-28 shrink-0" data-magnify>
                    {rep && (
                      <Art
                        image={rep.image}
                        alt={s.name}
                        ratio="1/1"
                        crop={rep.crop}
                        zoomable
                        sizes="120px"
                      />
                    )}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-baseline gap-3">
                      <h2 className="font-display text-3xl text-bone transition-colors duration-300 group-hover:text-gold">
                        {s.name}
                      </h2>
                      <span className="tabular label text-bone-muted">
                        {String(count).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="prose-serif mt-1 text-base text-bone-muted">
                      {s.blurb}
                    </p>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
