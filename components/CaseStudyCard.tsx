import Image from "next/image";
import { SITE } from "@/lib/site";

export type CaseStudyCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href?: string;
  badge?: string;
  comingSoon?: boolean;
  /** Defaults to site-wide “custom coded” line; pass empty string to hide */
  buildNote?: string;
};

export function CaseStudyCard({
  title,
  description,
  imageSrc,
  imageAlt,
  href,
  badge,
  comingSoon,
  buildNote = SITE.caseStudyBuildNote,
}: CaseStudyCardProps) {
  const showBuildLine = !comingSoon && Boolean(buildNote);
  const inner = (
    <>
      <div className="relative aspect-[16/10] overflow-hidden rounded-t-xl bg-surface-hover">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className={`object-cover transition-transform duration-500 ${
            comingSoon ? "opacity-40 grayscale" : "group-hover:scale-[1.02]"
          }`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {comingSoon ? (
          <div className="absolute inset-0 flex items-center justify-center bg-background/50">
            <span className="rounded-full border border-border-subtle px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Coming soon
            </span>
          </div>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col border-t border-border-subtle p-6">
        {badge ? (
          <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.25em] text-gold">
            {badge}
          </p>
        ) : null}
        <h3 className="font-serif text-xl font-semibold text-foreground md:text-2xl">
          {title}
        </h3>
        {showBuildLine ? (
          <p className="mt-2 text-xs font-medium text-gold">{buildNote}</p>
        ) : null}
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
          {description}
        </p>
        {!comingSoon && href ? (
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gold-soft transition-colors group-hover:text-gold">
            View live site
            <span aria-hidden>→</span>
          </span>
        ) : null}
      </div>
    </>
  );

  const cardClass =
    "group flex h-full flex-col overflow-hidden rounded-xl border border-border-subtle bg-surface transition-[border-color,box-shadow] duration-300 hover:border-gold-dim hover:shadow-[0_0_0_1px_rgba(201,162,39,0.1)]";

  if (comingSoon || !href) {
    return <div className={cardClass}>{inner}</div>;
  }

  return (
    <a href={href} className={cardClass} target="_blank" rel="noopener noreferrer">
      {inner}
    </a>
  );
}
