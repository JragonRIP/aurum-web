/** Site-wide copy and links. */
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
  /** Live Aurum Auto Detail case study site */
  aurumAutoDetailUrl: "https://aurum-nextjs.vercel.app",
  /** Portfolio card image (screenshot of the live site) */
  aurumPortfolioImageSrc: "/images/aurum-auto-detail-portfolio.png",
  aurumPortfolioImageAlt:
    "Aurum Auto Detail website: hero with Upper Peninsula branding and premium vehicle photography",
  /** Case study card / portfolio description */
  aurumAutoDetailCaseStudy:
    "We designed and built the live Aurum Auto Detail site for the Upper Peninsula: clear service packages and pricing, before-and-after results, and a booking-ready contact flow built mobile-first so customers can act from the driveway or the shop. Same bar we hold for every trades client: credible, fast, and easy to hire.",
  /** Wendricks Truss, Inc. */
  wendricksTrussUrl: "https://wendricks-web.vercel.app",
  wendricksPortfolioImageSrc: "/images/wendricks-truss-portfolio.png",
  wendricksPortfolioImageAlt:
    "Wendricks Truss website homepage: hero with engineered components headline and aerial view of the manufacturing facility",
  wendricksTrussCaseStudy:
    "We built the Wendricks Truss, Inc. site for a family-owned manufacturer (est. 1975): wood trusses, I-joists, Total Wall panels, and steel framing from Hermansville and Sault Ste. Marie. The experience highlights two Michigan locations, quality-controlled manufacturing, Nordic Structures partnership, planning calculators for rafters and roofs, and straightforward quote and contact paths for contractors across the Upper Peninsula.",
  /** Stop 'N Go 2.0 — Powers, MI */
  stopNGoUrl: "https://stopngo-web.vercel.app",
  stopNGoPortfolioImageSrc: "/images/stop-n-go-portfolio.png",
  stopNGoPortfolioImageAlt:
    "Stop 'N Go 2.0 website: dark hero with Upper Peninsula tagline, coffee and Smash Burgers, and order for pickup",
  stopNGoCaseStudy:
    "We designed and built the Stop 'N Go 2.0 site for a locally owned food trailer and coffee stop in Powers, Michigan: early-morning hours, drive-thru and walk-up messaging, full menu and online ordering, and location and hours—dark, high-contrast UI with clear CTAs so U.P. customers can order pickup or plan a visit from their phone.",
  /** Edelweiss Coffee — Iron Mountain, MI */
  edelweissCoffeeUrl: "https://edelweiss-website.vercel.app",
  edelweissPortfolioImageSrc: "/images/edelweiss-coffee-portfolio.png",
  edelweissPortfolioImageAlt:
    "Edelweiss Coffee website: hero with latte art photography, Iron Mountain drive-thru headline, and menu and order CTAs",
  edelweissCaseStudy:
    "We built the Edelweiss Coffee site for a drive-thru specialty coffee shop in Iron Mountain, Michigan: two-lane messaging, Crimson Cup Coffee & Tea story, full menu and online ordering, hours and location next to Dickinson County Hospital, and phone for call-ahead—warm dark palette and serif headlines so the brand reads premium and approachable on mobile first.",
  /** Sidetrack Bar & Grill — Powers, MI */
  sidetrackBarGrillUrl: "https://sidetrack-web-7fpy.vercel.app",
  sidetrackPortfolioImageSrc: "/images/sidetrack-bar-grill-portfolio.png",
  sidetrackPortfolioImageAlt:
    "Sidetrack Bar & Grill website: dark hero with Get Derailed headline, gold accents, and restaurant exterior along US-2",
  sidetrackBarGrillCaseStudy:
    "We designed and built the Sidetrack Bar & Grill site for a railroad-themed restaurant and full bar in Powers, Michigan on US-2: scrolling specials ticker, hero with menu and hours CTAs, signature dishes (Engineer pizza, fish fry Friday, pasta Sunday), takeout callouts, guest notes, and visit section with maps and weekly hours—dark layout with gold accents and serif headlines so locals and travelers get the menu, phone, and directions on mobile first.",
};

export const defaultOpenGraph = {
  siteName: SITE.name,
  locale: "en_US",
  type: "website" as const,
};
