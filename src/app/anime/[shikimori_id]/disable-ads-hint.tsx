"use client";
import { useEffect, useState } from "react";
import { Linker } from "#/components/utilities/common/linker-utility-component";
import { getCookie, setCookie } from "cookies-next/client";
const COOKIE_NAME = "remove_ads_hint_disabled";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days
export function DisableAdsHintComponent() {
    const [hidden, setHidden] = useState(true);
    useEffect(() => {
        setHidden(getCookie(COOKIE_NAME) === "1");
    }, []);
    if (hidden) {
        return null;
    }
    return (
        <div className="flex flex-row items-start gap-1 text-slate-500">
            <button
                type="button"
                aria-label="Hide ads hint"
                onClick={() => {
                    setCookie(COOKIE_NAME, "1", {
                        maxAge: COOKIE_MAX_AGE,
                        path: "/",
                        secure: true,
                        sameSite: "lax",
                    });
                    setHidden(true);
                }}
                className="font-mono text-2xl font-bold hover:opacity-70 hover:underline cursor-pointer"
            >
                ×
            </button>
            <p className="p-1">
                Рекламу можно отключить — установите расширение для блокировки JavaScript и разрешите JS только для
                reanime.art и плеера.
                <Linker href="/blog/how-to-remove-ads" linkType="internal" className="ml-1 hover:underline">
                    Подробнее
                </Linker>
            </p>
        </div>
    );
}
