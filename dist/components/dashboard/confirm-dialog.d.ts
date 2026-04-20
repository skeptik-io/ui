import * as React from "react";
export declare function ConfirmDialog({ trigger, title, description, confirmLabel, onConfirm, open, onOpenChange, pending, destructive, }: {
    trigger: React.ReactNode;
    title: string;
    description: string;
    confirmLabel?: string;
    onConfirm: () => void;
    open: boolean;
    onOpenChange: (open: boolean) => void;
    pending?: boolean;
    destructive?: boolean;
}): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=confirm-dialog.d.ts.map