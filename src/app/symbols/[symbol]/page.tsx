import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Page";
import { Reveal } from "@/components/motion/Reveal";
import { ArtworkCard } from "@/components/ArtworkCard";
import { Arrow } from "@/components/ui";
import {
  symbols,
  symbolById,
  artworksBySymbol,
  type SymbolId,
} from "@/lib/data";

const SYMBOL_IDS = symbols.map((s) => s.id);

export function generateStaticParams() {
  return symbols.map((s) => ({ symbol: s.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ symbol: string }>;
}): Promise<Metadata> {
  const { symbol } = await params;
  if (!SYMBOL_IDS.includes(symbol as SymbolId)) return {};
  const s = symbolById(symbol as SymbolId);
  return { title: `Symbol — ${s.name}`, description: s.blurb };
}

export default async function SymbolPage({
  params,
}: {
  params: Promise<{ symbol: string }>;
}) {
  const { symbol } = await params;
  if (!SYMBOL_IDS.includes(symbol as SymbolId)) notFound();

  const s = symbolById(symbol as SymbolId);
  const works = artworksBySymbol(s.id);

  return (
    <div className="pb-10">
      <Container className="pt-32 sm:pt-40">
        <Reveal>
          <Link
            href="/symbols"
            className="group label inline-flex items-center gap-2 text-bone-muted transition-colors hover:text-bone"
          >
            <Arrow className="rotate-180 transition-transform duration-500 group-hover:-translate-x-1" />
            All symbols
          </Link>
          <div className="mt-7 label label-gold">
            The symbol &middot; {works.length} works
          </div>
          <h1 className="mt-3 font-display text-6xl text-bone sm:text-8xl">
            {s.name}
          </h1>
          <p className="prose-serif mt-5 max-w-2xl text-xl">{s.blurb}</p>
        </Reveal>
      </Container>

      <Container className="mt-16 sm:mt-20">
        <div className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((art, i) => (
            <Reveal key={art.id} delay={(i % 3) * 0.07}>
              <ArtworkCard art={art} index={i} />
            </Reveal>
          ))}
        </div>
      </Container>

      <Container className="mt-28">
        <Reveal>
          <div className="label mb-5 text-bone-muted">Other motifs</div>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {symbols
              .filter((x) => x.id !== s.id)
              .map((x) => (
                <Link
                  key={x.id}
                  href={`/symbols/${x.id}`}
                  className="font-display text-2xl text-bone-dim transition-colors duration-300 hover:text-gold"
                >
                  {x.name}
                </Link>
              ))}
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
