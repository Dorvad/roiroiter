"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { getImageMeta } from "@/lib/data";

export function ArtworkViewer({
  image,
  alt,
  caption,
  ratio = "natural",
  priority = false,
}: {
  image: string;
  alt: string;
  caption?: string;
  ratio?: string;
  priority?: boolean;
}) {
  const meta = getImageMeta(image);
  const aspect =
    ratio === "natural" ? `${meta.w} / ${meta.h}` : ratio.replace("/", " / ");
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [hover, setHover] = useState(false);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);

  function onMove(e: MouseEvent<HTMLButtonElement>) {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    setPos({
      x: Math.max(0, Math.min(100, x)),
      y: Math.max(0, Math.min(100, y)),
    });
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const src = `/art/${image}`;

  return (
    <>
      <button
        ref={ref}
        type="button"
        data-magnify
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onMouseMove={onMove}
        onClick={() => setOpen(true)}
        className="frame group block w-full"
        style={{ aspectRatio: aspect }}
        aria-label={`Inspect ${alt} \u2014 hover to zoom, click to enlarge`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 62vw, 100vw"
          placeholder={meta.blur ? "blur" : "empty"}
          blurDataURL={meta.blur || undefined}
          className="object-cover transition-transform duration-[1300ms] ease-[var(--ease-museum)]"
          style={{
            transformOrigin: `${pos.x}% ${pos.y}%`,
            transform: hover ? "scale(1.7)" : "scale(1)",
          }}
        />
        <span className="pointer-events-none absolute bottom-4 right-4 z-10 label bg-ink-deep/60 px-2 py-1 text-bone-dim opacity-0 backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-100">
          Click to enlarge
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center bg-ink-deep/96 p-4 sm:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => setOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label={alt}
          >
            <button
              className="absolute right-5 top-5 z-10 label text-bone-muted transition-colors hover:text-bone"
              onClick={() => setOpen(false)}
            >
              Close &times;
            </button>
            <motion.div
              className="relative h-full w-full"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={src}
                alt={alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </motion.div>
            {caption && (
              <div className="pointer-events-none absolute inset-x-0 bottom-6 text-center">
                <span className="label text-bone-muted">{caption}</span>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
