"use client";
import { IoAppsSharp } from "react-icons/io5";
import { TbWorldWww } from "react-icons/tb";
import { ApplicationConfig } from "#/configs/application";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next/client";
import { useTheme } from "next-themes";
export function Switch_themes_button() {
    const { theme, setTheme } = useTheme();
    let is_dark = theme === "dark";
    let is_light = theme === "light";
    const styles = (active: boolean) =>
        `flex justify-between text-center hover:bg-blue-800/40 rounded cursor-pointer p-1 border-2 ${
            active ? "dark:border-blue-200 border-blue-800" : " border-transparent"
        }`;
    return (
        <div className=" flex flex-col justify-between gap-2">
            <button
                type="button"
                className={styles(is_light)}
                onClick={(e) => {
                    e.preventDefault();
                    setTheme("light");
                }}
            >
                <CiLight size={40} fill={is_light ? "black" : "gray"} />
                <span className="p-2 text-center">Светлый</span>
            </button>

            <button
                type="button"
                className={styles(is_dark)}
                onClick={(e) => {
                    e.preventDefault();
                    setTheme("dark");
                }}
            >
                <MdOutlineDarkMode size={40} fill={is_dark ? "white" : "gray"} />

                <span className="p-2 text-center">Тёмный</span>
            </button>
        </div>
    );
}

export function Switch_interface_format_button({ is_web }: { is_web: boolean }) {
    const router = useRouter();
    const current_format = is_web ? "web" : "app";
    return (
        <button
            type="button"
            onClick={(e) => {
                e.preventDefault();
                const next_theme = current_format === "web" ? "app" : "web";
                setCookie("rea_interface_format", next_theme, {
                    httpOnly: false,
                    secure: false,
                    maxAge: ApplicationConfig.two_thousand_year,
                    path: "/",
                });
                router.refresh();
            }}
            className="flex justify-between text-center cursor-pointer"
        >
            <div>{is_web ? <TbWorldWww size={40} /> : <IoAppsSharp size={40} />}</div>
            <span className="p-2 text-center">Формат UI</span>
        </button>
    );
}
