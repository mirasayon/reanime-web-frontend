"use client";
import { useEffect, useRef, useState } from "react";
import { AvatarDashboardForLoggedInUser } from "./for-logged-users";
import { LoginLinksForDropdownMenu } from "./for-guests";
import { AvatarOrLoginRegButtonForHeader } from "./avatar-or-login-reg-button-for-header";
import type { AvatarFSType } from "../utilities/common/view-avatar-by-username-url";
export function DropdownMenuForHeader({
    avatar,
    logged,
    username,
}: {
    avatar: AvatarFSType;
    logged: boolean;
    username: string | null;
}) {
    const [open, setOpen] = useState(false);
    const rootRef = useRef<HTMLDivElement | null>(null);
    const triggerRef = useRef<HTMLButtonElement | null>(null);
    const contentRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        function onPointerDown(e: PointerEvent) {
            const root = rootRef.current;
            if (!root) {
                return;
            }
            if (e.target instanceof Node && !root.contains(e.target)) {
                setOpen(false);
            }
        }
        document.addEventListener("pointerdown", onPointerDown);
        return () => document.removeEventListener("pointerdown", onPointerDown);
    }, []);
    useEffect(() => {
        function onKeyDown(e: KeyboardEvent) {
            if (e.key === "Escape") {
                setOpen(false);
                triggerRef.current?.focus();
            }
        }
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, []);

    return (
        <div ref={rootRef} className="relative inline-block">
            <button
                type="button"
                ref={triggerRef}
                aria-haspopup="menu"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="outline-none p-1 cursor-pointer"
            >
                <AvatarOrLoginRegButtonForHeader avatar={avatar} logged={logged} />
            </button>
            {open && (
                <div ref={contentRef} role="menu" aria-hidden={!open} className="absolute right-0 top-[70px] z-50">
                    <div className="dark:bg-slate-900 bg-blue-200 dark:text-blue-100 text-black rounded-lg shadow-md overflow-hidden">
                        <div className="flex flex-col">
                            <div className="m-1 p-2">
                                {username ? (
                                    <AvatarDashboardForLoggedInUser username={username} />
                                ) : (
                                    <LoginLinksForDropdownMenu />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
