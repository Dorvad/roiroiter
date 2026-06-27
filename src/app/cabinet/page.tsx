import type { Metadata } from "next";
import { Container, PageHeader } from "@/components/Page";
import { Reveal } from "@/components/motion/Reveal";
import { CabinetDrawers, type CabinetDrawerData } from "@/components/CabinetDrawers";
import { artworks } from "@/lib/data";

export const metadata: Metadata = {
  title: "The Cabinet",
};

const drawers: CabinetDrawerData[] = [
  {
    id: "drawings",
    label: "Sketchbook",
    note: "Ink & marker on paper",
    items: artworks
      .filter((a) => a.type === "drawing")
      .map((a) => ({
        title: a.title,
        image: a.image,
        status: a.status,
        href: `/artwork/${a.id}`,
      })),
  },
];

export default function CabinetPage() {
  return (
    <div className="pb-10">
      <PageHeader kicker="Cabinet" title="Drawers" />
      <Container className="mt-12">
        {drawers[0].items.length === 0 ? (
          <p className="text-bone-muted">Empty.</p>
        ) : (
          <Reveal>
            <CabinetDrawers drawers={drawers} />
          </Reveal>
        )}
      </Container>
    </div>
  );
}
