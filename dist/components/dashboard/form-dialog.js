"use client";
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "../dialog";
import { Button } from "../button";
export function FormDialog({ trigger, title, description, children, submitLabel = "Create", onSubmit, open, onOpenChange, pending = false, className, }) {
    return (_jsxs(Dialog, { open: open, onOpenChange: onOpenChange, children: [_jsx(DialogTrigger, { render: _jsx(_Fragment, { children: trigger }), children: null }), _jsxs(DialogContent, { className: className, children: [_jsxs(DialogHeader, { children: [_jsx(DialogTitle, { children: title }), description && (_jsx(DialogDescription, { children: description }))] }), _jsxs("form", { onSubmit: onSubmit, className: "space-y-4", children: [children, _jsxs(DialogFooter, { children: [_jsx(Button, { variant: "outline", onClick: () => onOpenChange(false), type: "button", children: "Cancel" }), _jsx(Button, { type: "submit", disabled: pending, children: submitLabel })] })] })] })] }));
}
//# sourceMappingURL=form-dialog.js.map