import type { CSSProperties } from "react";
import Image from "next/image";
import { getImageMeta } from "@/lib/data";

type Crop = { x: number; y: number; zoom: number };

export interface ArtProps {
  image: string;
  alt: string;
  /** "3/2" (default), any css aspect-ratio string, or "natural" */
  ratio?: string;
  /** focal zoom crop into the source image */
  crop?: Crop;
  /** framing focal point without zoom */
  focus?: { x: number; y: number };
  sizes?: string;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
  frame?: boolean;
  blur?: boolean;
  /** allow a slow scale on parent .group hover */
  zoomable?: boolean;
  fit?: "cover" | "contain";
}

export function Art({
  image,
  alt,
  ratio = "3/2",
  crop,
  focus,
  sizes = "100vw",
  priority = false,
  className = "",
  imgClassName = "",
  frame = true,
  blur = true,
  zoomable = false,
  fit = "cover",
}: ArtProps) {
  const meta = getImageMeta(image);
  const aspect =
    ratio === "natural" ? `${meta.w} / ${meta.h}` : ratio.replace("/", " / ");

  const objectPosition = crop
    ? `${crop.x}% ${crop.y}%`
    : focus
      ? `${focus.x}% ${focus.y}%`
      : "center";

  let style: CSSProperties = { objectPosition };
  let extra = "";

  if (crop) {
    if (zoomable) {
      style = {
        objectPosition,
        transformOrigin: `${crop.x}% ${crop.y}%`,
        ["--z" as string]: String(crop.zoom),
        ["--zh" as string]: String(Number((crop.zoom * 1.07).toFixed(3))),
      } as CSSProperties;
      extra = "art-zoom";
    } else {
      style = {
        objectPosition,
        transform: `scale(${crop.zoom})`,
        transformOrigin: `${crop.x}% ${crop.y}%`,
      };
    }
  } else if (zoomable) {
    extra =
      "transition-transform duration-[1500ms] ease-[var(--ease-museum)] group-hover:scale-[1.045]";
  }

  return (
    <div
      className={`${frame ? "frame" : "relative overflow-hidden"} ${className}`}
      style={{ aspectRatio: aspect }}
    >
      <Image
        src={`/art/${image}`}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        placeholder={blur && meta.blur ? "blur" : "empty"}
        blurDataURL={meta.blur || undefined}
        className={`${fit === "contain" ? "object-contain" : "object-cover"} ${extra} ${imgClassName}`}
        style={style}
      />
    </div>
  );
}
