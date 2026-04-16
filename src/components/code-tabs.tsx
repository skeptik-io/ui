"use client"

import { useState } from "react"
import type { CodeTabDefinition } from "../types"
import { CopyButton } from "./copy-button"
import { cn } from "../lib/cn"

export function CodeTabs({
  tabs,
  render,
  defaultTab,
  className,
}: {
  tabs: CodeTabDefinition[]
  render: (key: string) => string
  defaultTab?: string
  className?: string
}) {
  const [active, setActive] = useState(defaultTab ?? tabs[0]?.key ?? "")
  const code = render(active)

  return (
    <div className={cn("overflow-hidden rounded-xl border border-border bg-card", className)}>
      <div className="flex items-center justify-between border-b border-border bg-muted/50 px-3 py-2">
        <div className="flex items-center gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActive(tab.key)}
              className={cn(
                "rounded-md px-3 py-1 text-xs font-medium transition-colors",
                active === tab.key
                  ? "bg-accent text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
              style={
                active === tab.key && tab.color ? { color: tab.color } : undefined
              }
            >
              {tab.label}
            </button>
          ))}
        </div>
        <CopyButton value={code} />
      </div>
      <pre className="overflow-x-auto px-4 py-4 font-mono text-[12.5px] leading-relaxed text-foreground">
        <code>{code}</code>
      </pre>
    </div>
  )
}
