"use client";

import type React from "react";
import {
    Action,
    Cancel,
    Content,
    Description,
    Overlay,
    Portal,
    Root,
    Title,
    Trigger,
} from "@radix-ui/react-alert-dialog";

import { cnUtil } from "#/shadcn-ui/tailwind-merge-utils";
import { buttonVariantsShadCN } from "#/components/utilities/button";

export function AlertDialog({ ...props }: React.ComponentPropsWithoutRef<typeof Root>) {
    return <Root data-slot="alert-dialog" {...props} />;
}

export function AlertDialogTriggerShadCN({ ...props }: React.ComponentPropsWithoutRef<typeof Trigger>) {
    return <Trigger data-slot="alert-dialog-trigger" {...props} />;
}

export function AlertDialogPortalShadCN({ ...props }: React.ComponentPropsWithoutRef<typeof Portal>) {
    return <Portal data-slot="alert-dialog-portal" {...props} />;
}

export function AlertDialogOverlayShadCN({ className, ...props }: React.ComponentPropsWithoutRef<typeof Overlay>) {
    return (
        <Overlay
            data-slot="alert-dialog-overlay"
            className={cnUtil(
                "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
                className,
            )}
            {...props}
        />
    );
}

export function AlertDialogContentShadCN({ className, ...props }: React.ComponentPropsWithoutRef<typeof Content>) {
    return (
        <AlertDialogPortalShadCN>
            <AlertDialogOverlayShadCN />
            <Content
                data-slot="alert-dialog-content"
                className={cnUtil(
                    "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
                    className,
                )}
                {...props}
            />
        </AlertDialogPortalShadCN>
    );
}

export function AlertDialogHeaderShadCN({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
    return (
        <div
            data-slot="alert-dialog-header"
            className={cnUtil("flex flex-col gap-2 text-center sm:text-left", className)}
            {...props}
        />
    );
}

export function AlertDialogFooterShadCN({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
    return (
        <div
            data-slot="alert-dialog-footer"
            className={cnUtil("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className)}
            {...props}
        />
    );
}

export function AlertDialogTitleShadCN({ className, ...props }: React.ComponentPropsWithoutRef<typeof Title>) {
    return <Title data-slot="alert-dialog-title" className={cnUtil("text-lg font-semibold", className)} {...props} />;
}

export function AlertDialogDescriptionShadCN({
    className,
    ...props
}: React.ComponentPropsWithoutRef<typeof Description>) {
    return (
        <Description
            data-slot="alert-dialog-description"
            className={cnUtil("text-muted-foreground text-sm", className)}
            {...props}
        />
    );
}

export function AlertDialogActionShadCN({ className, ...props }: React.ComponentPropsWithoutRef<typeof Action>) {
    return <Action className={cnUtil(buttonVariantsShadCN(), className)} {...props} />;
}

export function AlertDialogCancelShadCN({ className, ...props }: React.ComponentPropsWithoutRef<typeof Cancel>) {
    return <Cancel className={cnUtil(buttonVariantsShadCN({ variant: "outline" }), className)} {...props} />;
}
