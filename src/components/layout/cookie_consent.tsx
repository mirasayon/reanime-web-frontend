"use client";
import { rea_wrapper_border } from "#/styles/provider";
import { useEffect, useState } from "react";
import { getCookie, setCookie } from "cookies-next/client";
import { two_thousand_years } from "#/constants/common.constants";
export function Cookie_consent_banner() {
    const [render, set_render] = useState<boolean>(false);
    const r6_cookies_consent = getCookie("r6_cookies_consent") as undefined | string | boolean;
    useEffect(() => {
        if (!r6_cookies_consent) {
            return set_render(() => true);
        }
        return set_render(() => false);
    }, [r6_cookies_consent]);
    return (
        render && (
            <div className="sticky flex text-wrap bottom-2">
                <div
                    className={`${rea_wrapper_border} flex z-10 w-max  
                       dark:bg-zinc-900 bg-blue-100/90 
                   `}
                >
                    <span className="p-2">Мы используем файлы куки, без них ничего не работает!</span>
                    <button
                        onClick={(event) => {
                            event.preventDefault();
                            set_render((pr) => false);
                            setCookie("r6_cookies_consent", "TRUE", {
                                maxAge: two_thousand_years,
                                path: "/",
                                httpOnly: false,
                                secure: false,
                            });
                        }}
                        type="button"
                        className={
                            "cursor-pointer font-bold p-2 dark:bg-blue-300 dark:text-black dark:hover:bg-blue-400bg-blue-300 text-black  hover:bg-blue-400"
                        }
                    >
                        Хорошо
                    </button>
                </div>
            </div>
        )
    );
}
