"use client";
import { Linker } from "#/components/utilities/common/linker-utility-component";
import { getCookie, setCookie } from "cookies-next/client";
const COOKIE_NAME = "remove_ads_guide_link_disabled";
export function DisableAdsGuideComponent() {
    const disabled = getCookie(COOKIE_NAME) === "1";
    return (
        <div className="text-slate-500 flex flex-row" hidden={disabled}>
            <span>
                Рекламу можно отключить — просто установите расширение для блокировки JavaScript и разрешите JS только
                для reanime.art и плеера.
                <Linker href="/blog/how-to-remove-ads" linkType="internal" className="px-1 hover:underline">
                    Подробнее
                </Linker>
            </span>

            <button
                onClick={(event) => {
                    event.preventDefault();
                    setCookie(COOKIE_NAME, "1", {
                        maxAge: 2592000,
                        path: "/",
                        httpOnly: false,
                        secure: false,
                    });
                    window?.location?.reload?.();
                }}
                type="button"
                className={"cursor-pointer hover:underline font-mono font-black mb-3 text-2xl"}
            >
                {"x"}
            </button>
        </div>
    );
}
