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

<!-- Replace with your deployed URL once it is live. -->
_Deployment link to be added._

## What the Page Contains

| Section | What it covers |
| ------- | -------------- |
| Profile | Name, photo, short introduction, availability |
| Projects | Three deployed projects, each linking to the live site |
| Skills | Languages, frameworks, data, infrastructure, tooling |
| Services | The kind of backend work I take on |
| Education | Course, school, and year level |
| Contact | Email, GitHub, location |

## Built With

- **React 18** — the page is composed of small components, one per section
- **Vite** — dev server and production build
- **Plain CSS** — no framework; design tokens live in `:root`

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
  components/           one file per section of the page
  data/projects.js      project content, kept out of the markup
  hooks/useReveal.js    fades sections in as they scroll into view
assets/                 photo and project screenshots
public/favicon.svg      browser tab icon
```

### The layout

Every block on the page is a rounded card (`.bx` in `index.css`) placed
on a CSS Grid. Cards span one or two columns and collapse to a single
column on phones, which is what gives the page its "bento" look.

### Editing the content

| What to change | Where |
| -------------- | ----- |
| Projects | `src/data/projects.js` |
| Name, photo, intro | `src/components/Hero.jsx` |
| Skills | `src/components/StackSection.jsx` |
| Education | `src/components/Education.jsx` |
| Contact details | `src/components/Contact.jsx` |
| Colors, spacing, radii | `:root` in `src/index.css` |

To add a project: put a screenshot in `assets/`, import it at the top of
`src/data/projects.js`, and add an object to the array.

## Author

**Kurt Z. Lumpayao** — kurtlumpayao25@gmail.com
GitHub: [@microxxd300](https://github.com/microxxd300)
