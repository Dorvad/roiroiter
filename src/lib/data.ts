import meta from "./image-meta.json";

export type RoomId = "face" | "body" | "beast" | "absurd";
export type SymbolId =
  | "face"
  | "mask"
  | "animal"
  | "body"
  | "hand"
  | "desert"
  | "machine"
  | "sleep"
  | "absurdity"
  | "ritual";
export type MediumType = "painting" | "drawing";
export type Status = "Available" | "Sold" | "Private Collection" | "Inquiry";

export interface Crop {
  label: string;
  x: number;
  y: number;
  zoom: number;
}

export interface Artwork {
  id: string;
  title: string;
  year: number;
  medium: string;
  type: MediumType;
  dimensions: string;
  status: Status;
  room: RoomId;
  symbols: SymbolId[];
  image: string;
  poetic?: string;
  note?: string;
  price?: number | null;
  details?: Crop[];
  face?: Crop;
  featured?: boolean;
  hero?: boolean;
}

export interface ImageMeta {
  w: number;
  h: number;
  blur: string;
}

const imageMeta = meta as Record<string, ImageMeta>;
const metaKey = (image: string) => image.replace(/\.[^/.]+$/, "");

export function getImageMeta(image: string): ImageMeta {
  return imageMeta[metaKey(image)] ?? { w: 1200, h: 1600, blur: "" };
}

export const hasImageAsset = (image: string) => metaKey(image) in imageMeta;

export interface Room {
  id: RoomId;
  name: string;
  href: string;
  subtitle: string;
  image: string;
  focus: { x: number; y: number; zoom: number };
}

export const rooms: Room[] = [
  {
    id: "face",
    name: "The Face Room",
    href: "/gallery/face",
    subtitle: "Faces & masks",
    image: "roiter-faces.jpg",
    focus: { x: 50, y: 45, zoom: 1.1 },
  },
  {
    id: "body",
    name: "The Body Room",
    href: "/gallery/body",
    subtitle: "Bodies & fragments",
    image: "roiter-torso.jpg",
    focus: { x: 50, y: 42, zoom: 1.15 },
  },
  {
    id: "beast",
    name: "The Beast Room",
    href: "/gallery/beast",
    subtitle: "Animals",
    image: "roiter-jungle-cat.jpg",
    focus: { x: 50, y: 38, zoom: 1.2 },
  },
  {
    id: "absurd",
    name: "The Absurd Room",
    href: "/gallery/absurd",
    subtitle: "Strange scale & scenes",
    image: "roiter-annunciation-in-the-desert.jpg",
    focus: { x: 50, y: 35, zoom: 1.1 },
  },
];

export interface Symbol {
  id: SymbolId;
  name: string;
}

export const symbols: Symbol[] = [
  { id: "face", name: "Face" },
  { id: "mask", name: "Mask" },
  { id: "animal", name: "Animal" },
  { id: "body", name: "Body" },
  { id: "hand", name: "Hand" },
  { id: "desert", name: "Desert" },
  { id: "machine", name: "Machine" },
  { id: "sleep", name: "Sleep" },
  { id: "absurdity", name: "Absurdity" },
  { id: "ritual", name: "Ritual" },
];

export const symbolById = (id: SymbolId) => symbols.find((s) => s.id === id)!;

/** Real works only — drop matching files into public/art/ then run npm run art:meta */
const allArtworks: Artwork[] = [
  {
    id: "lady-with-an-ermine",
    title: "Lady with an Ermine (after Leonardo)",
    year: 2023,
    medium: "Oil on canvas",
    type: "painting",
    dimensions: "100 × 70 cm",
    status: "Available",
    room: "face",
    symbols: ["face", "mask", "animal"],
    image: "roiter-lady-with-an-ermine.jpg",
    poetic: "Leonardo’s lady, a death mask, and a small beast with the artist’s face.",
    price: null,
    featured: true,
    hero: true,
    face: { label: "The Lady", x: 50, y: 28, zoom: 1.5 },
    details: [
      { label: "Death mask", x: 50, y: 28, zoom: 2.0 },
      { label: "The ermine", x: 50, y: 62, zoom: 2.2 },
    ],
  },
  {
    id: "annunciation-in-the-desert",
    title: "Annunciation in the Desert",
    year: 2024,
    medium: "Oil on canvas",
    type: "painting",
    dimensions: "150 × 100 cm",
    status: "Available",
    room: "absurd",
    symbols: ["absurdity", "animal", "hand", "body", "desert", "machine", "sleep"],
    image: "roiter-annunciation-in-the-desert.jpg",
    poetic: "A giant arm, a black beast, a sleeper, a salesman with a dead machine.",
    price: null,
    featured: true,
    face: { label: "Sleeper", x: 22, y: 82, zoom: 2.0 },
    details: [
      { label: "The arm", x: 33, y: 46, zoom: 1.8 },
      { label: "The beast", x: 56, y: 12, zoom: 2.0 },
    ],
  },
  {
    id: "faces",
    title: "Faces",
    year: 2024,
    medium: "Ink & marker on paper",
    type: "drawing",
    dimensions: "A4 sketchbook",
    status: "Available",
    room: "face",
    symbols: ["face", "mask"],
    image: "roiter-faces.jpg",
    poetic: "A page of heads, crowded and watching.",
    price: null,
    featured: true,
    face: { label: "Pink head", x: 50, y: 32, zoom: 1.6 },
  },
  {
    id: "demon-and-candle",
    title: "Demon & Candle",
    year: 2024,
    medium: "Ink & marker on paper",
    type: "drawing",
    dimensions: "A4 sketchbook",
    status: "Available",
    room: "face",
    symbols: ["face", "mask", "ritual"],
    image: "roiter-demon-candle.jpg",
    price: null,
    face: { label: "Demon", x: 50, y: 38, zoom: 1.5 },
  },
  {
    id: "jungle-cat",
    title: "Jungle Cat",
    year: 2024,
    medium: "Ink & marker on paper",
    type: "drawing",
    dimensions: "A4 sketchbook",
    status: "Available",
    room: "beast",
    symbols: ["animal"],
    image: "roiter-jungle-cat.jpg",
    price: null,
    face: { label: "Cat", x: 50, y: 40, zoom: 1.6 },
  },
  {
    id: "owl",
    title: "Owl",
    year: 2024,
    medium: "Ink & marker on paper",
    type: "drawing",
    dimensions: "A4 sketchbook",
    status: "Available",
    room: "beast",
    symbols: ["animal", "ritual"],
    image: "roiter-owl.jpg",
    price: null,
    face: { label: "Owl", x: 50, y: 42, zoom: 1.4 },
  },
  {
    id: "torso",
    title: "Torso",
    year: 2024,
    medium: "Ink & marker on paper",
    type: "drawing",
    dimensions: "A4 sketchbook",
    status: "Available",
    room: "body",
    symbols: ["body"],
    image: "roiter-torso.jpg",
    price: null,
  },
];

export const artworks: Artwork[] = allArtworks.filter((a) =>
  hasImageAsset(a.image),
);

/** All catalog ids — used to prerender routes before images are uploaded */
export const catalogArtworkIds = () => allArtworks.map((a) => a.id);

export const artworkById = (id: string) => artworks.find((a) => a.id === id);

export const artworksByRoom = (room: RoomId) =>
  artworks.filter((a) => a.room === room);

export const artworksBySymbol = (sym: SymbolId) =>
  artworks.filter((a) => a.symbols.includes(sym));

export const availableArtworks = () =>
  artworks.filter((a) => a.status === "Available" || a.status === "Inquiry");

export const faces = () =>
  artworks.filter((a) => a.face) as (Artwork & { face: Crop })[];

export const featuredArtworks = () =>
  artworks.filter((a) => a.featured);

export const heroArtwork = () =>
  artworks.find((a) => a.hero) ?? artworks[0] ?? null;

export const symbolCount = (sym: SymbolId) => artworksBySymbol(sym).length;

export const roomById = (id: RoomId) => {
  const base = rooms.find((r) => r.id === id)!;
  const first = artworksByRoom(id)[0];
  if (!first) return base;
  return { ...base, image: first.image };
};

export const activeRooms = () =>
  rooms.filter((r) => artworksByRoom(r.id).length > 0);

export function relatedArtworks(art: Artwork, limit = 3): Artwork[] {
  return artworks
    .filter((a) => a.id !== art.id && a.room === art.room)
    .slice(0, limit);
}

export const statusLabel: Record<Status, string> = {
  Available: "Available",
  Sold: "Sold",
  "Private Collection": "Private Collection",
  Inquiry: "Inquiry",
};

export function priceLabel(art: Artwork): string {
  if (art.status === "Sold") return "Sold";
  if (art.status === "Private Collection") return "Private Collection";
  if (art.price == null) return "Price on request";
  return formatPrice(art.price);
}

export function formatPrice(eur: number): string {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(eur);
}

export const hasLogoAsset = () => hasImageAsset("roiter-logo.png");
