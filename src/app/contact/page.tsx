import type { Metadata } from "next";
import { Container, PageHeader } from "@/components/Page";
import { Reveal } from "@/components/motion/Reveal";
import { InquiryForm } from "@/components/InquiryForm";
import { CollectorSignup } from "@/components/CollectorSignup";
import { Kicker, Hairline } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Collector List",
  description:
    "Reach the studio directly for acquisitions, studio visits, video viewings, and commissions \u2014 and join the private collector list.",
};

export default function ContactPage() {
  return (
    <div className="pb-10">
      <PageHeader
        kicker="Contact / Collector List"
        title="Reach the studio"
        intro={
          <p>
            Everything is handled personally, by one person. Write for
            acquisitions, prices, additional images, studio visits, private video
            viewings, or commissions. There is no gallery in between.
          </p>
        }
      />

      <Container className="mt-16 sm:mt-20">
        <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <Reveal>
            <Kicker gold>Write to the studio</Kicker>
            <p className="prose-serif mt-3 max-w-xl text-base">
              Tell me what you are drawn to, or what you are circling. I reply
              personally, usually within a few days.
            </p>
            <InquiryForm
              className="mt-7"
              quickActions={[
                "Inquire about a work",
                "Arrange a studio visit or video viewing",
                "Discuss a commission",
                "Join the collector list",
              ]}
            />

            <Hairline className="my-12" />

            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <div className="label text-bone-muted">Direct</div>
                <a
                  href={`mailto:${site.email}`}
                  className="link-underline mt-2 block font-display text-2xl text-bone"
                >
                  {site.email}
                </a>
              </div>
              <div>
                <div className="label text-bone-muted">Studio</div>
                <p className="mt-2 font-display text-2xl text-bone">
                  {site.location}
                </p>
                <p className="mt-1 text-sm text-bone-muted">
                  Instagram &middot; @{site.instagram}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="texture-paper border border-[var(--hairline-gold)] p-8">
              <CollectorSignup variant="full" />
              <Hairline className="my-8" />
              <p className="prose-serif text-base text-bone-muted">
                The collector list is small and quiet. New work is often offered
                here first, before it appears in the rooms. You may leave at any
                time, and you will never be sold to &mdash; only invited.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </div>
  );
}
