// ─────────────────────────────────────────────────────────────
//  Your projects live here. Edit freely — add, remove, reorder.
//  Add `image` (an imported screenshot) to show a real picture,
//  or use `art` for a built-in CSS mockup: "browser" | "phone" |
//  "dashboard" | "api".
// ─────────────────────────────────────────────────────────────

import blogImg from "../../assets/blog-website.png";

export const projects = [
  {
    id: 5,
    title: "Full-Stack Blog Platform",
    description:
      "A production blog platform with multi-user accounts, posts, and asynchronous background processing — deployed end to end.",
    details: [
      {
        label: "Tech Stack",
        value:
          "Django + DRF, PostgreSQL, Redis, Celery, JWT auth, React, Vite",
      },
      { label: "Infrastructure", value: "Render, Supabase, Upstash, Sentry" },
      {
        label: "Features",
        value:
          "Multi-user auth, CRUD posts, async tasks, error monitoring, rate limiting",
      },
    ],
    tags: ["Full-Stack", "Django", "React", "Live"],
    accent: "#0d9488",
    image: blogImg,
    href: "https://blog-frontend-xi-blond.vercel.app",
  },
  {
    id: 1,
    title: "Aral — Learning API",
    description:
      "A Django REST backend that turns lecture notes into adaptive quizzes and spaced-repetition schedules for students.",
    tags: ["Django", "DRF", "PostgreSQL", "2024"],
    accent: "#d4502a",
    art: "browser",
    href: "#",
  },
  {
    id: 2,
    title: "Tindahan POS",
    description:
      "An inventory and sales backend for neighborhood stores — offline sync, role-based access, and automated daily reports.",
    tags: ["Django", "PostgreSQL", "Celery", "2024"],
    accent: "#2f6f4f",
    art: "phone",
    href: "#",
  },
  {
    id: 3,
    title: "Pulse Analytics",
    description:
      "A real-time analytics service that ingests campus event data and streams live, aggregated metrics over WebSockets.",
    tags: ["Django", "Redis", "WebSockets", "2023"],
    accent: "#3b5bdb",
    art: "dashboard",
    href: "#",
  },
  {
    id: 4,
    title: "Sentinel Auth Service",
    description:
      "A reusable authentication microservice with JWT, OAuth2, and rate limiting, powering several student applications.",
    tags: ["Django", "DRF", "JWT", "2023"],
    accent: "#8a3ffc",
    art: "api",
    href: "#",
  },
];
