import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { MotionSection } from "@/components/MotionSection";
import { SectionWrapper } from "@/components/SectionWrapper";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Aurum Web Design: websites for contractors and trades. Call or send a message.",
  openGraph: {
    title: "Contact | Aurum Web Design",
    description:
      "Get in touch about a new website or monthly plan for your trades business.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <MotionSection className="py-20 md:py-28">
      <SectionWrapper>
        <div className="mx-auto max-w-xl">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-gold">
            Contact
          </p>
          <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            Let&apos;s talk about your site.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Send a short note about your trade, market, and what you need. We
            typically respond within one business day, often sooner during the
            week.
          </p>
          <a
            href={`tel:${SITE.phoneTel}`}
            className="mt-8 inline-block text-xl font-medium text-gold-soft transition-colors hover:text-gold"
          >
            {SITE.phoneDisplay}
          </a>
          <div className="mt-12 rounded-xl border border-border-subtle bg-surface p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </SectionWrapper>
    </MotionSection>
  );
}
