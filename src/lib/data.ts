import meta from "./image-meta.json";

export type RoomId = "face" | "body" | "beast" | "ritual" | "absurd" | "carved";
export type SymbolId =
  | "face"
  | "mask"
  | "animal"
  | "hand"
  | "wound"
  | "body"
  | "machine"
  | "desert"
  | "sleep"
  | "death"
  | "wood"
  | "ritual"
  | "absurdity";
export type MediumType = "painting" | "carving" | "drawing" | "object";
export type Status = "Available" | "Sold" | "Private Collection" | "Inquiry";

export interface Crop {
  label: string;
  /** focal point as percentage 0-100 */
  x: number;
  y: number;
  /** scale used to zoom into the source image */
  zoom: number;
}

export interface EditionVariant {
  id: string;
  size: string;
  edition: string;
  price: number;
}

export interface FrameOption {
  id: string;
  label: string;
  price: number;
}

export interface Edition {
  kind: string;
  blurb: string;
  variants: EditionVariant[];
  frames?: FrameOption[];
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
  poetic: string;
  note?: string;
  /** numeric price in EUR, or null for "price on request" */
  price?: number | null;
  details: Crop[];
  /** focal crop used by the Index of Faces, when the work carries a face */
  face?: Crop;
  edition?: Edition;
  featured?: boolean;
}

export interface ImageMeta {
  w: number;
  h: number;
  blur: string;
}

const imageMeta = meta as Record<string, ImageMeta>;

export function getImageMeta(image: string): ImageMeta {
  return (
    imageMeta[image] ?? { w: 1536, h: 1024, blur: "" }
  );
}

/* ------------------------------------------------------------------ */
/* Rooms                                                              */
/* ------------------------------------------------------------------ */

export interface Room {
  id: RoomId;
  name: string;
  href: string;
  subtitle: string;
  blurb: string;
  /** the detail used as the room's cinematic card */
  image: string;
  focus: { x: number; y: number; zoom: number };
}

export const rooms: Room[] = [
  {
    id: "face",
    name: "The Face Room",
    href: "/gallery/face",
    subtitle: "Faces, masks, distorted expressions",
    blurb:
      "Painted and carved faces, ritual masks, skull-like portraits, expressions caught between recognition and disguise.",
    image: "hero-face.jpg",
    focus: { x: 54, y: 34, zoom: 1.35 },
  },
  {
    id: "body",
    name: "The Body Room",
    href: "/gallery/body",
    subtitle: "Hands, sleep, strange anatomy",
    blurb:
      "Hands that remember, sleeping figures, bodies that drift into landscape, tender repairs and quiet anatomy.",
    image: "body-sleeper-hill.jpg",
    focus: { x: 50, y: 52, zoom: 1.2 },
  },
  {
    id: "beast",
    name: "The Beast Room",
    href: "/gallery/beast",
    subtitle: "Animals, claws, instinct, protection",
    blurb:
      "Animals and hybrids, claws and borrowed teeth \u2014 figures of instinct, danger, and unexpected tenderness.",
    image: "beast-guardian.jpg",
    focus: { x: 50, y: 30, zoom: 1.25 },
  },
  {
    id: "ritual",
    name: "The Ritual Room",
    href: "/gallery/ritual",
    subtitle: "Icons, offerings, ceremony",
    blurb:
      "Works that feel religious, ceremonial, or icon-like \u2014 small gods, offerings, and rites with no name.",
    image: "ritual-icon.jpg",
    focus: { x: 50, y: 38, zoom: 1.3 },
  },
  {
    id: "absurd",
    name: "The Absurd Room",
    href: "/gallery/absurd",
    subtitle: "Strange scale, dark humor, machines",
    blurb:
      "Tiny figures and enormous tables, dreaming machines, quiet comedy and surreal narrative.",
    image: "absurd-machine-moth.jpg",
    focus: { x: 50, y: 46, zoom: 1.2 },
  },
  {
    id: "carved",
    name: "The Carved Archive",
    href: "/carved-archive",
    subtitle: "Wood carvings, masks, objects",
    blurb:
      "Wood carvings, carved faces and masks, wooden figures and studio artifacts \u2014 presence you can almost touch.",
    image: "carved-wooden-head.jpg",
    focus: { x: 42, y: 42, zoom: 1.2 },
  },
];

export const roomById = (id: RoomId) => rooms.find((r) => r.id === id)!;

/* ------------------------------------------------------------------ */
/* Symbols                                                            */
/* ------------------------------------------------------------------ */

export interface Symbol {
  id: SymbolId;
  name: string;
  blurb: string;
}

export const symbols: Symbol[] = [
  { id: "face", name: "Face", blurb: "The recurring head \u2014 watching, withholding." },
  { id: "mask", name: "Mask", blurb: "What is worn to be seen, and to disappear." },
  { id: "animal", name: "Animal", blurb: "Instinct, appetite, and quiet company." },
  { id: "hand", name: "Hand", blurb: "Making, holding, refusing, remembering." },
  { id: "wound", name: "Wound", blurb: "The opening that lets the light, and the gold, in." },
  { id: "body", name: "Body", blurb: "Anatomy as landscape, weather, and ruin." },
  { id: "machine", name: "Machine", blurb: "Apparatus that dreams it is alive." },
  { id: "desert", name: "Desert", blurb: "The wide emptiness a figure must cross." },
  { id: "sleep", name: "Sleep", blurb: "Closed eyes, the threshold of another room." },
  { id: "death", name: "Death", blurb: "The skull beneath the patient animal." },
  { id: "wood", name: "Wood", blurb: "Grain, tool mark, and the memory of the tree." },
  { id: "ritual", name: "Ritual", blurb: "Offerings and rites that no longer have a name." },
  { id: "absurdity", name: "Absurdity", blurb: "Scale gone strange; comedy at the edge of dread." },
];

export const symbolById = (id: SymbolId) => symbols.find((s) => s.id === id)!;

/* ------------------------------------------------------------------ */
/* Artworks                                                           */
/* ------------------------------------------------------------------ */

export const artworks: Artwork[] = [
  /* ---- THE FACE ROOM ---- */
  {
    id: "the-oracle-of-quiet-hours",
    title: "The Oracle of Quiet Hours",
    year: 2024,
    medium: "Oil and gold leaf on linen",
    type: "painting",
    dimensions: "120 \u00d7 90 cm",
    status: "Available",
    room: "face",
    symbols: ["face", "sleep", "ritual"],
    image: "hero-face.jpg",
    poetic:
      "Half a face surfaces from the dark, gilded like a relic worn smooth by being asked too many questions.",
    note:
      "I painted this one eye at a time, over a winter. The gold is not decoration; it is the residue of attention \u2014 the places a face is touched by being looked at. The other half stays in the dark on purpose. Some answers are kinder unspoken.",
    price: 9800,
    featured: true,
    details: [
      { label: "The eye", x: 55, y: 33, zoom: 2.4 },
      { label: "Gilded temple", x: 30, y: 28, zoom: 2.2 },
      { label: "The mouth", x: 60, y: 78, zoom: 2.3 },
    ],
    face: { label: "The Oracle", x: 54, y: 34, zoom: 1.7 },
    edition: {
      kind: "Archival pigment print",
      blurb:
        "A faithful archival edition on cotton rag, printed and signed in the studio. Each carries a blind-stamp and edition number.",
      variants: [
        { id: "s", size: "40 \u00d7 30 cm", edition: "Edition of 40", price: 180 },
        { id: "m", size: "70 \u00d7 52 cm", edition: "Edition of 25", price: 320 },
        { id: "l", size: "100 \u00d7 75 cm", edition: "Edition of 10", price: 620 },
      ],
      frames: [
        { id: "none", label: "Unframed (rolled)", price: 0 },
        { id: "oak", label: "Dark oak tray frame", price: 140 },
      ],
    },
  },
  {
    id: "mask-for-a-forgotten-saint",
    title: "Mask for a Forgotten Saint",
    year: 2023,
    medium: "Oil and gesso on panel",
    type: "painting",
    dimensions: "60 \u00d7 45 cm",
    status: "Private Collection",
    room: "face",
    symbols: ["mask", "ritual", "face", "death"],
    image: "face-mask-saint.jpg",
    poetic:
      "A bone-pale mask with eyes closed, cracked where the gilding tried and failed to keep it holy.",
    note:
      "Found objects teach me more than museums. This began as a study of a votive mask I was not allowed to touch. I painted it from memory, which is to say I painted the feeling of not being allowed.",
    price: null,
    details: [
      { label: "Closed eyes", x: 50, y: 40, zoom: 2.2 },
      { label: "Cracked gilding", x: 35, y: 55, zoom: 2.4 },
    ],
    face: { label: "The Saint", x: 50, y: 42, zoom: 1.6 },
  },
  {
    id: "portrait-with-a-second-mouth",
    title: "Portrait with a Second Mouth",
    year: 2024,
    medium: "Oil on linen",
    type: "painting",
    dimensions: "80 \u00d7 65 cm",
    status: "Available",
    room: "face",
    symbols: ["face", "absurdity", "body"],
    image: "face-second-mouth.jpg",
    poetic:
      "A face that has grown a second mouth on its cheek, for the things the first one would not say.",
    note:
      "Everyone I love keeps two mouths. One for the table, one for the dark. I wanted to paint the second one without making it a horror \u2014 just an honesty the skin could no longer hold.",
    price: 6400,
    details: [
      { label: "Both mouths", x: 52, y: 60, zoom: 2.1 },
      { label: "The gaze", x: 48, y: 32, zoom: 2.3 },
    ],
    face: { label: "Two Mouths", x: 50, y: 44, zoom: 1.6 },
  },
  {
    id: "skull-of-the-patient-animal",
    title: "Skull of the Patient Animal",
    year: 2022,
    medium: "Oil on linen",
    type: "painting",
    dimensions: "70 \u00d7 70 cm",
    status: "Sold",
    room: "face",
    symbols: ["death", "animal", "face"],
    image: "face-skull-animal.jpg",
    poetic:
      "Half portrait, half skull \u2014 the animal that waited so patiently inside the man it became the bone.",
    note:
      "Painted after a long illness. I was interested in the moment a face admits the skull is the truer likeness.",
    price: null,
    details: [
      { label: "The seam", x: 50, y: 45, zoom: 2.2 },
      { label: "Eye socket", x: 38, y: 40, zoom: 2.5 },
    ],
    face: { label: "Patient Animal", x: 50, y: 44, zoom: 1.6 },
  },

  /* ---- THE BODY ROOM ---- */
  {
    id: "the-sleeper-who-became-a-hill",
    title: "The Sleeper Who Became a Hill",
    year: 2023,
    medium: "Oil on linen",
    type: "painting",
    dimensions: "95 \u00d7 140 cm",
    status: "Available",
    room: "body",
    symbols: ["sleep", "body", "desert"],
    image: "body-sleeper-hill.jpg",
    poetic:
      "A draped figure at dawn, its folds settling into the long blue back of a hill that has not woken either.",
    note:
      "I am always trying to paint the moment before a body becomes a place. Grief does this. So does deep sleep. The dusty blue is the only colour the hour offered.",
    price: 11200,
    featured: true,
    details: [
      { label: "The fold becomes ridge", x: 45, y: 55, zoom: 2.0 },
      { label: "Dawn edge", x: 70, y: 30, zoom: 2.2 },
    ],
  },
  {
    id: "the-tender-wound",
    title: "The Tender Wound",
    year: 2024,
    medium: "Oil and gold on panel",
    type: "painting",
    dimensions: "55 \u00d7 40 cm",
    status: "Inquiry",
    room: "body",
    symbols: ["wound", "body", "death"],
    image: "body-tender-wound.jpg",
    poetic:
      "A pale fragment, broken and mended in seams of gold \u2014 the wound kept, not hidden.",
    note:
      "After kintsugi. I do not believe in erasing the break. The gold is where the figure agreed to be seen at its weakest, and was, and survived it.",
    price: 5200,
    details: [
      { label: "Golden seam", x: 50, y: 50, zoom: 2.4 },
      { label: "The mend", x: 40, y: 62, zoom: 2.6 },
    ],
  },
  {
    id: "hands-that-remember",
    title: "Hands That Remember",
    year: 2022,
    medium: "Oil on linen",
    type: "painting",
    dimensions: "50 \u00d7 60 cm",
    status: "Available",
    room: "body",
    symbols: ["hand", "body"],
    image: "body-hands-remember.jpg",
    poetic:
      "Two old hands folded into one another, holding a warmth that left the room a long time ago.",
    note:
      "The hands are my grandfather's, painted from the only gesture I can still summon exactly.",
    price: 4800,
    details: [
      { label: "The knot of fingers", x: 50, y: 52, zoom: 2.3 },
      { label: "Knuckle and light", x: 38, y: 40, zoom: 2.6 },
    ],
  },

  /* ---- THE BEAST ROOM ---- */
  {
    id: "guardian-with-borrowed-teeth",
    title: "Guardian with Borrowed Teeth",
    year: 2024,
    medium: "Oil on linen",
    type: "painting",
    dimensions: "150 \u00d7 110 cm",
    status: "Available",
    room: "beast",
    symbols: ["animal", "mask", "ritual", "death"],
    image: "beast-guardian.jpg",
    poetic:
      "A horned skull-masked figure cradles a pale lioness \u2014 protection wearing the face of the thing it fears.",
    note:
      "The largest painting in this body of work. I wanted a guardian who had to borrow death's own face to be taken seriously, and who, underneath, only wanted to keep something soft from harm.",
    price: 16500,
    featured: true,
    details: [
      { label: "The skull mask", x: 50, y: 22, zoom: 2.0 },
      { label: "The cradling hand", x: 40, y: 58, zoom: 2.2 },
      { label: "The lioness", x: 30, y: 75, zoom: 2.1 },
    ],
    face: { label: "The Guardian", x: 50, y: 24, zoom: 1.7 },
  },
  {
    id: "the-claw-reliquary",
    title: "The Claw Reliquary",
    year: 2023,
    medium: "Oil and gold leaf on panel",
    type: "painting",
    dimensions: "45 \u00d7 35 cm",
    status: "Private Collection",
    room: "beast",
    symbols: ["animal", "hand", "ritual"],
    image: "beast-claw-reliquary.jpg",
    poetic:
      "A single great claw, mounted and gilded like the relic of a saint no church would admit to.",
    note:
      "We keep what frightened us and call it holy. This is a small painting about that exchange.",
    price: null,
    details: [
      { label: "The talon", x: 50, y: 45, zoom: 2.3 },
      { label: "Gilded mount", x: 50, y: 70, zoom: 2.4 },
    ],
  },
  {
    id: "hound-of-the-threshold",
    title: "Hound of the Threshold",
    year: 2023,
    medium: "Oil on linen",
    type: "painting",
    dimensions: "90 \u00d7 70 cm",
    status: "Available",
    room: "beast",
    symbols: ["animal", "death", "sleep"],
    image: "beast-hound-threshold.jpg",
    poetic:
      "A dark hound waits in a doorway, eyes catching the last of the light, deciding whether you may pass.",
    note:
      "Every house I have loved had a dog at its threshold. This one guards a doorway I painted instead of walked through.",
    price: 7600,
    details: [
      { label: "The watching eyes", x: 46, y: 40, zoom: 2.3 },
      { label: "Edge of light", x: 72, y: 45, zoom: 2.2 },
    ],
    face: { label: "The Hound", x: 46, y: 44, zoom: 1.7 },
  },

  /* ---- THE RITUAL ROOM ---- */
  {
    id: "icon-for-an-unnamed-rite",
    title: "Icon for an Unnamed Rite",
    year: 2024,
    medium: "Egg tempera and gold on panel",
    type: "painting",
    dimensions: "65 \u00d7 50 cm",
    status: "Sold",
    room: "ritual",
    symbols: ["ritual", "face", "death", "wound"],
    image: "ritual-icon.jpg",
    poetic:
      "A frontal figure haloed in tarnished gold, solemn keeper of a ceremony whose words are long lost.",
    note:
      "Painted in the manner of an icon, but devoted to no doctrine \u2014 only to the posture of devotion itself.",
    price: null,
    details: [
      { label: "The tarnished halo", x: 50, y: 30, zoom: 2.0 },
      { label: "The gaze", x: 50, y: 42, zoom: 2.4 },
    ],
    face: { label: "The Icon", x: 50, y: 40, zoom: 1.6 },
  },
  {
    id: "procession-of-small-gods",
    title: "Procession of Small Gods",
    year: 2023,
    medium: "Oil on panel",
    type: "painting",
    dimensions: "40 \u00d7 120 cm",
    status: "Available",
    room: "ritual",
    symbols: ["ritual", "animal", "absurdity"],
    image: "ritual-procession.jpg",
    poetic:
      "A row of small idols carried by candlelight \u2014 a parade of household gods nobody prays to anymore.",
    note:
      "I am fond of gods too minor to be cruel. Here they process by candlelight, dignified and slightly ridiculous, like all of us in ceremony.",
    price: 8900,
    details: [
      { label: "The lead idol", x: 30, y: 50, zoom: 2.2 },
      { label: "Candle glow", x: 60, y: 55, zoom: 2.3 },
    ],
    edition: {
      kind: "Archival pigment print",
      blurb:
        "A long panoramic edition suited to a hallway or mantel. Cotton rag, signed and numbered.",
      variants: [
        { id: "s", size: "30 \u00d7 90 cm", edition: "Edition of 30", price: 240 },
        { id: "m", size: "40 \u00d7 120 cm", edition: "Edition of 15", price: 420 },
      ],
      frames: [
        { id: "none", label: "Unframed (rolled)", price: 0 },
        { id: "walnut", label: "Walnut frame", price: 190 },
      ],
    },
  },
  {
    id: "the-offering-table",
    title: "The Offering Table",
    year: 2022,
    medium: "Oil on linen",
    type: "painting",
    dimensions: "75 \u00d7 95 cm",
    status: "Available",
    room: "ritual",
    symbols: ["ritual", "death", "wood"],
    image: "ritual-offering.jpg",
    poetic:
      "Candle, bread, a small skull, a folded cloth \u2014 a still life set for a guest who never names themselves.",
    note:
      "A vanitas, if you like, but I prefer to think of it as hospitality extended to the inevitable.",
    price: 8200,
    details: [
      { label: "The small skull", x: 56, y: 55, zoom: 2.3 },
      { label: "Candle and cloth", x: 35, y: 48, zoom: 2.2 },
    ],
  },

  /* ---- THE ABSURD ROOM ---- */
  {
    id: "committee-of-one",
    title: "Committee of One",
    year: 2024,
    medium: "Oil on linen",
    type: "painting",
    dimensions: "110 \u00d7 150 cm",
    status: "Available",
    room: "absurd",
    symbols: ["absurdity", "machine", "body"],
    image: "absurd-committee.jpg",
    poetic:
      "One small figure at the head of an endless table, addressing a parliament of empty chairs.",
    note:
      "Every decision I have ever feared looked like this from the inside: a single person, a vast table, and the loud attention of no one.",
    price: 13400,
    details: [
      { label: "The lone figure", x: 50, y: 33, zoom: 2.6 },
      { label: "The empty chairs", x: 20, y: 60, zoom: 1.9 },
    ],
  },
  {
    id: "the-machine-that-dreamt-it-was-a-moth",
    title: "The Machine That Dreamt It Was a Moth",
    year: 2023,
    medium: "Oil and metal leaf on panel",
    type: "painting",
    dimensions: "70 \u00d7 60 cm",
    status: "Available",
    room: "absurd",
    symbols: ["machine", "animal", "absurdity", "sleep"],
    image: "absurd-machine-moth.jpg",
    poetic:
      "A brass contraption sprouting moth wings, caught mid-dream of a softer, more foolish life.",
    note:
      "I love any machine that wants to be an animal. This one grew wings it can never use and seems happier for the impossibility.",
    price: 6900,
    details: [
      { label: "The moth wing", x: 60, y: 40, zoom: 2.2 },
      { label: "Brass works", x: 42, y: 55, zoom: 2.4 },
    ],
  },
  {
    id: "tiny-pilgrims-crossing-a-table",
    title: "Tiny Pilgrims Crossing a Table",
    year: 2024,
    medium: "Oil on panel",
    type: "painting",
    dimensions: "60 \u00d7 80 cm",
    status: "Inquiry",
    room: "absurd",
    symbols: ["absurdity", "body", "desert", "wood"],
    image: "absurd-tiny-pilgrims.jpg",
    poetic:
      "A line of minuscule travellers crossing a wooden table that has, for them, become a desert of monuments.",
    note:
      "Scale is the cheapest miracle a painter owns. Here a breakfast table becomes a pilgrimage, and a salt cellar a holy mountain.",
    price: 7400,
    details: [
      { label: "The pilgrims", x: 45, y: 60, zoom: 2.6 },
      { label: "A monument of cutlery", x: 65, y: 45, zoom: 2.3 },
    ],
  },

  /* ---- THE CARVED ARCHIVE ---- */
  {
    id: "wooden-head-no-vii",
    title: "Wooden Head No. VII",
    year: 2024,
    medium: "Carved walnut, wax finish",
    type: "carving",
    dimensions: "34 \u00d7 19 \u00d7 22 cm",
    status: "Available",
    room: "carved",
    symbols: ["wood", "face", "sleep"],
    image: "carved-wooden-head.jpg",
    poetic:
      "A head carved facet by facet from a single block, eyes closed, listening inward to the grain.",
    note:
      "The seventh of a series. I leave the tool marks because they are the handwriting of the making. The grain decided most of the expression; I only followed it and tried not to argue.",
    price: 5400,
    featured: true,
    details: [
      { label: "Three-quarter view", x: 42, y: 42, zoom: 1.1 },
      { label: "Tool marks", x: 55, y: 35, zoom: 2.6 },
      { label: "Closed eye", x: 48, y: 38, zoom: 2.8 },
      { label: "Grain & patina", x: 30, y: 60, zoom: 2.6 },
    ],
    face: { label: "Head No. VII", x: 42, y: 42, zoom: 1.6 },
  },
  {
    id: "the-listening-mask",
    title: "The Listening Mask",
    year: 2023,
    medium: "Carved walnut",
    type: "carving",
    dimensions: "41 \u00d7 26 \u00d7 12 cm",
    status: "Available",
    room: "carved",
    symbols: ["wood", "mask", "face"],
    image: "carved-listening-mask.jpg",
    poetic:
      "A mask with great attentive ears and closed eyes \u2014 a face built entirely for listening.",
    note:
      "Made in a quiet month. The ears are exaggerated because I wanted an object that seemed to lean toward you when you spoke.",
    price: 4200,
    details: [
      { label: "The ear", x: 30, y: 45, zoom: 2.4 },
      { label: "Closed eyes", x: 52, y: 40, zoom: 2.5 },
      { label: "Edge & grain", x: 50, y: 75, zoom: 2.6 },
    ],
    face: { label: "Listening Mask", x: 50, y: 44, zoom: 1.6 },
    edition: {
      kind: "Cast plaster relief",
      blurb:
        "A small wall relief cast from the carved mask, hand-finished with a warm wax patina. Each is numbered on the reverse.",
      variants: [
        { id: "token", size: "18 \u00d7 12 cm", edition: "Edition of 40", price: 160 },
      ],
    },
  },
  {
    id: "the-figure-that-refused-to-stand",
    title: "The Figure That Refused to Stand",
    year: 2022,
    medium: "Carved oak",
    type: "carving",
    dimensions: "52 \u00d7 16 \u00d7 16 cm",
    status: "Private Collection",
    room: "carved",
    symbols: ["wood", "body", "absurdity"],
    image: "carved-figure-standing.jpg",
    poetic:
      "A small wooden figure that leans and slumps, declining, with great dignity, to stand up straight.",
    note:
      "Some days the most honest posture is the reluctant one. I carved this on such a day and let it keep the slump.",
    price: null,
    details: [
      { label: "The lean", x: 50, y: 45, zoom: 1.3 },
      { label: "Shoulder & gouge", x: 45, y: 35, zoom: 2.6 },
      { label: "Base & grain", x: 50, y: 78, zoom: 2.5 },
    ],
  },
  {
    id: "reliquary-box-for-a-small-sorrow",
    title: "Reliquary Box for a Small Sorrow",
    year: 2024,
    medium: "Carved walnut, brass clasp",
    type: "object",
    dimensions: "14 \u00d7 22 \u00d7 12 cm",
    status: "Available",
    room: "carved",
    symbols: ["wood", "ritual", "death"],
    image: "carved-reliquary-box.jpg",
    poetic:
      "A small carved box with a sleeping face on the lid, made to keep one sorrow too precise to throw away.",
    note:
      "I make these to give grief a dignified address. The box is empty; the face on the lid does the keeping.",
    price: 2600,
    details: [
      { label: "The carved lid", x: 50, y: 38, zoom: 2.0 },
      { label: "Brass clasp", x: 50, y: 62, zoom: 2.6 },
      { label: "Grain & patina", x: 30, y: 55, zoom: 2.6 },
    ],
    face: { label: "Reliquary Lid", x: 50, y: 38, zoom: 1.6 },
  },
];

/* ------------------------------------------------------------------ */
/* Selectors                                                          */
/* ------------------------------------------------------------------ */

export const artworkById = (id: string) => artworks.find((a) => a.id === id);

export const artworksByRoom = (room: RoomId) =>
  artworks.filter((a) => a.room === room);

export const artworksBySymbol = (sym: SymbolId) =>
  artworks.filter((a) => a.symbols.includes(sym));

export const availableArtworks = () =>
  artworks.filter((a) => a.status === "Available" || a.status === "Inquiry");

export const carvedArtworks = () =>
  artworks.filter((a) => a.type === "carving" || a.type === "object");

export const faces = () =>
  artworks.filter((a) => a.face) as (Artwork & { face: Crop })[];

export const featuredArtworks = () => artworks.filter((a) => a.featured);

export const editions = () => artworks.filter((a) => a.edition);

export const symbolCount = (sym: SymbolId) => artworksBySymbol(sym).length;

export function relatedArtworks(art: Artwork, limit = 3): Artwork[] {
  return artworks
    .filter((a) => a.id !== art.id)
    .map((a) => ({
      a,
      score:
        (a.room === art.room ? 2 : 0) +
        a.symbols.filter((s) => art.symbols.includes(s)).length,
    }))
    .filter((x) => x.score > 0)
    .sort((x, y) => y.score - x.score)
    .slice(0, limit)
    .map((x) => x.a);
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
