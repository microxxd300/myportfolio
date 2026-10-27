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

The page is a deck of slides. Each is numbered like a presentation.

| Slide | What it covers |
| ----- | -------------- |
| 0.0 Introduction | Name, title, halftone portrait, short introduction |
| 1.0 Profile | Background, career objective, interests, basic information |
| 2.0 What I do | The kinds of work I take on, as a numbered list |
| 3.0 Experience | Where I've worked |
| 4.1–4.4 Projects | One slide per project: description, specs, live link, source on GitHub |
| 5.0 Metrics | The numbers |
| 6.0 Skills | Languages, AI and LLMs, data and infrastructure, frontend, tooling |
| 7.0 Education | Course, school, and year level |
| 8.0 Contact | Email, GitHub, LinkedIn |

## Built With

- **React 18** — the page is composed of small components, one per slide
- **Vite** — dev server and production build
- **Lenis** — smooth scrolling and smooth anchor jumps
- **Plain CSS** — no framework; design tokens live in `:root`
- **Doto, Inter, Space Mono** (Google Fonts) — dot-matrix display, body,
  and the small slide labels

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
index.html                  page shell, fonts, favicon
src/
  main.jsx                  mounts React onto #root
  App.jsx                   lists the slides in deck order
  index.css                 all styling, design tokens at the top
  components/
    Slide.jsx               the card every section is built on
    Pager.jsx               one dot per slide down the right edge
    Reveal.jsx              text and block reveal animations
    LiquidFilter.jsx        the hover distortion on the hero name
    LiquidImage.jsx         project screenshots with that distortion
    ...                     one file per slide
  data/projects.js          project content, kept out of the markup
  hooks/
    useSlideStack.js        tilts the cards into a curved stack
    useInView.js            fires a reveal the first time it is seen
    useLenis.js             smooth scroll + smooth anchor jumps
    useAdaptiveGrid.js      scales the root font-size above 1920px
assets/                     portrait and project screenshots
public/favicon.svg          browser tab icon
```

### The design

Every section is a card — red, ink, or paper — on a dotted page, with
presentation chrome along the top: a dot mark, a slide number, a title
and a status light. The dot-matrix type and the halftone portrait give
it the look of Nothing's interface.

The portrait is used as a CSS *mask* rather than an image, so its dots
take whatever ink colour the card uses.

The layout is authored in `rem` against a 1920px base where the root
font-size is 16px. Media queries at the top of `index.css` drive the
root size from the viewport width, so every `rem` in the file scales
proportionally rather than needing its own breakpoint.

### The motion

**The curved stack.** `useSlideStack` tilts each card based on where it
sits relative to the middle of the screen. A card lies flat for as long
as it covers the middle — so a tall one stays readable the whole time —
and only tilts away as it enters from below or leaves above. It measures
an untransformed wrapper around each card, never the tilted card itself,
which would feed the tilt back into the measurement.

**Reveals** use one mechanism: a clipping parent with an inner span that
slides up, staggered by CSS `transition-delay`. The hero waits out the
preloader; everything else fires the first time it scrolls into view.

**The hover distortion** on the hero name is an SVG filter whose `scale`
and `baseFrequency` are *attributes*, not CSS properties — a transition
cannot reach them, so a spring is integrated per frame in JavaScript.

### Editing the content

| What to change | Where |
| -------------- | ----- |
| Projects, including live and GitHub links | `src/data/projects.js` |
| Name, title, portrait, introduction | `src/components/Hero.jsx` |
| Objective, interests, basic information | `src/components/Profile.jsx` |
| The kinds of work I take on | `src/components/Process.jsx` |
| Experience | `src/components/Experience.jsx` |
| Stat figures | `src/components/Metrics.jsx` |
| Skills | `src/components/StackSection.jsx` |
| Education | `src/components/Education.jsx` |
| Email, social, copyright | `src/components/ContactFooter.jsx` |
| Colours, type, spacing | `:root` in `src/index.css` |

To add a project: put a screenshot in `assets/`, import it at the top of
`src/data/projects.js`, and add an object to the array.

## Author

**Kurt Z. Lumpayao** — kurtlumpayao25@gmail.com
GitHub: [@microxxd300](https://github.com/microxxd300)
LinkedIn: [kurt-lumpayao](https://www.linkedin.com/in/kurt-lumpayao-a87643314)
