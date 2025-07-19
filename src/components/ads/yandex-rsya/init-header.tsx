"use client";
import { EnvConfig } from "#/configs/env";
import { AppSettings } from "#/settings/app";
import Script from "next/script";
import { type JSX, useEffect, useState } from "react";

/** Ads init */
export function InitHead(): JSX.Element | undefined {
    if (!AppSettings.enable_ads) {
        return;
    }
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return;
    }
    if (!EnvConfig.mode.prod) {
        return;
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
