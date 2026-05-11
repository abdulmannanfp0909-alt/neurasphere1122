export type Product = {
  id: string;
  name: string;
  category: string;
  short: string;
  cover: string;
  featured?: boolean;
  industry: string;
  timeline: string;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  results: string[];
  gallery: string[];
};

const img = (id: string, w = 1600, h = 1000) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=85`;

export const products: Product[] = [
  {
    id: "lumen-ai",
    name: "Lumen AI Workspace",
    category: "AI SaaS Platform",
    short: "An autonomous research workspace powered by multi-agent reasoning.",
    cover: img("1677442136019-21780ecad995"),
    featured: true,
    industry: "Enterprise SaaS",
    timeline: "16 weeks",
    overview:
      "Lumen unifies research, drafting and analysis into a single AI-native workspace used by product and strategy teams.",
    problem:
      "Knowledge teams were juggling 8+ disconnected tools, losing context and time on every handoff.",
    solution:
      "We designed an AI-first canvas with persistent memory, multi-agent workflows, and granular access controls.",
    features: [
      "Multi-agent orchestration",
      "Vector knowledge base",
      "Real-time collaboration",
      "Custom model routing",
      "Audit-grade logging",
    ],
    technologies: ["Next.js", "OpenAI", "Supabase", "Pinecone", "TypeScript"],
    results: ["3.4x faster research cycles", "92% adoption in 30 days", "$1.2M ARR in first year"],
    gallery: [img("1551288049-bebda4e38f71"), img("1551434678-e076c223a692"), img("1559028012-481c04fa702d")],
  },
  {
    id: "northwind-health",
    name: "Northwind Health",
    category: "Healthcare Platform",
    short: "HIPAA-grade telehealth platform serving 40k+ patients monthly.",
    cover: img("1576091160399-112ba8d25d1d"),
    featured: true,
    industry: "Healthcare",
    timeline: "22 weeks",
    overview:
      "An end-to-end telehealth experience covering scheduling, video consultations, prescriptions and billing.",
    problem: "Legacy intake flows were causing 38% appointment drop-off.",
    solution: "We rebuilt the patient journey with progressive disclosure, smart triage and a calm design system.",
    features: ["Smart triage", "Encrypted video", "E-prescriptions", "Insurance verification"],
    technologies: ["React", "Node.js", "PostgreSQL", "WebRTC", "Twilio"],
    results: ["62% reduction in drop-off", "4.9 average rating", "HIPAA & SOC2 compliant"],
    gallery: [img("1505751172876-fa1923c5c528"), img("1579684385127-1ef15d508118"), img("1581595220892-b0739db3ba8c")],
  },
  {
    id: "vertex-fintech",
    name: "Vertex Capital",
    category: "Fintech Dashboard",
    short: "Institutional-grade portfolio analytics with real-time risk modeling.",
    cover: img("1611974789855-9c2a0a7236a3"),
    featured: true,
    industry: "Finance",
    timeline: "18 weeks",
    overview: "A trading-floor-ready analytics suite serving asset managers across three continents.",
    problem: "Analysts were exporting to Excel for every scenario — slow and error-prone.",
    solution: "We shipped a streaming analytics layer with composable widgets and saved scenarios.",
    features: ["Real-time streams", "Scenario modeling", "Custom dashboards", "Role-based access"],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "D3"],
    results: ["18s → 0.4s scenario refresh", "Adopted by 12 funds", "Audited by Big-Four"],
    gallery: [img("1551288049-bebda4e38f71"), img("1460925895917-afdab827c52f"), img("1543286386-713bdd548da4")],
  },
  {
    id: "atlas-logistics",
    name: "Atlas Logistics OS",
    category: "Operations SaaS",
    short: "AI-driven dispatch and route optimization across 300+ fleets.",
    cover: img("1601584115197-04ecc0da31d7"),
    featured: true,
    industry: "Logistics",
    timeline: "20 weeks",
    overview: "A unified operations platform replacing four legacy systems for a national logistics provider.",
    problem: "Dispatchers managed routes manually across spreadsheets and radios.",
    solution: "We built an AI dispatch core with live ETAs, exception handling and driver mobile companion.",
    features: ["AI route optimization", "Live ETAs", "Driver app", "Exception workflows"],
    technologies: ["React", "Node.js", "PostgreSQL", "Mapbox", "OpenAI"],
    results: ["22% fuel savings", "31% more on-time deliveries", "Rolled out in 6 weeks"],
    gallery: [img("1494412574643-ff11b0a5c1c3"), img("1566576912321-d58ddd7a6088"), img("1586528116311-ad8dd3c8310d")],
  },
  {
    id: "halo-commerce",
    name: "Halo Commerce",
    category: "Headless Commerce",
    short: "Composable storefront engine for premium DTC brands.",
    cover: img("1483985988355-763728e1935b"),
    featured: false,
    industry: "Retail",
    timeline: "14 weeks",
    overview: "A headless storefront framework with edge-rendered pages and AI-personalized merchandising.",
    problem: "The brand's monolith was capping conversion and slowing every campaign.",
    solution: "We migrated to a composable stack with edge-rendered storefronts and a CMS-driven content layer.",
    features: ["Edge rendering", "AI merchandising", "A/B testing", "Headless CMS"],
    technologies: ["Next.js", "Vercel", "Shopify", "Tailwind", "TypeScript"],
    results: ["+38% conversion", "0.8s LCP globally", "2x campaign velocity"],
    gallery: [img("1441986300917-64674bd600d8"), img("1472851294608-062f824d29cc"), img("1556742044-3c52d6e88c62")],
  },
  {
    id: "nimbus-edu",
    name: "Nimbus EdTech",
    category: "Learning Platform",
    short: "AI tutor and adaptive learning paths for K-12 districts.",
    cover: img("1503676260728-1c00da094a0b"),
    featured: false,
    industry: "Education",
    timeline: "24 weeks",
    overview: "A district-wide platform combining adaptive lessons with an always-on AI tutor.",
    problem: "Teachers lacked visibility into student mastery beyond test scores.",
    solution: "We shipped granular mastery tracking, AI-generated practice and parent dashboards.",
    features: ["AI tutor", "Mastery tracking", "Parent portal", "Standards alignment"],
    technologies: ["React", "Firebase", "OpenAI", "Tailwind"],
    results: ["+27% mastery scores", "98% teacher retention", "Deployed to 40 schools"],
    gallery: [img("1497486751825-1233686d5d80"), img("1509062522246-3755977927d7"), img("1513258496099-48168024aec0")],
  },
  {
    id: "orbit-iot",
    name: "Orbit IoT Cloud",
    category: "IoT & Industrial",
    short: "Real-time telemetry platform handling 12M events/min.",
    cover: img("1518770660439-4636190af475"),
    featured: false,
    industry: "Manufacturing",
    timeline: "26 weeks",
    overview: "A cloud-scale IoT backbone for a global industrial OEM.",
    problem: "On-prem telemetry couldn't scale across new product lines.",
    solution: "We built a streaming data lake with anomaly detection and a customer-facing portal.",
    features: ["Streaming ingest", "Anomaly detection", "Device twins", "Customer portal"],
    technologies: ["Node.js", "PostgreSQL", "Kafka", "Next.js"],
    results: ["12M events/min", "99.99% uptime", "$4.2M annual savings"],
    gallery: [img("1518770660439-4636190af475"), img("1551808525-51a94da548ce"), img("1581090700227-1e37b190418e")],
  },
];

export const featuredProducts = products.filter((p) => p.featured);
export const getProduct = (id: string) => products.find((p) => p.id === id);
