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
  { label: "Enter the Gallery", href: "/gallery", solid: true },
  { label: "View Available Works", href: "/available", solid: false },
  { label: "Explore the Carved Archive", href: "/carved-archive", solid: false },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const contentFade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const meta = getImageMeta("hero-face.jpg");

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] w-full flex-col justify-end overflow-hidden"
    >
      <motion.div className="absolute inset-0" style={reduce ? undefined : { y }}>
        <motion.div
          className="absolute inset-0"
          style={{ transformOrigin: "54% 34%" }}
          initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 1.32 }}
          animate={{ opacity: 1, scale: 1.18 }}
          transition={{ duration: 2.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/art/hero-face.jpg"
            alt="Detail of a gilded surreal face emerging from darkness"
            fill
            priority
            sizes="100vw"
            placeholder={meta.blur ? "blur" : "empty"}
            blurDataURL={meta.blur || undefined}
            className="object-cover"
            style={{ objectPosition: "54% 34%" }}
          />
        </motion.div>
      </motion.div>

      {/* legibility */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/55"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 70% 35%, rgba(12,10,8,0) 30%, rgba(7,5,4,0.7) 100%)",
        }}
      />

      <motion.div
        className="relative z-10 pb-[15vh] pt-40"
        style={reduce ? undefined : { y: contentY, opacity: contentFade }}
      >
        <Container>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.4, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="label label-gold">
              Roi Roiter &middot; Paintings &amp; Carved Objects
            </div>
            <h1 className="mt-6 max-w-4xl font-display text-[2.7rem] font-light leading-[1.04] text-bone sm:text-6xl lg:text-[4.6rem]">
              {site.heroLine}
            </h1>

            <div className="mt-10 flex flex-wrap gap-3">
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

      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-6 z-10 flex flex-col items-center gap-2"
        style={reduce ? undefined : { opacity: contentFade }}
      >
        <span className="label text-bone-muted/80">Scroll into the dark</span>
        <motion.span
          className="block h-10 w-px bg-gradient-to-b from-[var(--hairline-gold)] to-transparent"
          animate={reduce ? undefined : { scaleY: [0.3, 1, 0.3], opacity: [0.3, 1, 0.3] }}
          style={{ transformOrigin: "top" }}
          transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
