import type { Metadata } from "next";
import { Container, PageHeader } from "@/components/Page";
import { InquiryForm } from "@/components/InquiryForm";
import { CollectorSignup } from "@/components/CollectorSignup";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="pb-10">
      <PageHeader kicker="Contact" title="Studio" intro={<p>Email or use the form below.</p>} />

      <Container className="mt-12 grid gap-12 lg:grid-cols-2">
        <div>
          <a href={`mailto:${site.email}`} className="font-display text-2xl text-bone hover:text-gold">
            {site.email}
          </a>
          <p className="mt-2 text-sm text-bone-muted">{site.location}</p>
          <InquiryForm className="mt-8" quickActions={["Inquire", "Commission"]} />
        </div>
        <CollectorSignup variant="full" />
      </Container>
    </div>
  );
}
