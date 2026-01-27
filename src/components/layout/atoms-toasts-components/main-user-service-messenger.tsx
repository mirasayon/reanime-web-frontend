"use client";
import { atom } from "jotai";
export const uiToastsAtom = atom<ToastMessageType[]>([]);

export type ToastMessageKindType = "success" | "error" | "info";

export type ToastMessageType = {
    id: string;
    kind: ToastMessageKindType;
    title?: string;
    message: string;
    /**
     * @defaultValue 3500ms
     */
    duration?: number;
};
