import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Page";
import { Reveal } from "@/components/motion/Reveal";
import { ArtworkCard } from "@/components/ArtworkCard";
import { Arrow } from "@/components/ui";
import { symbols, symbolById, artworksBySymbol, type SymbolId } from "@/lib/data";

export function generateStaticParams() {
  return symbols.map((s) => ({ symbol: s.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ symbol: string }>;
}): Promise<Metadata> {
  const { symbol } = await params;
  const s = symbols.find((x) => x.id === symbol);
  if (!s) return {};
  return { title: s.name };
}

export default async function SymbolPage({
  params,
}: {
  params: Promise<{ symbol: string }>;
}) {
  const { symbol } = await params;
  if (!symbols.some((s) => s.id === symbol)) notFound();

  const s = symbolById(symbol as SymbolId);
  const works = artworksBySymbol(s.id);

  return (
    <div className="pb-10">
      <Container className="pt-32 sm:pt-36">
        <Reveal>
          <Link href="/symbols" className="group label inline-flex items-center gap-2 text-bone-muted hover:text-bone">
            <Arrow className="rotate-180" />
            Symbols
          </Link>
          <h1 className="mt-6 font-display text-5xl text-bone">{s.name}</h1>
        </Reveal>
      </Container>

      <Container className="mt-12">
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((art, i) => (
            <Reveal key={art.id} delay={(i % 3) * 0.05}>
              <ArtworkCard art={art} />
            </Reveal>
          ))}
        </div>
      </Container>
    </div>
  );
}
