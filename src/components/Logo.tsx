/**
 * Roi Roiter's monogram: a mirrored "R" + "R" that lock together into an
 * H-like ligature. Drawn as uniform strokes so it inherits `currentColor`
 * and scales cleanly at any size.
 */
export function Logo({
  className = "",
  title = "Roi Roiter",
  strokeWidth = 12,
}: {
  className?: string;
  title?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      role="img"
      aria-label={title}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="butt"
      strokeLinejoin="round"
    >
      {/* right-hand R */}
      <path d="M59 15 L59 87" />
      <path d="M59 15 A20 20 0 0 1 59 55" />
      <path d="M59 55 L78 87" />
      {/* left-hand mirrored R */}
      <path d="M41 15 L41 87" />
      <path d="M41 15 A20 20 0 0 0 41 55" />
      <path d="M41 55 L22 87" />
      {/* the shared crossbar */}
      <path d="M41 55 L59 55" />
    </svg>
  );
}
