/**
 * ============================================================
 *  PORTFOLIO CONTENT
 * ============================================================
 *  This is the ONLY file you should need to edit to update
 *  your portfolio's text, links, dates, or numbers.
 *
 *  - Everything visible on the site is defined below as plain
 *    data (strings, arrays, objects).
 *  - The layout/design code in js/main.js reads this file and
 *    renders the page automatically.
 *  - You do not need to touch index.html, styles.css, or
 *    main.js to make normal content updates.
 *
 *  Just edit the values inside the quotes below and save.
 * ============================================================
 */

const CONTENT = {

  // ---------------------------------------------------------
  // Site-wide identity
  // ---------------------------------------------------------
  meta: {
    name: "Rahul Patwadi",
    role: "Backend / GenAI Engineer",
    location: "San Jose, CA",
    email: "rpatwadi@gmail.com",
    github: "https://github.com/rahul-patwadi",
    githubLabel: "github.com/rahul-patwadi",
    linkedin: "https://linkedin.com/in/rahul-patwadi-b080701ba",
    linkedinLabel: "linkedin.com/in/rahul-patwadi-b080701ba",
  },

  // ---------------------------------------------------------
  // Hero section
  // ---------------------------------------------------------
  hero: {
    eyebrow: "// backend & genai engineering",
    heading: "Rahul Patwadi",
    subheading: "Backend / GenAI Engineer",
    description:
      "I build production backend services, agentic LLM pipelines, and retrieval-augmented systems — from PostgreSQL-backed monitoring to Kubernetes-deployed multi-agent SRE tooling.",
    // Small status readout shown in the hero visual. Grounded in
    // real systems described in the Experience section.
    statusFeed: [
      { label: "monitoring-service", detail: "300s poll · PostgreSQL", state: "ok" },
      { label: "agentic-sre-pipeline", detail: "5-agent · LangGraph", state: "ok" },
      { label: "control-m-jobs", detail: "37 jobs · 5min poll", state: "ok" },
      { label: "auto-fix-gate", detail: "human-in-the-loop", state: "pending" },
    ],
  },

  // ---------------------------------------------------------
  // About section
  // ---------------------------------------------------------
  about: {
    eyebrow: "// about",
    heading: "About",
    paragraphs: [
      "I work at the intersection of backend engineering and applied GenAI — building services and pipelines that run in real production infrastructure, not notebooks.",
      "Most of my work involves Python and FastAPI on the backend, LangGraph and Llama 3.3 for multi-agent orchestration, and Docker, Kubernetes, and GitLab CI/CD for getting that work deployed and keeping it running across dev, UAT, and production.",
    ],
  },

  // ---------------------------------------------------------
  // Experience
  // ---------------------------------------------------------
  experience: {
    eyebrow: "// experience",
    heading: "Experience",
    company: "Dell Technologies",
    companyLocation: "Bangalore, India",
    roles: [
      {
        title: "Senior Analyst (Backend / GenAI Engineer)",
        dates: "Feb 2026 – Aug 2026",
        bullets: [
          "Independently designed, built, and deployed a Python/FastAPI file-delay monitoring service (PostgreSQL, 300-second polling) running in production since Feb 2026, firing verified alerts and cutting delay-detection time from hours to near real-time.",
          "Owned CI/CD and deployment (GitLab, Helm, Kubernetes) across dev/UAT/prod for the monitoring service and the broader Agentic SRE platform.",
        ],
        metrics: [
          { value: "Hours → Near real-time", label: "delay detection" },
        ],
      },
      {
        title: "Analyst (Backend / GenAI Engineer)",
        dates: "Jun 2025 – Jan 2026",
        bullets: [
          "Contributed to building and prompting a 5-agent LLM pipeline (observability, analysis, root cause, solution recommendation, auto-fix) using LangGraph and Llama 3.3, alongside a small engineering team — powering automated root-cause analysis for a 37-job production Control-M pipeline polled every 5 minutes.",
          "Designed a human-in-the-loop approval gate ahead of the auto-fix agent, and rebuilt incident-state tracking from a 2-state model to a 3-state model (in progress → pending approval → complete) for accurate SRE reporting.",
        ],
        metrics: [
          { value: "5-agent", label: "LLM pipeline" },
          { value: "37 jobs", label: "polled every 5 min" },
          { value: "2 → 3 states", label: "incident tracking" },
        ],
        // A real system diagram grounded in the bullets above.
        pipeline: [
          "Observability",
          "Analysis",
          "Root Cause",
          "Recommendation",
          "Human Approval",
          "Auto-Fix",
        ],
      },
      {
        title: "Analyst (.NET / Backend Engineer)",
        dates: "Jun 2023 – May 2025",
        bullets: [
          "Contributed to AV Scanner, an existing .NET Web API integrating McAfee antivirus scanning for incoming purchase-order documents — collaborated with teammates to implement synchronous (S3) and asynchronous (NAS) processing flows, migrate the service from a Windows VM to containerized Kubernetes, and raise code quality from 58% to 90%.",
          "Contributed backend/API work to the Purchase Order Assistant, a FastAPI service extracting structured data from PDF purchase orders via an ML model, and its Angular frontend.",
          "Maintained production microservices — resolved CI/CD, Docker, SonarQube, and Tenable findings; monitored Kubernetes workloads.",
        ],
        metrics: [
          { value: "58% → 90%", label: "code quality" },
        ],
      },
    ],
  },

  // ---------------------------------------------------------
  // Featured project
  // ---------------------------------------------------------
  project: {
    eyebrow: "// featured project",
    heading: "NASA Mission Intelligence",
    tagline:
      "An end-to-end Retrieval-Augmented Generation system spanning six NASA missions.",
    missions: ["Apollo", "Artemis", "ISS", "Mars", "Hubble", "Voyager"],
    description: [
      "An async NTRS document harvester (httpx, pagination, 429 backoff, ITAR/EAR filtering, dedup) ingested 539 of 545 records into 86,003 chunks stored in ChromaDB.",
      "Evaluated retrieval quality with a hand-labeled harness, then truncated embeddings to 768 dimensions — raising mean precision@5 from 0.67 to 0.70 while shrinking the vector store from 1.5GB to 742MB.",
      "Containerized the full stack with Docker (Python backend, Angular frontend served via an Nginx reverse proxy) and enforced strict engineering discipline with uv, ruff, mypy --strict, and a pytest suite.",
    ],
    pipeline: [
      "Harvest",
      "Process",
      "Filter",
      "Dedupe",
      "Chunk",
      "Vector Store",
      "Retrieval",
      "Evaluation",
      "RAG App",
    ],
    stats: [
      { value: "539 / 545", label: "records ingested" },
      { value: "86,003", label: "chunks in ChromaDB" },
      { value: "768-dim", label: "embeddings" },
      { value: "0.67 → 0.70", label: "precision@5" },
      { value: "1.5GB → 742MB", label: "vector store size" },
    ],
    tech: [
      "Python", "FastAPI", "Angular", "RAG", "ChromaDB",
      "Docker", "httpx", "uv", "ruff", "mypy", "pytest", "Nginx",
    ],
    github: "https://github.com/rahul-patwadi/nasa-mission-intelligence",
    githubLabel: "github.com/rahul-patwadi/nasa-mission-intelligence",
  },

  // ---------------------------------------------------------
  // Skills — categories and technologies exactly as on resume
  // ---------------------------------------------------------
  skills: {
    eyebrow: "// skills",
    heading: "Skills",
    categories: [
      {
        name: "Languages",
        items: ["Python", "C#", "TypeScript/JavaScript", "SQL"],
      },
      {
        name: "AI/ML",
        items: [
          "LangGraph", "Llama 3.3", "Retrieval-Augmented Generation (RAG)",
          "Gemini API", "ChromaDB", "Multi-agent orchestration", "Prompt engineering",
        ],
      },
      {
        name: "Backend/Frameworks",
        items: [".NET (ASP.NET Web API)", "FastAPI", "Pydantic"],
      },
      {
        name: "Frontend",
        items: ["Angular"],
      },
      {
        name: "Data & Messaging",
        items: ["PostgreSQL", "Control-M"],
      },
      {
        name: "DevOps",
        items: ["Docker", "Kubernetes", "Helm", "GitLab CI/CD", "SonarQube", "Tenable"],
      },
      {
        name: "Practices/Tooling",
        items: [
          "pytest", "mypy (strict)", "ruff", "uv",
          "Unit/integration testing", "ADRs", "Agile",
        ],
      },
    ],
  },

  // ---------------------------------------------------------
  // Education
  // ---------------------------------------------------------
  education: {
    eyebrow: "// education",
    heading: "Education",
    entries: [
      {
        school: "San José State University",
        location: "San Jose, California",
        degree: "M.S. in Engineering — Specialization: AI Systems Engineering",
        dates: "Aug 2026 – May 2028",
        status: null,
      },
      {
        school: "JSS Academy of Technical Education (VTU)",
        location: "Bangalore, India",
        degree: "B.E., Electronics and Communication Engineering",
        dates: "2018 – 2022",
        status: null,
      },
    ],
  },

  // ---------------------------------------------------------
  // Contact
  // ---------------------------------------------------------
  contact: {
    eyebrow: "// contact",
    heading: "Get in touch",
    description: "The fastest ways to reach me are email or LinkedIn.",
  },

  // ---------------------------------------------------------
  // Footer
  // ---------------------------------------------------------
  footer: {
    text: "Rahul Patwadi",
  },
};
