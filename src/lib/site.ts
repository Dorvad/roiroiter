export const site = {
  name: "Roi Roiter",
  tagline: "A surreal private museum",
  heroLine: "Faces, bodies, beasts, and carved objects.",
  manifesto:
    "Drawn from a surreal private mythology — intimate, strange, and quietly theatrical.",
  email: "studio@roiroiter.art",
  emailCollect: "collect@roiroiter.art",
  location: "Studio by appointment, in person or by video.",
  url: "https://dorvad.github.io/roiroiter",
};

export type NavItem = { label: string; href: string; cta?: boolean };

/** Primary header / mobile-menu navigation. */
export const primaryNav: NavItem[] = [
  { label: "Gallery", href: "/gallery" },
  { label: "Index of Faces", href: "/index-of-faces" },
  { label: "The Cabinet", href: "/cabinet" },
  { label: "Available", href: "/available" },
  { label: "Studio Notes", href: "/studio-notes" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact", cta: true },
];

export const footerWander: NavItem[] = [
  { label: "The Gallery", href: "/gallery" },
  { label: "Index of Faces", href: "/index-of-faces" },
  { label: "The Cabinet", href: "/cabinet" },
  { label: "Available Works", href: "/available" },
];

export const footerStudio: NavItem[] = [
  { label: "Studio Notes", href: "/studio-notes" },
  { label: "About Roi Roiter", href: "/about" },
  { label: "Contact / Collector List", href: "/contact" },
];
