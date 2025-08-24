"use client";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { RiComputerLine } from "react-icons/ri";
export function Switch_themes_button() {
    const { theme, setTheme, systemTheme: _systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    // if (!theme) {
    //     return <div>Загрузка...</div>;
    // }
    if (!mounted) return null;
    const systemTheme = ["light", "dark"].includes(_systemTheme || "undefined") ? _systemTheme : "light";
    let is_system = theme === "system";
    const current = is_system ? systemTheme : theme;
    let is_dark = current === "dark" && !is_system;
    let is_light = current === "light" && !is_system;
    const styles = (active: boolean) =>
        `flex text-center hover:bg-blue-800/40 rounded cursor-pointer p-  ${active ? " bg-violet-800/50" : " "} ` as const;
    return (
        <div className=" flex  flex-wrap items-center">
            <button
                type="button"
                className={styles(is_system)}
                onClick={(e) => {
                    e.preventDefault();
                    setTheme("system");
                }}
            >
                <RiComputerLine size={30} fill={is_system ? (current === "light" ? "black" : "white") : "gray"} />
                <span className="p-0 text-center">Системная</span>
            </button>

            <button
                type="button"
                className={styles(is_light)}
                onClick={(e) => {
                    e.preventDefault();
                    setTheme("light");
                }}
            >
                <CiLight size={30} fill={is_light ? "black" : "gray"} />
                <span className="p-  text-center">Светлый</span>
            </button>

            <button
                type="button"
                className={styles(is_dark)}
                onClick={(e) => {
                    e.preventDefault();
                    setTheme("dark");
                }}
            >
                <MdOutlineDarkMode size={30} fill={is_dark ? "white" : "gray"} />

                <span className="p-  text-center">Тёмный</span>
            </button>
        </div>
    );
}
