// "use client";
import { ThemeProvider } from "next-themes";
import type { JSX, ReactNode } from "react";
// import { useEffect, useState } from "react";

type Props = {
    children: ReactNode;
};

export function ThemeProviderCustom({ children }: Props): JSX.Element | null {
    // const [mounted, setMounted] = useState<boolean>(false);
    // useEffect(() => setMounted(true), []);

    // if (!mounted) {
    //     return <>{children}</>;
    // }

    return (
        <ThemeProvider
            attribute="data-theme" // applies `class="light"` or `class="dark"` on <html>
            defaultTheme="system" // or 'light'/'dark'
            enableSystem={true}
        >
            {children}
        </ThemeProvider>
    );
}

