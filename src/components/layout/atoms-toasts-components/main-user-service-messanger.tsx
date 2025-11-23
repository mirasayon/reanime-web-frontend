"use client";

import { atom } from "jotai";

export const uiToastsAtom = atom<ToastMessageType[]>([]);

export type ToastKindType = "success" | "error" | "info";

export type ToastMessageType = {
    id: string;
    kind: ToastKindType;
    title?: string;
    message: string;
    /** мс, по умолчанию 3500 */
    duration?: number;
};
