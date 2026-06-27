"use client";

import { useState } from "react";
import Link from "next/link";
import { Art } from "@/components/Art";

export interface CabinetItem {
  title: string;
  image: string;
  focus?: { x: number; y: number; zoom: number };
  caption?: string;
  status?: string;
  href?: string;
}

export interface CabinetDrawerData {
  id: string;
  label: string;
  note: string;
  items: CabinetItem[];
}

function DrawerItem({ item }: { item: CabinetItem }) {
  const inner = (
    <>
      <div data-magnify={item.href ? "" : undefined}>
        <Art
          image={item.image}
          alt={item.title}
          ratio="1/1"
          crop={item.focus}
          focus={item.focus ? undefined : { x: 50, y: 48 }}
          zoomable={!!item.href}
          sizes="(min-width: 1024px) 18vw, (min-width: 640px) 30vw, 45vw"
        />
      </div>
      <div className="mt-3">
        <div className="font-display text-lg leading-tight text-bone transition-colors group-hover:text-gold">
          {item.title}
        </div>
        {item.caption && (
          <div className="mt-1 text-xs text-bone-muted">{item.caption}</div>
        )}
        {item.status && (
          <div className="label mt-1.5 text-bone-muted">{item.status}</div>
        )}
      </div>
    </>
  );

  if (item.href) {
    return (
      <Link href={item.href} className="group block">
        {inner}
      </Link>
    );
  }
  return <div className="group block">{inner}</div>;
}

export function CabinetDrawers({ drawers }: { drawers: CabinetDrawerData[] }) {
  const [open, setOpen] = useState<Record<string, boolean>>({
    [drawers[0]?.id]: true,
  });

  return (
    <div className="divide-y divide-[var(--hairline)] border-y border-[var(--hairline)]">
      {drawers.map((drawer, i) => {
        const isOpen = !!open[drawer.id];
        return (
          <div key={drawer.id} className={isOpen ? "drawer-open" : ""}>
            <button
              onClick={() =>
                setOpen((s) => ({ ...s, [drawer.id]: !s[drawer.id] }))
              }
              className="texture-wood group flex w-full items-center gap-5 px-5 py-5 text-left transition-transform duration-500 ease-[var(--ease-museum)] hover:translate-y-[2px] sm:px-7"
              aria-expanded={isOpen}
            >
              <span className="label tabular text-bone-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex-1">
                <span className="block font-display text-2xl text-bone sm:text-3xl">
                  {drawer.label}
                </span>
                <span className="mt-0.5 block text-sm text-bone-dim">
                  {drawer.note}
                </span>
              </span>
              {/* drawer handle */}
              <span
                aria-hidden
                className="hidden h-2 w-16 rounded-full bg-[rgba(0,0,0,0.4)] shadow-[inset_0_1px_0_rgba(196,186,168,0.15)] sm:block"
              />
              <span
                className="label shrink-0 text-gold"
                aria-hidden
              >
                {isOpen ? "Close" : "Open"}
              </span>
            </button>

            <div className="drawer-body bg-ink/40">
              <div>
                <div className="grid grid-cols-2 gap-x-5 gap-y-8 px-5 py-9 sm:grid-cols-3 sm:px-7 lg:grid-cols-4">
                  {drawer.items.map((item) => (
                    <DrawerItem key={item.title} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
