"use client";
import { getCookie, setCookie } from "cookies-next/client";
import { ApplicationConfig } from "#/configs/application";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import type { JSX } from "react";

export function Logout_user(): JSX.Element {
    const [confirm, set_confirm] = useState<boolean>(false);
    const router = useRouter();
    return (
        <form
            action={() => {
                router.refresh();
            }}
            className="text-xs"
        >
            <button
                type="button"
                className={`p-1 m-1 ${
                    confirm ? "hover:bg-teal-500 bg-blue-500" : "bg-red-500 hover:bg-red-800"
                } text-black`}
                onClick={(e) => {
                    e.preventDefault();
                    set_confirm((pr) => !pr);
                }}
            >
                {confirm === false ? "Выйти" : "Отмена"}
            </button>
            {confirm && (
                <button
                    type={"submit"}
                    className={"p-1 m-1 hover:bg-red-700 bg-red-500 text-black"}
                >
                    Подтвердить
                </button>
            )}
        </form>
    );
}

export function Init_Theme_UI_format({
    theme,
    ui_format: p_ui_format,
}: {
    ui_format: "web" | "app";
    theme: "light" | "dark";
}) {
    const ui_format = getCookie("rea_interface_format") as "web" | "app" | undefined;
    const ui_theme = getCookie("rea_ui_theme") as "dark" | "light" | undefined;
    useEffect(() => {
        if (ui_theme === undefined) {
            setCookie("rea_ui_theme", theme, {
                httpOnly: false,
                secure: false,
                maxAge: ApplicationConfig.two_thousand_year,
                path: "/",
            });
        }
        if (ui_format === undefined) {
            setCookie("rea_interface_format", p_ui_format, {
                httpOnly: false,
                secure: false,
                maxAge: ApplicationConfig.two_thousand_year,
                path: "/",
            });
        }
    }, [theme, p_ui_format]);
    return null;
}
