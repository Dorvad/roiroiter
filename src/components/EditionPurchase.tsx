"use client";

import { useState } from "react";
import { useCart } from "@/components/cart/CartProvider";
import { formatPrice, type Artwork, type Edition } from "@/lib/data";

export function EditionPurchase({
  artwork,
  edition,
  compact = false,
}: {
  artwork: Pick<Artwork, "id" | "title" | "image">;
  edition: Edition;
  compact?: boolean;
}) {
  const { add } = useCart();
  const [variantId, setVariantId] = useState(edition.variants[0].id);
  const [frameId, setFrameId] = useState(edition.frames?.[0]?.id);
  const [added, setAdded] = useState(false);

  const variant = edition.variants.find((v) => v.id === variantId)!;
  const frame = edition.frames?.find((f) => f.id === frameId);
  const price = variant.price + (frame?.price ?? 0);

  function onAdd() {
    add({
      key: `${artwork.id}:${variantId}:${frameId ?? "none"}`,
      artworkId: artwork.id,
      title: artwork.title,
      image: artwork.image,
      kind: edition.kind,
      variantLabel: `${variant.size} \u00b7 ${variant.edition}`,
      frameLabel: frame && frame.price >= 0 ? frame.label : undefined,
      unitPrice: price,
      qty: 1,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2200);
  }

  return (
    <div className={compact ? "" : "border border-[var(--hairline)] p-6"}>
      {!compact && (
        <>
          <div className="label label-gold">{edition.kind}</div>
          <p className="prose-serif mt-3 text-base">{edition.blurb}</p>
        </>
      )}

      <div className="mt-5">
        <div className="label mb-3">Size &amp; edition</div>
        <div className="space-y-2">
          {edition.variants.map((v) => (
            <button
              key={v.id}
              type="button"
              onClick={() => setVariantId(v.id)}
              className={`flex w-full items-center justify-between border px-4 py-3 text-left transition-colors ${
                v.id === variantId
                  ? "border-gold bg-gold/5"
                  : "border-[var(--hairline)] hover:border-bone-muted"
              }`}
            >
              <span>
                <span className="block text-sm text-bone">{v.size}</span>
                <span className="label mt-0.5 block text-bone-muted">{v.edition}</span>
              </span>
              <span className="tabular text-sm text-bone-dim">
                {formatPrice(v.price)}
              </span>
            </button>
          ))}
        </div>
      </div>

      {edition.frames && edition.frames.length > 0 && (
        <div className="mt-5">
          <div className="label mb-3">Frame</div>
          <div className="flex flex-wrap gap-2">
            {edition.frames.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFrameId(f.id)}
                className={`border px-3 py-2 text-sm transition-colors ${
                  f.id === frameId
                    ? "border-gold bg-gold/5 text-bone"
                    : "border-[var(--hairline)] text-bone-muted hover:border-bone-muted"
                }`}
              >
                {f.label}
                {f.price > 0 ? (
                  <span className="tabular ml-2 text-bone-muted">
                    +{formatPrice(f.price)}
                  </span>
                ) : null}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="mt-6 flex items-center justify-between gap-4">
        <div>
          <div className="label text-bone-muted">Total</div>
          <div className="tabular font-display text-3xl text-bone">
            {formatPrice(price)}
          </div>
        </div>
        <button onClick={onAdd} className="btn btn-solid">
          {added ? "Added to tray" : "Add to cart"}
        </button>
      </div>
    </div>
  );
}
