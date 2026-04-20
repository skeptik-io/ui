import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../../lib/cn";
export function PageHeader({ title, description, children, className, }) {
    return (_jsxs("div", { className: cn("flex items-start justify-between gap-4", className), children: [_jsxs("div", { children: [_jsx("h1", { className: "font-heading text-2xl font-semibold tracking-tight", children: title }), description && (_jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: description }))] }), children && _jsx("div", { className: "flex items-center gap-2", children: children })] }));
}
//# sourceMappingURL=page-header.js.map