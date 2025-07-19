"use client";
import { Get_Current_Theme } from "#/components/themes/get_current_theme";
import { EnvConfig } from "#/configs/env";
import { AppSettings } from "#/settings/app";
import Script from "next/script";
import { JSX, useEffect, useState } from "react";

/** Banner Used in Frames */
export function BannerInFrames(): JSX.Element | undefined {
    if (!AppSettings.enable_ads) {
        return;
    }
    if (!EnvConfig.mode.prod) {
        return;
    }
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return;
    }
    let { is_dark } = Get_Current_Theme();
    const yaid = is_dark
        ? { div: "yandex_rtb_R-A-12114109-6", bid: "R-A-12114109-6" }
        : { bid: "R-A-12114109-10", div: "yandex_rtb_R-A-12114109-10" };

    return (
        <>
            {/* <!-- Yandex.RTB R-A-12114109-6 --> */}
            <div id={yaid.div} />
            <Script id="BannerInFrames" strategy="afterInteractive">
                {`
						window.yaContextCb.push(() => {
							Ya.Context.AdvManager.render({
								blockId: "${yaid.bid}",
								renderTo: "${yaid.div}",
							});
						});
					`}
            </Script>
        </>
    );
}
