# Maintain the essay series

The website and its sources live in this repository. Edit `README.md` for the
landing page and `essays/*.md` for individual essays. The page template and styles
are `site/page.html` and `site/style.css`.

`site/config.json` explicitly lists the finished essays to publish. Drafts are
excluded until added to that list and linked from the landing page. Article titles
and bodies come from their Markdown files. The public pages do not link to the
Markdown source.

## Build and preview

Use Node.js 24 and an installed Google Chrome. Site dependencies are separate
from AgentTerm's application dependencies.

```sh
npm ci --ignore-scripts --prefix site
npm run build --prefix site
python3 -m http.server 8000 --bind 127.0.0.1 --directory output
```

Open `http://localhost:8000/rethink-terminal/`. The default build directory is
`output/rethink-terminal`; pass another output directory after `--` when needed.

The builder converts Markdown to HTML, rewrites essay links, copies referenced
media, and renders Mermaid diagrams as static SVG. Standalone SVG exports are
serialized and validated as XML. Reading the website requires no JavaScript or
external fonts. The snapshots under `docs/assets` illustrate AgentTerm and keep
the media URLs used by the original published site.

## Publishing

Push source changes to `main`. `.github/workflows/pages.yml` builds the finished
pages and deploys the build artifact directly to GitHub Pages. Generated HTML is
not committed. Publishing uses GitHub's temporary workflow credentials, with no
cross-repository deploy key or personal access token.

The public URL remains `https://yunxin.github.io/rethink-terminal/`. The old essay
and series-index URLs in AgentTerm remain small Markdown links to the website for
readers arriving from the Reddit post.

For a manual rebuild:

```sh
gh workflow run pages.yml --repo yunxin/rethink-terminal
```
