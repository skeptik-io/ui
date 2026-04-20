"use client";
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "../dialog";
import { Button } from "../button";
export function ConfirmDialog({ trigger, title, description, confirmLabel = "Confirm", onConfirm, open, onOpenChange, pending = false, destructive = false, }) {
    return (_jsxs(Dialog, { open: open, onOpenChange: onOpenChange, children: [_jsx(DialogTrigger, { render: _jsx(_Fragment, { children: trigger }), children: null }), _jsxs(DialogContent, { children: [_jsxs(DialogHeader, { children: [_jsx(DialogTitle, { children: title }), _jsx(DialogDescription, { children: description })] }), _jsxs(DialogFooter, { children: [_jsx(Button, { variant: "outline", onClick: () => onOpenChange(false), children: "Cancel" }), _jsx(Button, { variant: destructive ? "destructive" : "default", onClick: onConfirm, disabled: pending, children: confirmLabel })] })] })] }));
}
//# sourceMappingURL=confirm-dialog.js.map