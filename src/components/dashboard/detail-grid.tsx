import { cn } from "../../lib/cn"

export function DetailGrid({
  className,
  ...props
}: React.ComponentProps<"dl">) {
  return (
    <dl
      data-slot="detail-grid"
      className={cn(
        "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4",
        className
      )}
      {...props}
    />
  )
}

export function DetailItem({
  label,
  children,
  className,
}: {
  label: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn(className)}>
      <dt className="text-sm text-muted-foreground">{label}</dt>
      <dd className="mt-1 text-sm font-medium">{children}</dd>
    </div>
  )
}
