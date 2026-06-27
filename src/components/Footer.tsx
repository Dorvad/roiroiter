import Link from "next/link";
import { menuGroups, site } from "@/lib/site";
import { CollectorSignup } from "@/components/CollectorSignup";
import { Hairline } from "@/components/ui";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-[var(--hairline)]">
      <div className="mx-auto max-w-[88rem] px-5 py-20 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_1.8fr]">
          <div>
            <CollectorSignup variant="full" />
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {menuGroups.map((group) => (
              <div key={group.title}>
                <div className="label mb-4 text-bone-muted">{group.title}</div>
                <ul className="space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-bone-dim transition-colors hover:text-gold"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Hairline className="my-12" />

        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Link
              href="/"
              className="group inline-flex items-center gap-3"
              aria-label="Roi Roiter, home"
            >
              <Logo className="h-9 w-9 text-bone transition-colors duration-500 group-hover:text-gold" />
              <span className="font-display text-3xl text-bone transition-colors duration-500 group-hover:text-gold">
                Roi Roiter
              </span>
            </Link>
            <p className="prose-serif mt-4 max-w-md text-base text-bone-muted">
              {site.tagline}. A private museum of painted dreams and carved
              faces, kept by one person, at night.
            </p>
          </div>
          <div className="space-y-1.5 text-sm text-bone-muted sm:text-right">
            <a href={`mailto:${site.email}`} className="block link-underline">
              {site.email}
            </a>
            <p>{site.location}</p>
            <p className="label mt-4 text-bone-muted/70">
              &copy; {new Date().getFullYear()} Roi Roiter
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
