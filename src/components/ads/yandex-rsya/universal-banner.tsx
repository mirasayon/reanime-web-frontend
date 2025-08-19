"use client";
import { Get_Current_Theme } from "#/components/themes/get_current_theme";
import { AppSettings } from "#/settings/app";
import { type JSX, useEffect, useState } from "react";
import Script from "next/script";

export function UniversalBanner({ className = "" }: { className?: string }): JSX.Element | null {
    if (!AppSettings.enable_ads) {
        return null;
    }
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }
    let { is_dark } = Get_Current_Theme();

    const yaid = is_dark ? { div: "yandex_rtb_R-A-12114109-4", bid: "R-A-12114109-4" } : { bid: "R-A-12114109-9", div: "yandex_rtb_R-A-12114109-9" };
    return (
        <div className="p-2">
            <div id={yaid.div} className={` ${className} `} />
            <Script id="UniversalCommonBanner" strategy="afterInteractive">
                {`
                        window.yaContextCb.push(() => {
                            Ya.Context.AdvManager.render({
                                blockId: "${yaid.bid}",
                                renderTo: "${yaid.div}",
                            });
                        });
                    `}
            </Script>
        </div>
    );
}
