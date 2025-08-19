"use client";
import { Get_Current_Theme } from "#/components/themes/get_current_theme";
import { AppSettings } from "#/settings/app";
import Script from "next/script";
import { type JSX, useEffect, useState } from "react";

/** Banner Used in Frames */
export function BannerInFrames(): JSX.Element | null {
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
