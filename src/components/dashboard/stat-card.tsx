import { Card, CardContent } from "../card"
import { cn } from "../../lib/cn"
import type { LucideIcon } from "lucide-react"

export function StatCard({
  title,
  value,
  icon: Icon,
  className,
}: {
  title: string
  value: string | React.ReactNode
  icon: LucideIcon
  className?: string
}) {
  return (
    <Card size="sm" className={cn(className)}>
      <CardContent className="flex items-center gap-3">
        <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted">
          <Icon className="size-4 text-muted-foreground" />
        </div>
        <div className="min-w-0">
          <p className="text-xs text-muted-foreground">{title}</p>
          <p className="truncate text-lg font-semibold tracking-tight">
            {value}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
