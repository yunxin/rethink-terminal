# Rethink what a terminal should be for AI CLIs

The landing page for Andy Yunxin Wu's essays on AgentTerm.

Read the series at **https://yunxin.github.io/rethink-terminal/**.

The individual essays live in [AgentTerm](https://github.com/albertwujj/agent-term/tree/main/essays).

## Updating the page

The landing-page copy is in `index.md`; the layout is in `_layouts/default.html`
and its styles are in `assets/style.css`. GitHub Pages builds the site with
Jekyll from the root of `main` after each push.

While the landing page is being reviewed, its source draft and comment threads
remain in the AgentTerm checkout at `essays/series-landing-page-draft.md`.
To publish an updated draft, replace the body of `index.md` with that file,
keeping the three-line YAML front matter at the top, then commit and push.

This repository contains only the series landing page. Links to essays point
to their current versions in the AgentTerm repository.
