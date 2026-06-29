"use client";

import { useState } from "react";

/**
 * Collector-list signup. `compact` is the single-field row used on the home
 * page; the full variant (name / email / note) is used on the contact page.
 */
export function CollectorSignup({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <p
        className="serif"
        style={{
          margin: compact ? "30px auto 0" : "26px 0 0",
          maxWidth: compact ? 460 : undefined,
          fontSize: compact ? "1.15rem" : "1.2rem",
          lineHeight: 1.6,
          fontStyle: "italic",
          color: compact ? "rgba(217,189,132,.92)" : "rgba(217,189,132,.95)",
        }}
      >
        {compact
          ? "You are on the list. Welcome to the quiet side of the studio."
          : "You are on the list. Welcome to the quiet side of the studio — you will hear from Roi before anyone else does."}
      </p>
    );
  }

  if (compact) {
    return (
      <>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          style={{
            margin: "34px auto 0",
            maxWidth: 480,
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
          }}
        >
          <input
            required
            type="email"
            placeholder="Your email"
            className="field"
            style={{ flex: 1, minWidth: 200 }}
          />
          <button type="submit" className="btn btn-gold" style={{ whiteSpace: "nowrap" }}>
            Request Entry
          </button>
        </form>
        <div
          className="mono"
          style={{
            marginTop: 14,
            fontSize: 10.5,
            lineHeight: 1.5,
            letterSpacing: ".08em",
            color: "rgba(168,156,137,.5)",
          }}
        >
          No marketing. You may leave the circle at any time.
        </div>
      </>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      style={{ marginTop: 26, display: "flex", flexDirection: "column", gap: 11 }}
    >
      <input placeholder="Your name" className="field" />
      <input required type="email" placeholder="Email" className="field" />
      <textarea
        rows={3}
        placeholder="A note, if you like — what drew you in, or a piece you have your eye on"
        className="field"
        style={{ resize: "vertical" }}
      />
      <button type="submit" className="btn btn-gold" style={{ marginTop: 4, width: "100%" }}>
        Request Entry
      </button>
    </form>
  );
}
