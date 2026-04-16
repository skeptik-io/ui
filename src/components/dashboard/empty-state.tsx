import { cn } from "../../lib/cn"

export function EmptyState({
  message,
  children,
  className,
}: {
  message: string
  children?: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("py-12 text-center text-muted-foreground", className)}>
      <p>{message}</p>
      {children && <div className="mt-4">{children}</div>}
    </div>
  )
}
