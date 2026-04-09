/**
 * Site-wide copy and links.
 * FormSubmit: set NEXT_PUBLIC_FORMSUBMIT_EMAIL in .env.local (see .env.example). Add the same in Vercel → Settings → Environment Variables.
 */
function normalizeSiteUrl(url: string | undefined): string | undefined {
  if (!url?.trim()) return undefined;
  return url.replace(/\/+$/, "");
}

const siteUrl = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);

/** Canonical public URL (trailing slashes stripped). Fallback for local metadata. */
export const resolvedPublicSiteUrl = siteUrl ?? "http://localhost:3000";

export const SITE = {
  name: "Aurum Web Design",
  parentBrand: "Aurum Auto Detail LLC",
  tagline:
    "Web design for trades from Michigan's Upper Peninsula: sharp, fast, and client-ready. UP proud.",
  phoneDisplay: "906-290-0302",
  phoneTel: "+19062900302",
  /** FormSubmit recipient. Empty until you set NEXT_PUBLIC_FORMSUBMIT_EMAIL */
  formSubmitEmail: process.env.NEXT_PUBLIC_FORMSUBMIT_EMAIL?.trim() ?? "",
  /** Absolute URL for FormSubmit _next redirect; requires NEXT_PUBLIC_SITE_URL */
  formSubmitThankYouUrl: siteUrl ? `${siteUrl}/contact/thank-you` : "",
  formSubmitConfigured: Boolean(
    process.env.NEXT_PUBLIC_FORMSUBMIT_EMAIL?.trim()
  ),
  /** Live Aurum Auto Detail case study site */
  aurumAutoDetailUrl: "https://aurum-nextjs.vercel.app",
  /** Portfolio card image (screenshot of the live site) */
  aurumPortfolioImageSrc: "/images/aurum-auto-detail-portfolio.png",
  aurumPortfolioImageAlt:
    "Aurum Auto Detail website: hero with Upper Peninsula branding and premium vehicle photography",
  /** Case study card / portfolio description */
  aurumAutoDetailCaseStudy:
    "We designed and built the live Aurum Auto Detail site for the Upper Peninsula: clear service packages and pricing, before-and-after results, and a booking-ready contact flow built mobile-first so customers can act from the driveway or the shop. Same bar we hold for every trades client: credible, fast, and easy to hire.",
};

export const defaultOpenGraph = {
  siteName: SITE.name,
  locale: "en_US",
  type: "website" as const,
};
