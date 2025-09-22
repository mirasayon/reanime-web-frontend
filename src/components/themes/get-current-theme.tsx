"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
export function useCurrentTheme() {
    const { theme, systemTheme: _systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        return setMounted(true);
    }, []);
    if (!mounted) {
        return {
            is_dark: true,
            is_light: false,
            is_system: false,
        } as const;
    }
    const systemTheme = ["light", "dark"].includes(_systemTheme || "undefined") ? _systemTheme : "light";
    let is_system = theme === "system";
    const current = is_system ? systemTheme : theme;
    let is_dark = current === "dark";
    let is_light = current === "light";

    return {
        is_dark,
        is_light,
        is_system,
    } as const;
}

