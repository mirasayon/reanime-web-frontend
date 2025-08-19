"use client";
import { AppSettings } from "#/settings/app";
import Script from "next/script";
import { type JSX, useEffect, useState } from "react";

/** Ads init */
export function InitHead(): JSX.Element | null {
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
    return (
        <>
            <Script id="InitHead" strategy="beforeInteractive">
                {" window.yaContextCb = window.yaContextCb || []; "}
            </Script>
            <Script id="InitHead_script" src="https://yandex.ru/ads/system/context.js" async={true} strategy="beforeInteractive" />
        </>
    );
}
