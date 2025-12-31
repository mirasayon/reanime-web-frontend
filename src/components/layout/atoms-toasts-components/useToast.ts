"use client";
import { useSetAtom } from "jotai";
import { uiToastsAtom, type ToastMessageType } from "./main-user-service-messanger";

const genRandId = () => Math.random().toString(36).slice(2);
type useGToasterParams = {
    duration?: number;
};
export function useToaster(options: useGToasterParams = { duration: 3500 }) {
    const set = useSetAtom(uiToastsAtom);
    const push = (t: Omit<ToastMessageType, "id">) => {
        const id = genRandId();
        const toast: ToastMessageType = {
            id,
            duration: options.duration,
            ...t,
        };
        set((prev) => [...prev, toast]);
        if (toast.duration && toast.duration > 0) {
            setTimeout(() => {
                set((prev) => prev.filter((x) => x.id !== id));
            }, toast.duration);
        }
        return;
    };

    function remove(id: string) {
        return set((prev) => prev.filter((x) => x.id !== id));
    }
    function success(message: string, opts?: Partial<ToastMessageType>) {
        return push({ kind: "success", message, ...opts });
    }
    function error(message: string, opts?: Partial<ToastMessageType>) {
        return push({ kind: "error", message, ...opts });
    }
    function info(message: string, opts?: Partial<ToastMessageType>) {
        return push({ kind: "info", message, ...opts });
    }

    return { push, remove, success, error, info };
}

export type UseGToasterType = ReturnType<typeof useToaster>;
