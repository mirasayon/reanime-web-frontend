"use client";

import { Provider as JotaiProvider } from "jotai";
import { Toasts } from "./component-Toasts";

export function JotaiMainProvider({ children }: { children: React.ReactNode }) {
    return (
        <JotaiProvider>
            {children}
            <Toasts />
        </JotaiProvider>
    );
}
