export type PricingTier = {
  id: string;
  name: string;
  tagline: string;
  price: string;
  cta: string;
  features: string[];
  highlighted?: boolean;
  /** Longer copy for the dedicated pricing page */
  detail: string;
};

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Perfect for small businesses getting online",
    price: "$200/mo",
    cta: "Get Started",
    features: [
      "Custom website (up to 5 pages)",
      "Mobile responsive design",
      "Contact form integration",
      "Basic SEO setup",
      "Monthly updates included",
      "Email support",
    ],
    detail:
      "Ideal when you need a credible presence fast: service pages, about, contact, and a polished mobile experience. We handle hosting-adjacent updates on a predictable monthly rhythm so you stay current without chasing vendors.",
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "Most popular for growing businesses",
    price: "$400/mo",
    cta: "Choose Pro",
    highlighted: true,
    features: [
      "Everything in Starter",
      "Unlimited pages",
      "Blog or portfolio section",
      "Performance reports",
      "Live chat integration",
      "Booking system",
      "Priority support (24hr response)",
    ],
    detail:
      "When you are booking more jobs and need room to grow: richer content, performance reporting, and integrations that reduce phone tag without drowning you in dashboards.",
  },
  {
    id: "store",
    name: "Store",
    tagline: "Complete e-commerce solution",
    price: "$500/mo",
    cta: "Start Selling",
    features: [
      "Everything in Pro",
      "Full e-commerce store",
      "Product management",
      "Stripe payment integration",
      "Customer analytics",
      "24/7 priority support",
    ],
    detail:
      "Sell products or packages online with Stripe-backed checkout and a store that stays fast on mobile. We stay close on support so issues do not sit in a queue while you are on a job site.",
  },
];
