"use client";
import { rea_wrapper_border } from "#/styles/provider";
import { useEffect, useState } from "react";
import { getCookie, setCookie } from "cookies-next/client";
import { ApplicationConfig } from "#/configs/application";
export function Cookie_consent_banner({ is_dark }: { is_dark: boolean }) {
    const [render, set_render] = useState<boolean>(false);
    const cookiesConsent = getCookie("cookiesConsent") as undefined | string | boolean;
    useEffect(() => {
        if (!cookiesConsent) {
            return set_render(() => true);
        }
        return set_render(() => false);
    }, [cookiesConsent]);
    return (
        render && (
            <button
                type="button"
                onClick={(event) => {
                    event.preventDefault();
                    set_render((pr) => false);
                    setCookie("cookiesConsent", "ok", {
                        maxAge: ApplicationConfig.two_thousand_year,
                        path: "/",
                        httpOnly: false,
                        secure: false,
                    });
                }}
                className="sticky flex text-wrap bottom-2"
            >
                <div
                    className={`${rea_wrapper_border} flex z-10 w-max ${is_dark ? "bg-zinc-900" : "bg-blue-100/90"}`}
                >
                    <span className="p-2">
                        Мы используем файлы куки, без них ничего не работает!
                    </span>
                    <span
                        className={` font-bold  p-2 ${is_dark ? "bg-blue-300 text-black hover:bg-blue-400" : "bg-blue-300 text-black  hover:bg-blue-400"}`}
                    >
                        Хорошо
                    </span>
                </div>
            </button>
        )
    );
}
