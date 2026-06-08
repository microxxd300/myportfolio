// ─────────────────────────────────────────────────────────────
//  Your projects live here. Edit freely — add, remove, reorder.
//  `art` chooses one of the built-in CSS mockups: "browser" |
//  "phone" | "dashboard" | "api". Swap in real images later by
//  replacing the Artwork component in Projects.jsx.
// ─────────────────────────────────────────────────────────────

export const projects = [
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
