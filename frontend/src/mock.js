export const profile = {
  name: "Saksham Kalra",
  role: "AI-first Product Manager",
  headline: "AI-first Product Leader for Health Tech",
  subheadline:
    "I build category-defining products that ship fast, convert better, and scale responsibly.",
  vibeBadges: ["AI", "HealthTech", "Growth", "Ship Fast"],
  email: "sakshamkalra@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/saksham-k-267aa2b7/",
    medium:
      "https://medium.com/@sakshamkalra/lean-automated-and-ai-driven-preparing-for-the-future-of-product-management-e47014d70801",
  },
  videoUrl: "https://www.youtube.com/embed/Src5FJ6bZ5s", // placeholder: AI + PM talk (replace later)
  personality:
    "Arsenal supporter, Hindi rap aficionado (Krsna, Fotty Seven, Raftaar, Naam Sujal), health-first, deeply family-oriented.",
};

export const images = {
  // Monochrome/neutral imagery curated for AI + Health
  covers: [
    "https://images.unsplash.com/photo-1617309084369-a6d5a39537f0?crop=entropy&amp;cs=srgb&amp;fm=jpg&amp;ixlib=rb-4.1.0&amp;q=85",
    "https://images.unsplash.com/photo-1611587266737-cc128ffe2946?crop=entropy&amp;cs=srgb&amp;fm=jpg&amp;ixlib=rb-4.1.0&amp;q=85",
    "https://images.unsplash.com/photo-1525459571112-472991c82d74?crop=entropy&amp;cs=srgb&amp;fm=jpg&amp;ixlib=rb-4.1.0&amp;q=85",
    "https://images.unsplash.com/photo-1664854953181-b12e6dda8b7c?crop=entropy&amp;cs=srgb&amp;fm=jpg&amp;ixlib=rb-4.1.0&amp;q=85",
    "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg",
  ],
};

export const projects = [
  {
    id: "oz-health-ai",
    title: "DocsApp – Earn &amp; Burn Rewards",
    subtitle: "Driving retention with gamified health incentives",
    category: "Health AI",
    tags: ["Engagement", "Rewards", "Retention"],
    image: images.covers[0],
    impact: [
      { label: "Retention", value: "+18%" },
      { label: "Txn Frequency", value: "+22%" },
    ],
    link:
      "https://customer-assets.emergentagent.com/job_36d235e4-16cf-4dd4-befa-ddfd3ecca9f6/artifacts/yldwtdje_Earn%20%26%20Burn%28DocsApp%20Cash%20%26%20Rewards%29_.pdf",
  },
  {
    id: "ketto-cro",
    title: "Ketto – Conversion Optimization",
    subtitle: "Funnel redesign and experiments for scale",
    category: "CRO",
    tags: ["A/B Testing", "Checkout", "Growth"],
    image: images.covers[3],
    impact: [
      { label: "CR Uplift", value: "+11%" },
      { label: "Drop-off", value: "-9%" },
    ],
    link:
      "https://customer-assets.emergentagent.com/job_36d235e4-16cf-4dd4-befa-ddfd3ecca9f6/artifacts/ylu3vctd_Conversion_Optimization_Case_Studies_Ketto_Tura_FULL.pdf",
  },
  {
    id: "ketto-cro-short",
    title: "Ketto – CRO Highlights",
    subtitle: "Rapid wins via UX + copy + experiments",
    category: "CRO",
    tags: ["Experiments", "Copy", "Checkout"],
    image: images.covers[1],
    impact: [
      { label: "Time to Impact", value: "&lt;6 weeks" },
      { label: "Key Wins", value: "5+" },
    ],
    link:
      "https://customer-assets.emergentagent.com/job_36d235e4-16cf-4dd4-befa-ddfd3ecca9f6/artifacts/9symskvd_CRO_Case_Studies_Ketto_Tura.pdf",
  },
  {
    id: "practo-onboarding",
    title: "Practo Ray – Onboarding",
    subtitle: "Reducing setup friction for busy clinics",
    category: "Onboarding",
    tags: ["Activation", "Time-to-Value", "UX"],
    image: images.covers[4],
    impact: [
      { label: "Activation", value: "+14%" },
      { label: "TTF", value: "-25%" },
    ],
    link:
      "https://customer-assets.emergentagent.com/job_36d235e4-16cf-4dd4-befa-ddfd3ecca9f6/artifacts/necqfx2u_Onboarding_Case_Study_Practo_Ray.pdf",
  },
  {
    id: "roles-scope",
    title: "Product Roles &amp; Scope",
    subtitle: "Where I create the most value",
    category: "Profile",
    tags: ["Strategy", "Execution", "Leadership"],
    image: images.covers[2],
    impact: [
      { label: "0→1 &amp; 1→N", value: "Hands-on" },
      { label: "AI-first", value: "Health + Ops" },
    ],
    link:
      "https://customer-assets.emergentagent.com/job_36d235e4-16cf-4dd4-befa-ddfd3ecca9f6/artifacts/62d6fp5q_SakshamProductBusinessroles.pdf",
  },
];

export const timeline = [
  {
    year: "2025",
    role: "AI-first PM",
    org: "Independent / Advisory",
    highlights: ["Shipped AI-assisted workflows", "Scaled ops with automation"],
  },
  {
    year: "2023–2024",
    role: "Senior PM",
    org: "Ketto / Tura",
    highlights: ["Checkout CRO", "Experiment velocity"],
  },
  {
    year: "2020–2022",
    role: "PM",
    org: "Practo &amp; DocsApp",
    highlights: ["Onboarding", "Retention via rewards"],
  },
];

export const articles = [
  {
    title:
      "Lean, Automated, and AI-Driven: Preparing for the Future of Product Management",
    url: profile.links.medium,
    date: "Jun 2024",
  },
  {
    title: "Thinking in Systems: North Stars and Counter-metrics",
    url: "https://medium.com/@sakshamkalra",
    date: "—",
  },
];

export const testimonials = [
  {
    name: "Founder, HealthTech Startup",
    text:
      "Saksham is a product partner you can trust under pressure — pragmatic, data-led, and deeply user-centered.",
  },
  {
    name: "Head of Growth",
    text:
      "He blends AI intuition with commercial rigor. Experiments weren’t just fast — they were meaningful.",
  },
];

export const downloads = [
  {
    label: "Product Roles &amp; Scope (PDF)",
    href:
      "https://customer-assets.emergentagent.com/job_36d235e4-16cf-4dd4-befa-ddfd3ecca9f6/artifacts/62d6fp5q_SakshamProductBusinessroles.pdf",
  },
  {
    label: "Ketto CRO – Full Case Study (PDF)",
    href:
      "https://customer-assets.emergentagent.com/job_36d235e4-16cf-4dd4-befa-ddfd3ecca9f6/artifacts/ylu3vctd_Conversion_Optimization_Case_Studies_Ketto_Tura_FULL.pdf",
  },
  {
    label: "Ketto CRO – Highlights (PDF)",
    href:
      "https://customer-assets.emergentagent.com/job_36d235e4-16cf-4dd4-befa-ddfd3ecca9f6/artifacts/9symskvd_CRO_Case_Studies_Ketto_Tura.pdf",
  },
  {
    label: "Practo Ray – Onboarding (PDF)",
    href:
      "https://customer-assets.emergentagent.com/job_36d235e4-16cf-4dd4-befa-ddfd3ecca9f6/artifacts/necqfx2u_Onboarding_Case_Study_Practo_Ray.pdf",
  },
  {
    label: "DocsApp – Earn &amp; Burn (PDF)",
    href:
      "https://customer-assets.emergentagent.com/job_36d235e4-16cf-4dd4-befa-ddfd3ecca9f6/artifacts/yldwtdje_Earn%20%26%20Burn%28DocsApp%20Cash%20%26%20Rewards%29_.pdf",
  },
];