"use client";

import { useState } from "react";

export function InquiryForm({
  workTitle,
  quickActions,
  className = "",
}: {
  workTitle?: string;
  quickActions?: string[];
  className?: string;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function applyAction(action: string) {
    const subject = workTitle ? ` regarding \u201c${workTitle}\u201d` : "";
    setMessage(`I would like to ${action.toLowerCase()}${subject}. `);
    const el = document.getElementById("inquiry-message");
    el?.focus();
  }

  if (sent) {
    return (
      <div className={`border border-[var(--hairline-gold)] p-7 ${className}`}>
        <p className="deco-quote text-2xl text-bone">Your message is on its way.</p>
        <p className="prose-serif mt-3 text-base">
          The studio answers personally, usually within a few days. Thank you for
          looking closely.
        </p>
      </div>
    );
  }

  return (
    <form
      className={className}
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      {quickActions && quickActions.length > 0 && (
        <div className="mb-6 flex flex-wrap gap-2">
          {quickActions.map((a) => (
            <button
              key={a}
              type="button"
              onClick={() => applyAction(a)}
              className="label border border-[var(--hairline)] px-3 py-2 text-bone-muted transition-colors hover:border-gold hover:text-bone"
            >
              {a}
            </button>
          ))}
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          aria-label="Name"
          className="w-full border border-[var(--hairline)] bg-ink/40 px-4 py-3 text-sm text-bone outline-none transition-colors placeholder:text-bone-muted/70 focus:border-gold"
        />
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          aria-label="Email"
          className="w-full border border-[var(--hairline)] bg-ink/40 px-4 py-3 text-sm text-bone outline-none transition-colors placeholder:text-bone-muted/70 focus:border-gold"
        />
      </div>
      <textarea
        id="inquiry-message"
        required
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={5}
        placeholder={
          workTitle
            ? `Your message about \u201c${workTitle}\u201d\u2026`
            : "Tell the studio what you are looking for\u2026"
        }
        aria-label="Message"
        className="mt-4 w-full resize-none border border-[var(--hairline)] bg-ink/40 px-4 py-3 text-sm leading-relaxed text-bone outline-none transition-colors placeholder:text-bone-muted/70 focus:border-gold"
      />
      <div className="mt-5 flex flex-wrap items-center gap-4">
        <button type="submit" className="btn btn-solid">
          Send to the studio
        </button>
        <p className="text-xs text-bone-muted">
          A private message, answered personally. No mailing list, no automation.
        </p>
      </div>
    </form>
  );
}
