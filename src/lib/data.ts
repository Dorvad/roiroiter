import { artUrl } from "./asset";

/* ============================================================
   Roi Roiter — a surreal private museum
   Catalogue data, rooms, motifs, the index of faces,
   the studio cabinet, and studio notes.
   ============================================================ */

export type RoomKey =
  | "face"
  | "body"
  | "beast"
  | "ritual"
  | "absurd"
  | "carved";

export type Category = "painting" | "carving" | "drawing" | "edition";
export type Kind = "canvas" | "paper" | "wood" | "gold";
export type Status =
  | "Available"
  | "Inquiry"
  | "Sold"
  | "Private Collection";

export interface Crop {
  cap: string;
  cx: number;
  cy: number;
  z: number;
}

export interface Work {
  id: string;
  no: string;
  title: string;
  year: string;
  medium: string;
  dims: string;
  status: Status;
  room: RoomKey;
  cat: Category;
  sym: string[];
  /** filename in /public/art, or null when photography is forthcoming */
  img: string | null;
  cropx?: number;
  cropy?: number;
  zoom?: number;
  kind: Kind;
  poetic: string;
  note: string;
  price: string;
  crops: Crop[];
}

export interface Room {
  key: RoomKey;
  name: string;
  sub: string;
  blurb: string;
  img: string | null;
  cx?: number;
  cy?: number;
  z?: number;
  kind?: Kind;
}

export interface Face {
  id: string;
  label: string;
  img: string;
  cx: number;
  cy: number;
  z: number;
}

export interface Drawer {
  key: string;
  label: string;
  sub: string;
  itemIds: string[];
}

export interface Note {
  id: string;
  date: string;
  tag: string;
  title: string;
  img: string;
  cx: number;
  cy: number;
  z: number;
  body: string;
}

export const rooms: Room[] = [
  {
    key: "face",
    name: "The Face Room",
    sub: "masks · skulls · portraits",
    blurb:
      "Painted and carved faces, masks, skull-like portraits, and expressions caught mid-collapse.",
    img: "the-reliquary.jpg",
    cx: 51,
    cy: 15,
    z: 128,
  },
  {
    key: "body",
    name: "The Body Room",
    sub: "hands · wounds · sleepers",
    blurb:
      "Hands the size of weather, sleeping figures, strange anatomy, bodies mistaken for landscape.",
    img: "the-visitation.jpg",
    cx: 30,
    cy: 46,
    z: 140,
  },
  {
    key: "beast",
    name: "The Beast Room",
    sub: "claws · instinct · hybrids",
    blurb:
      "Animals, claws, instinct and protection — figures undecided about whether to be human.",
    img: "the-visitation.jpg",
    cx: 52,
    cy: 13,
    z: 205,
  },
  {
    key: "ritual",
    name: "The Ritual Room",
    sub: "icons · ceremony · myth",
    blurb:
      "Works that feel religious, ceremonial and icon-like — devotion paid to uncertain gods.",
    img: "the-reliquary.jpg",
    cx: 50,
    cy: 60,
    z: 150,
  },
  {
    key: "absurd",
    name: "The Absurd Room",
    sub: "scale · machines · humour",
    blurb:
      "Strange scale, tiny figures, obsolete machines, and the quiet comedy of dread.",
    img: "the-visitation.jpg",
    cx: 85,
    cy: 82,
    z: 300,
  },
  {
    key: "carved",
    name: "The Carved Archive",
    sub: "wood · masks · objects",
    blurb:
      "Wood carvings, masks, wooden figures and studio artifacts — presences, not products.",
    img: null,
    kind: "wood",
  },
];

export const symbols: string[] = [
  "Face",
  "Mask",
  "Animal",
  "Hand",
  "Wound",
  "Body",
  "Machine",
  "Desert",
  "Sleep",
  "Death",
  "Wood",
  "Ritual",
  "Absurdity",
];

export const works: Work[] = [
  {
    id: "reliquary",
    no: "RR·001",
    title: "The Reliquary",
    year: "2023",
    medium: "Oil on linen",
    dims: "90 × 60 cm",
    status: "Private Collection",
    room: "face",
    cat: "painting",
    sym: ["Face", "Mask", "Death", "Ritual", "Body"],
    img: "the-reliquary.jpg",
    cropx: 50,
    cropy: 19,
    zoom: 132,
    kind: "canvas",
    poetic:
      "A noblewoman wears her own death as a second face, and cradles a man where a lapdog should sleep.",
    note: "Painted through a long winter of copying the old masters until their varnish felt like my own skin. The skull is not a warning. It is the sitter’s true expression, finally allowed out for the portrait.",
    price: "Private Collection",
    crops: [
      { cap: "The skull-mask", cx: 50, cy: 20, z: 235 },
      { cap: "The held man", cx: 52, cy: 64, z: 250 },
      { cap: "Rosary & bodice", cx: 42, cy: 50, z: 220 },
    ],
  },
  {
    id: "visitation",
    no: "RR·002",
    title: "The Visitation",
    year: "2024",
    medium: "Oil on linen",
    dims: "120 × 80 cm",
    status: "Available",
    room: "body",
    cat: "painting",
    sym: ["Hand", "Desert", "Sleep", "Body", "Machine", "Beast", "Absurdity"],
    img: "the-visitation.jpg",
    cropx: 36,
    cropy: 50,
    zoom: 138,
    kind: "canvas",
    poetic:
      "A hand the size of weather reaches across the desert while a beast scores four wounds into a passing face.",
    note: "The largest canvas I have finished. Everything in it is a memory I could not place — the claw, the small businessman, the dead monitor. I painted them together so they would finally leave me alone. Beneath them a sleeper dreams the entire event.",
    price: "Price on request",
    crops: [
      { cap: "The open hand", cx: 34, cy: 54, z: 188 },
      { cap: "Claw & wounds", cx: 74, cy: 24, z: 240 },
      { cap: "The sleeper", cx: 22, cy: 84, z: 225 },
      { cap: "The small man & his machine", cx: 80, cy: 84, z: 255 },
    ],
  },
  {
    id: "gold-mask",
    no: "RR·003",
    title: "Sleep, Unhooked",
    year: "2023",
    medium: "Oil on canvas",
    dims: "30 × 24 cm",
    status: "Available",
    room: "face",
    cat: "painting",
    sym: ["Face", "Mask", "Sleep"],
    img: "painting-gold-mask.jpg",
    cropx: 48,
    cropy: 50,
    zoom: 150,
    kind: "canvas",
    poetic:
      "A face lifts away from its own skull like a mask taken off for the night.",
    note: "A small painting about the moment before sleep, when the face you wear all day finally loosens. I left the support pole visible. Every mask needs something to hang on.",
    price: "$1,400",
    crops: [
      { cap: "Parting lips", cx: 48, cy: 60, z: 235 },
      { cap: "The hollow brow", cx: 47, cy: 40, z: 230 },
    ],
  },
  {
    id: "tiger",
    no: "RR·004",
    title: "Ambush in the Wallpaper",
    year: "2022",
    medium: "Oil on canvas",
    dims: "40 × 50 cm",
    status: "Sold",
    room: "beast",
    cat: "painting",
    sym: ["Animal", "Beast", "Death"],
    img: "painting-tiger.jpg",
    cropx: 48,
    cropy: 44,
    zoom: 140,
    kind: "canvas",
    poetic:
      "A tiger turns inside the foliage, mouth open, deciding whether you are prey or pattern.",
    note: "Begun as a study of a houseplant and finished as a predator. The leaves and the cat are painted with the same brush, so you cannot quite tell where the garden ends and the animal begins.",
    price: "Sold",
    crops: [
      { cap: "The eye", cx: 42, cy: 42, z: 245 },
      { cap: "Open jaw", cx: 56, cy: 46, z: 220 },
    ],
  },
  {
    id: "blue-woman",
    no: "RR·005",
    title: "Cobalt Annunciation",
    year: "2024",
    medium: "Ink & digital colour",
    dims: "Edition of 12",
    status: "Available",
    room: "body",
    cat: "edition",
    sym: ["Body", "Animal", "Face"],
    img: "painting-blue-woman-serpent.jpg",
    cropx: 48,
    cropy: 30,
    zoom: 132,
    kind: "paper",
    poetic:
      "A blue woman receives a dragonfly at her ear while an orange creature uncoils from her own lap.",
    note: "Drawn in a single night and coloured flat, like a saint’s card from a religion I invented. The insect is the messenger. The serpent-man is the message.",
    price: "From $180 · edition",
    crops: [
      { cap: "The messenger", cx: 74, cy: 30, z: 235 },
      { cap: "The coiled man", cx: 62, cy: 74, z: 200 },
    ],
  },
  {
    id: "carving-blue",
    no: "RR·006",
    title: "Blue Cry",
    year: "2023",
    medium: "Carved & painted driftwood",
    dims: "41 × 16 × 14 cm",
    status: "Available",
    room: "carved",
    cat: "carving",
    sym: ["Face", "Mask", "Wood"],
    img: "carving-blue-cry.jpg",
    cropx: 52,
    cropy: 40,
    zoom: 150,
    kind: "wood",
    poetic:
      "A length of driftwood opens one enormous eye and a perfectly round mouth, caught mid-cry.",
    note: "The log already held the hollow; I only found the face around it. Carved with gouge and knife, sealed, then painted in blues so the grain still breathes underneath. It is heavier than it looks, and it watches the room.",
    price: "$2,200",
    crops: [
      { cap: "The eye", cx: 55, cy: 42, z: 240 },
      { cap: "The open mouth", cx: 52, cy: 66, z: 245 },
      { cap: "Grain & toolmarks", cx: 38, cy: 28, z: 240 },
    ],
  },
  {
    id: "horned-janus",
    no: "RR·007",
    title: "Two-Faced Saint with Candle",
    year: "2023",
    medium: "Ink & marker on paper",
    dims: "29 × 21 cm",
    status: "Available",
    room: "ritual",
    cat: "drawing",
    sym: ["Face", "Beast", "Ritual", "Death"],
    img: "drawing-horned-janus.jpg",
    cropx: 45,
    cropy: 38,
    zoom: 158,
    kind: "paper",
    poetic:
      "A horned head wearing two faces at once burns above a single blue candlestick.",
    note: "A devil, or a saint drawn by someone who never met one. The second profile grows a green beard of smoke. The candle keeps them both honest.",
    price: "$480",
    crops: [
      { cap: "The horned brow", cx: 50, cy: 30, z: 215 },
      { cap: "The candle", cx: 50, cy: 76, z: 235 },
    ],
  },
  {
    id: "owl",
    no: "RR·008",
    title: "The Sentinel",
    year: "2022",
    medium: "Ink & marker on paper",
    dims: "29 × 21 cm",
    status: "Available",
    room: "beast",
    cat: "drawing",
    sym: ["Animal", "Beast"],
    img: "drawing-owl.jpg",
    cropx: 50,
    cropy: 36,
    zoom: 150,
    kind: "paper",
    poetic:
      "An owl built entirely of scales keeps watch beneath a pen-drawn moon.",
    note: "Every feather drawn as a separate scale until the bird became a kind of armour. The moon is hollow, on purpose.",
    price: "$420",
    crops: [
      { cap: "The eyes", cx: 50, cy: 34, z: 220 },
      { cap: "Scaled breast", cx: 50, cy: 62, z: 205 },
    ],
  },
  {
    id: "lynx",
    no: "RR·009",
    title: "Thicket (Watcher)",
    year: "2022",
    medium: "Ink & marker on paper",
    dims: "29 × 21 cm",
    status: "Private Collection",
    room: "beast",
    cat: "drawing",
    sym: ["Animal", "Beast"],
    img: "drawing-lynx.jpg",
    cropx: 52,
    cropy: 44,
    zoom: 152,
    kind: "paper",
    poetic:
      "A wild cat’s face surfaces from a tangle of striped leaves, half hidden, fully aware.",
    note: "Drawn entirely in cross-hatch, then the foliage flooded in around it in colour. The cat was here first.",
    price: "Private Collection",
    crops: [{ cap: "The face", cx: 52, cy: 44, z: 225 }],
  },
  {
    id: "crowd",
    no: "RR·010",
    title: "The Congregation",
    year: "2023",
    medium: "Ink & marker on paper",
    dims: "29 × 21 cm",
    status: "Available",
    room: "face",
    cat: "drawing",
    sym: ["Face", "Absurdity"],
    img: "drawing-crowd-faces.jpg",
    cropx: 42,
    cropy: 48,
    zoom: 150,
    kind: "paper",
    poetic:
      "A crowd of mismatched faces leans inward around one small, pale, naked figure.",
    note: "I drew strangers from memory until the page was full, then placed a tiny frightened man in the only gap left. Everyone is looking somewhere different. No one is looking at him.",
    price: "$520",
    crops: [
      { cap: "The pink witness", cx: 33, cy: 38, z: 300 },
      { cap: "The small figure", cx: 46, cy: 80, z: 300 },
      { cap: "Profiles", cx: 70, cy: 58, z: 300 },
    ],
  },
  {
    id: "inverted-body",
    no: "RR·011",
    title: "Inverted Torso",
    year: "2024",
    medium: "Marker on paper",
    dims: "29 × 21 cm",
    status: "Available",
    room: "body",
    cat: "drawing",
    sym: ["Body", "Face"],
    img: "drawing-inverted-body.jpg",
    cropx: 43,
    cropy: 52,
    zoom: 160,
    kind: "paper",
    poetic:
      "A torso hangs upside-down, a sleeping face surfacing where the stomach should be.",
    note: "An exercise in anatomy that refused to behave. The body kept turning into a face, so I let it.",
    price: "$360",
    crops: [{ cap: "The hidden face", cx: 44, cy: 52, z: 235 }],
  },
  {
    id: "shield-tree",
    no: "RR·012",
    title: "Genealogy",
    year: "2024",
    medium: "Ink & marker on paper",
    dims: "29 × 21 cm",
    status: "Available",
    room: "ritual",
    cat: "drawing",
    sym: ["Ritual", "Body", "Absurdity"],
    img: "drawing-shield-tree.jpg",
    cropx: 46,
    cropy: 48,
    zoom: 152,
    kind: "paper",
    poetic:
      "A tree grows heraldic shields instead of leaves and stands on a root-system of bared teeth.",
    note: "A family tree for a family that only ever kept its coats of arms. The trunk is a woman. The roots bite.",
    price: "$540",
    crops: [
      { cap: "The crest canopy", cx: 48, cy: 32, z: 200 },
      { cap: "Root of teeth", cx: 46, cy: 76, z: 205 },
    ],
  },
  {
    id: "tree-bridge",
    no: "RR·013",
    title: "Little Bridge, Old Tree",
    year: "2021",
    medium: "Coloured pencil on paper",
    dims: "24 × 18 cm",
    status: "Available",
    room: "absurd",
    cat: "drawing",
    sym: ["Desert", "Sleep"],
    img: "study-tree-bridge.jpg",
    cropx: 48,
    cropy: 46,
    zoom: 148,
    kind: "paper",
    poetic:
      "A single stone bridge leads nowhere across dry grass, keeping an old tree company.",
    note: "The quietest thing in the cabinet. I keep it to remind myself that not everything has to be a face.",
    price: "$220",
    crops: [{ cap: "The bridge", cx: 30, cy: 58, z: 220 }],
  },
  {
    id: "beak-man",
    no: "RR·014",
    title: "The Appointment",
    year: "2023",
    medium: "Ink on paper",
    dims: "21 × 15 cm",
    status: "Available",
    room: "absurd",
    cat: "drawing",
    sym: ["Animal", "Body", "Absurdity", "Machine"],
    img: "sketch-beak-man.jpg",
    cropx: 45,
    cropy: 48,
    zoom: 158,
    kind: "paper",
    poetic:
      "A man in a good coat keeps the head of a bird, and points the way with one gloved hand.",
    note: "Drawn fast at a cafe table. He was already wearing the suit; I only gave him the beak he deserved.",
    price: "$300",
    crops: [{ cap: "The beaked head", cx: 46, cy: 30, z: 235 }],
  },
  {
    id: "octopus-man",
    no: "RR·015",
    title: "Self-Portrait as Cephalopod",
    year: "2023",
    medium: "Ink on paper",
    dims: "21 × 15 cm",
    status: "Available",
    room: "face",
    cat: "drawing",
    sym: ["Face", "Animal", "Absurdity"],
    img: "sketch-octopus-man.jpg",
    cropx: 48,
    cropy: 44,
    zoom: 150,
    kind: "paper",
    poetic:
      "A sorrowful bald man whose beard has become a nest of octopus arms, one trailing a stave of music.",
    note: "How it feels to talk too much. The arms write their own song along the bottom of the page.",
    price: "$300",
    crops: [
      { cap: "The eyes", cx: 48, cy: 38, z: 220 },
      { cap: "Arms & music", cx: 40, cy: 80, z: 205 },
    ],
  },
  {
    id: "nude-vase",
    no: "RR·016",
    title: "Two Studies — Figure, Flowers",
    year: "2022",
    medium: "Ink & red on paper",
    dims: "21 × 15 cm",
    status: "Private Collection",
    room: "body",
    cat: "drawing",
    sym: ["Body"],
    img: "sketch-nude-vase.jpg",
    cropx: 38,
    cropy: 48,
    zoom: 158,
    kind: "paper",
    poetic:
      "A standing nude and a vase of red-stung flowers share one quick page.",
    note: "Two minutes each. The line either finds the body or it does not; there is no going back over it in ink.",
    price: "Private Collection",
    crops: [{ cap: "The figure", cx: 34, cy: 50, z: 205 }],
  },
  {
    id: "three-figures",
    no: "RR·017",
    title: "Three Who Wait",
    year: "2022",
    medium: "Ink on paper",
    dims: "21 × 15 cm",
    status: "Available",
    room: "body",
    cat: "drawing",
    sym: ["Body", "Sleep", "Absurdity"],
    img: "sketch-three-figures.jpg",
    cropx: 48,
    cropy: 54,
    zoom: 150,
    kind: "paper",
    poetic:
      "Three thin figures stand on a scratched floor, one with a face folding open like a flag.",
    note: "They are waiting for the same thing I am. None of us will say what it is.",
    price: "$280",
    crops: [{ cap: "The opened face", cx: 48, cy: 38, z: 220 }],
  },
  {
    id: "ph-mask",
    no: "RR·018",
    title: "Mask for an Unknown Festival",
    year: "2024",
    medium: "Carved walnut",
    dims: "32 × 20 × 9 cm",
    status: "Available",
    room: "carved",
    cat: "carving",
    sym: ["Mask", "Wood", "Ritual"],
    img: null,
    kind: "wood",
    poetic:
      "A walnut mask for a celebration that has not been invented yet.",
    note: "Studio photographs of this carving are being made. Write to the studio and I will send them to you directly.",
    price: "$1,600",
    crops: [],
  },
  {
    id: "ph-figure",
    no: "RR·019",
    title: "Standing Figure (Olive)",
    year: "2023",
    medium: "Carved olive wood",
    dims: "54 cm tall",
    status: "Inquiry",
    room: "carved",
    cat: "carving",
    sym: ["Body", "Wood"],
    img: null,
    kind: "wood",
    poetic:
      "A thin standing figure cut from a single olive limb, still smelling faintly of the tree.",
    note: "Photographs in progress. Available to view in person at the studio.",
    price: "Inquire",
    crops: [],
  },
  {
    id: "ph-skull",
    no: "RR·020",
    title: "Small Skull, Pocket-Sized",
    year: "2024",
    medium: "Carved boxwood",
    dims: "8 × 6 × 7 cm",
    status: "Available",
    room: "carved",
    cat: "carving",
    sym: ["Death", "Wood"],
    img: null,
    kind: "wood",
    poetic:
      "A skull small enough to close your hand around, worn smooth at the temples.",
    note: "A memento to carry. Photographs forthcoming.",
    price: "$340",
    crops: [],
  },
];

export const faces: Face[] = [
  { id: "carving-blue", label: "Blue Cry", img: "carving-blue-cry.jpg", cx: 53, cy: 42, z: 190 },
  { id: "reliquary", label: "The Reliquary", img: "the-reliquary.jpg", cx: 50, cy: 22, z: 185 },
  { id: "gold-mask", label: "Sleep, Unhooked", img: "painting-gold-mask.jpg", cx: 48, cy: 52, z: 185 },
  { id: "crowd", label: "The Pink Witness", img: "drawing-crowd-faces.jpg", cx: 33, cy: 38, z: 300 },
  { id: "blue-woman", label: "Cobalt Annunciation", img: "painting-blue-woman-serpent.jpg", cx: 47, cy: 29, z: 215 },
  { id: "horned-janus", label: "Two-Faced Saint", img: "drawing-horned-janus.jpg", cx: 47, cy: 36, z: 205 },
  { id: "crowd", label: "Fevered", img: "drawing-crowd-faces.jpg", cx: 58, cy: 46, z: 320 },
  { id: "owl", label: "The Sentinel", img: "drawing-owl.jpg", cx: 50, cy: 33, z: 180 },
  { id: "octopus-man", label: "Cephalopod", img: "sketch-octopus-man.jpg", cx: 48, cy: 38, z: 185 },
  { id: "crowd", label: "The Insomniac", img: "drawing-crowd-faces.jpg", cx: 46, cy: 60, z: 300 },
  { id: "lynx", label: "Thicket", img: "drawing-lynx.jpg", cx: 52, cy: 44, z: 190 },
  { id: "crowd", label: "Violet", img: "drawing-crowd-faces.jpg", cx: 30, cy: 62, z: 320 },
  { id: "tiger", label: "Ambush", img: "painting-tiger.jpg", cx: 46, cy: 42, z: 170 },
  { id: "crowd", label: "Envy", img: "drawing-crowd-faces.jpg", cx: 70, cy: 52, z: 340 },
  { id: "inverted-body", label: "Upturned", img: "drawing-inverted-body.jpg", cx: 44, cy: 52, z: 215 },
  { id: "crowd", label: "Amber Profile", img: "drawing-crowd-faces.jpg", cx: 72, cy: 74, z: 320 },
  { id: "three-figures", label: "The Opened Face", img: "sketch-three-figures.jpg", cx: 48, cy: 36, z: 215 },
  { id: "crowd", label: "Cold Saint", img: "drawing-crowd-faces.jpg", cx: 16, cy: 76, z: 330 },
];

export const drawers: Drawer[] = [
  { key: "heads", label: "Heads & Masks", sub: "carved and painted", itemIds: ["carving-blue", "octopus-man", "gold-mask", "ph-mask"] },
  { key: "ink", label: "Ink Studies", sub: "one sitting each", itemIds: ["nude-vase", "three-figures", "beak-man"] },
  { key: "colour", label: "Colour Experiments", sub: "marker & pen", itemIds: ["owl", "lynx", "shield-tree", "horned-janus"] },
  { key: "loose", label: "Landscapes & Loose Leaves", sub: "quiet pages", itemIds: ["tree-bridge", "inverted-body", "blue-woman"] },
  { key: "small", label: "Small Carved Objects", sub: "made to hold", itemIds: ["ph-figure", "ph-skull"] },
];

export const studioNotes: Note[] = [
  { id: "carving-blue", date: "Winter", tag: "Carving", title: "Finding the face in the log", img: "carving-blue-cry.jpg", cx: 42, cy: 30, z: 240, body: "The hollow was already there. I spent three evenings deciding whether the mouth wanted to be open or closed. Open won, and now it will not stop." },
  { id: "visitation", date: "Spring", tag: "Painting", title: "A palm is mostly weather", img: "the-visitation.jpg", cx: 34, cy: 54, z: 200, body: "I repainted these creases for a month, until the hand stopped looking like a map and started looking like a threat." },
  { id: "crowd", date: "Summer", tag: "Drawing", title: "A page full of strangers", img: "drawing-crowd-faces.jpg", cx: 46, cy: 50, z: 220, body: "I drew faces from memory until there was no white paper left, then gave the only gap to one small frightened man." },
  { id: "shield-tree", date: "Autumn", tag: "Drawing", title: "Roots that bite", img: "drawing-shield-tree.jpg", cx: 46, cy: 76, z: 220, body: "The canopy is heraldry; the roots are teeth. A family remembered only by its coats of arms, standing on what it chewed through." },
  { id: "gold-mask", date: "Late", tag: "Painting", title: "The mask needs a pole", img: "painting-gold-mask.jpg", cx: 50, cy: 68, z: 200, body: "A face has to hang on something once you take it off for the night. I left the support visible. It felt more honest than hiding it." },
];

/* ---------------------------------------------------------------
   Derived helpers
   --------------------------------------------------------------- */

export const workById = (id: string): Work | undefined =>
  works.find((w) => w.id === id);

export const roomByKey = (key: RoomKey): Room | undefined =>
  rooms.find((r) => r.key === key);

export const worksInRoom = (key: RoomKey): Work[] =>
  works.filter((w) => w.room === key);

export const worksWithMotif = (motif: string): Work[] =>
  works.filter((w) => w.sym.includes(motif));

export const relatedWorks = (work: Work, limit = 3): Work[] =>
  works.filter((w) => w.room === work.room && w.id !== work.id).slice(0, limit);

export const availablePaintings = (): Work[] =>
  works.filter((w) => w.cat === "painting");

export const availableCarvings = (): Work[] =>
  works.filter((w) => w.cat === "carving");

export const availableEditions = (): Work[] =>
  works.filter((w) => w.cat === "edition" || w.cat === "drawing");

export const drawerItems = (drawer: Drawer): Work[] =>
  drawer.itemIds.map((id) => workById(id)).filter((w): w is Work => Boolean(w));

export function statusColor(status: Status): string {
  switch (status) {
    case "Available":
      return "#bd9a57";
    case "Inquiry":
      return "#6f8791";
    case "Sold":
      return "rgba(154,70,54,.85)";
    default:
      return "rgba(111,135,145,.72)";
  }
}

export function phBase(kind: Kind): string {
  switch (kind) {
    case "wood":
      return "radial-gradient(120% 90% at 50% 30%, rgba(120,78,44,.2), transparent 60%), linear-gradient(105deg,#30221a,#1c130d 62%,#140d09)";
    case "paper":
      return "radial-gradient(120% 90% at 50% 35%, rgba(233,225,211,.06), transparent 60%), linear-gradient(135deg,#272219,#18140f)";
    case "gold":
      return "radial-gradient(120% 90% at 50% 30%, rgba(189,154,87,.16), transparent 60%), linear-gradient(135deg,#251d12,#150f09)";
    default:
      return "radial-gradient(120% 90% at 50% 32%, rgba(90,58,36,.22), transparent 62%), linear-gradient(135deg,#221a13,#14100b)";
  }
}

/** Background style for a positioned, zoomed crop of an artwork image. */
export function cropBackground(file: string, cx: number, cy: number, z: number): string {
  return `background-image:url(${artUrl(file)});background-size:${z}%;background-position:${cx}% ${cy}%;background-repeat:no-repeat;`;
}

/** Cover background for a full image at an optional focal point. */
export function coverBackground(file: string, cx = 50, cy = 50): string {
  return `background-image:url(${artUrl(file)});background-size:cover;background-position:${cx}% ${cy}%;`;
}

/** Background for a room tile (image crop, or a woodgrain placeholder). */
export function roomFill(room: Room): string {
  return room.img
    ? `background-image:url(${artUrl(room.img)});background-size:cover;background-position:${room.cx ?? 50}% ${room.cy ?? 50}%;`
    : `background:${phBase(room.kind ?? "wood")};`;
}
