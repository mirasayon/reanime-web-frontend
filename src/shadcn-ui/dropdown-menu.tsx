"use client";
import { Root, Portal, Content, Trigger, Label, Separator } from "@radix-ui/react-dropdown-menu";
import { cnUtil } from "#/shadcn-ui/tailwind-merge-utils";
import type { ComponentPropsWithoutRef } from "react";
function DropdownMenuShadCN({ ...props }: ComponentPropsWithoutRef<typeof Root>) {
    return <Root data-slot="dropdown-menu" {...props} />;
}

function DropdownMenuPortalShadCN({ ...props }: ComponentPropsWithoutRef<typeof Portal>) {
    return <Portal data-slot="dropdown-menu-portal" {...props} />;
}

function DropdownMenuTriggerShadCN({ ...props }: ComponentPropsWithoutRef<typeof Trigger>) {
    return <Trigger data-slot="dropdown-menu-trigger" {...props} />;
}
function DropdownMenuContentShadCN({ className, sideOffset = 4, ...props }: ComponentPropsWithoutRef<typeof Content>) {
    return (
        <Portal>
            <Content
                data-slot="dropdown-menu-content"
                sideOffset={sideOffset}
                className={cnUtil(
                    "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-32 origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
                    className,
                )}
                {...props}
            />
        </Portal>
    );
}

function DropdownMenuLabelShadCN({
    className,
    inset,
    ...props
}: React.ComponentPropsWithoutRef<typeof Label> & {
    inset?: boolean;
}) {
    return (
        <Label
            data-slot="dropdown-menu-label"
            data-inset={inset}
            className={cnUtil("px-2 py-1.5 text-sm font-medium data-inset:pl-8", className)}
            {...props}
        />
    );
}

function DropdownMenuSeparator({ className, ...props }: React.ComponentPropsWithoutRef<typeof Separator>) {
    return (
        <Separator
            data-slot="dropdown-menu-separator"
            className={cnUtil("bg-border -mx-1 my-1 h-px", className)}
            {...props}
        />
    );
}
