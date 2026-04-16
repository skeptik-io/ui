"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import type { SiteHeaderProps } from "../types"
import { Button } from "./button"
import { cn } from "../lib/cn"

export function SiteHeader({
  logo,
  nav,
  actions,
  actionSlot,
  maxWidth = "max-w-6xl",
  mobileNav,
}: SiteHeaderProps) {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-lg">
      <div className={cn("mx-auto flex h-14 items-center justify-between px-6", maxWidth)}>
        <Link href="/" className="flex items-center gap-2 font-semibold">
          {logo}
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/")
            const linkProps = item.external
              ? { target: "_blank" as const, rel: "noopener noreferrer" }
              : {}

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm transition-colors",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
                {...linkProps}
              >
                {item.label}
              </Link>
            )
          })}

          {actions?.map((action) => (
            <Button
              key={action.href}
              variant={action.variant ?? "default"}
              size="sm"
              render={
                <Link
                  href={action.href}
                  {...(action.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                />
              }
            >
              {action.icon}
              {action.label}
            </Button>
          ))}

          {actionSlot}
        </nav>

        {mobileNav}
      </div>
    </header>
  )
}
