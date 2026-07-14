// ─────────────────────────────────────────────────────────────
//  Your projects live here. Edit freely — add, remove, reorder.
//  `image` is an imported screenshot from /assets.
// ─────────────────────────────────────────────────────────────

import ecommerceImg from "../../assets/ecommerce-website.png";
import blogImg from "../../assets/blog-website.png";

export const projects = [
  {
    id: 1,
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
    id: 2,
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
