import Link from "next/link";
import { SITE } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-border-subtle bg-surface/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-14 sm:px-6 sm:py-16 lg:px-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-md">
          <p className="font-serif text-xl font-semibold text-foreground">
            {SITE.name}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {SITE.tagline}
          </p>
          <p className="mt-2 text-xs text-muted/80">
            A division of {SITE.parentBrand}
          </p>
        </div>
        <div className="flex flex-col gap-4 text-sm">
          <a
            href={`tel:${SITE.phoneTel}`}
            className="font-medium text-gold-soft transition-colors hover:text-gold"
          >
            {SITE.phoneDisplay}
          </a>
          <Link
            href="/contact"
            className="w-fit text-muted transition-colors hover:text-foreground"
          >
            Contact
          </Link>
          <Link
            href="/pricing"
            className="w-fit text-muted transition-colors hover:text-foreground"
          >
            Pricing
          </Link>
        </div>
      </div>
      <div className="border-t border-border-subtle py-6">
        <p className="text-center text-xs text-muted">
          © {year} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
