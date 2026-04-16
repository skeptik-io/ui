# Voice & Copy Standards

This document governs tone, structure, and quality standards for all marketing sites consuming `@skeptik/ui`. Every agent writing or editing user-facing copy must follow these rules.

## Tone

- **Direct, not clever.** Say what the product does. Skip metaphors, puns, and filler words ("simply", "just", "easily", "seamlessly").
- **Technical, not dumbed down.** The audience is developers. Use precise terms (WebSocket, ABAC, metering, HMAC) without explaining what they are. Don't hedge with "helps you" or "enables you to" — state the capability.
- **Confident, not salesy.** No superlatives ("the best", "blazing fast", "world-class"). No hype adjectives ("powerful", "robust", "cutting-edge"). Let the features speak.
- **Concise.** Shorter sentences. One idea per sentence. If a paragraph has more than three sentences, split or cut.
- **Active voice.** "Herald replays missed events" not "missed events are replayed by Herald".

## Structure

### Headlines
- Lead with what the product does, not what it is.
- Bad: "Herald — A Real-Time Event Transport Layer"
- Good: "Herald — Real-time events your users never miss"

### Descriptions / Subheads
- One sentence that explains the core value proposition.
- Second sentence (optional) that adds a concrete differentiator.
- No more than two sentences.

### Feature blocks
- Heading: what it does (imperative or noun phrase).
- Body: one to two sentences explaining why it matters. Not how it works — that's for docs.

### CTAs
- Use verb phrases: "Get started", "Read the docs", "View pricing".
- Don't use "Learn more" — it's vague. Say what the user will learn or where they'll go.

## Content Rules

### No linking to repository files
**Never link to GitHub .md files (README.md, ARCHITECTURE.md, CHANGELOG.md, DOCS.md, LICENSE) or raw spec files (openapi.yaml) as marketing or documentation content.** This is non-negotiable.

- If the content exists in a repo file, write proper site copy that covers the same ground. The site is the product's face — not the repo.
- The only acceptable GitHub links from marketing pages are:
  - The repository landing page (e.g., `github.com/skeptik-io/herald`)
  - SDK directories within a repo (e.g., `github.com/.../herald-sdk-typescript`)
  - Release/download pages
- Documentation pages must contain their own content. A docs page that is a grid of links to GitHub markdown files is not documentation — it's an index of shortcuts.

### No placeholder copy
- Remove "Copy revised by Claude Code — review before deploy" comments.
- No lorem ipsum, no TODO markers, no "coming soon" sections on live pages.
- If a page isn't ready, don't ship it. An empty route is better than a page full of placeholders.

### Self-contained pages
- Every page must make sense without visiting an external link.
- A docs page should teach the concept, not redirect to where it's taught.
- A pricing page should explain the tiers, not link to a spreadsheet.

### Consistent terminology
Within each product, use the same term for the same concept everywhere:
- Pick one: "application" or "project" or "workspace" — then use it everywhere.
- Pick one: "API key" or "token" or "credential" — then use it everywhere.
- Document the chosen terms in each product's own CLAUDE.md or AGENTS.md.

## Per-product voice notes

Each product may have its own flavor within these constraints:

- **SaaS products** (Meterd, Simbee): "Sign up", "your account", "your organization". Never expose backend technology.
- **Self-hosted products** (Herald, ShroudB): "Pull the image", "run the binary", "configure". Reference Docker, config files, CLI commands.
- **Libraries** (Obfuskey): "Install", "import", "encode/decode". Lead with code examples.
- **Portfolio**: First person is fine. More conversational than the product sites.

## Review checklist

Before shipping any page with copy changes:

1. No links to GitHub .md or .yaml files
2. No "Copy revised by Claude Code" comments
3. No superlatives or hype adjectives
4. Headlines describe what it does, not what it is
5. Every docs page has its own content (not just links elsewhere)
6. Consistent terminology with the rest of the site
7. Active voice throughout
