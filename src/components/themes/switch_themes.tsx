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
    return (
        <>
            <button
                type="button"
                className="flex justify-between text-center cursor-pointer"
                onClick={(e) => {
                    e.preventDefault();
                    setTheme("light");
                }}
            >
                <div>
                    <CiLight size={40} fill={!is_dark ? "black" : "gray"} />
                </div>
                <span className="p-2 text-center">Светлый</span>
            </button>

            <button
                type="button"
                className="flex justify-between text-center cursor-pointer"
                onClick={(e) => {
                    e.preventDefault();
                    setTheme("dark");
                }}
            >
                <div>
                    {" "}
                    <MdOutlineDarkMode size={40} fill={is_dark ? "white" : "gray"} />
                </div>
                <span className="p-2 text-center">Тёмный</span>
            </button>
        </>
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
