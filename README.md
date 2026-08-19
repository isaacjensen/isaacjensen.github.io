# isaacjensen.github.io

My personal portfolio — [isaacjensen.github.io](https://isaacjensen.github.io/).

It's a **plain static site** (hand-written HTML, CSS, and vanilla JS — no framework,
no build step) deployed to **GitHub Pages via GitHub Actions**.

## Structure

```
.
├── index.html                     # The single-page portfolio (all content lives here)
├── 404.html                       # Custom not-found page
├── assets/
│   ├── css/styles.css             # All styling. Theme tokens live in :root at the top.
│   ├── js/main.js                 # Nav, mobile menu, scroll reveal, active-link highlighting
│   ├── favicon.svg                # "IJ" monogram favicon
│   └── Isaac_Jensen_Resume_2026.pdf   # Resume (linked from the nav + hero)
├── .nojekyll                      # Tells GitHub Pages to serve files as-is (skip Jekyll)
└── .github/workflows/deploy.yml   # GitHub Actions workflow that builds & deploys to Pages
```

## The page, section by section

`index.html` is one document with these sections (IDs used by the nav anchors):

| Section      | `id`         | What's in it                                             |
|--------------|--------------|---------------------------------------------------------|
| Hero         | `#top`       | Name, role, intro, key stats                            |
| About        | `#about`     | Employer-facing summary                                 |
| Experience   | `#experience`| Trellix + internships, as cards                         |
| Projects     | `#projects`  | Professional work (Trellix) + Open source / GitHub repos|
| Skills       | `#skills`    | Languages, cloud/devops, identity & security            |
| Contact      | `#contact`   | Email, GitHub, LinkedIn                                  |

## Changing things

- **Colors:** edit the CSS custom properties in `:root` at the top of
  `assets/css/styles.css` (accent, background, text, etc.). Background is white by design.
- **Content:** edit the relevant `<section>` in `index.html`.
- **Adding a project:** copy a `<article class="card">…</article>` block inside the
  right `.grid` in the Projects section.
- **Resume:** replace `assets/Isaac_Jensen_Resume_2026.pdf` (keep the filename, or update
  the two links in `index.html`).

## How it deploys

On every push to `main`, the workflow in `.github/workflows/deploy.yml` uploads the repo
as a Pages artifact and publishes it. **One-time setup:** in the repo's
**Settings → Pages → Source**, select **"GitHub Actions"** (not "Deploy from a branch").

## Local preview

No build needed — just serve the folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```
