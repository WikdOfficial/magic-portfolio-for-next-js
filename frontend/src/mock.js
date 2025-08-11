export const profile = {
  name: "Saksham Kalra",
  role: "Entrepreneur & Product Leader",
  headline: "Entrepreneur & Product Leader with AI Expertise",
  subheadline:
    "I build AI-first products across B2B SaaS and B2C health — clear strategy, rapid experiments, measurable growth.",
  vibeBadges: ["AI-first", "HealthTech", "B2B SaaS", "0→1 & Scale"],
  email: "sakshamkalra@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/saksham-k-267aa2b7/",
    medium:
      "https://medium.com/@sakshamkalra/lean-automated-and-ai-driven-preparing-for-the-future-of-product-management-e47014d70801",
  },
  videoMp4: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
  headshot:
    "https://customer-assets.emergentagent.com/job_portfolio-pulse-27/artifacts/ivp7wbnw_IMG_4723.jpg",
  personality:
    "Arsenal supporter, Hindi rap (Krsna, Fotty Seven, Raftaar, Naam Sujal), health-first, family-oriented.",
};

export const images = {
  covers: [
    "https://images.unsplash.com/photo-1617309084369-a6d5a39537f0?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85",
    "https://customer-assets.emergentagent.com/job_portfolio-pulse-27/artifacts/v3lm221c_Competitive%20analysis.png",
    "https://images.unsplash.com/photo-1525459571112-472991c82d74?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85",
    "https://images.unsplash.com/photo-1664854953181-b12e6dda8b7c?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85",
    "https://customer-assets.emergentagent.com/job_portfolio-pulse-27/artifacts/ntns0txd_MARKETING%20STRATEGY%20ANALYSIS.png",
  ],
};

export const projects = [
  { id: "docsapp-rewards", title: "DocsApp – Earn & Burn Rewards", subtitle: "Retention via gamified health incentives", category: "Health AI", tags: ["Engagement", "Rewards", "Retention"], image: images.covers[0], impact: [{ label: "Retention", value: "+18%" }, { label: "Txn Frequency", value: "+22%" }], link: "https://customer-assets.emergentagent.com/job_36d235e4-16cf-4dd4-befa-ddfd3ecca9f6/artifacts/yldwtdje_Earn%20%26%20Burn%28DocsApp%20Cash%20%26%20Rewards%29_.pdf" },
  { id: "ketto-cro", title: "Ketto – Conversion Optimization", subtitle: "Funnel redesign and experiments at scale", category: "CRO", tags: ["A/B Testing", "Checkout", "Growth"], image: images.covers[1], impact: [{ label: "CR Uplift", value: "+11%" }, { label: "Drop-off", value: "-9%" }], link: "https://customer-assets.emergentagent.com/job_36d235e4-16cf-4dd4-befa-ddfd3ecca9f6/artifacts/ylu3vctd_Conversion_Optimization_Case_Studies_Ketto_Tura_FULL.pdf" },
  { id: "ketto-cro-short", title: "Ketto – CRO Highlights", subtitle: "Rapid wins via UX + copy + experiments", category: "CRO", tags: ["Experiments", "Copy", "Checkout"], image: images.covers[3], impact: [{ label: "Time to Impact", value: "<6 weeks" }, { label: "Key Wins", value: "5+" }], link: "https://customer-assets.emergentagent.com/job_36d235e4-16cf-4dd4-befa-ddfd3ecca9f6/artifacts/9symskvd_CRO_Case_Studies_Ketto_Tura.pdf" },
  { id: "practo-onboarding", title: "Practo Ray – Onboarding", subtitle: "Reducing setup friction for busy clinics", category: "Onboarding", tags: ["Activation", "Time-to-Value", "UX"], image: images.covers[4], impact: [{ label: "Activation", value: "+14%" }, { label: "TTF", value: "-25%" }], link: "https://customer-assets.emergentagent.com/job_36d235e4-16cf-4dd4-befa-ddfd3ecca9f6/artifacts/necqfx2u_Onboarding_Case_Study_Practo_Ray.pdf" },
  { id: "roles-scope", title: "Product Roles & Scope", subtitle: "Where I create the most value", category: "Profile", tags: ["Strategy", "Execution", "Leadership"], image: images.covers[2], impact: [{ label: "0→1 & 1→N", value: "Hands-on" }, { label: "AI-first", value: "Health + Ops" }], link: "https://customer-assets.emergentagent.com/job_36d235e4-16cf-4dd4-befa-ddfd3ecca9f6/artifacts/62d6fp5q_SakshamProductBusinessroles.pdf" },
];

// Employers with auto-sourced logos via Clearbit CDN (no key needed) and your provided Thrive logo
export const employers = [
  { label: "Practo", logo: "https://logo.clearbit.com/practo.com" },
  { label: "MediBuddy", logo: "https://logo.clearbit.com/medibuddy.com" },
  { label: "Ketto", logo: "https://logo.clearbit.com/ketto.org" },
  { label: "PharmEasy", logo: "https://logo.clearbit.com/pharmeasy.in" },
  { label: "Thrive Health India", logo: "https://customer-assets.emergentagent.com/job_portfolio-pulse-27/artifacts/qb5qfbwm_div.png" },
];

export const tools = [
  { label: "Cursor" }, { label: "Vercel" }, { label: "OpenAI / ChatGPT" }, { label: "Google Gemini" }, { label: "Anthropic Claude" }, { label: "Runway" }, { label: "Linear" },
  { label: "Zapier" }, { label: "Zoho" }, { label: "Freshdesk" }, { label: "CleverTap" }, { label: "Twilio" }, { label: "Shopify" },
  { label: "Razorpay" }, { label: "Paytm" }, { label: "Transcorp" }, { label: "AppsFlyer" }, { label: "Adobe Analytics" }, { label: "HasOffers" }, { label: "Retool" }
];

export const timeline = [
  { year: "2025-01 — Now", role: "Founder & CEO", org: "Thrive Health India", highlights: ["AI doctor's assistant (RAG) answers 95% clinical queries", "Provider partnerships onboarded", "1000+ waitlist; beta soon"] },
  { year: "2024-07 — 2024-12", role: "Consultant", org: "Fintech Stealth", highlights: ["PPI cashback app; infra + app store launch", "Led product strategy, design & dev"] },
  { year: "2020-09 — 2024-07", role: "VP Product & Growth", org: "Ketto", highlights: ["+15% new revenue YoY; 200% donor LTV", "$5M ARR subs in 14 months", "+100% conversion via CRO", "$1M GMV PPI; OPD subs ₹1Cr ARR"] },
  { year: "2019-09 — 2020-09", role: "Growth PM", org: "MediBuddy", highlights: ["$35k MRR via rewards; 700k regs/month", "+$2.2M lab orders; DocsApp→MediBuddy migration"] },
  { year: "2019-02 — 2019-09", role: "Growth PM", org: "PharmEasy", highlights: ["25k→40k daily orders; $8.8M→$11.2M revenue", "+20% fulfillment; +$200k MRR via partners"] },
  { year: "2018 — 2019", role: "Founder & CEO", org: "Insfyre", highlights: ["Bootstrapped to ₹15L revenue (solo + 5 interns)", "Creator P2P courses platform; sunset after market fit"] },
  { year: "2014-09 — 2018-12", role: "SaaS PM", org: "Practo", highlights: ["+2000 B2B accounts; ARPU $180→$260 ($1M ARR)", "70k doctors migrated; -4% churn; -30% CAC; +8% conv", "OPD cashless network 8000 doctors (GTM)"] },
];

export const showcase = {
  b2b: ["B2B SaaS suites across adoption, acquisition, retention & engagement", "Marketing playbooks and growth systems"],
  b2c: ["Multiple consumer health apps — 0→1 and into scale", "Safety, compliance, and empathetic UX"],
};

export const articles = [
  { title: "Lean, Automated, and AI-Driven: Preparing for the Future of Product Management", url: profile.links.medium, date: "Jun 2024" },
  { title: "Thinking in Systems: North Stars and Counter-metrics", url: "https://medium.com/@sakshamkalra", date: "—" },
];

export const testimonials = [
  { name: "Founder, HealthTech Startup", text: "Saksham is a product partner you can trust under pressure — pragmatic, data-led, and deeply user-centered." },
  { name: "Head of Growth", text: "He blends AI intuition with commercial rigor. Experiments weren’t just fast — they were meaningful." },
];

export const downloads = [
  { label: "Product Roles & Scope (PDF)", href: "https://customer-assets.emergentagent.com/job_36d235e4-16cf-4dd4-befa-ddfd3ecca9f6/artifacts/62d6fp5q_SakshamProductBusinessroles.pdf" },
  { label: "Ketto CRO – Full Case Study (PDF)", href: "https://customer-assets.emergentagent.com/job_36d235e4-16cf-4dd4-befa-ddfd3ecca9f6/artifacts/ylu3vctd_Conversion_Optimization_Case_Studies_Ketto_Tura_FULL.pdf" },
  { label: "Ketto CRO – Highlights (PDF)", href: "https://customer-assets.emergentagent.com/job_36d235e4-16cf-4dd4-befa-ddfd3ecca9f6/artifacts/9symskvd_CRO_Case_Studies_Ketto_Tura.pdf" },
  { label: "Practo Ray – Onboarding (PDF)", href: "https://customer-assets.emergentagent.com/job_36d235e4-16cf-4dd4-befa-ddfd3ecca9f6/artifacts/necqfx2u_Onboarding_Case_Study_Practo_Ray.pdf" },
  { label: "DocsApp – Earn & Burn (PDF)", href: "https://customer-assets.emergentagent.com/job_36d235e4-16cf-4dd4-befa-ddfd3ecca9f6/artifacts/yldwtdje_Earn%20%26%20Burn%28DocsApp%20Cash%20%26%20Rewards%29_.pdf" },
];