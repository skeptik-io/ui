import type { ReactNode } from "react"

export interface NavItem {
  href: string
  label: string
  external?: boolean
}

export interface CTAAction {
  href: string
  label: string
  variant?: "default" | "ghost" | "outline"
  external?: boolean
  icon?: ReactNode
}

export interface FooterLinkGroup {
  title: string
  links: Array<{
    href: string
    label: string
    external?: boolean
  }>
}

export interface SiteHeaderProps {
  logo: ReactNode
  nav: NavItem[]
  actions?: CTAAction[]
  actionSlot?: ReactNode
  maxWidth?: string
  mobileNav?: ReactNode
}

export interface SiteFooterProps {
  logo: ReactNode
  description: string
  linkGroups: FooterLinkGroup[]
  legal: {
    holder: string
    notice?: string
  }
  trailingText?: string
  maxWidth?: string
  children?: ReactNode
}

export interface CodeTabDefinition {
  key: string
  label: string
  color?: string
}
