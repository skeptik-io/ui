@VOICE.md

# @skeptik/ui

Shared UI component and theme package for Skeptik marketing sites and dashboards.

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

## Dashboard Page Patterns

Every dashboard page must follow one of these compositions. Do not freestyle layouts.

### List page
```tsx
<PageSection>
  <PageHeader title="..." description="...">
    <Button>Create New</Button>
  </PageHeader>
  <Card>
    <CardContent>
      {rows.length > 0 ? (
        <Table>...</Table>
      ) : (
        <EmptyState message="..." />
      )}
    </CardContent>
  </Card>
</PageSection>
```

### Detail page
```tsx
<PageSection>
  <PageHeader title={name}>
    <EditDialog /> <DeleteButton />
  </PageHeader>
  <Card>
    <CardHeader><CardTitle>Details</CardTitle></CardHeader>
    <CardContent>
      <DetailGrid>
        <DetailItem label="Field">{value}</DetailItem>
      </DetailGrid>
    </CardContent>
  </Card>
  <div className="grid gap-4 sm:grid-cols-3">
    <StatCard title="..." value="..." icon={Icon} />
  </div>
</PageSection>
```

### Overview page
```tsx
<PageSection>
  <PageHeader title="..." />
  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
    <StatCard ... />
  </div>
  <div className="grid gap-4 lg:grid-cols-2">
    <Card>...</Card>
  </div>
</PageSection>
```

### Mutations
All create/edit/delete operations use dialogs, not full pages:
- `FormDialog` for create/edit forms
- `ConfirmDialog` for destructive actions
- Dialog footer: Cancel (outline) + Action (default or destructive)

## Exports

### CSS
- `@skeptik/ui/tokens.css` — semantic tokens, ink scale, base resets, animations
- `@skeptik/ui/docs-prose.css` — `.docs-content` prose styles for documentation pages

### UI Primitives
- `Button` / `buttonVariants`, `Badge` / `badgeVariants`
- `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardAction`, `CardContent`, `CardFooter`
- `Input`, `Label`, `Textarea`, `Separator`, `Skeleton`
- `Dialog` + sub-components, `Sheet` + sub-components
- `Table` + sub-components, `Tabs` + sub-components
- `Tooltip`, `TooltipTrigger`, `TooltipContent`, `TooltipProvider`

### Sidebar
- Full sidebar system: `SidebarProvider`, `Sidebar`, `SidebarInset`, `SidebarTrigger`, `SidebarRail`, menu/group primitives
- `useSidebar` hook

### Marketing
- `ThemeProvider`, `CopyButton`, `CodeBlock`, `CodeTabs`
- `SiteHeader`, `SiteFooter`

### Dashboard
- `PageHeader` — title + description + right-aligned action slot
- `PageSection` — `space-y-6` wrapper for page content
- `DetailGrid` / `DetailItem` — responsive metadata grid (1→2→4 cols)
- `StatCard` — icon + title + value metric card
- `EmptyState` — centered message + optional action
- `FormDialog` — modal with form layout, cancel/submit footer, pending state
- `ConfirmDialog` — destructive confirmation modal

### Utilities
- `cn()` — clsx + tailwind-merge
- `useIsMobile()` — responsive breakpoint hook
