"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { getImageMeta } from "@/lib/data";
import { artSrc } from "@/lib/paths";

// Visible wall scene, in centimetres
const SCENE_H = 250;
const SCENE_W = 400; // container is 16:10, so 250 * 1.6
const PERSON_H = 175;
const HANG_CENTER = 150; // centre of the picture, cm from floor

function parseDims(dimensions: string): { h: number; w: number } {
  const nums = (dimensions.match(/\d+/g) ?? []).map(Number);
  return { h: nums[0] ?? 100, w: nums[1] ?? 80 };
}

export function WallMockup({
  image,
  alt,
  dimensions,
}: {
  image: string;
  alt: string;
  dimensions: string;
}) {
  const [open, setOpen] = useState(false);
  const meta = getImageMeta(image);
  const { h, w } = parseDims(dimensions);

  const picW = (w / SCENE_W) * 100;
  const picH = (h / SCENE_H) * 100;
  const picBottom = ((HANG_CENTER - h / 2) / SCENE_H) * 100;
  const personH = (PERSON_H / SCENE_H) * 100;
  const personW = (46 / SCENE_W) * 100;

  return (
    <div>
      <button
        onClick={() => setOpen((v) => !v)}
        className="label inline-flex items-center gap-2 text-bone-muted transition-colors hover:text-gold"
        aria-expanded={open}
      >
        <span className="h-px w-5 bg-current" />
        {open ? "Hide wall view" : "See it on a wall (to scale)"}
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div
              className="relative mt-5 w-full overflow-hidden rounded-[2px] border border-[var(--hairline)]"
              style={{
                aspectRatio: "16 / 10",
                background:
                  "linear-gradient(180deg, #211a14 0%, #1a140f 72%, #120d09 72%, #0d0907 100%)",
              }}
            >
              {/* floor line */}
              <div
                aria-hidden
                className="absolute inset-x-0"
                style={{ bottom: "28%", height: 1, background: "var(--hairline)" }}
              />
              {/* the picture, framed */}
              <div
                className="absolute left-[16%] frame shadow-relic"
                style={{
                  width: `${picW}%`,
                  height: `${picH}%`,
                  bottom: `calc(28% + ${picBottom}%)`,
                }}
              >
                <Image
                  src={artSrc(image)}
                  alt={alt}
                  fill
                  sizes="40vw"
                  placeholder={meta.blur ? "blur" : "empty"}
                  blurDataURL={meta.blur || undefined}
                  className="object-cover"
                />
              </div>
              {/* person silhouette for scale */}
              <div
                className="absolute"
                style={{
                  right: "16%",
                  bottom: "28%",
                  height: `${personH}%`,
                  width: `${personW}%`,
                }}
                aria-hidden
              >
                <svg
                  viewBox="0 0 40 175"
                  preserveAspectRatio="xMidYMax meet"
                  className="h-full w-full"
                >
                  <g fill="rgba(150,140,125,0.4)">
                    <circle cx="20" cy="16" r="11" />
                    <path d="M9 38 q11 -8 22 0 l3 64 q-3 6 -8 4 l-2 -40 -1 0 -1 64 q-1 5 -5 5 t-5 -5 l-1 -64 -1 0 -2 40 q-5 2 -8 -4 z" />
                  </g>
                </svg>
              </div>
              <div className="absolute left-3 top-3 label text-bone-muted/70">
                approx. scale &middot; figure 175 cm
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
