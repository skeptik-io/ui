"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./button";
import { cn } from "../lib/cn";
export function SiteHeader({ logo, nav, actions, actionSlot, maxWidth = "max-w-6xl", mobileNav, }) {
    const pathname = usePathname();
    return (_jsx("header", { className: "sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-lg", children: _jsxs("div", { className: cn("mx-auto flex h-14 items-center justify-between px-6", maxWidth), children: [_jsx(Link, { href: "/", className: "flex items-center gap-2 font-semibold", children: logo }), _jsxs("nav", { className: "hidden items-center gap-6 md:flex", children: [nav.map((item) => {
                            const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
                            const linkProps = item.external
                                ? { target: "_blank", rel: "noopener noreferrer" }
                                : {};
                            return (_jsx(Link, { href: item.href, className: cn("text-sm transition-colors", isActive
                                    ? "text-foreground"
                                    : "text-muted-foreground hover:text-foreground"), ...linkProps, children: item.label }, item.href));
                        }), actions?.map((action) => (_jsxs(Button, { variant: action.variant ?? "default", size: "sm", render: _jsx(Link, { href: action.href, ...(action.external ? { target: "_blank", rel: "noopener noreferrer" } : {}) }), children: [action.icon, action.label] }, action.href))), actionSlot] }), mobileNav] }) }));
}
//# sourceMappingURL=site-header.js.map