"use client";
import { ThemeProvider as NextThemes } from "next-themes";
import { ReactNode, useEffect, useState } from "react";

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return <>{children}</>;

    return (
        <NextThemes attribute="data-theme" defaultTheme="system" enableSystem>
            {children}
        </NextThemes>
    );
}
