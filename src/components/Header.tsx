"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { primaryNav, menuGroups, site } from "@/lib/site";
import { CartButton } from "@/components/cart/CartButton";
import { Logo } from "@/components/Logo";
import { hasLogoAsset } from "@/lib/data";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-700 ${
          scrolled || menuOpen
            ? "border-b border-[var(--hairline)] bg-ink/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[88rem] items-center justify-between gap-6 px-5 py-4 sm:px-8">
          <Link href="/" className="group flex items-center gap-3" aria-label="Roi Roiter, home">
            {hasLogoAsset() ? (
              <Image
                src="/art/roiter-logo.png"
                alt=""
                width={32}
                height={32}
                className="h-8 w-8 invert transition-opacity group-hover:opacity-80"
              />
            ) : (
              <Logo className="h-8 w-8 text-bone transition-colors duration-500 group-hover:text-gold" />
            )}
            <span className="font-display text-xl text-bone transition-colors group-hover:text-gold sm:text-2xl">
              Roi&nbsp;Roiter
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`label transition-colors duration-300 hover:text-bone ${
                  isActive(pathname, item.href) ? "text-gold" : "text-bone-muted"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <CartButton className="hidden sm:inline-flex" />
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="label inline-flex items-center gap-2 text-bone transition-colors hover:text-gold"
              aria-expanded={menuOpen}
              aria-label="Open the index"
            >
              <span className="flex flex-col gap-[3px]" aria-hidden>
                <span className="h-px w-5 bg-current" />
                <span className="h-px w-5 bg-current" />
                <span className="h-px w-3 bg-current" />
              </span>
              Index
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="texture-paper min-h-full border-b border-[var(--hairline-gold)]">
              <div className="mx-auto max-w-[88rem] px-5 pb-16 pt-28 sm:px-8 sm:pt-32">
                <div className="grid gap-12 lg:grid-cols-[1.1fr_2fr]">
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.05 }}
                  >
                    <div className="label label-gold">The Index</div>
                    <p className="deco-quote mt-5 max-w-md text-3xl leading-snug text-bone sm:text-4xl">
                      {site.heroLine}
                    </p>
                    <div className="mt-8 space-y-1.5 text-sm text-bone-muted">
                      <a
                        href={`mailto:${site.email}`}
                        className="link-underline block"
                      >
                        {site.email}
                      </a>
                      <p>{site.location}</p>
                    </div>
                  </motion.div>

                  <div className="grid gap-10 sm:grid-cols-3">
                    {menuGroups.map((group, gi) => (
                      <motion.div
                        key={group.title}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 + gi * 0.08 }}
                      >
                        <div className="label mb-4 text-bone-muted">{group.title}</div>
                        <ul className="space-y-3.5">
                          {group.items.map((item) => (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                className="group block"
                              >
                                <span className="font-display text-xl text-bone transition-colors duration-300 group-hover:text-gold sm:text-2xl">
                                  {item.label}
                                </span>
                                {item.note && (
                                  <span className="mt-0.5 block text-xs text-bone-muted">
                                    {item.note}
                                  </span>
                                )}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
