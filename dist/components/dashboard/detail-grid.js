import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../../lib/cn";
export function DetailGrid({ className, ...props }) {
    return (_jsx("dl", { "data-slot": "detail-grid", className: cn("grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4", className), ...props }));
}
export function DetailItem({ label, children, className, }) {
    return (_jsxs("div", { className: cn(className), children: [_jsx("dt", { className: "text-sm text-muted-foreground", children: label }), _jsx("dd", { className: "mt-1 text-sm font-medium", children: children })] }));
}
//# sourceMappingURL=detail-grid.js.map