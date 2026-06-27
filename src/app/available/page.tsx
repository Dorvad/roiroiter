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

  return (
    <div className="pb-10">
      <PageHeader kicker="Available" title="Works" intro={<p>Inquire from the studio.</p>} />

      <Container className="mt-14 space-y-16">
        {works.length > 0 ? (
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {works.map((a) => (
              <Reveal key={a.id}>
                <ArtworkCard art={a} />
              </Reveal>
            ))}
          </div>
        ) : (
          <p className="text-bone-muted">Nothing listed yet.</p>
        )}

        <Reveal>
          <InquiryForm className="mt-6" quickActions={["Inquire", "Request price"]} />
        </Reveal>
      </Container>
    </div>
  );
}
