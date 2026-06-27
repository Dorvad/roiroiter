import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Page";
import { Reveal } from "@/components/motion/Reveal";
import { Art } from "@/components/Art";
import { ArtworkViewer } from "@/components/ArtworkViewer";
import { WallMockup } from "@/components/WallMockup";
import { InquiryForm } from "@/components/InquiryForm";
import { EditionPurchase } from "@/components/EditionPurchase";
import { ArtworkCard } from "@/components/ArtworkCard";
import { Kicker, StatusBadge, Arrow, Hairline } from "@/components/ui";
import {
  artworks,
  artworkById,
  roomById,
  symbolById,
  relatedArtworks,
  priceLabel,
} from "@/lib/data";

export function generateStaticParams() {
  return artworks.map((a) => ({ id: a.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const art = artworkById(id);
  if (!art) return {};
  return {
    title: `${art.title} (${art.year})`,
    description: art.poetic,
    openGraph: {
      title: `${art.title} — Roi Roiter`,
      description: art.poetic,
      images: [{ url: `/art/${art.image}` }],
    },
  };
}

export default async function ArtworkPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const art = artworkById(id);
  if (!art) notFound();

  const room = roomById(art.room);
  const related = relatedArtworks(art, 3);
  const isObject = art.type === "carving" || art.type === "object";
  const sellable = art.status === "Available" || art.status === "Inquiry";

  const quickActions: string[] = sellable
    ? [
        ...(art.price == null ? ["Request the price"] : []),
        "Reserve this piece",
        "Request more images",
        "Arrange a studio visit or video viewing",
      ]
    : ["Ask about this work", "Request more images", "Commission something kindred"];

  return (
    <div className="pb-10">
      <Container className="pt-28 sm:pt-32">
        <Reveal>
          <Link
            href={room.href}
            className="group label inline-flex items-center gap-2 text-bone-muted transition-colors hover:text-bone"
          >
            <Arrow className="rotate-180 transition-transform duration-500 group-hover:-translate-x-1" />
            {room.name}
          </Link>
        </Reveal>
      </Container>

      <Container className="mt-8">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:items-start lg:gap-14">
          {/* visual column */}
          <div className="space-y-10">
            <Reveal>
              <ArtworkViewer
                image={art.image}
                alt={art.title}
                caption={`${art.title}, ${art.year} — ${art.medium}`}
                priority
              />
            </Reveal>

            {!isObject && (
              <Reveal>
                <WallMockup
                  image={art.image}
                  alt={art.title}
                  dimensions={art.dimensions}
                />
              </Reveal>
            )}

            {art.details.length > 0 && (
              <Reveal>
                <div>
                  <Kicker className="text-bone-muted">
                    {isObject ? "Views & details" : "Detail close-ups"}
                  </Kicker>
                  <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3">
                    {art.details.map((d) => (
                      <figure key={d.label} data-magnify>
                        <Art
                          image={art.image}
                          alt={`${art.title} — ${d.label}`}
                          ratio="1/1"
                          crop={d}
                          sizes="(min-width: 640px) 20vw, 45vw"
                        />
                        <figcaption className="label mt-2 text-bone-muted">
                          {d.label}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                  {isObject && (
                    <p className="prose-serif mt-5 max-w-xl text-base text-bone-muted">
                      A physical object, carved and finished by hand. The grain,
                      tool marks, and shadow shift as it turns; additional angles
                      and raking-light photographs are sent on request.
                    </p>
                  )}
                </div>
              </Reveal>
            )}
          </div>

          {/* label + collector column */}
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <Link
                href={room.href}
                className="label label-gold transition-colors hover:text-bone"
              >
                {room.name}
              </Link>
              <h1 className="mt-3 font-display text-4xl leading-tight text-bone sm:text-5xl">
                {art.title}
              </h1>
              <div className="mt-3 flex items-center gap-4 text-bone-dim">
                <span className="tabular text-lg">{art.year}</span>
                <span className="h-1 w-1 rounded-full bg-bone-muted" />
                <StatusBadge status={art.status} />
              </div>

              <p className="prose-serif mt-6 text-lg text-bone-dim">
                {art.poetic}
              </p>

              {/* gallery label */}
              <dl className="mt-8 space-y-3 border-t border-[var(--hairline)] pt-6 text-sm">
                <LabelRow term="Medium" value={art.medium} />
                <LabelRow term="Dimensions" value={art.dimensions} />
                <LabelRow term="Year" value={String(art.year)} />
                <LabelRow term="Status" value={art.status} />
                <div className="flex gap-8">
                  <dt className="w-28 shrink-0 label pt-1 text-bone-muted">Motifs</dt>
                  <dd className="flex flex-wrap gap-x-4 gap-y-1">
                    {art.symbols.map((s) => (
                      <Link
                        key={s}
                        href={`/symbols/${s}`}
                        className="text-bone-dim transition-colors hover:text-gold"
                      >
                        {symbolById(s).name}
                      </Link>
                    ))}
                  </dd>
                </div>
              </dl>

              <div className="mt-6 flex items-baseline justify-between border-t border-[var(--hairline-gold)] pt-6">
                <span className="label text-bone-muted">
                  {art.price == null && sellable ? "Enquiry" : "Price"}
                </span>
                <span className="tabular font-display text-3xl text-bone">
                  {priceLabel(art)}
                </span>
              </div>
            </Reveal>

            <Reveal>
              <div className="mt-7">
                <Kicker gold>Make an inquiry</Kicker>
                <p className="prose-serif mt-3 text-base">
                  Each work is sold directly from the studio. Tell me what draws
                  you, and I will reply personally.
                </p>
                <InquiryForm
                  workTitle={art.title}
                  quickActions={quickActions}
                  className="mt-5"
                />
              </div>
            </Reveal>

            {art.edition && (
              <Reveal>
                <div className="mt-8">
                  <Kicker gold>Or own an edition</Kicker>
                  <p className="prose-serif mt-3 text-base">
                    Not ready for the original? A signed, numbered edition is
                    available to acquire directly.
                  </p>
                  <div className="mt-5">
                    <EditionPurchase artwork={art} edition={art.edition} />
                  </div>
                </div>
              </Reveal>
            )}

            <Reveal>
              <div className="mt-8 space-y-px overflow-hidden border-y border-[var(--hairline)]">
                <Disclosure title="Shipping & framing">
                  Works ship fully insured in custom crates, worldwide. Paintings
                  are sent unframed by default; a dark oak or walnut frame can be
                  fitted on request. Carved objects travel in fitted foam with a
                  bespoke base.
                </Disclosure>
                <Disclosure title="Certificate of authenticity">
                  Every original and every edition arrives with a signed, stamped
                  certificate of authenticity, hand-numbered and recorded in the
                  studio archive.
                </Disclosure>
                <Disclosure title="Viewing & studio visits">
                  Studio visits and private video viewings can be arranged for
                  serious enquiries. Additional photographs, raking-light details,
                  and condition notes are always available.
                </Disclosure>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>

      {art.note && (
        <Container size="prose" className="mt-28">
          <Reveal>
            <Kicker gold>From the studio</Kicker>
            <p className="prose-serif mt-6 text-2xl leading-relaxed text-bone-dim">
              {art.note}
            </p>
            <p className="deco-quote mt-8 text-xl text-bone-muted">
              &mdash; Roi Roiter
            </p>
          </Reveal>
        </Container>
      )}

      {related.length > 0 && (
        <Container className="mt-28">
          <Hairline gold />
          <Reveal>
            <h2 className="mt-12 font-display text-3xl text-bone sm:text-4xl">
              Kindred works
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r, i) => (
              <Reveal key={r.id} delay={(i % 3) * 0.07}>
                <ArtworkCard art={r} />
              </Reveal>
            ))}
          </div>
        </Container>
      )}
    </div>
  );
}

function LabelRow({ term, value }: { term: string; value: string }) {
  return (
    <div className="flex gap-8">
      <dt className="w-28 shrink-0 label pt-0.5 text-bone-muted">{term}</dt>
      <dd className="text-bone-dim">{value}</dd>
    </div>
  );
}

function Disclosure({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <details className="group">
      <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-sm text-bone transition-colors hover:text-gold">
        <span className="label text-bone-dim group-hover:text-bone">{title}</span>
        <span className="text-gold transition-transform duration-300 group-open:rotate-45">
          +
        </span>
      </summary>
      <p className="prose-serif pb-5 text-sm leading-relaxed text-bone-muted">
        {children}
      </p>
    </details>
  );
}
