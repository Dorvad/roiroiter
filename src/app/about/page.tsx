import type { Metadata } from "next";
import { Container } from "@/components/Page";
import { Reveal } from "@/components/motion/Reveal";
import { Parallax } from "@/components/motion/Parallax";
import { Art } from "@/components/Art";
import { Kicker, ButtonLink, Hairline } from "@/components/ui";
import { about } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Roi Roiter",
  description:
    "Painter and woodcarver working from a single dim studio. A short biography, an artist statement, materials and process, and selected exhibitions.",
};

export default function AboutPage() {
  return (
    <div className="pb-10">
      <Container className="pt-32 sm:pt-40">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-end lg:gap-16">
          <Reveal>
            <Kicker gold>About</Kicker>
            <h1 className="mt-5 font-display text-5xl leading-[1.04] text-bone sm:text-7xl">
              Roi Roiter
            </h1>
            <p className="prose-serif mt-7 text-xl">{about.intro}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div data-magnify>
              <Parallax amount={24}>
                <Art
                  image={about.portrait}
                  alt="The studio of Roi Roiter"
                  ratio="5/4"
                  focus={{ x: 50, y: 50 }}
                  zoomable
                  priority
                  sizes="(min-width: 1024px) 52vw, 92vw"
                />
              </Parallax>
              <p className="label mt-3 text-bone-muted">
                The studio &mdash; carvings, masks, and the bench
              </p>
            </div>
          </Reveal>
        </div>
      </Container>

      {/* Biography */}
      <Container size="prose" className="mt-28">
        <Reveal>
          <Kicker className="text-bone-muted">Biography</Kicker>
          <div className="prose-serif mt-6 text-lg">
            {about.biography.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>
      </Container>

      {/* Statement */}
      <Container size="prose" className="mt-24">
        <Reveal>
          <Hairline gold />
          <Kicker gold className="mt-12 block">
            Artist statement
          </Kicker>
          <div className="mt-7 space-y-7">
            {about.statement.map((p, i) => (
              <p
                key={i}
                className="font-display text-2xl font-light leading-snug text-bone-dim sm:text-3xl sm:leading-[1.3]"
              >
                {p}
              </p>
            ))}
          </div>
          <p className="deco-quote mt-8 text-xl text-bone-muted">
            &mdash; Roi Roiter
          </p>
        </Reveal>
      </Container>

      {/* Materials & process */}
      <Container className="mt-28">
        <Reveal>
          <Kicker className="text-bone-muted">Materials &amp; process</Kicker>
          <div className="mt-8 grid gap-px overflow-hidden border border-[var(--hairline)] sm:grid-cols-3">
            {about.materials.map((m) => (
              <div key={m.title} className="bg-panel/60 p-7">
                <h3 className="font-display text-2xl text-bone">{m.title}</h3>
                <p className="prose-serif mt-3 text-base text-bone-muted">
                  {m.text}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>

      {/* Exhibitions */}
      <Container size="prose" className="mt-24">
        <Reveal>
          <Kicker className="text-bone-muted">Selected exhibitions</Kicker>
          <ul className="mt-8 divide-y divide-[var(--hairline)] border-y border-[var(--hairline)]">
            {about.exhibitions.map((e) => (
              <li key={e.year} className="flex gap-6 py-4">
                <span className="tabular w-16 shrink-0 label text-gold">
                  {e.year}
                </span>
                <span className="prose-serif text-base text-bone-dim">
                  {e.text}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>

      {/* CTA */}
      <Container className="mt-28">
        <Reveal>
          <div className="texture-paper flex flex-col items-start gap-6 border border-[var(--hairline-gold)] p-9 sm:flex-row sm:items-center sm:justify-between sm:p-12">
            <div>
              <h2 className="font-display text-3xl text-bone sm:text-4xl">
                Visit the studio, or commission a work
              </h2>
              <p className="prose-serif mt-3 max-w-xl text-lg text-bone-muted">
                Studio visits, private viewings, and a few commissions each year,
                by arrangement.
              </p>
            </div>
            <ButtonLink href="/contact" variant="solid">
              Contact the studio
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
