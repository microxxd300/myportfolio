# Kurt Z. Lumpayao — Portfolio

A minimal, client-ready portfolio built with **React + Vite**. Sidebar layout,
mono typography, numbered sections, and light/dark/system theme toggle.

## Run it

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

Production build: `npm run build` · preview it: `npm run preview`

## Make it yours

| What | Where |
| ---- | ----- |
| Projects (title, description, details, tags, screenshot) | `src/data/projects.js` |
| Name / nav links | `src/components/Sidebar.jsx` |
| Bio, photo, social links | `src/components/Hero.jsx` |
| Stat tiles | `src/components/Stats.jsx` |
| Services offered | `src/components/Services.jsx` |
| Tech stack chips | `src/components/StackSection.jsx` |
| Education | `src/components/Education.jsx` |
| Email / contact | `src/components/Contact.jsx` |
| Colors & theme variables | `:root` blocks in `src/index.css` |

### Adding your photo

Drop a photo at `assets/profile.png` (or `.jpg` / `.webp`) — it appears
automatically in the hero with a halftone treatment. Until then an initials
block is shown.

### Adding a project

Add a screenshot to `assets/`, import it at the top of
`src/data/projects.js`, and add an object to the array:

```js
{
  id: 3,
  title: "My New Project",
  description: "One or two sentences on what it is.",
  details: [
    { label: "Tech Stack", value: "Django, PostgreSQL, ..." },
    { label: "Infrastructure", value: "Render, Supabase, ..." },
    { label: "Features", value: "Auth, payments, ..." },
  ],
  tags: ["Backend", "Django", "Live"],
  image: myImg,
  href: "https://my-project.vercel.app",
}
```

## Notes

- Theme: system / light / dark toggle in the sidebar, persisted in
  localStorage, no flash on load.
- Fully responsive; sidebar collapses to a top bar on mobile.
- Respects `prefers-reduced-motion`.
- Fonts: Inter + Space Mono (Google Fonts).
