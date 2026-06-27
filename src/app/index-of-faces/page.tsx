import type { Metadata } from "next";
import { Container, PageHeader } from "@/components/Page";
import { Reveal } from "@/components/motion/Reveal";
import { FaceTile } from "@/components/FaceTile";
import { faces } from "@/lib/data";

export const metadata: Metadata = {
  title: "Index of Faces",
};

export default function IndexOfFacesPage() {
  const list = faces();

  return (
    <div className="pb-10">
      <PageHeader kicker="Faces" title="Index of Faces" />
      <Container className="mt-14">
        {list.length === 0 ? (
          <p className="text-bone-muted">No faces indexed yet.</p>
        ) : (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {list.map((art, i) => (
              <Reveal key={art.id} delay={(i % 4) * 0.04}>
                <FaceTile art={art} />
              </Reveal>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}
