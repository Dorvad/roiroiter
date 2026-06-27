export const site = {
  name: "Roi Roiter",
  shortName: "Roi Roiter",
  tagline: "A surreal private mythology",
  heroLine:
    "Faces, bodies, beasts, and carved objects from a surreal private mythology.",
  manifesto:
    "Roi Roiter\u2019s work stages impossible encounters between faces, bodies, beasts, machines, wounds, and memory. His paintings and carved objects feel like fragments from a private mythology: intimate, strange, and quietly theatrical.",
  email: "studio@roiroiter.art",
  location: "The Studio \u2014 by appointment",
  instagram: "roiroiter",
  url: "https://roiroiter.art",
};

export type NavItem = { label: string; href: string; note?: string };

/** Primary links surfaced in the header bar. */
export const primaryNav: NavItem[] = [
  { label: "Gallery", href: "/gallery" },
  { label: "Available Works", href: "/available" },
  { label: "Carved Archive", href: "/carved-archive" },
  { label: "Studio Notes", href: "/studio-notes" },
  { label: "About", href: "/about" },
];

/** Grouped links for the full overlay menu + footer. */
export const menuGroups: { title: string; items: NavItem[] }[] = [
  {
    title: "The Rooms",
    items: [
      { label: "The Face Room", href: "/gallery/face" },
      { label: "The Body Room", href: "/gallery/body" },
      { label: "The Beast Room", href: "/gallery/beast" },
      { label: "The Ritual Room", href: "/gallery/ritual" },
      { label: "The Absurd Room", href: "/gallery/absurd" },
      { label: "The Carved Archive", href: "/carved-archive" },
    ],
  },
  {
    title: "Indexes",
    items: [
      { label: "Index of Faces", href: "/index-of-faces", note: "Recurring heads & masks" },
      { label: "Browse by Symbol", href: "/symbols", note: "Motifs & obsessions" },
      { label: "The Cabinet", href: "/cabinet", note: "Drawers of small works" },
    ],
  },
  {
    title: "Visit",
    items: [
      { label: "Available Works", href: "/available", note: "Private viewing room" },
      { label: "Studio Notes", href: "/studio-notes", note: "The practice, alive" },
      { label: "About Roi Roiter", href: "/about" },
      { label: "Contact / Collector List", href: "/contact" },
    ],
  },
];
