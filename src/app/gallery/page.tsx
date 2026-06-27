import type { Metadata } from "next";
import { Container, PageHeader } from "@/components/Page";
import { Reveal } from "@/components/motion/Reveal";
import { RoomCard } from "@/components/RoomCard";
import { activeRooms, artworksByRoom } from "@/lib/data";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Paintings and drawings by Roi Roiter.",
};

export default function GalleryPage() {
  const list = activeRooms();

  return (
    <div className="pb-10">
      <PageHeader kicker="Gallery" title="All works" />

      <Container className="mt-16">
        {list.length === 0 ? (
          <p className="text-bone-muted">Works appear here once image files are added to the repository.</p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2">
            {list.map((room, i) => (
              <Reveal key={room.id} delay={(i % 2) * 0.06}>
                <RoomCard
                  room={room}
                  index={i}
                  count={artworksByRoom(room.id).length}
                  ratio="3/4"
                />
              </Reveal>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}
