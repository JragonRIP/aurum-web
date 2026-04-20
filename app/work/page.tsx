import type { Metadata } from "next";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { MotionSection } from "@/components/MotionSection";
import { SectionWrapper } from "@/components/SectionWrapper";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies and portfolio work from Aurum Web Design: websites for trades and local businesses.",
  openGraph: {
    title: "Work | Aurum Web Design",
    description:
      "Case studies and portfolio work: websites for trades and local businesses.",
    url: "/work",
  },
};

const PLACEHOLDER_COUNT = 0;

export default function WorkPage() {
  return (
    <MotionSection className="py-20 md:py-28">
      <SectionWrapper>
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-gold">
          Portfolio
        </p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          Work we have shipped for trades and local brands.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          Each project is designed for mobile-first leads, clear services, and
          credibility on the first scroll. New case studies slot into this grid
          as simple additional cards.
        </p>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          <CaseStudyCard
            badge="Case Study 01"
            title="Aurum Auto Detail"
            description={SITE.aurumAutoDetailCaseStudy}
            imageSrc={SITE.aurumPortfolioImageSrc}
            imageAlt={SITE.aurumPortfolioImageAlt}
            href={SITE.aurumAutoDetailUrl}
          />
          <CaseStudyCard
            badge="Case Study 02"
            title="Wendricks Truss, Inc."
            description={SITE.wendricksTrussCaseStudy}
            imageSrc={SITE.wendricksPortfolioImageSrc}
            imageAlt={SITE.wendricksPortfolioImageAlt}
            href={SITE.wendricksTrussUrl}
          />
          <CaseStudyCard
            badge="Case Study 03"
            title="Stop 'N Go 2.0"
            description={SITE.stopNGoCaseStudy}
            imageSrc={SITE.stopNGoPortfolioImageSrc}
            imageAlt={SITE.stopNGoPortfolioImageAlt}
            href={SITE.stopNGoUrl}
          />
          <CaseStudyCard
            badge="Case Study 04"
            title="Edelweiss Coffee"
            description={SITE.edelweissCaseStudy}
            imageSrc={SITE.edelweissPortfolioImageSrc}
            imageAlt={SITE.edelweissPortfolioImageAlt}
            href={SITE.edelweissCoffeeUrl}
          />
          {Array.from({ length: PLACEHOLDER_COUNT }, (_, i) => (
            <CaseStudyCard
              key={i}
              title="Coming soon"
              description="Another trades or local business site will be featured here. Swap the image, title, and link when the project is ready to publish."
              imageSrc="/images/case-study-aurum.svg"
              imageAlt=""
              comingSoon
            />
          ))}
        </div>
      </SectionWrapper>
    </MotionSection>
  );
}
