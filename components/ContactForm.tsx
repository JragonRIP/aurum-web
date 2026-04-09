"use client";

import { useMemo } from "react";
import { SITE } from "@/lib/site";

type ContactFormProps = {
  /** Shorter field labels on home teaser */
  compact?: boolean;
  className?: string;
};

export function ContactForm({ compact, className = "" }: ContactFormProps) {
  const action = useMemo(() => {
    if (!SITE.formSubmitConfigured) return "";
    return `https://formsubmit.co/${encodeURIComponent(SITE.formSubmitEmail)}`;
  }, []);

  if (!SITE.formSubmitConfigured) {
    return (
      <div
        className={`rounded-xl border border-border-subtle bg-surface/80 p-6 text-sm text-muted ${className}`}
      >
        <p className="font-medium text-foreground">Form is not connected yet</p>
        <p className="mt-3 leading-relaxed">
          Add{" "}
          <code className="rounded bg-background px-1.5 py-0.5 text-xs text-gold-soft">
            NEXT_PUBLIC_FORMSUBMIT_EMAIL
          </code>{" "}
          to{" "}
          <code className="rounded bg-background px-1.5 py-0.5 text-xs text-gold-soft">
            .env.local
          </code>{" "}
          (copy from{" "}
          <code className="rounded bg-background px-1.5 py-0.5 text-xs text-gold-soft">
            .env.example
          </code>
          ). Restart the dev server. On the first submit, FormSubmit emails you
          a one-time link to activate the form.
        </p>
        <p className="mt-3 leading-relaxed">
          For the thank-you page after submit, set{" "}
          <code className="rounded bg-background px-1.5 py-0.5 text-xs text-gold-soft">
            NEXT_PUBLIC_SITE_URL
          </code>{" "}
          to your live URL on Vercel (or{" "}
          <code className="text-xs text-gold-soft">http://localhost:3000</code>{" "}
          locally).
        </p>
      </div>
    );
  }

  return (
    <form
      action={action}
      method="POST"
      className={`relative flex flex-col gap-5 ${className}`}
    >
      <input type="hidden" name="_subject" value="Aurum Web Design: inquiry" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      {SITE.formSubmitThankYouUrl ? (
        <input type="hidden" name="_next" value={SITE.formSubmitThankYouUrl} />
      ) : null}

      {/* Honeypot: leave empty; FormSubmit rejects spam if filled */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="pointer-events-none absolute -left-[9999px] h-0 max-h-0 w-0 overflow-hidden opacity-0"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm">
          <span className="text-muted">Name</span>
          <input
            required
            name="name"
            type="text"
            autoComplete="name"
            className="rounded-lg border border-border-subtle bg-background px-4 py-3 text-foreground outline-none transition-[border-color,box-shadow] focus:border-gold-dim focus:ring-1 focus:ring-gold-dim"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm">
          <span className="text-muted">Business name</span>
          <input
            required
            name="business"
            type="text"
            autoComplete="organization"
            className="rounded-lg border border-border-subtle bg-background px-4 py-3 text-foreground outline-none transition-[border-color,box-shadow] focus:border-gold-dim focus:ring-1 focus:ring-gold-dim"
          />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm">
          <span className="text-muted">Phone</span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            className="rounded-lg border border-border-subtle bg-background px-4 py-3 text-foreground outline-none transition-[border-color,box-shadow] focus:border-gold-dim focus:ring-1 focus:ring-gold-dim"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm">
          <span className="text-muted">Email</span>
          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            className="rounded-lg border border-border-subtle bg-background px-4 py-3 text-foreground outline-none transition-[border-color,box-shadow] focus:border-gold-dim focus:ring-1 focus:ring-gold-dim"
          />
        </label>
      </div>
      <label className="flex flex-col gap-2 text-sm">
        <span className="text-muted">
          {compact ? "How can we help?" : "Message"}
        </span>
        <textarea
          required
          name="message"
          rows={compact ? 4 : 6}
          className="resize-y rounded-lg border border-border-subtle bg-background px-4 py-3 text-foreground outline-none transition-[border-color,box-shadow] focus:border-gold-dim focus:ring-1 focus:ring-gold-dim"
        />
      </label>
      <button
        type="submit"
        className="h-12 rounded-lg bg-gold text-sm font-semibold text-background transition-colors hover:bg-gold-soft"
      >
        Send message
      </button>
    </form>
  );
}
