"use client";
import { useFormStatus } from "react-dom";

export function Submit_create_btn({ children }: { children: React.ReactNode }) {
    const { pending } = useFormStatus();

    return (
        <button type="submit" disabled={pending} className={`${pending && "cursor-wait"}`}>
            {children}
        </button>
    );
}

export function Submit_delete_btn({ children }: { children: React.ReactNode }) {
    const { pending } = useFormStatus();

    return (
        <button className={`${pending && "cursor-wait"}`} type="submit" disabled={pending}>
            {children}
        </button>
    );
}
