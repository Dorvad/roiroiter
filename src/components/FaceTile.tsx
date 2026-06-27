import Link from "next/link";
import Image from "next/image";
import { getImageMeta, type Artwork, type Crop } from "@/lib/data";
import { artSrc } from "@/lib/paths";

export function FaceTile({
  art,
  sizes = "(min-width: 1024px) 18vw, (min-width: 640px) 30vw, 45vw",
}: {
  art: Artwork & { face: Crop };
  sizes?: string;
}) {
  const meta = getImageMeta(art.image);
  const src = artSrc(art.image);

  return (
    <Link
      href={`/artwork/${art.id}`}
      className="group relative block aspect-square overflow-hidden frame"
      aria-label={`${art.face.label} \u2014 ${art.title}`}
    >
      {/* base layer: the full work, revealed on hover */}
      <Image
        src={src}
        alt=""
        fill
        sizes={sizes}
        placeholder={meta.blur ? "blur" : "empty"}
        blurDataURL={meta.blur || undefined}
        aria-hidden
        className="scale-105 object-contain p-1 opacity-0 transition-all duration-[900ms] ease-[var(--ease-museum)] group-hover:scale-100 group-hover:opacity-100"
      />
      {/* top layer: the cropped face, fades to reveal the work beneath */}
      <Image
        src={src}
        alt={`${art.face.label}, from ${art.title}`}
        fill
        sizes={sizes}
        placeholder={meta.blur ? "blur" : "empty"}
        blurDataURL={meta.blur || undefined}
        className="object-cover transition-opacity duration-[900ms] ease-[var(--ease-museum)] group-hover:opacity-0"
        style={{
          objectPosition: `${art.face.x}% ${art.face.y}%`,
          transform: `scale(${art.face.zoom})`,
          transformOrigin: `${art.face.x}% ${art.face.y}%`,
        }}
        data-magnify
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-ink-deep/95 to-transparent p-4 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
      >
        <div className="font-display text-base leading-tight text-bone">
          {art.title}
        </div>
        <div className="label mt-1 text-bone-muted">{art.year}</div>
      </div>
    </Link>
  );
}
