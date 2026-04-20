import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Link from "next/link";
import { cn } from "../lib/cn";
export function SiteFooter({ logo, description, linkGroups, legal, trailingText, maxWidth = "max-w-6xl", children, }) {
    const gridCols = linkGroups.length <= 2
        ? "sm:grid-cols-3"
        : linkGroups.length === 3
            ? "sm:grid-cols-4"
            : "sm:grid-cols-5";
    return (_jsx("footer", { className: "border-t border-border", children: _jsxs("div", { className: cn("mx-auto px-6 py-12", maxWidth), children: [_jsxs("div", { className: cn("grid grid-cols-2 gap-8", gridCols), children: [_jsxs("div", { className: "col-span-2 sm:col-span-1", children: [_jsx("div", { className: "flex items-center gap-2 font-semibold", children: logo }), _jsx("p", { className: "mt-3 max-w-xs text-sm text-muted-foreground", children: description })] }), linkGroups.map((group) => (_jsxs("div", { children: [_jsx("h4", { className: "mono-label text-muted-foreground", children: group.title }), _jsx("ul", { className: "mt-3 space-y-2", children: group.links.map((link) => (_jsx("li", { children: _jsx(Link, { href: link.href, className: "text-sm text-muted-foreground transition-colors hover:text-foreground", ...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {}), children: link.label }) }, link.href))) })] }, group.title)))] }), children, _jsxs("div", { className: "mt-10 flex items-center justify-between border-t border-border pt-6", children: [_jsxs("p", { className: "text-xs text-muted-foreground", children: ["\u00A9 ", new Date().getFullYear(), " ", legal.holder, legal.notice ? `. ${legal.notice}` : "."] }), trailingText && (_jsx("p", { className: "text-xs text-muted-foreground", children: trailingText }))] })] }) }));
}
//# sourceMappingURL=site-footer.js.map