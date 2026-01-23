"use client";
import { Linker } from "#/components/utilities/common/linker-utility-component";
import { getCookie, setCookie } from "cookies-next/client";
const COOKIE_NAME = "remove_ads_guide_link_disabled";
export function DisableAdsGuideComponent() {
    const cookieValue = getCookie(COOKIE_NAME);
    return (
        <div className={" text-slate-500 py-3 flex flex-row"} hidden={!!cookieValue}>
            <span>
                Чтобы отключить рекламу установите любое расширение браузера, который блокирует JavaScript, и оставьте
                JS включенным только для этого сайта и самого плеера (то есть только для: kodik.info и reanime.art).
                <Linker href="/blog/how-to-remove-ads" linkType="internal" className="px-1 hover:underline">
                    Подробнее🔗
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
                className={"cursor-pointer hover:underline font-mono font-black p-2 text-xl"}
            >
                {"x"}
            </button>
        </div>
    );
}
