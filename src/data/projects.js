// ─────────────────────────────────────────────────────────────
//  Your projects live here. Edit freely — add, remove, reorder.
//  `image` is an imported screenshot from /assets.
// ─────────────────────────────────────────────────────────────

import studyHubImg from "../../assets/study_buddy.png";
import aiTextToolkitImg from "../../assets/AI_text_toolkit.png";
import ecommerceImg from "../../assets/ecommerce-website.png";
import blogImg from "../../assets/blog-website.png";

export const projects = [
  {
    id: 1,
    title: "Study Hub — focus tracking with AI study help",
    description:
      "A study app where logged focus sessions build a streak and a year-long activity heatmap, backed by an async FastAPI service that streams AI study help over SSE and falls back to a second provider when the primary one fails.",
    details: [
      {
        label: "Tech Stack",
        value:
          "Python 3.12 (async), FastAPI, Pydantic v2, Uvicorn, SQLAlchemy 2.0 (async) + asyncpg, Alembic, PostgreSQL, Redis, Pytest",
      },
      {
        label: "Infrastructure",
        value:
          "Supabase (Postgres + Auth), Upstash Redis, Render, Docker + Compose, Resend, cron-job.org",
      },
      {
        label: "Features",
        value:
          "Supabase Auth with JWT/JWKS verification, Gemini responses streamed over SSE with a Groq fallback, Redis caching, SlowAPI rate limiting, Alembic migrations, transactional email via Resend, scheduled jobs on cron-job.org, Pytest suite",
      },
    ],
    tags: ["Backend", "FastAPI", "AI", "Live"],
    image: studyHubImg,
    href: "https://study-hub-gray-seven.vercel.app",
  },
  {
    id: 2,
    title: "AI Text Toolkit — LLM API with usage accounting",
    description:
      "A production LLM API for summarizing, rewriting, and translating text — where every response reports its own token usage and estimated cost, the model provider is swappable by config, and provider failures degrade gracefully. Deployed end to end with a React client.",
    details: [
      {
        label: "Tech Stack",
        value:
          "Django + DRF, httpx, Groq (gpt-oss-20b), Ollama (llama3.1:8b) for local inference, React 19 + TypeScript, Vite, ruff",
      },
      { label: "Infrastructure", value: "Vercel (API + frontend), Groq" },
      {
        label: "Features",
        value:
          "Per-request input/output token counts with Decimal-based cost estimation, provider abstraction (local Ollama ↔ hosted Groq via one env var), serializer validation that rejects oversized input before any tokens are spent, per-IP rate limiting, consistent {data, error, message} envelope across success and DRF errors, typed error classification in the client (validation / rate-limit / provider / network), 503 on provider failure, truncation detection, split settings with a passing check --deploy",
      },
    ],
    tags: ["Backend", "AI", "Django", "React", "Live"],
    image: aiTextToolkitImg,
    href: "https://llm-mental-model-frontend.vercel.app/",
  },
  {
    id: 3,
    title: "E-commerce Marketplace Backend",
    description:
      "A production e-commerce REST API with payments, verified reviews, smart search, and async email receipts — deployed end to end and consumed by a live React storefront.",
    details: [
      {
        label: "Tech Stack",
        value:
          "Django + DRF, PostgreSQL, Redis, Celery, Stripe, JWT auth + Google OAuth, Docker",
      },
      {
        label: "Infrastructure",
        value: "Render, Supabase, Upstash, Cloudinary, Resend",
      },
      {
        label: "Features",
        value:
          "Stripe Checkout + webhook payment confirmation, verified-purchase reviews with star ratings, smart search (synonyms/categories), order lifecycle, cart, async email receipts, rate limiting, Swagger docs",
      },
    ],
    tags: ["Backend", "Django", "Stripe", "Live"],
    image: ecommerceImg,
    href: "https://ecommerce-storefront-silk.vercel.app/",
  },
  {
    id: 4,
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
    image: blogImg,
    href: "https://blog-frontend-xi-blond.vercel.app",
  },
];
