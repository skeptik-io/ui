"use client"

import * as React from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../dialog"
import { Button } from "../button"

export function FormDialog({
  trigger,
  title,
  description,
  children,
  submitLabel = "Create",
  onSubmit,
  open,
  onOpenChange,
  pending = false,
  className,
}: {
  trigger: React.ReactNode
  title: string
  description?: string
  children: React.ReactNode
  submitLabel?: string
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  open: boolean
  onOpenChange: (open: boolean) => void
  pending?: boolean
  className?: string
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger render={<>{trigger}</>}>
        {null}
      </DialogTrigger>
      <DialogContent className={className}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && (
            <DialogDescription>{description}</DialogDescription>
          )}
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4">
          {children}
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => onOpenChange(false)}
              type="button"
            >
              Cancel
            </Button>
            <Button type="submit" disabled={pending}>
              {submitLabel}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
