"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";
import { getImageMeta } from "@/lib/data";
import { site } from "@/lib/site";
import { Container } from "@/components/Page";
import { Arrow } from "@/components/ui";

const ctas = [
  { label: "Gallery", href: "/gallery", solid: true },
  { label: "Available", href: "/available", solid: false },
  { label: "Faces", href: "/index-of-faces", solid: false },
];

export function Hero({
  image,
  alt,
  focus = { x: 50, y: 45 },
}: {
  image?: string;
  alt?: string;
  focus?: { x: number; y: number };
}) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const contentFade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const meta = image ? getImageMeta(image) : null;

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] w-full flex-col justify-end overflow-hidden bg-ink"
    >
      {image && (
        <motion.div className="absolute inset-0" style={reduce ? undefined : { y }}>
          <motion.div
            className="absolute inset-0"
            style={{ transformOrigin: `${focus.x}% ${focus.y}%` }}
            initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1.05 }}
            transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={`/art/${image}`}
              alt={alt ?? "Roi Roiter"}
              fill
              priority
              sizes="100vw"
              placeholder={meta?.blur ? "blur" : "empty"}
              blurDataURL={meta?.blur || undefined}
              className="object-cover"
              style={{ objectPosition: `${focus.x}% ${focus.y}%` }}
            />
          </motion.div>
        </motion.div>
      )}

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/60"
      />

      <motion.div
        className="relative z-10 pb-[14vh] pt-36"
        style={reduce ? undefined : { y: contentY, opacity: contentFade }}
      >
        <Container>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="max-w-3xl font-display text-4xl leading-tight text-bone sm:text-6xl">
              {site.heroLine}
            </h1>
            <div className="mt-8 flex flex-wrap gap-3">
              {ctas.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className={`btn ${c.solid ? "btn-solid" : ""}`}
                >
                  {c.label}
                  <Arrow />
                </Link>
              ))}
            </div>
          </motion.div>
        </Container>
      </motion.div>
    </section>
  );
}
