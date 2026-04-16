import { cn } from "../../lib/cn"

export function PageSection({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="page-section"
      className={cn("space-y-6", className)}
      {...props}
    />
  )
}
