export const site = {
  name: "Roi Roiter",
  tagline: "Paintings & drawings",
  heroLine: "Faces, beasts, and bodies.",
  manifesto: "Surreal paintings and drawings.",
  email: "studio@roiroiter.art",
  location: "Studio visits by appointment",
  instagram: "roiroiter",
  url: "https://dorvad.github.io/roiroiter",
};

export type NavItem = { label: string; href: string; note?: string };

export const primaryNav: NavItem[] = [
  { label: "Gallery", href: "/gallery" },
  { label: "Available", href: "/available" },
  { label: "Faces", href: "/index-of-faces" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const menuGroups: { title: string; items: NavItem[] }[] = [
  {
    title: "Gallery",
    items: [
      { label: "All rooms", href: "/gallery" },
      { label: "The Face Room", href: "/gallery/face" },
      { label: "The Body Room", href: "/gallery/body" },
      { label: "The Beast Room", href: "/gallery/beast" },
      { label: "The Absurd Room", href: "/gallery/absurd" },
    ],
  },
  {
    title: "More",
    items: [
      { label: "Index of Faces", href: "/index-of-faces" },
      { label: "Browse by Symbol", href: "/symbols" },
      { label: "The Cabinet", href: "/cabinet" },
      { label: "Available Works", href: "/available" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
];
