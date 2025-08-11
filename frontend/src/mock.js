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
  // YouTube embed with loop
  videoUrl:
    "https://www.youtube.com/embed/Src5FJ6bZ5s?autoplay=1&mute=1&controls=0&loop=1&playlist=Src5FJ6bZ5s",
  headshot:
    "https://customer-assets.emergentagent.com/job_portfolio-pulse-27/artifacts/ivp7wbnw_IMG_4723.jpg",
  personality:
    "Arsenal supporter, Hindi rap (Krsna, Fotty Seven, Raftaar, Naam Sujal), health-first, family-oriented.",
};

export const images = {
  covers: [
    // DocsApp / Rewards
    "https://images.unsplash.com/photo-1617309084369-a6d5a39537f0?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85",
    // Ketto CRO (use provided chart)
    "https://customer-assets.emergentagent.com/job_portfolio-pulse-27/artifacts/v3lm221c_Competitive%20analysis.png",
    // Roles / Scope (device abstract)
    "https://images.unsplash.com/photo-1525459571112-472991c82d74?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85",
    // Analytics network
    "https://images.unsplash.com/photo-1664854953181-b12e6dda8b7c?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85",
    // Practo (use provided marketing panel)
    "https://customer-assets.emergentagent.com/job_portfolio-pulse-27/artifacts/ntns0txd_MARKETING%20STRATEGY%20ANALYSIS.png",
  ],
};

export const projects = [
  {
    id: "docsapp-rewards",
    title: "DocsApp – Earn & Burn Rewards",
    subtitle: "Retention via gamified health incentives",
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
    subtitle: "Funnel redesign and experiments at scale",
    category: "CRO",
    tags: ["A/B Testing", "Checkout", "Growth"],
    image: images.covers[1],
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
    image: images.covers[3],
    impact: [
      { label: "Time to Impact", value: "<6 weeks" },
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
    title: "Product Roles & Scope",
    subtitle: "Where I create the most value",
    category: "Profile",
    tags: ["Strategy", "Execution", "Leadership"],
    image: images.covers[2],
    impact: [
      { label: "0→1 & 1→N", value: "Hands-on" },
      { label: "AI-first", value: "Health + Ops" },
    ],
    link:
      "https://customer-assets.emergentagent.com/job_36d235e4-16cf-4dd4-befa-ddfd3ecca9f6/artifacts/62d6fp5q_SakshamProductBusinessroles.pdf",
  },
];

export const timeline = [
  { year: "2025—Now", role: "Founder / Product", org: "Thrive Health India", highlights: ["AI-assisted care ops", "0→1 build"] },
  { year: "2023—2024", role: "Senior PM", org: "Ketto / Tura", highlights: ["Checkout CRO", "Experiment velocity"] },
  { year: "2021—2023", role: "PM", org: "MediBuddy (DocsApp)", highlights: ["Rewards & retention", "Scaled engagement"] },
  { year: "2019—2021", role: "PM", org: "Practo", highlights: ["Onboarding", "Activation"] },
  { year: "2018—2019", role: "Product/Growth", org: "PharmEasy", highlights: ["Acquisition", "Market playbooks"] },
];

export const showcase = {
  b2b: [
    "B2B SaaS suites across adoption, acquisition, retention & engagement",
    "Marketing playbooks and growth systems",
  ],
  b2c: [
    "Multiple consumer health apps — 0→1 and into scale",
    "Safety, compliance, and empathetic UX",
  ],
};

export const employers = [
  { label: "Practo" },
  { label: "MediBuddy" },
  { label: "Ketto" },
  { label: "PharmEasy" },
  { label: "Thrive Health India" },
];

export const tools = [
  { label: "Cursor" },
  { label: "Vercel" },
  { label: "OpenAI / ChatGPT" },
  { label: "Google Gemini" },
  { label: "Anthropic Claude" },
  { label: "Runway" },
  { label: "Linear" },
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
    label: "Product Roles & Scope (PDF)",
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
    label: "DocsApp – Earn & Burn (PDF)",
    href:
      "https://customer-assets.emergentagent.com/job_36d235e4-16cf-4dd4-befa-ddfd3ecca9f6/artifacts/yldwtdje_Earn%20%26%20Burn%28DocsApp%20Cash%20%26%20Rewards%29_.pdf",
  },
];