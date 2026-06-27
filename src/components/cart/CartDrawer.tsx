"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useCart } from "@/components/cart/CartProvider";
import { formatPrice, getImageMeta } from "@/lib/data";

export function CartDrawer() {
  const { isOpen, close, lines, total, remove, setQty, clear } = useCart();
  const [stage, setStage] = useState<"cart" | "form" | "done">("cart");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setStage(lines.length ? "cart" : "cart");
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, lines.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, close]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[80]"
          initial="hidden"
          animate="show"
          exit="hidden"
          aria-modal="true"
          role="dialog"
        >
          <motion.div
            className="absolute inset-0 bg-ink-deep/80 backdrop-blur-[2px]"
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
            transition={{ duration: 0.6 }}
            onClick={close}
          />
          <motion.aside
            className="texture-paper absolute right-0 top-0 flex h-full w-full max-w-[26rem] flex-col border-l border-[var(--hairline-gold)] shadow-relic"
            variants={{
              hidden: { x: "100%" },
              show: { x: 0 },
            }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between border-b border-[var(--hairline)] px-6 py-5">
              <div>
                <div className="label label-gold">Acquisitions</div>
                <h2 className="mt-1 font-display text-2xl">The Collector&rsquo;s Tray</h2>
              </div>
              <button
                onClick={close}
                className="label text-bone-muted transition-colors hover:text-bone"
                aria-label="Close tray"
              >
                Close
              </button>
            </div>

            {stage === "done" ? (
              <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
                <p className="font-display text-3xl text-bone">Noted.</p>
                <p className="prose-serif mt-4 text-base">
                  Your reservation has reached the studio. You&rsquo;ll receive a
                  secure payment link, packing details, and a certificate of
                  authenticity by post.
                </p>
                <button onClick={close} className="btn mt-8">
                  Return to the rooms
                </button>
              </div>
            ) : lines.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
                <p className="prose-serif text-base text-bone-muted">
                  The tray is empty. Editions and small objects you reserve will
                  rest here until you send word to the studio.
                </p>
              </div>
            ) : (
              <>
                <div className="no-scrollbar flex-1 space-y-5 overflow-y-auto px-6 py-6">
                  {lines.map((l) => {
                    const meta = getImageMeta(l.image);
                    return (
                      <div key={l.key} className="flex gap-4">
                        <div className="frame relative h-20 w-20 shrink-0">
                          <Image
                            src={`/art/${l.image}`}
                            alt={l.title}
                            fill
                            sizes="80px"
                            placeholder={meta.blur ? "blur" : "empty"}
                            blurDataURL={meta.blur || undefined}
                            className="object-cover"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="font-display text-lg leading-tight">
                            {l.title}
                          </div>
                          <div className="label mt-1 text-bone-muted">{l.kind}</div>
                          <div className="mt-1 text-sm text-bone-dim">
                            {l.variantLabel}
                            {l.frameLabel ? ` \u00b7 ${l.frameLabel}` : ""}
                          </div>
                          <div className="mt-2 flex items-center justify-between">
                            <div className="flex items-center border border-[var(--hairline)]">
                              <button
                                className="px-2.5 py-1 text-bone-muted hover:text-bone"
                                onClick={() => setQty(l.key, l.qty - 1)}
                                aria-label="Decrease quantity"
                              >
                                &minus;
                              </button>
                              <span className="tabular w-7 text-center text-sm">
                                {l.qty}
                              </span>
                              <button
                                className="px-2.5 py-1 text-bone-muted hover:text-bone"
                                onClick={() => setQty(l.key, l.qty + 1)}
                                aria-label="Increase quantity"
                              >
                                +
                              </button>
                            </div>
                            <div className="tabular text-sm text-bone">
                              {formatPrice(l.unitPrice * l.qty)}
                            </div>
                          </div>
                          <button
                            onClick={() => remove(l.key)}
                            className="mt-2 text-xs uppercase tracking-widest text-bone-muted underline-offset-4 hover:text-red hover:underline"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="border-t border-[var(--hairline)] px-6 py-5">
                  <div className="flex items-baseline justify-between">
                    <span className="label">Subtotal</span>
                    <span className="tabular font-display text-2xl text-bone">
                      {formatPrice(total)}
                    </span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-bone-muted">
                    Editions and small objects only. Shipping, framing, and any
                    duties are confirmed by the studio before payment.
                  </p>

                  {stage === "cart" ? (
                    <button
                      className="btn btn-solid mt-4 w-full justify-center"
                      onClick={() => setStage("form")}
                    >
                      Reserve &amp; request payment link
                    </button>
                  ) : (
                    <form
                      className="mt-4 space-y-3"
                      onSubmit={(e) => {
                        e.preventDefault();
                        setStage("done");
                        clear();
                      }}
                    >
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email"
                        className="w-full border border-[var(--hairline)] bg-ink/60 px-4 py-3 text-sm text-bone outline-none transition-colors focus:border-gold"
                      />
                      <button className="btn btn-solid w-full justify-center" type="submit">
                        Send reservation to the studio
                      </button>
                    </form>
                  )}
                </div>
              </>
            )}
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
