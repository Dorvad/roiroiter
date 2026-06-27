import type { Metadata } from "next";
import { Container, PageHeader } from "@/components/Page";
import { Reveal } from "@/components/motion/Reveal";
import { Art } from "@/components/Art";
import { Kicker, ButtonLink } from "@/components/ui";
import { about } from "@/lib/content";
import { hasImageAsset } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  const hasPortrait = hasImageAsset(about.portrait);

  return (
    <div className="pb-10">
      <PageHeader kicker="About" title="Roi Roiter" intro={<p>{about.intro}</p>} />

      <Container className="mt-12 grid gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="prose-serif space-y-4 text-lg text-bone-dim">
            {about.biography.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <ButtonLink href="/contact" className="mt-8">
            Contact
          </ButtonLink>
        </Reveal>
        {hasPortrait && (
          <Reveal delay={0.08}>
            <Art image={about.portrait} alt="Roi Roiter" ratio="4/5" sizes="50vw" />
          </Reveal>
        )}
      </Container>

      <Container className="mt-16">
        <Kicker className="text-bone-muted">Materials</Kicker>
        <ul className="mt-4 space-y-2 text-bone-dim">
          {about.materials.map((m) => (
            <li key={m.title}>
              <strong className="text-bone">{m.title}</strong> — {m.text}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
