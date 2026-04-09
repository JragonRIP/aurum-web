import Link from "next/link";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { ContactForm } from "@/components/ContactForm";
import { MotionSection } from "@/components/MotionSection";
import { PricingCard } from "@/components/PricingCard";
import { SectionWrapper } from "@/components/SectionWrapper";
import { WhyAurumItem } from "@/components/WhyAurumItem";
import { PRICING_TIERS } from "@/lib/pricing";
import { SITE } from "@/lib/site";

const WHY_ITEMS = [
  {
    title: "Trades-first structure",
    body: "Your services, service area, and proof front and center, not vague “solutions” copy. Built so a cold lead knows what you do and what to do next.",
  },
  {
    title: "Fast turnaround",
    body: "A lean build so you go live without waiting months. Polished layouts and performance still come standard.",
  },
  {
    title: "Simple monthly model",
    body: "Predictable pricing and included updates, with no surprise invoices when you need hours or copy tweaked.",
  },
  {
    title: "Mobile-first",
    body: "Most estimates happen on a phone between jobs. Every layout is tested for thumb reach, speed, and clarity on small screens.",
  },
  {
    title: "Clear partnership",
    body: "Straightforward scope, direct communication, and support when something needs fixing. You run the work; we keep the site aligned with it.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative flex min-h-[100dvh] flex-col overflow-hidden border-b border-border-subtle">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          aria-hidden
        >
          <div className="absolute -left-24 top-1/4 h-72 w-72 rounded-full border border-gold-dim/40" />
          <div className="absolute right-[-10%] top-[12%] h-96 w-96 rotate-12 border border-gold-dim/25" />
          <div className="absolute bottom-[18%] left-[20%] h-48 w-48 border border-gold-dim/20" />
        </div>
        <SectionWrapper className="relative pt-[calc(4rem+20px)] pb-24 md:pb-32">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
            {SITE.parentBrand}
          </p>
          <h1 className="mt-6 max-w-4xl font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[3.5rem]">
            Trades websites that look sharp and win you work.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
            We&apos;re Upper Peninsula proud, based in Michigan&apos;s U.P.,
            building professional sites for contractors and trades: clear
            calls-to-action, fast load times on the job site, and a presence
            that matches how seriously you run your business.
          </p>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#pricing"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-gold px-8 text-sm font-semibold text-background transition-colors hover:bg-gold-soft"
            >
              Get started
            </a>
            <Link
              href="/work"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-gold-dim px-8 text-sm font-semibold text-gold-soft transition-colors hover:border-gold-soft hover:bg-gold/10"
            >
              View work
            </Link>
          </div>
        </SectionWrapper>
      </section>

      <MotionSection className="border-b border-border-subtle py-20 md:py-28">
        <SectionWrapper>
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-gold">
            Why Aurum
          </p>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Web design for trades and local service businesses.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
            You get one focused partner: sites for people who earn trust in the
            field, not in a slide deck. Below is what that looks like in
            practice.
          </p>
          <ul className="mt-12 grid list-none gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_ITEMS.map(({ title, body }) => (
              <WhyAurumItem key={title} title={title} body={body} />
            ))}
          </ul>
        </SectionWrapper>
      </MotionSection>

      <MotionSection className="border-b border-border-subtle py-20 md:py-28">
        <SectionWrapper>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-gold">
                Selected work
              </p>
              <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                Portfolio
              </h2>
            </div>
            <Link
              href="/work"
              className="text-sm font-medium text-gold-soft transition-colors hover:text-gold"
            >
              All projects →
            </Link>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <CaseStudyCard
              badge="Case Study 01"
              title="Aurum Auto Detail"
              description={SITE.aurumAutoDetailCaseStudy}
              imageSrc={SITE.aurumPortfolioImageSrc}
              imageAlt={SITE.aurumPortfolioImageAlt}
              href={SITE.aurumAutoDetailUrl}
            />
            <CaseStudyCard
              title="More work on the way"
              description="Additional case studies will appear here as new projects launch."
              imageSrc="/images/case-study-aurum.svg"
              imageAlt=""
              comingSoon
            />
          </div>
        </SectionWrapper>
      </MotionSection>

      <MotionSection
        id="pricing"
        className="scroll-mt-24 border-b border-border-subtle py-20 md:py-28"
      >
        <SectionWrapper>
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-gold">
            Pricing
          </p>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Straightforward monthly plans. Upgrade when your business grows.
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            See the{" "}
            <Link href="/pricing" className="text-gold-soft underline-offset-4 hover:underline">
              full pricing page
            </Link>{" "}
            for more detail and FAQs.
          </p>
          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {PRICING_TIERS.map((tier) => (
              <PricingCard
                key={tier.id}
                name={tier.name}
                tagline={tier.tagline}
                price={tier.price}
                features={tier.features}
                cta={tier.cta}
                highlighted={tier.highlighted}
              />
            ))}
          </div>
        </SectionWrapper>
      </MotionSection>

      <MotionSection className="py-20 md:py-28">
        <SectionWrapper>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-gold">
                Contact
              </p>
              <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                Tell us about your business.
              </h2>
              <p className="mt-4 text-muted">
                Share your trade, service area, and what you need online. We
                will follow up by email or phone.
              </p>
              <a
                href={`tel:${SITE.phoneTel}`}
                className="mt-8 inline-block text-lg font-medium text-gold-soft transition-colors hover:text-gold"
              >
                {SITE.phoneDisplay}
              </a>
            </div>
            <div className="rounded-xl border border-border-subtle bg-surface p-6 sm:p-8">
              <ContactForm compact />
            </div>
          </div>
        </SectionWrapper>
      </MotionSection>
    </>
  );
}
