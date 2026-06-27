export interface StudioNote {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  body: string[];
  image: string;
  imageFocus?: { x: number; y: number; zoom: number };
  tags: string[];
}

export const studioNotes: StudioNote[] = [
  {
    id: "the-grain-decides",
    date: "March 2024",
    title: "The Grain Decides",
    excerpt:
      "On carving Wooden Head No. VII, and learning, again, to follow rather than command the wood.",
    body: [
      "There is a moment, three or four days into a head, when the block stops being wood and becomes a person who disagrees with me. The grain runs where it wants. A knot appears exactly where I had planned an eye.",
      "I have learned to take this as instruction rather than insult. The seventh head closed its own eyes; I had meant it to look out. When I tried to force the lids open the cheek split, and I understood I was carving someone who preferred to listen.",
      "So I left the tool marks. They are the handwriting of the argument \u2014 my chisel, the wood's refusal, the truce we reached by lamplight.",
    ],
    image: "studio-carving-detail.jpg",
    tags: ["wood", "process", "face"],
  },
  {
    id: "a-vocabulary-of-pigment",
    date: "January 2024",
    title: "A Vocabulary of Pigment",
    excerpt:
      "Burnt umber, bone black, a little ochre, and the single thread of gold I allow myself per painting.",
    body: [
      "My palette is small on purpose. Burnt umber for the dark that still remembers being warm. Bone black, which is exactly what it sounds like, ground from the past. A little ochre for the hours that forgive.",
      "And gold \u2014 one thread per painting, never more. Gold is the most honest liar in the box. Used sparingly it reads as attention; used freely it reads as money. I am painting attention.",
    ],
    image: "studio-pigments.jpg",
    tags: ["materials", "process"],
  },
  {
    id: "notes-toward-the-guardian",
    date: "November 2023",
    title: "Notes Toward the Guardian",
    excerpt:
      "The largest painting of the year began as a question: what would protection look like if it had to wear death's face to be believed?",
    body: [
      "I sketched the guardian forty times before the lioness arrived. Without her he was only a threat. With her asleep against his arm, the skull mask became a costume worn out of love \u2014 the borrowed teeth of someone too gentle to be feared on his own terms.",
      "This is the secret of most fierce things I have known. The ferocity is rented. Underneath it, something soft is being kept from harm.",
    ],
    image: "beast-guardian.jpg",
    imageFocus: { x: 50, y: 30, zoom: 1.2 },
    tags: ["beast", "process", "sketch"],
  },
  {
    id: "the-second-mouth",
    date: "September 2023",
    title: "The Second Mouth",
    excerpt: "A short reflection on painting the things a face cannot quite say.",
    body: [
      "Everyone I have loved keeps two mouths: one for the table and one for the dark. I wanted to paint the second one without turning it into a horror.",
      "It took weeks to find the right tenderness. The trick was to paint it as a fact, not an event \u2014 the way you might paint a scar, or a freckle, or any other place where the inside has reached the surface and decided to stay.",
    ],
    image: "face-second-mouth.jpg",
    imageFocus: { x: 50, y: 50, zoom: 1.15 },
    tags: ["face", "absurdity"],
  },
  {
    id: "minor-gods",
    date: "June 2023",
    title: "In Praise of Minor Gods",
    excerpt:
      "On the procession of household idols too small to be cruel, and why I keep painting ceremony.",
    body: [
      "I am fond of gods too minor to be cruel \u2014 the ones who guard a drawer, a doorway, a particular hour of the afternoon. They process by candlelight in the painting, dignified and slightly ridiculous, as we all are in ceremony.",
      "Ritual, for me, is not belief. It is the choreography of paying attention. A procession is simply attention given a route to walk.",
    ],
    image: "ritual-procession.jpg",
    imageFocus: { x: 40, y: 50, zoom: 1.15 },
    tags: ["ritual", "absurdity"],
  },
  {
    id: "an-address-for-grief",
    date: "April 2024",
    title: "An Address for Grief",
    excerpt:
      "Why I carve small empty boxes, and leave a sleeping face to do the keeping.",
    body: [
      "I make reliquary boxes to give grief a dignified address. They are always empty. The face on the lid does the keeping \u2014 it sleeps over the sorrow the way a dog sleeps across a doorway.",
      "People ask what to put inside. Nothing, I say. The box is for the shape of the absence, not its contents.",
    ],
    image: "carved-reliquary-box.jpg",
    imageFocus: { x: 50, y: 45, zoom: 1.15 },
    tags: ["wood", "ritual", "death"],
  },
];

export const studioNoteById = (id: string) =>
  studioNotes.find((n) => n.id === id);

/* ------------------------------------------------------------------ */
/* About                                                              */
/* ------------------------------------------------------------------ */

export const about = {
  portrait: "studio-scene.jpg",
  intro:
    "Roi Roiter is a painter and woodcarver working from a single dim studio at the edge of the city. His work stages impossible encounters between faces, bodies, beasts, machines, wounds, and memory.",
  biography: [
    "Roi Roiter (b. 1984) makes paintings and carved objects that read like fragments recovered from a private mythology. Trained first as a restorer of old panels, he learned his palette from the things he was asked to repair \u2014 the burnt umbers and tarnished golds of pictures that had survived longer than their makers.",
    "He left restoration to make his own ruins. Since then he has worked almost entirely from the studio, in series: rooms of faces, of bodies, of beasts, of small ceremonies. Between paintings he carves \u2014 heads, masks, reluctant figures, boxes for safekeeping \u2014 the way other people keep a journal.",
    "His work has been shown quietly, in the way he prefers: a handful of rooms, a small circle of collectors, and the long correspondence that grows between an artist and the people who live with the work.",
  ],
  statement: [
    "I am trying to paint the moment before a thing becomes another thing \u2014 before a body becomes a landscape, before a face admits it is a skull, before a machine remembers it once wanted to be an animal.",
    "Nothing in this work is meant to frighten. The dark is warm. The strangeness is a kind of honesty the skin could no longer hold. I want the rooms to feel like a museum kept by one person, at night, for the love of a few impossible things.",
  ],
  materials: [
    {
      title: "Paint",
      text: "Oil on linen and panel, built in thin warm layers over a dark ground. A small palette: burnt umber, bone black, ochre, lead white, a single thread of gold leaf per picture.",
    },
    {
      title: "Wood",
      text: "Walnut and oak, carved by hand and finished in wax. Tool marks are kept, not sanded away \u2014 they are the handwriting of the making.",
    },
    {
      title: "Editions",
      text: "Archival pigment prints on cotton rag and small cast reliefs, each signed, numbered, and released in modest editions from the studio.",
    },
  ],
  exhibitions: [
    { year: "2024", text: "A Cabinet of Faces \u2014 private viewing room, the studio" },
    { year: "2023", text: "The Beast Room \u2014 group presentation, Galerie Vœu, Brussels" },
    { year: "2022", text: "Small Gods \u2014 two-person show, Atelier Nord" },
    { year: "2021", text: "Restorations \u2014 works on recovered panels, project space" },
  ],
};
