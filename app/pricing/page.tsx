import type { Metadata } from "next";
import Link from "next/link";
import { MotionSection } from "@/components/MotionSection";
import { PricingCard } from "@/components/PricingCard";
import { SectionWrapper } from "@/components/SectionWrapper";
import { FaqAccordion } from "@/components/FaqAccordion";
import { PRICING_TIERS } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Monthly website plans for contractors and trades: Starter, Pro, and Store tiers. Aurum Web Design.",
  openGraph: {
    title: "Pricing | Aurum Web Design",
    description:
      "Monthly website plans for contractors and trades: Starter, Pro, and Store.",
    url: "/pricing",
  },
};

export default function PricingPage() {
  return (
    <>
      <MotionSection className="border-b border-border-subtle py-20 md:py-28">
        <SectionWrapper>
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-gold">
            Pricing
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            Plans that stay predictable while your business grows.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Every tier includes a site built for trades: fast on phones, easy to
            navigate after a long day on the job, and structured to turn
            visitors into calls and bookings. Below is a deeper look at what
            each plan is designed to solve.
          </p>
          <div className="mt-14 grid gap-10 lg:grid-cols-3">
            {PRICING_TIERS.map((tier) => (
              <div key={tier.id} className="flex flex-col gap-6">
                <PricingCard
                  name={tier.name}
                  tagline={tier.tagline}
                  price={tier.price}
                  features={tier.features}
                  cta={tier.cta}
                  highlighted={tier.highlighted}
                />
                <p className="text-sm leading-relaxed text-muted">
                  {tier.detail}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-sm text-muted">
            Not sure which fit is right?{" "}
            <Link
              href="/contact"
              className="font-medium text-gold-soft underline-offset-4 hover:underline"
            >
              Contact us
            </Link>{" "}
            and we will point you in the right direction.
          </p>
        </SectionWrapper>
      </MotionSection>

      <MotionSection className="py-20 md:pb-28">
        <SectionWrapper>
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-gold">
            FAQ
          </p>
          <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Questions, answered.
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-muted">
            Tap a question to open or close the answer.
          </p>
          <FaqAccordion />
        </SectionWrapper>
      </MotionSection>
    </>
  );
}
