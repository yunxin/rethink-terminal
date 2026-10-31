# Maintain the design notes

The website and its sources live in this repository. Edit `README.md` for the
landing page and `essays/*.md` for individual notes. The page template and styles
are `site/page.html` and `site/style.css`. The author and date shown together in
each page’s footer are set in `site/config.json`; an entry can override the date.

`site/config.json` explicitly lists the finished notes to publish. Drafts are
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

The builder converts Markdown to HTML, rewrites links between notes, copies
referenced media, and renders Mermaid diagrams as static SVG. Standalone SVG exports are
serialized and validated as XML. Reading the website requires no JavaScript or
external fonts. Authored SVG diagrams and Mermaid exports receive the same frame
through `diagram-frame.cjs`, including their clickable full-size files. Diagram
asset URLs include a content hash so updated drawings do not reuse cached images.
The snapshots under `docs/assets` illustrate AgentTerm and keep
the media URLs used by the original published site.

## Publishing

Push source changes to `main`. `.github/workflows/pages.yml` builds the finished
pages and deploys the build artifact directly to GitHub Pages. Generated HTML is
not committed. Publishing uses GitHub's temporary workflow credentials, with no
cross-repository deploy key or personal access token.

The public URL remains `https://yunxin.github.io/rethink-terminal/`. The original
article URL in AgentTerm remains a small Markdown link to the website for readers
arriving from the Reddit post. The post body links directly to the landing
page; the old `essays/README.md` index was removed.

For a manual rebuild:

```sh
gh workflow run pages.yml --repo yunxin/rethink-terminal
```
