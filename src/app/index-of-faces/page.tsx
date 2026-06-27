import type { Metadata } from "next";
import { Container, PageHeader } from "@/components/Page";
import { Reveal } from "@/components/motion/Reveal";
import { FaceTile } from "@/components/FaceTile";
import { faces } from "@/lib/data";

export const metadata: Metadata = {
  title: "Index of Faces",
  description:
    "A visual archive of the recurring faces, masks, heads, and expressions that return across Roi Roiter's paintings and carved objects. Hover a face to glimpse the work it belongs to.",
};

export default function IndexOfFacesPage() {
  const list = faces();

  return (
    <div className="pb-10">
      <PageHeader
        kicker="A Recurring Population"
        title="Index of Faces"
        intro={
          <p>
            The same heads return across paintings and carvings, wearing
            different centuries and materials. This is the index of that
            population &mdash; cropped close, gathered together. Hover a face to
            glimpse the work it belongs to; choose one to enter it.
          </p>
        }
      />

      <Container className="mt-16 sm:mt-20">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
          {list.map((art, i) => (
            <Reveal key={art.id} delay={(i % 5) * 0.05}>
              <FaceTile art={art} />
            </Reveal>
          ))}
        </div>
      </Container>

      <Container className="mt-20">
        <Reveal>
          <p className="deco-quote mx-auto max-w-2xl text-center text-2xl leading-snug text-bone-muted">
            &ldquo;Everyone I have ever loved keeps two faces: one for the table,
            and one for the dark.&rdquo;
          </p>
        </Reveal>
      </Container>
    </div>
  );
}
