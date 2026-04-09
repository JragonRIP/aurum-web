import Link from "next/link";

export type PricingCardProps = {
  name: string;
  tagline: string;
  price: string;
  features: string[];
  cta: string;
  ctaHref?: string;
  highlighted?: boolean;
};

export function PricingCard({
  name,
  tagline,
  price,
  features,
  cta,
  ctaHref = "/contact",
  highlighted,
}: PricingCardProps) {
  return (
    <article
      className={`group relative flex flex-col rounded-xl border border-border-subtle bg-surface p-8 transition-[border-color,box-shadow] duration-300 hover:border-gold-dim hover:shadow-[0_0_0_1px_rgba(201,162,39,0.12)] ${
        highlighted
          ? "border-gold-dim shadow-[0_0_0_1px_rgba(201,162,39,0.18)] md:scale-[1.02] md:z-[1]"
          : ""
      }`}
    >
      {highlighted ? (
        <p className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-gold-dim bg-background px-3 py-0.5 text-[10px] font-medium uppercase tracking-[0.2em] text-gold-soft">
          Most popular
        </p>
      ) : null}
      <div className="mb-6">
        <h3 className="font-serif text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          {name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{tagline}</p>
      </div>
      <p className="font-serif text-4xl font-semibold text-gold-soft md:text-[2.75rem]">
        {price}
      </p>
      <Link
        href={ctaHref}
        className={`mt-8 inline-flex h-12 w-full items-center justify-center rounded-lg text-sm font-semibold transition-colors ${
          highlighted
            ? "bg-gold text-background hover:bg-gold-soft"
            : "border border-gold-dim text-gold-soft hover:border-gold-soft hover:bg-gold/10"
        }`}
      >
        {cta}
      </Link>
      <ul className="mt-8 flex flex-col gap-3 text-sm text-muted">
        {features.map((f) => (
          <li key={f} className="flex gap-2">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold/80" />
            <span className="leading-relaxed text-foreground/90">{f}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
