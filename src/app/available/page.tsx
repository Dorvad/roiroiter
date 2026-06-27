import type { Metadata } from "next";
import Link from "next/link";
import { Container, PageHeader, SectionHead } from "@/components/Page";
import { Reveal } from "@/components/motion/Reveal";
import { Art } from "@/components/Art";
import { ArtworkCard } from "@/components/ArtworkCard";
import { EditionPurchase } from "@/components/EditionPurchase";
import { InquiryForm } from "@/components/InquiryForm";
import { Kicker, StatusBadge, ButtonLink, Hairline, Arrow } from "@/components/ui";
import { artworks, type Artwork } from "@/lib/data";

export const metadata: Metadata = {
  title: "Available Works — The Private Viewing Room",
  description:
    "A quiet, sales-focused room. Original paintings and carvings by inquiry; signed prints, editions, and small objects available to acquire directly.",
};

const sellable = (a: Artwork) => a.status === "Available" || a.status === "Inquiry";

export default function AvailablePage() {
  const paintings = artworks.filter((a) => a.type === "painting" && sellable(a));
  const carvings = artworks.filter((a) => a.type === "carving" && sellable(a));
  const prints = artworks.filter((a) => a.edition?.kind.includes("print"));
  const objects = artworks.filter(
    (a) =>
      (a.type === "object" && sellable(a)) ||
      a.edition?.kind === "Cast plaster relief",
  );

  const jump = [
    { label: "Paintings", href: "#paintings" },
    { label: "Carvings", href: "#carvings" },
    { label: "Prints & Editions", href: "#editions" },
    { label: "Small Objects", href: "#objects" },
    { label: "Commissions", href: "#commissions" },
  ];

  return (
    <div className="pb-10">
      <PageHeader
        kicker="The Private Viewing Room"
        title="Available works"
        intro={
          <p>
            A quiet room for those who wish to live with the work. Originals are
            sold directly from the studio and offered by inquiry; prints,
            editions, and small objects may be acquired here and now. No noise,
            no urgency &mdash; only the slow pleasure of choosing.
          </p>
        }
      />

      <Container className="mt-10">
        <Reveal>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Kicker className="text-bone-muted">Jump to</Kicker>
            {jump.map((j) => (
              <a
                key={j.href}
                href={j.href}
                className="text-sm text-bone-dim transition-colors hover:text-gold"
              >
                {j.label}
              </a>
            ))}
          </div>
        </Reveal>
      </Container>

      {/* Original paintings */}
      <Section id="paintings">
        <SectionHead
          kicker="By inquiry"
          title="Original paintings"
        >
          One of one. Inquire about a work, request the price, or reserve it
          while you decide. Each ships with a certificate of authenticity.
        </SectionHead>
        <Grid>
          {paintings.map((a, i) => (
            <Reveal key={a.id} delay={(i % 3) * 0.07}>
              <ArtworkCard art={a} />
            </Reveal>
          ))}
        </Grid>
      </Section>

      {/* Carvings */}
      <Section id="carvings">
        <SectionHead kicker="By inquiry" title="Wood carvings">
          Hand-carved objects with a physical presence. Photographed from many
          angles on request; each travels in a fitted crate with a bespoke base.
        </SectionHead>
        <Grid>
          {carvings.map((a, i) => (
            <Reveal key={a.id} delay={(i % 3) * 0.07}>
              <ArtworkCard art={a} />
            </Reveal>
          ))}
        </Grid>
      </Section>

      {/* Prints / Editions */}
      <Section id="editions">
        <SectionHead kicker="Acquire directly" title="Prints & editions">
          Archival pigment prints on cotton rag, signed and numbered. Choose a
          size and frame, and add it to your tray.
        </SectionHead>
        <div className="mt-12 space-y-10">
          {prints.map((a, i) => (
            <Reveal key={a.id} delay={(i % 2) * 0.08}>
              <EditionRow art={a} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Small objects */}
      <Section id="objects">
        <SectionHead kicker="Editions & objects" title="Small objects">
          Cast reliefs and small carved objects &mdash; some released in modest
          editions, some unique and offered by inquiry.
        </SectionHead>
        <Grid>
          {objects.map((a, i) => (
            <Reveal key={a.id} delay={(i % 3) * 0.07}>
              {a.edition ? (
                <ObjectEditionCard art={a} />
              ) : (
                <ArtworkCard art={a} />
              )}
            </Reveal>
          ))}
        </Grid>
      </Section>

      {/* Commissions */}
      <Section id="commissions">
        <Hairline gold className="mb-16" />
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <Kicker gold>By arrangement</Kicker>
            <h2 className="mt-4 font-display text-4xl text-bone sm:text-5xl">
              Commissions
            </h2>
            <div className="prose-serif mt-6 text-lg">
              <p>
                A handful of commissions are accepted each year &mdash; a painted
                portrait that admits the skull beneath, a carved head for a
                particular doorway, a reliquary box for a particular sorrow.
              </p>
              <p>
                Commissions begin with a conversation, not a brief. Tell me what
                you are circling, and we will find the shape of it together.
              </p>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href="/about" variant="ghost">
                Materials &amp; process
              </ButtonLink>
              <ButtonLink href="/studio-notes" variant="ghost">
                Studio notes
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <InquiryForm
              quickActions={[
                "Commission a painting",
                "Commission a carving",
                "Commission a reliquary box",
              ]}
            />
          </Reveal>
        </div>
      </Section>
    </div>
  );
}

function Section({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28 py-20 sm:py-24">
      <Container>{children}</Container>
    </section>
  );
}

function Grid({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-12 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
}

function EditionRow({ art }: { art: Artwork }) {
  return (
    <div className="grid items-center gap-8 border-t border-[var(--hairline)] pt-10 lg:grid-cols-[1fr_1fr]">
      <Link href={`/artwork/${art.id}`} className="group block" data-magnify>
        <Art
          image={art.image}
          alt={art.title}
          ratio="3/2"
          focus={{ x: 50, y: 46 }}
          zoomable
          sizes="(min-width: 1024px) 44vw, 92vw"
        />
        <div className="mt-3 flex items-baseline justify-between">
          <h3 className="font-display text-2xl text-bone transition-colors group-hover:text-gold">
            {art.title}
          </h3>
          <span className="label text-bone-muted">
            {art.year} &middot; {art.medium}
          </span>
        </div>
      </Link>
      {art.edition && <EditionPurchase artwork={art} edition={art.edition} />}
    </div>
  );
}

function ObjectEditionCard({ art }: { art: Artwork }) {
  return (
    <div>
      <Link href={`/artwork/${art.id}`} className="group block" data-magnify>
        <Art
          image={art.image}
          alt={art.title}
          ratio="4/3"
          focus={{ x: 50, y: 46 }}
          zoomable
          sizes="(min-width: 1024px) 32vw, 92vw"
        />
      </Link>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-2xl text-bone">{art.title}</h3>
          <p className="mt-1 text-sm text-bone-muted">{art.edition?.kind}</p>
        </div>
        <StatusBadge status={art.status} />
      </div>
      {art.edition && (
        <div className="mt-4">
          <EditionPurchase artwork={art} edition={art.edition} compact />
        </div>
      )}
      <Link
        href={`/artwork/${art.id}`}
        className="group mt-4 inline-flex items-center gap-2 label label-gold"
      >
        Full details <Arrow className="transition-transform duration-500 group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
