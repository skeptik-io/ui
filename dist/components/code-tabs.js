"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { CopyButton } from "./copy-button";
import { cn } from "../lib/cn";
export function CodeTabs({ tabs, render, defaultTab, className, }) {
    const [active, setActive] = useState(defaultTab ?? tabs[0]?.key ?? "");
    const code = render(active);
    return (_jsxs("div", { className: cn("overflow-hidden rounded-xl border border-border bg-card", className), children: [_jsxs("div", { className: "flex items-center justify-between border-b border-border bg-muted/50 px-3 py-2", children: [_jsx("div", { className: "flex items-center gap-1", children: tabs.map((tab) => (_jsx("button", { type: "button", onClick: () => setActive(tab.key), className: cn("rounded-md px-3 py-1 text-xs font-medium transition-colors", active === tab.key
                                ? "bg-accent text-foreground"
                                : "text-muted-foreground hover:text-foreground"), style: active === tab.key && tab.color ? { color: tab.color } : undefined, children: tab.label }, tab.key))) }), _jsx(CopyButton, { value: code })] }), _jsx("pre", { className: "overflow-x-auto px-4 py-4 font-mono text-[12.5px] leading-relaxed text-foreground", children: _jsx("code", { children: code }) })] }));
}
//# sourceMappingURL=code-tabs.js.map