"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-background/85 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-serif text-lg font-semibold tracking-tight text-foreground transition-colors hover:text-gold-soft"
        >
          {SITE.name}
        </Link>
        <ul className="hidden items-center gap-10 md:flex">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-sm font-medium transition-colors ${
                    active
                      ? "text-gold-soft"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-lg border border-gold-dim px-4 py-2 text-sm font-semibold text-gold-soft transition-colors hover:border-gold-soft hover:bg-gold/10 md:inline-flex"
          >
            Get started
          </Link>
          <button
            type="button"
            className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-border-subtle md:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`absolute h-0.5 w-5 bg-foreground transition-transform ${
                open ? "rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`absolute h-0.5 w-5 bg-foreground transition-transform ${
                open ? "-rotate-45" : "translate-y-1.5"
              }`}
            />
          </button>
        </div>
      </nav>
      {open ? (
        <div className="fixed inset-0 top-16 z-40 flex flex-col bg-background px-5 py-8 md:hidden">
          <ul className="flex flex-col gap-6">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="font-serif text-2xl font-medium text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="mt-10 inline-flex h-12 items-center justify-center rounded-lg bg-gold text-sm font-semibold text-background"
            onClick={() => setOpen(false)}
          >
            Get started
          </Link>
        </div>
      ) : null}
    </header>
  );
}
