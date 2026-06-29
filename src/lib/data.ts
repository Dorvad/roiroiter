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
    id: "parrot-confession",
    no: "RR·014",
    title: "The Parrot Confession",
    year: "2023",
    medium: "Ink & marker on paper",
    dims: "29 × 21 cm",
    status: "Available",
    room: "absurd",
    cat: "drawing",
    sym: ["Face", "Animal", "Absurdity"],
    img: "drawing-parrot-confession.jpg",
    cropx: 55,
    cropy: 45,
    zoom: 150,
    kind: "paper",
    poetic:
      "A man with an impossible profile confesses nothing to a green parrot, who listens as if it were the first honest thing all week.",
    note: "Drawn in profile because lies travel better sideways. The bird is brighter than either of us deserves.",
    price: "$440",
    crops: [
      { cap: "The hooked profile", cx: 68, cy: 42, z: 225 },
      { cap: "The green witness", cx: 28, cy: 38, z: 220 },
    ],
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
    title: "Skull on Yellow Ground",
    year: "2024",
    medium: "Oil on canvas",
    dims: "20 × 15 cm",
    status: "Available",
    room: "face",
    cat: "painting",
    sym: ["Death", "Face", "Ritual"],
    img: "painting-skull-yellow.jpg",
    cropx: 50,
    cropy: 42,
    zoom: 145,
    kind: "canvas",
    poetic:
      "A small skull sits on yellow ground like a lesson left out in the sun to dry.",
    note: "Painted quickly on a small canvas board, propped on the easel between larger works. The yellow ground refused to stay quiet.",
    price: "$480",
    crops: [{ cap: "The skull", cx: 52, cy: 44, z: 210 }],
  },
  {
    id: "combustion",
    no: "RR·021",
    title: "Combustion Portrait",
    year: "2024",
    medium: "Digital painting",
    dims: "Edition of 12",
    status: "Available",
    room: "face",
    cat: "edition",
    sym: ["Face", "Death", "Ritual"],
    img: "painting-combustion-portrait.jpg",
    cropx: 50,
    cropy: 32,
    zoom: 150,
    kind: "canvas",
    poetic: "A man’s hair has become flame, and his eyes have learned the colour of what burns.",
    note: "Painted on yellow ground so the heat would have somewhere to echo. He is not screaming. That is what frightened me.",
    price: "From $170 · edition",
    crops: [{ cap: "The burning crown", cx: 50, cy: 22, z: 215 }],
  },
  {
    id: "orb-bearer",
    no: "RR·022",
    title: "The Orb-Bearer",
    year: "2024",
    medium: "Digital painting",
    dims: "Edition of 12",
    status: "Available",
    room: "ritual",
    cat: "edition",
    sym: ["Face", "Ritual", "Death"],
    img: "painting-orb-bearer.jpg",
    cropx: 50,
    cropy: 38,
    zoom: 142,
    kind: "canvas",
    poetic: "A tired magician holds a small sun in both hands while a runed sword waits beside him like an unpaid debt.",
    note: "Painted as a character who has already paid too much for what he carries. The halo behind him is less blessing than warning.",
    price: "From $180 · edition",
    crops: [
      { cap: "The orb", cx: 50, cy: 58, z: 230 },
      { cap: "The runed blade", cx: 28, cy: 30, z: 220 },
    ],
  },
  {
    id: "green-grin-colour",
    no: "RR·023",
    title: "Green Grin (Colour Study)",
    year: "2024",
    medium: "Digital colour",
    dims: "Edition of 12",
    status: "Available",
    room: "body",
    cat: "edition",
    sym: ["Face", "Body", "Absurdity"],
    img: "painting-green-grin.jpg",
    cropx: 50,
    cropy: 42,
    zoom: 148,
    kind: "canvas",
    poetic: "The same grin, cleaned of notebook and table, standing alone on a field of pale blue.",
    note: "I returned to the green woman on screen because the paper version felt too close to the kitchen table where she was born.",
    price: "From $150 · edition",
    crops: [{ cap: "The coloured body", cx: 50, cy: 55, z: 200 }],
  },
  {
    id: "green-grin",
    no: "RR·024",
    title: "Green Grin",
    year: "2023",
    medium: "Coloured pencil on paper",
    dims: "29 × 21 cm",
    status: "Available",
    room: "body",
    cat: "drawing",
    sym: ["Face", "Body", "Absurdity"],
    img: "drawing-green-grin.jpg",
    cropx: 50,
    cropy: 40,
    zoom: 152,
    kind: "paper",
    poetic: "A green face laughs too widely at the viewer, as if joy had arrived wearing the wrong colour.",
    note: "The first version, on paper, all teeth and appetite. I coloured it the way a child might — without asking permission from the body underneath.",
    price: "$360",
    crops: [{ cap: "The green mouth", cx: 50, cy: 34, z: 235 }],
  },
  {
    id: "blue-lament",
    no: "RR·025",
    title: "Blue Lament",
    year: "2024",
    medium: "Ink & digital colour",
    dims: "Edition of 12",
    status: "Available",
    room: "face",
    cat: "edition",
    sym: ["Face", "Absurdity"],
    img: "drawing-blue-lament.jpg",
    cropx: 52,
    cropy: 45,
    zoom: 158,
    kind: "paper",
    poetic: "A long face bends under its own crying, wearing a hat too cheerful for what the eyes are doing.",
    note: "Drawn fast on black because the page already felt like night. The tears are simple blue lines.",
    price: "From $140 · edition",
    crops: [{ cap: "The blue tears", cx: 58, cy: 40, z: 240 }],
  },
  {
    id: "turquoise-portrait",
    no: "RR·026",
    title: "Portrait on Turquoise",
    year: "2024",
    medium: "Digital painting",
    dims: "Edition of 12",
    status: "Available",
    room: "face",
    cat: "edition",
    sym: ["Face", "Body"],
    img: "painting-turquoise-portrait.jpg",
    cropx: 50,
    cropy: 38,
    zoom: 145,
    kind: "canvas",
    poetic: "A face built from flat patches of colour, held together by nothing but the brightness of the ground behind it.",
    note: "Painted in hard edges because blending felt like lying. The turquoise field is not a background. It is the only calm in the room.",
    price: "From $160 · edition",
    crops: [{ cap: "The patchwork face", cx: 50, cy: 42, z: 220 }],
  },
  {
    id: "smoke-portrait",
    no: "RR·027",
    title: "Portrait in Smoke",
    year: "2023",
    medium: "Graphite on paper",
    dims: "29 × 21 cm",
    status: "Available",
    room: "face",
    cat: "drawing",
    sym: ["Face", "Death", "Sleep"],
    img: "drawing-smoke-portrait.jpg",
    cropx: 50,
    cropy: 35,
    zoom: 150,
    kind: "paper",
    poetic: "A man’s head unravels upward into smoke, as though thought had finally found a way out through the skull.",
    note: "The forehead dissolves into tendrils because I could not decide where the face ended and the weather began.",
    price: "$420",
    crops: [{ cap: "The rising head", cx: 50, cy: 28, z: 210 }],
  },
  {
    id: "tree-mountain",
    no: "RR·028",
    title: "Lone Tree (Mountain)",
    year: "2024",
    medium: "Coloured pencil on paper",
    dims: "24 × 18 cm",
    status: "Available",
    room: "absurd",
    cat: "drawing",
    sym: ["Desert", "Animal"],
    img: "study-tree-mountain.jpg",
    cropx: 50,
    cropy: 40,
    zoom: 148,
    kind: "paper",
    poetic: "A single tree holds its ground between purple mountains while a small horned animal keeps it company.",
    note: "The sun sits directly behind the canopy so the tree becomes a silhouette with a green crown. The yak is an afterthought that stayed.",
    price: "$240",
    crops: [{ cap: "The sun behind the tree", cx: 50, cy: 32, z: 200 }],
  },
  {
    id: "horse-lament",
    no: "RR·029",
    title: "The Lamenting Horse",
    year: "2024",
    medium: "Graphite on paper",
    dims: "29 × 21 cm",
    status: "Available",
    room: "beast",
    cat: "drawing",
    sym: ["Animal", "Beast", "Face", "Absurdity"],
    img: "drawing-horse-lament.jpg",
    cropx: 48,
    cropy: 42,
    zoom: 155,
    kind: "paper",
    poetic: "A horse opens its mouth to show the wrong teeth, as if grief had borrowed a human jaw for the afternoon.",
    note: "Drawn from the shoulder up in a spiral notebook. The leg folds wrong on purpose.",
    price: "$380",
    crops: [{ cap: "The borrowed teeth", cx: 38, cy: 38, z: 230 }],
  },
  {
    id: "broom-witch",
    no: "RR·030",
    title: "The Broom Witch",
    year: "2023",
    medium: "Coloured pencil on paper",
    dims: "29 × 21 cm",
    status: "Available",
    room: "ritual",
    cat: "drawing",
    sym: ["Body", "Ritual", "Absurdity"],
    img: "drawing-broom-witch.jpg",
    cropx: 50,
    cropy: 45,
    zoom: 148,
    kind: "paper",
    poetic: "A green-skinned rider sits sidesaddle on her broom, cradling a small sun in one hand.",
    note: "Drawn as a witch who has already traded her familiar for something hotter. The broom is the only thing still obeying her.",
    price: "$400",
    crops: [{ cap: "The fire in her hand", cx: 42, cy: 38, z: 235 }],
  },
  {
    id: "insect-court",
    no: "RR·031",
    title: "The Insect Court",
    year: "2023",
    medium: "Coloured pencil on paper",
    dims: "29 × 21 cm",
    status: "Available",
    room: "absurd",
    cat: "drawing",
    sym: ["Animal", "Face", "Absurdity"],
    img: "drawing-insect-court.jpg",
    cropx: 50,
    cropy: 42,
    zoom: 150,
    kind: "paper",
    poetic: "Four insect dignitaries gather on white paper, each wearing a mouth too large for its station.",
    note: "Started as a study of beetles and finished as a parliament. The largest one speaks for all of them.",
    price: "$360",
    crops: [{ cap: "The central speaker", cx: 50, cy: 35, z: 220 }],
  },
  {
    id: "knight-lion",
    no: "RR·032",
    title: "Knight with Lion Crest",
    year: "2022",
    medium: "Graphite on paper",
    dims: "29 × 21 cm",
    status: "Available",
    room: "ritual",
    cat: "drawing",
    sym: ["Ritual", "Animal", "Body"],
    img: "drawing-knight-lion.jpg",
    cropx: 50,
    cropy: 40,
    zoom: 152,
    kind: "paper",
    poetic: "A knight holds a sword taller than his grief while a lion’s head sleeps on his chest.",
    note: "The window at his feet is a confession booth. The gear at his hem is the world he is trying to leave.",
    price: "$420",
    crops: [
      { cap: "The lion crest", cx: 50, cy: 52, z: 225 },
      { cap: "The long sword", cx: 50, cy: 22, z: 210 },
    ],
  },
  {
    id: "bowler-man",
    no: "RR·033",
    title: "The Bowler",
    year: "2023",
    medium: "Graphite on paper",
    dims: "29 × 21 cm",
    status: "Available",
    room: "face",
    cat: "drawing",
    sym: ["Face", "Mask"],
    img: "drawing-bowler-man.jpg",
    cropx: 50,
    cropy: 38,
    zoom: 155,
    kind: "paper",
    poetic: "A man in a bowler hat looks out from under its brim as if the twentieth century had never ended.",
    note: "Drawn in heavy shadow because some faces only arrive when half the page is dark.",
    price: "$380",
    crops: [{ cap: "Under the brim", cx: 50, cy: 42, z: 230 }],
  },
  {
    id: "expressive-portrait",
    no: "RR·034",
    title: "Expressive Portrait",
    year: "2021",
    medium: "Ink & marker on paper",
    dims: "24 × 18 cm",
    status: "Available",
    room: "face",
    cat: "drawing",
    sym: ["Face", "Body"],
    img: "painting-expressive-portrait.jpg",
    cropx: 50,
    cropy: 36,
    zoom: 148,
    kind: "paper",
    poetic: "A face painted in colours the skin never wore, looking upward as if expecting an answer from the ceiling.",
    note: "Signed and dated 2021. One of the first times I let the marker choose the shadow colour without asking me first.",
    price: "$400",
    crops: [{ cap: "The lifted gaze", cx: 50, cy: 32, z: 215 }],
  },
  {
    id: "green-scholar",
    no: "RR·035",
    title: "The Green Scholar",
    year: "2024",
    medium: "Oil on canvas",
    dims: "30 × 30 cm",
    status: "Available",
    room: "face",
    cat: "painting",
    sym: ["Face", "Ritual", "Death"],
    img: "painting-green-scholar.jpg",
    cropx: 48,
    cropy: 40,
    zoom: 145,
    kind: "canvas",
    poetic: "A bearded man in a green fez argues with ghosts only he can see.",
    note: "Painted in profile because arguments are easier when you are not looking directly at anyone.",
    price: "$620",
    crops: [{ cap: "The blue eye", cx: 42, cy: 44, z: 220 }],
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
  { id: "smoke-portrait", label: "Smoke", img: "drawing-smoke-portrait.jpg", cx: 50, cy: 28, z: 210 },
  { id: "combustion", label: "Combustion", img: "painting-combustion-portrait.jpg", cx: 50, cy: 22, z: 215 },
  { id: "turquoise-portrait", label: "Turquoise", img: "painting-turquoise-portrait.jpg", cx: 50, cy: 42, z: 220 },
  { id: "blue-lament", label: "Blue Lament", img: "drawing-blue-lament.jpg", cx: 58, cy: 40, z: 240 },
  { id: "bowler-man", label: "The Bowler", img: "drawing-bowler-man.jpg", cx: 50, cy: 42, z: 230 },
  { id: "parrot-confession", label: "The Parrot", img: "drawing-parrot-confession.jpg", cx: 68, cy: 42, z: 225 },
  { id: "ph-skull", label: "Skull", img: "painting-skull-yellow.jpg", cx: 52, cy: 44, z: 210 },
  { id: "green-scholar", label: "The Scholar", img: "painting-green-scholar.jpg", cx: 42, cy: 44, z: 220 },
];

export const drawers: Drawer[] = [
  { key: "heads", label: "Heads & Masks", sub: "carved and painted", itemIds: ["carving-blue", "octopus-man", "gold-mask", "ph-mask", "smoke-portrait", "bowler-man"] },
  { key: "ink", label: "Ink Studies", sub: "one sitting each", itemIds: ["nude-vase", "three-figures", "parrot-confession", "horse-lament", "knight-lion", "insect-court"] },
  { key: "colour", label: "Colour Experiments", sub: "marker & pen", itemIds: ["owl", "lynx", "shield-tree", "horned-janus", "green-grin", "broom-witch"] },
  { key: "loose", label: "Landscapes & Loose Leaves", sub: "quiet pages", itemIds: ["tree-bridge", "tree-mountain", "inverted-body", "blue-woman"] },
  { key: "small", label: "Small Works & Objects", sub: "made to hold", itemIds: ["ph-skull", "ph-figure", "expressive-portrait"] },
  { key: "digital", label: "Digital Paintings", sub: "screen-born works", itemIds: ["turquoise-portrait", "combustion", "orb-bearer", "blue-lament", "green-grin-colour", "green-scholar"] },
];

export const studioNotes: Note[] = [
  { id: "carving-blue", date: "Winter", tag: "Carving", title: "Finding the face in the log", img: "carving-blue-cry.jpg", cx: 42, cy: 30, z: 240, body: "The hollow was already there. I spent three evenings deciding whether the mouth wanted to be open or closed. Open won, and now it will not stop." },
  { id: "visitation", date: "Spring", tag: "Painting", title: "A palm is mostly weather", img: "the-visitation.jpg", cx: 34, cy: 54, z: 200, body: "I repainted these creases for a month, until the hand stopped looking like a map and started looking like a threat." },
  { id: "crowd", date: "Summer", tag: "Drawing", title: "A page full of strangers", img: "drawing-crowd-faces.jpg", cx: 46, cy: 50, z: 220, body: "I drew faces from memory until there was no white paper left, then gave the only gap to one small frightened man." },
  { id: "shield-tree", date: "Autumn", tag: "Drawing", title: "Roots that bite", img: "drawing-shield-tree.jpg", cx: 46, cy: 76, z: 220, body: "The canopy is heraldry; the roots are teeth. A family remembered only by its coats of arms, standing on what it chewed through." },
  { id: "gold-mask", date: "Late", tag: "Painting", title: "The mask needs a pole", img: "painting-gold-mask.jpg", cx: 50, cy: 68, z: 200, body: "A face has to hang on something once you take it off for the night. I left the support visible. It felt more honest than hiding it." },
  { id: "parrot-confession", date: "Early", tag: "Drawing", title: "Confession to a bird", img: "drawing-parrot-confession.jpg", cx: 68, cy: 42, z: 220, body: "He would not look at me straight on, so I drew him in profile. The parrot looked back without blinking." },
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
