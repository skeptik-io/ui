import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent } from "../card";
import { cn } from "../../lib/cn";
export function StatCard({ title, value, icon: Icon, className, }) {
    return (_jsx(Card, { size: "sm", className: cn(className), children: _jsxs(CardContent, { className: "flex items-center gap-3", children: [_jsx("div", { className: "flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted", children: _jsx(Icon, { className: "size-4 text-muted-foreground" }) }), _jsxs("div", { className: "min-w-0", children: [_jsx("p", { className: "text-xs text-muted-foreground", children: title }), _jsx("p", { className: "truncate text-lg font-semibold tracking-tight", children: value })] })] }) }));
}
//# sourceMappingURL=stat-card.js.map