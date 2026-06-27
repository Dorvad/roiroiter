import type { Metadata } from "next";
import { Container, PageHeader } from "@/components/Page";
import { Reveal } from "@/components/motion/Reveal";
import { CabinetDrawers, type CabinetDrawerData } from "@/components/CabinetDrawers";
import { artworks } from "@/lib/data";

export const metadata: Metadata = {
  title: "The Cabinet",
};

const toItems = (type: "drawing" | "carving") =>
  artworks
    .filter((a) => a.type === type)
    .map((a) => ({
      title: a.title,
      image: a.image,
      status: a.status,
      href: `/artwork/${a.id}`,
      focus: a.face,
    }));

const drawers: CabinetDrawerData[] = [
  {
    id: "drawings",
    label: "Sketchbook",
    note: "Ink on paper",
    items: toItems("drawing"),
  },
  {
    id: "carvings",
    label: "Carvings",
    note: "Wood & paint",
    items: toItems("carving"),
  },
];

export default function CabinetPage() {
  const active = drawers.filter((d) => d.items.length > 0);

  return (
    <div className="pb-10">
      <PageHeader kicker="Cabinet" title="Drawers" />
      <Container className="mt-12">
        {active.length === 0 ? (
          <p className="text-bone-muted">Empty.</p>
        ) : (
          <Reveal>
            <CabinetDrawers drawers={active} />
          </Reveal>
        )}
      </Container>
    </div>
  );
}
