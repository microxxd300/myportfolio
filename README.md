# Kurt Z. Lumpayao — Portfolio

A clean, editorial, projects-focused portfolio built with **React + Vite**.

## Run it

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Make it yours

| What | Where |
| ---- | ----- |
| Projects (title, description, tags, accent color) | `src/data/projects.js` |
| Name / nav | `src/components/Nav.jsx` |
| Intro headline & bio | `src/components/Hero.jsx`, `src/components/About.jsx` |
| Email & social links | `src/components/Contact.jsx`, `src/components/Footer.jsx` |
| Colors, fonts, spacing | `:root` in `src/index.css` |

### Adding a project

Open `src/data/projects.js` and add an object to the array:

```js
{
  id: 5,
  title: "My New Project",
  description: "One or two sentences on what it is and why it matters.",
  tags: ["React", "UI/UX", "2025"],
  accent: "#3b5bdb",        // any hex — drives that card's color
  art: "browser",            // "browser" | "phone" | "dashboard" | "api"
  href: "https://...",       // link to the live project / case study
}
```

### Using real screenshots instead of the CSS mockups

The cards ship with hand-built CSS mockups so the site looks finished with
zero image assets. When you have real screenshots, drop them in `public/`
and replace the `<Artwork />` element in `src/components/Projects.jsx` with:

```jsx
<img src={project.image} alt={project.title} className="project__img" />
```

## Notes

- Fully responsive, accessible, and respects `prefers-reduced-motion`.
- The custom cursor and tilt effects are pointer-device only (auto-disabled on touch).
- Fonts: Fraunces, Inter, Space Mono (loaded from Google Fonts).
