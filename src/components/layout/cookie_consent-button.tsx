"use client";
import { rea_wrapper_border } from "#/styles/provider";
import { type JSX, useEffect, useState } from "react";
import { getCookie, setCookie } from "cookies-next/client";
import { two_thousand_years } from "#/constants/common.constants";
import { cookiesConfig } from "./enum-user-service-config";
export function Cookie_consent_banner(): React.JSX.Element | null {
    const [render, set_render] = useState<boolean>(false);
    const r6_cookies_consent = getCookie(cookiesConfig.cookies_consent_value_name) as undefined | string | boolean;
    useEffect(() => {
        if (!r6_cookies_consent) {
            return set_render(() => true);
        }
        return set_render(() => false);
    }, [r6_cookies_consent]);
    return render ? (
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
                        setCookie(cookiesConfig.cookies_consent_value_name, "TRUE", {
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
    ) : null;
}
