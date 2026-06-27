"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function MagnifierCursor() {
  const x = useMotionValue(-120);
  const y = useMotionValue(-120);
  const sx = useSpring(x, { stiffness: 520, damping: 42, mass: 0.42 });
  const sy = useSpring(y, { stiffness: 520, damping: 42, mass: 0.42 });
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);

  const activeRef = useRef(false);
  const visibleRef = useRef(false);

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches
    ) {
      return;
    }

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visibleRef.current) {
        visibleRef.current = true;
        setVisible(true);
      }
      const target = e.target as Element | null;
      const over = !!target?.closest?.("[data-magnify]");
      if (over !== activeRef.current) {
        activeRef.current = over;
        setActive(over);
      }
    };
    const onLeave = () => {
      visibleRef.current = false;
      setVisible(false);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="magnifier"
      data-active={active}
      style={{ x: sx, y: sy, opacity: visible ? 1 : 0 }}
    />
  );
}
