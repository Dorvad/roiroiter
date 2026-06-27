import type { ReactNode } from "react";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Kicker, Arrow } from "@/components/ui";

export function Container({
  children,
  className = "",
  size = "wide",
}: {
  children: ReactNode;
  className?: string;
  size?: "wide" | "prose";
}) {
  const max = size === "prose" ? "max-w-3xl" : "max-w-[88rem]";
  return (
    <div className={`mx-auto ${max} px-5 sm:px-8 ${className}`}>{children}</div>
  );
}

export function PageHeader({
  kicker,
  title,
  intro,
  aside,
  align = "left",
}: {
  kicker: string;
  title: ReactNode;
  intro?: ReactNode;
  aside?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <Container className="pt-32 sm:pt-40">
      <Reveal>
        <div
          className={`flex flex-col gap-10 ${
            align === "center"
              ? "items-center text-center"
              : aside
                ? "lg:flex-row lg:items-end lg:justify-between"
                : ""
          }`}
        >
          <div className={align === "center" ? "max-w-3xl" : "max-w-3xl"}>
            <Kicker gold>{kicker}</Kicker>
            <h1 className="mt-5 font-display text-[2.6rem] leading-[1.02] text-bone sm:text-6xl">
              {title}
            </h1>
            {intro && (
              <div className="prose-serif mt-7 text-xl">{intro}</div>
            )}
          </div>
          {aside && <div className="shrink-0">{aside}</div>}
        </div>
      </Reveal>
    </Container>
  );
}

export function SectionHead({
  kicker,
  title,
  children,
  href,
  hrefLabel,
  className = "",
}: {
  kicker: string;
  title: ReactNode;
  children?: ReactNode;
  href?: string;
  hrefLabel?: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col gap-6 md:flex-row md:items-end md:justify-between ${className}`}
    >
      <div className="max-w-2xl">
        <Kicker gold>{kicker}</Kicker>
        <h2 className="mt-4 font-display text-4xl leading-tight text-bone sm:text-5xl">
          {title}
        </h2>
        {children && <div className="prose-serif mt-5 text-lg">{children}</div>}
      </div>
      {href && hrefLabel && (
        <Link
          href={href}
          className="group label label-gold inline-flex shrink-0 items-center gap-2"
        >
          {hrefLabel}
          <Arrow className="transition-transform duration-500 group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  );
}
