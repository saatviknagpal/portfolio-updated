// All site content lives here. Numbers must match the resume (public/resume.pdf).


export const profile = {
  name: "Saatvik Nagpal",
  location: "San Francisco",
  email: "recruitsaatvik@gmail.com",
  github: "https://github.com/saatviknagpal",
  linkedin: "https://www.linkedin.com/in/saatviknagpal",
  resume: "/resume.pdf",
};

export type Link = { label: string; href: string };

export type Project = {
  title: string;
  year: string;
  hook: string;
  details: string;
  stack: string;
  links: Link[];
};

export const projects: Project[] = [
  {
    title: "Dental front-desk assistant",
    year: "2026",
    hook: "A chat assistant for dental front desks. It books, moves and cancels appointments, but only through database tools, so it can't invent an open slot.",
    details:
      "Every action goes through a tool backed by Postgres, and booking is atomic: I sent 50 requests at the same slot at once and exactly one got it. The eval harness runs 20 simulated patients through 3 times each, checks the database afterwards, and has a different model judge the conversation. It caught the bot telling patients it had alerted staff when it never had. I added a server-side guard and it got to 58 of 60 runs passing.",
    stack: "Next.js · TypeScript · PostgreSQL · OpenAI · Vitest · Render",
    links: [
      { label: "Live", href: "https://dental-front-desk-ai.onrender.com" },
      { label: "Code", href: "https://github.com/saatviknagpal/dental-front-desk-ai" },
    ],
  },
  {
    title: "Bedtime Stories",
    year: "2026",
    hook: "Bedtime stories for kids aged 5 to 10, with a second model that reads every draft before the kid does.",
    details:
      "One prompt writes the story and a separate judge checks it against a bedtime rubric. If a check fails, the writer gets the judge's notes and tries again, up to twice. You can watch the rounds as they happen, but no story text shows up until a draft passes. The eval results are public.",
    stack: "Python · Claude Haiku · LLM judge",
    links: [
      { label: "Live", href: "https://bedtime-stories-8f0y.onrender.com" },
      { label: "Evals", href: "https://bedtime-stories-8f0y.onrender.com/evals/" },
      { label: "Code", href: "https://github.com/saatviknagpal/bedtime-stories" },
    ],
  },
  {
    title: "Adloom",
    year: "2026",
    hook: "A hackathon project. You give it one ad brief and it makes three versions of the video, for the US, India and China.",
    details:
      "Built in 24 hours at the UCLA Gemini API Hackathon. You talk the ad through with a chat agent and approve a script. Then it generates the characters and scenes, with dialogue in English, Hindi and Mandarin, and stitches together one MP4 per market.",
    stack: "Next.js · Gemini 2.5 Flash · Imagen 3 · Veo 3 · PostgreSQL · Inngest",
    links: [
      { label: "Demo", href: "https://www.youtube.com/watch?v=lNmp-ElddPY" },
      { label: "Code", href: "https://github.com/saatviknagpal/adloom" },
    ],
  },
  {
    title: "AI Flashcards",
    year: "2024",
    hook: "A flashcard app that writes the deck for you. 30+ people used it and made 500+ cards.",
    details:
      "Type a topic or paste your notes and it generates a deck. Clerk handles login, Stripe handles payments, and Firebase keeps everything in sync.",
    stack: "Next.js · OpenAI · Clerk · Stripe · Firebase",
    links: [
      { label: "Live", href: "https://ai-flashcards-saas.vercel.app" },
      { label: "Code", href: "https://github.com/saatviknagpal/ai-flashcards" },
    ],
  },
];

export type Job = {
  company: string;
  role: string;
  years: string;
  bullets: string[];
  links?: Link[];
};

export const work: Job[] = [
  {
    company: "Mercor",
    role: "Member of Technical Staff",
    years: "2025–26",
    bullets: [
      "Built a Claude-based agent that reviews eval batches for model failures, reward hacking and odd scores. QA went from 2–3 hours per benchmark to about 20 minutes.",
      "Built the eval console the team used to set up and track runs. Setup dropped from 5–10 minutes to under one, and 11+ engineers used it to follow 2.5K+ batches across 25–45 models.",
      "Added per-step token counts, per-trajectory budgets and an MCP server that keeps agents to a fixed set of tools, across 5 agent harnesses. Before that, nobody could see what the agents were spending.",
      "Kept a client data project at 200+ new tasks a week with a multi-step LLM pipeline on a LiteLLM proxy (web search, dedup across runs, retries that respect rate limits).",
      "Packaged eval environments and verifiers as signed ECR images for 2 public benchmark releases. One of them was APEX-Agents.",
      "Worked on 20+ customer projects and closed 200+ tickets across delivery, incidents and infra.",
    ],
    links: [{ label: "APEX-Agents paper", href: "https://arxiv.org/abs/2601.14242" }],
  },
  {
    company: "DesiQnA",
    role: "Software Developer Intern",
    years: "2023",
    bullets: [
      "Turned the forum into a PWA that works offline and syncs when you reconnect. A lot of its 1,000+ users were on bad connections.",
      "Replaced password login with smart-contract wallet sign-in. Unauthorized logins dropped 75%.",
      "Fixed high-severity OWASP issues with the founders and a remote security team, adding reCAPTCHA and automated scans in AWS CodePipeline.",
    ],
  },
  {
    company: "TGH Technologies",
    role: "Frontend Developer Intern",
    years: "2022",
    bullets: [
      "Built two client websites from scratch and finished a SaaS product someone else had started (React, Redux, Node).",
      "Added Apollo caching and cursor pagination, which cut GraphQL traffic 45% and got first paint under a second.",
      "Built an admin dashboard in Chart.js and redid the UI with the design team, dark mode included.",
    ],
  },
];

export const education = [
  { school: "University of Southern California", detail: "MS Computer Science", years: "2025" },
  { school: "GGSIP University, Delhi", detail: "BTech Computer Science", years: "2023" },
];

export const recognition = [
  { what: "Highest NPS of any Strategic Project Lead", where: "Mercor account team", years: "2026" },
  { what: "Winner, Grand Finale", where: "Smart India Hackathon", years: "2022" },
  { what: "2nd Runner-Up", where: "Tally CodeBrewers", years: "2022" },
  { what: "Ranked 34th of 1,300+ contributors", where: "GirlScript Summer of Code", years: "2021" },
];
