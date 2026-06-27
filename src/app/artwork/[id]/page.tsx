import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Page";
import { Art } from "@/components/Art";
import { ArtworkViewer } from "@/components/ArtworkViewer";
import { InquiryForm } from "@/components/InquiryForm";
import { ArtworkCard } from "@/components/ArtworkCard";
import { Kicker, StatusBadge } from "@/components/ui";
import {
  catalogArtworkIds,
  artworkById,
  roomById,
  symbolById,
  relatedArtworks,
  priceLabel,
} from "@/lib/data";

export function generateStaticParams() {
  return catalogArtworkIds().map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const art = artworkById(id);
  if (!art) return {};
  return { title: `${art.title} (${art.year})` };
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

  return (
    <div className="pb-10">
      <Container className="pt-28 sm:pt-32">
        <Link href={room.href} className="label text-bone-muted hover:text-bone">
          ← {room.name}
        </Link>
      </Container>

      <Container className="mt-6">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-12">
          <div className="space-y-8">
            <ArtworkViewer image={art.image} alt={art.title} priority />
            {art.details && art.details.length > 0 && (
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {art.details.map((d) => (
                  <Art
                    key={d.label}
                    image={art.image}
                    alt={d.label}
                    ratio="1/1"
                    crop={d}
                    sizes="20vw"
                  />
                ))}
              </div>
            )}
          </div>

          <div>
            <h1 className="font-display text-4xl text-bone">{art.title}</h1>
            <div className="mt-2 flex items-center gap-3 text-sm text-bone-muted">
              <span>{art.year}</span>
              <StatusBadge status={art.status} />
            </div>
            <dl className="mt-6 space-y-2 border-t border-[var(--hairline)] pt-5 text-sm">
              <Row label="Medium" value={art.medium} />
              <Row label="Size" value={art.dimensions} />
              <Row label="Price" value={priceLabel(art)} />
            </dl>
            <div className="mt-4 flex flex-wrap gap-3">
              {art.symbols.map((s) => (
                <Link key={s} href={`/symbols/${s}`} className="text-sm text-bone-muted hover:text-gold">
                  {symbolById(s).name}
                </Link>
              ))}
            </div>
            <div className="mt-8">
              <Kicker gold>Inquire</Kicker>
              <InquiryForm workTitle={art.title} className="mt-4" quickActions={["Request price", "Reserve"]} />
            </div>
          </div>
        </div>
      </Container>

      {related.length > 0 && (
        <Container className="mt-20">
          <h2 className="font-display text-2xl text-bone">Related</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            {related.map((r) => (
              <ArtworkCard key={r.id} art={r} />
            ))}
          </div>
        </Container>
      )}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-4">
      <dt className="w-16 label text-bone-muted">{label}</dt>
      <dd className="text-bone-dim">{value}</dd>
    </div>
  );
}
