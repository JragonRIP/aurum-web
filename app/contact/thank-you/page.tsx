import type { Metadata } from "next";
import Link from "next/link";
import { SectionWrapper } from "@/components/SectionWrapper";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Thank you",
  description: "Your message was sent to Aurum Web Design.",
  robots: { index: false, follow: true },
};

export default function ContactThankYouPage() {
  return (
    <section className="py-20 md:py-28">
      <SectionWrapper className="mx-auto max-w-lg text-center">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-gold">
          {SITE.name}
        </p>
        <h1 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Message received
        </h1>
        <p className="mt-6 text-muted leading-relaxed">
          Thanks for reaching out. We will follow up by email or phone as soon
          as we can.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-gold px-8 text-sm font-semibold text-background transition-colors hover:bg-gold-soft"
          >
            Back to home
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-lg border border-gold-dim px-8 text-sm font-semibold text-gold-soft transition-colors hover:border-gold-soft hover:bg-gold/10"
          >
            Send another message
          </Link>
        </div>
      </SectionWrapper>
    </section>
  );
}
