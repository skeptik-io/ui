import Link from "next/link"
import type { SiteFooterProps } from "../types"
import { cn } from "../lib/cn"

export function SiteFooter({
  logo,
  description,
  linkGroups,
  legal,
  trailingText,
  maxWidth = "max-w-6xl",
}: SiteFooterProps) {
  const gridCols = linkGroups.length <= 2
    ? "sm:grid-cols-3"
    : linkGroups.length === 3
      ? "sm:grid-cols-4"
      : "sm:grid-cols-5"

  return (
    <footer className="border-t border-border">
      <div className={cn("mx-auto px-6 py-12", maxWidth)}>
        <div className={cn("grid grid-cols-2 gap-8", gridCols)}>
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2 font-semibold">
              {logo}
            </div>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              {description}
            </p>
          </div>

          {linkGroups.map((group) => (
            <div key={group.title}>
              <h4 className="mono-label text-muted-foreground">{group.title}</h4>
              <ul className="mt-3 space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-border pt-6">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {legal.holder}
            {legal.notice ? `. ${legal.notice}` : "."}
          </p>
          {trailingText && (
            <p className="text-xs text-muted-foreground">{trailingText}</p>
          )}
        </div>
      </div>
    </footer>
  )
}
