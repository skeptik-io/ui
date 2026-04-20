import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../../lib/cn";
export function EmptyState({ message, children, className, }) {
    return (_jsxs("div", { className: cn("py-12 text-center text-muted-foreground", className), children: [_jsx("p", { children: message }), children && _jsx("div", { className: "mt-4", children: children })] }));
}
//# sourceMappingURL=empty-state.js.map