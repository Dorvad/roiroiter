import Link from "next/link";
import { Art } from "@/components/Art";
import { StatusBadge } from "@/components/ui";
import type { Artwork } from "@/lib/data";

export function ArtworkCard({
  art,
  index,
  sizes = "(min-width: 1024px) 32vw, (min-width: 640px) 48vw, 92vw",
}: {
  art: Artwork;
  index?: number;
  sizes?: string;
}) {
  return (
    <Link
      href={`/artwork/${art.id}`}
      className="group block focus:outline-none"
      aria-label={`${art.title}, ${art.year}`}
    >
      <div className="relative" data-magnify>
        <Art
          image={art.image}
          alt={art.title}
          ratio="4/3"
          focus={{ x: 50, y: 46 }}
          zoomable
          sizes={sizes}
        />
        {/* caption that rises from the dark on hover */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 translate-y-2 bg-gradient-to-t from-ink-deep/90 via-ink-deep/30 to-transparent p-5 opacity-0 transition-all duration-700 ease-[var(--ease-museum)] group-hover:translate-y-0 group-hover:opacity-100">
          <div className="label text-bone-dim">
            {art.year} &middot; {art.medium}
          </div>
        </div>
        {typeof index === "number" && (
          <div className="pointer-events-none absolute left-4 top-4 z-10 label text-bone-muted/80">
            {String(index + 1).padStart(2, "0")}
          </div>
        )}
      </div>

      <div className="mt-4 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="font-display text-2xl leading-tight text-bone transition-colors duration-500 group-hover:text-gold">
            {art.title}
          </h3>
          <p className="mt-1.5 text-sm text-bone-muted">
            {art.year} &middot; {art.medium}
          </p>
          <p className="mt-0.5 text-sm text-bone-muted tabular">{art.dimensions}</p>
        </div>
        <StatusBadge status={art.status} className="mt-1 shrink-0 text-right" />
      </div>
    </Link>
  );
}
