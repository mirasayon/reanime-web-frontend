"use client";
import { Get_Current_Theme } from "#/components/themes/get_current_theme";
import { AppSettings } from "#/settings/app";
import Script from "next/script";
import { type JSX, useEffect, useState } from "react";

/** Bottom block of advertising For Desktops */
export function PCFLoorAds(): JSX.Element | null {
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
    const block_id = is_dark ? "R-A-12114109-2" : "R-A-12114109-7";
    return (
        <Script id="PCFLoorAds" strategy="afterInteractive">
            {`
                    window.yaContextCb.push(() => {
                        Ya.Context.AdvManager.render({
                            blockId: "${block_id}",
                            type: "floorAd",
                            platform: "desktop",
                        });
                    });
                `}
        </Script>
    );
}
