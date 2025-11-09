"use client";
import { useAtomValue } from "jotai";
import { toastsAtom } from "./main-user-service-messanger";
import { useToast } from "./useToast";
import { useEffect, useRef } from "react";

export function Toasts() {
    const toasts = useAtomValue(toastsAtom);
    const { remove } = useToast();
    const liveRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        if (!liveRef.current) return;
        const last = toasts.at(-1);
        if (last) liveRef.current.textContent = last.message;
    }, [toasts]);

    return (
        <>
            {/* живой регион для доступности */}
            <div ref={liveRef} aria-live="polite" aria-atomic="true" className="sr-only" />
            <div className="pointer-events-none fixed inset-0 z-1000 flex flex-col items-end gap-2 p-4">
                <div className="ml-auto flex w-full max-w-sm flex-col gap-2">
                    {toasts.map((t) => (
                        <div
                            key={t.id}
                            className={[
                                "pointer-events-auto rounded-2xl p-4 shadow-lg ring-1 backdrop-blur",
                                "transition-all data-[state=open]:animate-in data-[state=closed]:animate-out",
                                t.kind === "success" && "bg-emerald-50/80 dark:bg-emerald-700/80 ring-emerald-200",
                                t.kind === "error" && "bg-rose-50/80 dark:bg-rose-700/80 ring-rose-200",
                                t.kind === "info" && "bg-slate-50/80 dark:bg-slate-700/80 ring-slate-200",
                            ]
                                .filter(Boolean)
                                .join(" ")}
                            role="status"
                        >
                            {t.title && <div className="mb-1 text-sm font-semibold text-slate-900 dark:text-slate-100">{t.title}</div>}
                            <div className="text-sm text-slate-700 dark:text-slate-100">{t.message}</div>
                            <div className="mt-3 flex justify-end">
                                <button
                                    onClick={() => remove(t.id)}
                                    className="rounded-xl px-3 py-1 text-xs text-slate-800 dark:text-slate-100 ring-1 ring-slate-200 hover:bg-white/60 cursor-pointer"
                                >
                                    Закрыть
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
