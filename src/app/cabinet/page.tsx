import type { Metadata } from "next";
import { Container, PageHeader } from "@/components/Page";
import { Reveal } from "@/components/motion/Reveal";
import {
  CabinetDrawers,
  type CabinetDrawerData,
} from "@/components/CabinetDrawers";

export const metadata: Metadata = {
  title: "The Cabinet",
  description:
    "Open the drawers of the studio: small works, wood carvings, sketches, studies, experiments, unfinished pieces, sold works, and strange objects. Some available, some only archived.",
};

const drawers: CabinetDrawerData[] = [
  {
    id: "small-works",
    label: "Small Works & Objects",
    note: "Things small enough to hold. Several are available.",
    items: [
      {
        title: "Reliquary Box for a Small Sorrow",
        image: "carved-reliquary-box.jpg",
        focus: { x: 50, y: 40, zoom: 1.2 },
        caption: "Carved walnut, brass clasp",
        status: "Available",
        href: "/artwork/reliquary-box-for-a-small-sorrow",
      },
      {
        title: "The Listening Mask",
        image: "carved-listening-mask.jpg",
        focus: { x: 50, y: 44, zoom: 1.2 },
        caption: "Carved walnut",
        status: "Available",
        href: "/artwork/the-listening-mask",
      },
      {
        title: "The Figure That Refused to Stand",
        image: "carved-figure-standing.jpg",
        focus: { x: 50, y: 45, zoom: 1.15 },
        caption: "Carved oak",
        status: "Private Collection",
        href: "/artwork/the-figure-that-refused-to-stand",
      },
      {
        title: "The Claw Reliquary",
        image: "beast-claw-reliquary.jpg",
        focus: { x: 50, y: 50, zoom: 1.4 },
        caption: "Oil & gold leaf on panel",
        status: "Private Collection",
        href: "/artwork/the-claw-reliquary",
      },
    ],
  },
  {
    id: "studies",
    label: "Studies & Sketches",
    note: "Loose drawings and the pigments they came from.",
    items: [
      {
        title: "A page of faces",
        image: "studio-sketch.jpg",
        focus: { x: 40, y: 45, zoom: 1.5 },
        caption: "Charcoal & ink, sketchbook",
        status: "Archived study",
      },
      {
        title: "Study for a Second Mouth",
        image: "face-second-mouth.jpg",
        focus: { x: 52, y: 60, zoom: 2.2 },
        caption: "Detail, oil on linen",
        status: "Reference",
      },
      {
        title: "The studio palette",
        image: "studio-pigments.jpg",
        focus: { x: 50, y: 50, zoom: 1.5 },
        caption: "Umber, bone black, ochre, gold",
        status: "In the studio",
      },
      {
        title: "Tool marks, Head No. VII",
        image: "carved-wooden-head.jpg",
        focus: { x: 55, y: 35, zoom: 2.6 },
        caption: "Detail, carved walnut",
        status: "Reference",
      },
    ],
  },
  {
    id: "in-progress",
    label: "On the Bench",
    note: "Work caught mid-argument with the material.",
    items: [
      {
        title: "Hands at the gouge",
        image: "studio-carving-detail.jpg",
        focus: { x: 50, y: 50, zoom: 1.4 },
        caption: "Carving in progress",
        status: "In progress",
      },
      {
        title: "Brass works of the moth",
        image: "absurd-machine-moth.jpg",
        focus: { x: 42, y: 55, zoom: 2.3 },
        caption: "Detail",
        status: "Available",
        href: "/artwork/the-machine-that-dreamt-it-was-a-moth",
      },
      {
        title: "The offering table, lit",
        image: "ritual-offering.jpg",
        focus: { x: 40, y: 48, zoom: 2.0 },
        caption: "Detail",
        status: "Available",
        href: "/artwork/the-offering-table",
      },
    ],
  },
  {
    id: "departed",
    label: "Sold & Departed",
    note: "Works that have gone to live elsewhere. Still archived here.",
    items: [
      {
        title: "Skull of the Patient Animal",
        image: "face-skull-animal.jpg",
        focus: { x: 50, y: 44, zoom: 1.4 },
        caption: "Oil on linen",
        status: "Sold",
        href: "/artwork/skull-of-the-patient-animal",
      },
      {
        title: "Icon for an Unnamed Rite",
        image: "ritual-icon.jpg",
        focus: { x: 50, y: 38, zoom: 1.4 },
        caption: "Egg tempera & gold",
        status: "Sold",
        href: "/artwork/icon-for-an-unnamed-rite",
      },
      {
        title: "Mask for a Forgotten Saint",
        image: "face-mask-saint.jpg",
        focus: { x: 50, y: 42, zoom: 1.4 },
        caption: "Oil & gesso on panel",
        status: "Private Collection",
        href: "/artwork/mask-for-a-forgotten-saint",
      },
    ],
  },
  {
    id: "fragments",
    label: "Experiments & Fragments",
    note: "Off-cuts, dead ends, and details that never became a whole.",
    items: [
      {
        title: "A mended seam",
        image: "body-tender-wound.jpg",
        focus: { x: 50, y: 50, zoom: 2.4 },
        caption: "Fragment, oil & gold",
        status: "Archived",
      },
      {
        title: "Dawn on the sleeper",
        image: "body-sleeper-hill.jpg",
        focus: { x: 70, y: 30, zoom: 2.2 },
        caption: "Fragment",
        status: "Archived",
      },
      {
        title: "Empty chairs",
        image: "absurd-committee.jpg",
        focus: { x: 20, y: 62, zoom: 2.0 },
        caption: "Fragment",
        status: "Archived",
      },
      {
        title: "A monument of cutlery",
        image: "absurd-tiny-pilgrims.jpg",
        focus: { x: 65, y: 45, zoom: 2.4 },
        caption: "Fragment",
        status: "Archived",
      },
    ],
  },
];

export default function CabinetPage() {
  return (
    <div className="pb-10">
      <PageHeader
        kicker="An Interactive Drawer"
        title="The Cabinet"
        intro={
          <p>
            This is the back room of the studio, rendered as a set of drawers.
            Inside are small works, studies, experiments, unfinished pieces, sold
            works, and strange objects. Some can be acquired; others are kept only
            for the record. Open a drawer and see what is inside.
          </p>
        }
      />

      <Container className="mt-14 sm:mt-16">
        <Reveal>
          <CabinetDrawers drawers={drawers} />
        </Reveal>
      </Container>
    </div>
  );
}
