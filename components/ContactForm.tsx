"use client";

type ContactFormProps = {
  /** Shorter field labels on home teaser */
  compact?: boolean;
  className?: string;
};

const FORMSUBMIT_ACTION =
  "https://formsubmit.co/aurumautodetail906@gmail.com";
const FORMSUBMIT_NEXT =
  "https://aurum-website-beta.vercel.app/contact/thank-you";

export function ContactForm({ compact, className = "" }: ContactFormProps) {
  return (
    <form
      action={FORMSUBMIT_ACTION}
      method="POST"
      className={`relative flex flex-col gap-5 ${className}`}
    >
      <input type="hidden" name="_captcha" value="false" />
      <input
        type="hidden"
        name="_subject"
        value="New Aurum Web Design Inquiry"
      />
      <input type="hidden" name="_next" value={FORMSUBMIT_NEXT} />

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
