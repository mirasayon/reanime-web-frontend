"use client";

import { useSetAtom } from "jotai";
import { toastsAtom, type Toast } from "./main-user-service-messanger";

const genId = () => Math.random().toString(36).slice(2);
type useToastParams = {
    duration?: number;
};
export function useToast(options: useToastParams = { duration: 3500 }) {
    const set = useSetAtom(toastsAtom);

    const push = (t: Omit<Toast, "id">) => {
        const id = genId();
        const toast: Toast = { id, duration: options.duration, ...t };
        set((prev) => [...prev, toast]);

        // автозакрытие
        if (toast.duration && toast.duration > 0) {
            setTimeout(() => {
                set((prev) => prev.filter((x) => x.id !== id));
            }, toast.duration);
        }
        return id;
    };

    const remove = (id: string) => set((prev) => prev.filter((x) => x.id !== id));

    const success = (message: string, opts?: Partial<Toast>) => push({ kind: "success", message, ...opts });
    const error = (message: string, opts?: Partial<Toast>) => push({ kind: "error", message, ...opts });
    const info = (message: string, opts?: Partial<Toast>) => push({ kind: "info", message, ...opts });

    return { push, remove, success, error, info };
}

export type UseToastType = ReturnType<typeof useToast>;
