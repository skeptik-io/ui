import * as React from "react";
export declare function FormDialog({ trigger, title, description, children, submitLabel, onSubmit, open, onOpenChange, pending, className, }: {
    trigger: React.ReactNode;
    title: string;
    description?: string;
    children: React.ReactNode;
    submitLabel?: string;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    open: boolean;
    onOpenChange: (open: boolean) => void;
    pending?: boolean;
    className?: string;
}): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=form-dialog.d.ts.map