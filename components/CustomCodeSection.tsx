import { MotionSection } from "@/components/MotionSection";
import { SectionWrapper } from "@/components/SectionWrapper";
import { SITE } from "@/lib/site";

type CustomCodeSectionProps = {
  className?: string;
};

export function CustomCodeSection({ className = "" }: CustomCodeSectionProps) {
  return (
    <MotionSection
      className={`border-b border-border-subtle py-20 md:py-28 ${className}`}
    >
      <SectionWrapper>
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-gold">
          {SITE.customCodeLabel}
        </p>
        <h2 className="mt-4 max-w-3xl font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          {SITE.customCodeTitle}
        </h2>
        <p className="mt-6 max-w-3xl text-lg font-medium leading-relaxed text-foreground md:text-xl">
          {SITE.customCodeLead}
        </p>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
          If you have been burned by DIY drag-and-drop builders, this is the
          difference: real performance, a hand-built site you use for one monthly
          Aurum plan, and a predictable line item, not a second platform bill
          stacked on your marketing budget.
        </p>
        <ul className="mt-10 max-w-2xl list-none space-y-4 p-0">
          {SITE.customCodeBenefits.map((line) => (
            <li
              key={line}
              className="flex gap-3 text-base leading-relaxed text-muted"
            >
              <span
                className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                aria-hidden
              />
              {line}
            </li>
          ))}
        </ul>
      </SectionWrapper>
    </MotionSection>
  );
}
