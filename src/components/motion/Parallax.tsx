"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";

export function Parallax({
  children,
  amount = 40,
  className,
  innerClassName,
}: {
  children: ReactNode;
  /** total drift in px across the viewport pass */
  amount?: number;
  className?: string;
  innerClassName?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [amount, -amount]);

  return (
    <div ref={ref} className={className}>
      <motion.div className={innerClassName} style={reduce ? undefined : { y }}>
        {children}
      </motion.div>
    </div>
  );
}
