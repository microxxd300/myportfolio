# Personal CV Web Page — Kurt Z. Lumpayao

My personal curriculum vitae and portfolio, built as a single-page web
app with **React + Vite**. It presents a short profile, my education,
my skills, the projects I have deployed, and how to contact me.

## Student Information

| | |
| --- | --- |
| **Complete Name** | Kurt Z. Lumpayao |
| **Year Level** | 4th Year |
| **Set / Section** | _to be filled in_ |
| **Subject** | _to be filled in_ |
| **School** | Davao del Norte State College |

## Live Site

**https://kzlportfolio.vercel.app** — deployed on Vercel from this
repository's `main` branch.

## What the Page Contains

| Section | What it covers |
| ------- | -------------- |
| Profile | Name, photo, short introduction, availability |
| Projects | Three deployed projects, each linking to the live site |
| Story | Who I am, career objective, interests, and the four kinds of work I take on |
| Experience | Where I've worked |
| Skills | Languages, frameworks, data, infrastructure, tooling |
| Impact | The numbers, in display type |
| Education | Course, school, and year level |
| Contact | Email, GitHub, location |

## Built With

- **React 18** — the page is composed of small components, one per section
- **Vite** — dev server and production build
- **Lenis** — smooth scrolling and smooth anchor jumps
- **Plain CSS** — no framework; design tokens live in `:root`
- **Anton + Onest** (Google Fonts) — display and body type

## Running It Locally

```bash
npm install
npm run dev
```

Vite prints a local URL (usually http://localhost:5173) — open it in a
browser. To produce the deployable files:

```bash
npm run build     # outputs to dist/
npm run preview   # serves dist/ to check it before deploying
```

## How the Code Is Organised

```
index.html              page shell, fonts, favicon
src/
  main.jsx              mounts React onto #root
  App.jsx               lists the sections in page order
  index.css             all styling, design tokens at the top
  components/           one file per section, plus Reveal and LiquidImage
  data/projects.js      project content, kept out of the markup
  hooks/useInView.js    fires a reveal the first time it is scrolled to
  hooks/useLenis.js     smooth scroll + smooth anchor jumps
  hooks/useAdaptiveGrid.js  scales the root font-size above 1920px
assets/                 photo and project screenshots
public/favicon.svg      browser tab icon
```

### The layout

The page is a dark one-pager. Its signature is the hero: the surname in
giant accent-red display type with a cut-out portrait standing in front
of it.

The whole layout is authored in `rem` against a 1920px base where the
root font-size is 16px. Media queries at the top of `index.css` drive
the root size from the viewport width, so every `rem` in the file
scales proportionally rather than needing its own breakpoint. Above
1920px `useAdaptiveGrid` takes over, since no `vw` query matches there.

### The motion

Reveals use one mechanism: a clipping parent with an inner span that
slides up, staggered by CSS `transition-delay`. The hero runs on fixed
delays that wait out the preloader; every other section fires when it
is first scrolled into view, and never replays.

`LiquidImage` is the exception. Its SVG filter animates `scale` and
`baseFrequency`, which are *attributes*, not CSS properties — a
transition cannot reach them, so a spring is integrated per frame in
JavaScript and writes them directly.

### Editing the content

| What to change | Where |
| -------------- | ----- |
| Projects | `src/data/projects.js` |
| Name, portrait, roles, intro | `src/components/Hero.jsx` |
| Objective, interests, the four kinds of work | `src/components/Story.jsx` |
| Experience | `src/components/Experience.jsx` |
| Marquee words | `src/components/Marquee.jsx` |
| Skills | `src/components/StackSection.jsx` |
| Stat figures | `src/components/Impact.jsx` |
| Education | `src/components/Education.jsx` |
| Email, social, copyright | `src/components/ContactFooter.jsx` |
| Colours, type scale, spacing | `:root` in `src/index.css` |

To add a project: put a screenshot in `assets/`, import it at the top of
`src/data/projects.js`, and add an object to the array.

## Author

**Kurt Z. Lumpayao** — kurtlumpayao25@gmail.com
GitHub: [@microxxd300](https://github.com/microxxd300)
LinkedIn: [kurt-lumpayao](https://www.linkedin.com/in/kurt-lumpayao-a87643314)
