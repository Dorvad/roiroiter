"use client";

import { useState } from "react";

export function CollectorSignup({
  variant = "full",
}: {
  variant?: "full" | "compact";
}) {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  if (joined) {
    return (
      <div className={variant === "full" ? "max-w-xl" : ""}>
        <p className="deco-quote text-2xl text-bone">You are on the list.</p>
        <p className="prose-serif mt-3 text-base text-bone-dim">
          Thank you.
        </p>
      </div>
    );
  }

  return (
    <div className={variant === "full" ? "max-w-xl" : ""}>
      {variant === "full" && (
        <>
          <div className="label label-gold">The Collector List</div>
        <p className="prose-serif mt-4 text-base text-bone-dim">
          New works by email.
        </p>
        </>
      )}
      <form
        className="mt-6 flex flex-col gap-3 sm:flex-row"
        onSubmit={(e) => {
          e.preventDefault();
          if (email.trim()) setJoined(true);
        }}
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          aria-label="Your email"
          className="w-full flex-1 border-b border-[var(--hairline-gold)] bg-transparent px-1 py-3 text-bone placeholder:text-bone-muted/70 outline-none transition-colors focus:border-gold"
        />
        <button type="submit" className="btn whitespace-nowrap">
          Join the circle
        </button>
      </form>
    </div>
  );
}
