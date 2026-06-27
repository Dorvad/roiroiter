import type { Metadata } from "next";
import Link from "next/link";
import { Container, PageHeader } from "@/components/Page";
import { Reveal } from "@/components/motion/Reveal";
import { Art } from "@/components/Art";
import { symbols, artworksBySymbol, symbolCount } from "@/lib/data";

export const metadata: Metadata = {
  title: "Symbols",
};

export default function SymbolsPage() {
  return (
    <div className="pb-10">
      <PageHeader kicker="Symbols" title="Browse by motif" />
      <Container className="mt-14">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {symbols
            .filter((s) => symbolCount(s.id) > 0)
            .map((s, i) => {
              const works = artworksBySymbol(s.id);
              const img = works[0];
              return (
                <Reveal key={s.id} delay={(i % 3) * 0.05}>
                  <Link href={`/symbols/${s.id}`} className="group flex items-center gap-4">
                    {img && (
                      <div className="w-20 shrink-0">
                        <Art image={img.image} alt={s.name} ratio="1/1" crop={img.face} sizes="80px" />
                      </div>
                    )}
                    <div>
                      <h2 className="font-display text-2xl group-hover:text-gold">{s.name}</h2>
                      <span className="text-sm text-bone-muted">{symbolCount(s.id)}</span>
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
