"use client";
import { getCookie } from "cookies-next/client";

export function useClientSideThemes() {
    const ui_theme = getCookie("rea_ui_theme") as "dark" | "light";
    const is_dark = ui_theme === "dark";
    const is_light = ui_theme === "light";
    return { current_theme: ui_theme, is_dark, is_light };
}
