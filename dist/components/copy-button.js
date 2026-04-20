"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "./button";
import { cn } from "../lib/cn";
export function CopyButton({ value, className }) {
    const [copied, setCopied] = useState(false);
    function copy() {
        navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }
    return (_jsx(Button, { variant: "ghost", size: "icon-xs", className: cn("text-muted-foreground hover:text-foreground", className), onClick: copy, "aria-label": "Copy to clipboard", children: copied ? _jsx(Check, {}) : _jsx(Copy, {}) }));
}
//# sourceMappingURL=copy-button.js.map