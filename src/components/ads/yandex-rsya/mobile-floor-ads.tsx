"use client";
import Script from "next/script";
import { Get_Current_Theme } from "../../themes/get_current_theme";
import { type JSX, useEffect, useState } from "react";
import { AppSettings } from "#/settings/app";

/** Bottom block of advertising For phones */
export function MobileFloorAds(): JSX.Element | null {
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

    const bid = is_dark ? "R-A-12114109-8" : "R-A-12114109-3";
    return (
        <Script id="MobileFloorAds" strategy="afterInteractive">
            {`
					window.yaContextCb.push(() => {
						Ya.Context.AdvManager.render({
							blockId: "${bid}",
							type: "floorAd",
							platform: "touch",
						});
					});
				`}
        </Script>
    );
}
