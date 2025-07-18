"use client";
import { ThemeProvider } from "next-themes";
import { JSX } from "react";
import { useEffect, useState, type ReactNode } from "react";

type ProvidersProps = {
    readonly children: ReactNode;
};

export function ThemeProviderCustom({ children }: ProvidersProps): JSX.Element | null {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <ThemeProvider
            //  enableSystem={true} defaultTheme="system" enableColorScheme disableTransitionOnChange
            attribute="data-theme" // applies `class="light"` or `class="dark"` on <html>
            defaultTheme="system" // or 'light'/'dark'
            enableSystem={true}
        >
            {children}
        </ThemeProvider>
    );
}
