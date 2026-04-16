import { cn } from "../lib/cn"
import { CopyButton } from "./copy-button"

export function CodeBlock({
  children,
  language,
  className,
  copyable = true,
}: {
  children: string
  language?: string
  className?: string
  copyable?: boolean
}) {
  return (
    <div className={cn("overflow-hidden rounded-xl border border-border bg-card", className)}>
      {(language || copyable) && (
        <div className="flex items-center justify-between border-b border-border bg-muted/50 px-3 py-2">
          {language ? (
            <span className="mono-label text-muted-foreground">{language}</span>
          ) : (
            <span />
          )}
          {copyable && <CopyButton value={children} />}
        </div>
      )}
      <pre className="overflow-x-auto px-4 py-4 font-mono text-[12.5px] leading-relaxed text-foreground">
        <code>{children}</code>
      </pre>
    </div>
  )
}
