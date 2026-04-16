@VOICE.md

# @skeptik/ui

Shared UI component and theme package for Skeptik marketing sites.

## Architecture

- **Primitives**: `@base-ui/react` (successor to Radix UI)
- **Variants**: `class-variance-authority` (CVA)
- **Styling**: Tailwind CSS v4 with semantic tokens (OKLch)
- **Dark mode**: `next-themes`, class attribute, dark by default
- **Fonts**: DM Sans (body) + JetBrains Mono (mono), Sora optional for headings

## Consuming this package

1. Add dependency via `file:` reference pointing to this directory
2. In `next.config.ts`, add:
   - `transpilePackages: ["@skeptik/ui"]`
   - `turbopack: { root: path.join(import.meta.dirname, "<path-to-skeptik-parent>") }` — required for Turbopack to resolve linked packages outside the project root
3. Import `@skeptik/ui/tokens.css` in your `globals.css` (after `@import "tailwindcss"`)
4. Import components from `@skeptik/ui`

### Token customization

Sites override `--primary` (and any other tokens) in their own `globals.css`:

```css
@import "@skeptik/ui/tokens.css";

:root {
  --primary: oklch(/* your light mode primary */);
}
.dark {
  --primary: oklch(/* your dark mode primary */);
}
```

### Radix → Base UI migration

Sites migrating from `@radix-ui/react-slot` need to change `asChild` patterns:

```tsx
/* Before (Radix) */
<Button asChild><Link href="/">Go</Link></Button>

/* After (Base UI) */
<Button render={<Link href="/" />}>Go</Button>
```

## Exports

### CSS
- `@skeptik/ui/tokens.css` — semantic tokens, ink scale, base resets, animations
- `@skeptik/ui/docs-prose.css` — `.docs-content` prose styles for documentation pages

### Components
- `Button` / `buttonVariants` — CVA button with render prop polymorphism
- `Badge` / `badgeVariants` — inline badge with variants
- `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardAction`, `CardContent`, `CardFooter`
- `ThemeProvider` — next-themes wrapper
- `CopyButton` — clipboard copy button
- `CodeBlock` — terminal/pre display with optional copy
- `CodeTabs` — tabbed multi-language code blocks
- `SiteHeader` — data-driven sticky header (logo, nav, actions)
- `SiteFooter` — data-driven footer (logo, description, link groups, legal)

### Utilities
- `cn()` — clsx + tailwind-merge

### Types
- `NavItem`, `CTAAction`, `FooterLinkGroup`
- `SiteHeaderProps`, `SiteFooterProps`
- `CodeTabDefinition`
