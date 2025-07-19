"use client";
import { Get_Current_Theme } from "#/components/themes/get_current_theme";
import { EnvConfig } from "#/configs/env";
import { AppSettings } from "#/settings/app";
import Script from "next/script";
import { type JSX, useEffect, useState } from "react";
export function FeedAds(): JSX.Element | undefined {
    if (!AppSettings.enable_ads) {
        return;
    }
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return undefined;
    }
    let { is_dark } = Get_Current_Theme();
    if (!EnvConfig.mode.prod) {
        return;
    }
    return (
        <div className={" h-[30%] m-2 border-emerald-500 border-2 "}>
            {/* <!-- Yandex.RTB R-A-12114109-1 --> */}
            <div id="yandex_rtb_R-A-12114109-1" />
            <Script id="show-FeedAds" strategy="afterInteractive">
                {`
                        window.yaContextCb.push(() => {
                            Ya.Context.AdvManager.render({
                                blockId: "R-A-12114109-1",
                                renderTo: "yandex_rtb_R-A-12114109-1",
                                type: "feed",
                            });
                        });
                    `}
            </Script>
        </div>
    );
}
