import type { Metadata } from "next";
import { Container, PageHeader } from "@/components/Page";
import { Reveal } from "@/components/motion/Reveal";
import { ArtworkCard } from "@/components/ArtworkCard";
import { InquiryForm } from "@/components/InquiryForm";
import { availableArtworks } from "@/lib/data";

export const metadata: Metadata = {
  title: "Available Works",
};

export default function AvailablePage() {
  const works = availableArtworks();
  const paintings = works.filter((a) => a.type === "painting");
  const drawings = works.filter((a) => a.type === "drawing");

  return (
    <div className="pb-10">
      <PageHeader kicker="Available" title="Works for sale" intro={<p>Inquire directly from the studio.</p>} />

      <Container className="mt-14 space-y-16">
        {paintings.length > 0 && (
          <section>
            <h2 className="label label-gold">Paintings</h2>
            <div className="mt-8 grid gap-x-6 gap-y-12 sm:grid-cols-2">
              {paintings.map((a) => (
                <Reveal key={a.id}>
                  <ArtworkCard art={a} />
                </Reveal>
              ))}
            </div>
          </section>
        )}

        {drawings.length > 0 && (
          <section>
            <h2 className="label label-gold">Drawings</h2>
            <div className="mt-8 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {drawings.map((a) => (
                <Reveal key={a.id}>
                  <ArtworkCard art={a} />
                </Reveal>
              ))}
            </div>
          </section>
        )}

        {works.length === 0 && (
          <p className="text-bone-muted">Nothing listed yet.</p>
        )}

        <Reveal>
          <h2 className="label label-gold">Inquire</h2>
          <InquiryForm className="mt-6" quickActions={["Inquire about a work", "Request price"]} />
        </Reveal>
      </Container>
    </div>
  );
}
