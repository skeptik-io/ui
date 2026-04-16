"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"
import { Button } from "./button"
import { cn } from "../lib/cn"

export function CopyButton({ value, className }: { value: string; className?: string }) {
  const [copied, setCopied] = useState(false)

  function copy() {
    navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Button
      variant="ghost"
      size="icon-xs"
      className={cn("text-muted-foreground hover:text-foreground", className)}
      onClick={copy}
      aria-label="Copy to clipboard"
    >
      {copied ? <Check /> : <Copy />}
    </Button>
  )
}
