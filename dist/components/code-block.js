import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../lib/cn";
import { CopyButton } from "./copy-button";
export function CodeBlock({ children, language, className, copyable = true, }) {
    return (_jsxs("div", { className: cn("overflow-hidden rounded-xl border border-border bg-card", className), children: [(language || copyable) && (_jsxs("div", { className: "flex items-center justify-between border-b border-border bg-muted/50 px-3 py-2", children: [language ? (_jsx("span", { className: "mono-label text-muted-foreground", children: language })) : (_jsx("span", {})), copyable && _jsx(CopyButton, { value: children })] })), _jsx("pre", { className: "overflow-x-auto px-4 py-4 font-mono text-[12.5px] leading-relaxed text-foreground", children: _jsx("code", { children: children }) })] }));
}
//# sourceMappingURL=code-block.js.map