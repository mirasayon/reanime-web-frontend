"use client";
import { ThemeProvider } from "next-themes";
import { useEffect, useState, type ReactNode } from "react";

interface ProvidersProps {
    children: ReactNode;
}

export function ThemeProviderCustom({ children }: ProvidersProps) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;
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
