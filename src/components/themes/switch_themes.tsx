"use client";
import { IoAppsSharp } from "react-icons/io5";
import { TbWorldWww } from "react-icons/tb";
import { ApplicationConfig } from "#/configs/application";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next/client";
export function Switch_themes_button({ is_dark }: { is_dark: boolean }) {
    const router = useRouter();
    const current_theme = is_dark === true ? "dark" : "light";
    return (
        <button
            type="button"
            onClick={(e) => {
                e.preventDefault();
                const next_theme = current_theme === "light" ? "dark" : "light";
                setCookie("rea_ui_theme", next_theme, {
                    httpOnly: false,
                    secure: false,
                    maxAge: ApplicationConfig.two_thousand_year,
                    path: "/",
                });
                router.refresh();
            }}
            className="flex justify-between text-center cursor-pointer"
        >
            <div>{is_dark ? <MdOutlineDarkMode size={40} /> : <CiLight size={40} />}</div>
            <span className="p-2 text-center">Поменять тему</span>
        </button>
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
