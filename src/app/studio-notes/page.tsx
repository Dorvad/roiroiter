import type { Metadata } from "next";
import { Container, PageHeader } from "@/components/Page";
import { Reveal } from "@/components/motion/Reveal";
import { Parallax } from "@/components/motion/Parallax";
import { Art } from "@/components/Art";
import { Hairline } from "@/components/ui";
import { studioNotes } from "@/lib/content";

export const metadata: Metadata = {
  title: "Studio Notes",
  description:
    "A journal from the studio \u2014 process photographs, carving details, sketches, unfinished works, materials, and short reflections. The practice, kept alive.",
};

export default function StudioNotesPage() {
  return (
    <div className="pb-10">
      <PageHeader
        kicker="From the Studio"
        title="Studio notes"
        intro={
          <p>
            A working journal: process photographs, carving details, materials,
            and short reflections written between paintings. Less an explanation
            than a window left ajar.
          </p>
        }
      />

      <Container className="mt-20 sm:mt-24">
        <div className="space-y-24 sm:space-y-32">
          {studioNotes.map((note, i) => {
            const flip = i % 2 === 1;
            return (
              <Reveal key={note.id}>
                <article className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                  <div
                    className={flip ? "lg:order-2" : ""}
                    data-magnify
                  >
                    <Parallax amount={22}>
                      <Art
                        image={note.image}
                        alt={note.title}
                        ratio="4/3"
                        crop={
                          note.imageFocus ?? { x: 50, y: 50, zoom: 1.3 }
                        }
                        zoomable
                        sizes="(min-width: 1024px) 48vw, 92vw"
                      />
                    </Parallax>
                  </div>
                  <div className={flip ? "lg:order-1" : ""}>
                    <div className="flex items-center gap-3 label text-bone-muted">
                      <span>{note.date}</span>
                      <span className="h-px w-6 bg-[var(--hairline-gold)]" />
                      <span>{note.tags.join(" \u00b7 ")}</span>
                    </div>
                    <h2 className="mt-4 font-display text-4xl text-bone sm:text-5xl">
                      {note.title}
                    </h2>
                    <div className="prose-serif mt-6 text-lg">
                      {note.body.map((p, j) => (
                        <p key={j}>{p}</p>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>

      <Container className="mt-28">
        <Hairline gold />
      </Container>
    </div>
  );
}
