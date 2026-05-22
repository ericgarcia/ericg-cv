export const resume = {
  name: "Eric Garcia",
  title: "PhD · Staff ML Engineer",
  contact: {
    email: "eric.garcia@gmail.com",
    phone: "727-221-3462",
    location: "New York, NY",
    linkedin: { label: "linkedin.com/in/ericthehuman", url: "https://www.linkedin.com/in/ericthehuman" },
  },
  summary:
    "ML engineer with a PhD in Signal Processing and 15+ years taking models from concept to production. Deep experience in NLP, causal inference, and behavioral ML; built and scaled systems at Spotify serving hundreds of millions of users. Equally at home scoping a problem with a product team and debugging a pipeline at 3am.",
  experience: [
    {
      company: "MuffinLabs",
      url: "https://www.muffinlabs.ai",
      role: "Founder & Principal Consultant",
      period: "Jan 2026–Present",
      bullets: [
        "AI/ML engineering consultancy. Building production systems (models, pipelines, and infrastructure) for clients who need things that actually work at scale.",
      ],
    },
    {
      company: "Superviber",
      url: "https://www.superviber.com",
      role: "Side Project",
      period: "Jan 2026–Present",
      bullets: [
        "AI orchestration platform coordinating multiple expert agents in parallel deliberation to reach convergent consensus on complex decisions.",
      ],
    },
    {
      company: "Keeper Security",
      url: null,
      role: "Senior ML Engineer",
      period: "Mar 2025–Jan 2026",
      bullets: [
        "Applied VLMs (desktop screenshots) and LLMs (shell commands) to malicious session detection. Used AI-generated synthetic sessions for training data; the product's zero-knowledge architecture precluded access to real user content.",
      ],
    },
    {
      company: "Spotify",
      url: null,
      role: "Senior ML Engineer",
      period: "Nov 2016–Mar 2024",
      bullets: [
        "Led ML systems across two domains: NLP infrastructure to monitor public conversations for support signals, including case routing and emerging-trend detection that reduced support effort and raised CSAT, and a causal inference system identifying behavioral patterns driving long-term retention, followed by interventional studies to move those patterns at scale.",
      ],
    },
    {
      company: "Preact (acq. by Spotify, 2016)",
      url: null,
      role: "Senior ML Engineer",
      period: "Nov 2012–Oct 2016",
      bullets: [
        "Probabilistic models (MAP inference) and NMF algorithms for customer behavior analysis and churn prediction from raw event streams on SaaS platforms.",
      ],
    },
    {
      company: "Grail Inc.",
      url: null,
      role: "Data Scientist",
      period: "Feb–Oct 2012",
      bullets: [
        "Topic modeling, sentiment analysis, information retrieval, and collaborative filtering for a news and entertainment platform.",
      ],
    },
  ],
  education: [
    { institution: "University of Washington", degree: "PhD, Electrical Engineering", year: 2010 },
    { institution: "University of Washington", degree: "MS, Electrical Engineering", year: 2006 },
    { institution: "Oregon State University", degree: "BS, Computer Engineering", year: 2004 },
  ],
};
