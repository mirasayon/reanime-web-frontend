"use client";

import { atom } from "jotai";

export const toastsAtom = atom<Toast[]>([]);

export type ToastKind = "success" | "error" | "info";

export type Toast = {
    id: string;
    kind: ToastKind;
    title?: string;
    message: string;
    /** мс, по умолчанию 3500 */
    duration?: number;
};
