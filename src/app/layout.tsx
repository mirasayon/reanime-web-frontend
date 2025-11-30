import "#/styles/global/main.tailwind.css";
import type { Metadata } from "next";
import { Cookie_consent_banner } from "#/components/layout/cookie_consent-button";
import { YandexMetrikaAnalytics } from "#/components/analytics/yandex_metrika";
import { inter } from "#/fonts/main-font.provider";
import type { LayoutProps } from "#T/nextjs";
import layoutStyles from "#/styles/global/layout.module.css";
import {
    Google_Analytics,
    Google_TagManager,
} from "#/components/analytics/google-analytics";
import { ThemeProviderCustom } from "#/components/themes/provider.themes";
import { Layout_Footer } from "#/components/layout/global/global-main-footer";
import { GlobalMainHeader } from "#/components/layout/global/global-main-header";
import { root_layout_Metadata } from "#/meta/root-layout.metadata";
import { HtmlElementForJsonLD } from "#/meta/json_ld.static-metadata-setter";
import type { JSX } from "react";
import { JotaiMainProvider } from "#/components/layout/atoms-toasts-components/jotai-main-provider";
const isAnalyticsEnabled = process.env.NEXT_PUBLIC_ANALYTICS === "true";
const gAIdPublic = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID!;
const gTMidPublic = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID!;
const userServiceUrlPublic = process.env.NEXT_PUBLIC_USER_SERVICE_URL!;
type __Root_layoutProps = LayoutProps;
export default function __Root_layout({
    children,
}: __Root_layoutProps): JSX.Element {
    return (
        <html lang="ru" suppressHydrationWarning>
            <head>
                <link rel="manifest" href="/manifest.webmanifest" />
            </head>
            {isAnalyticsEnabled && <Google_TagManager gtm_id={gTMidPublic} />}
            <body className={`${inter.className} ${layoutStyles.rootWeb}   `}>
                <ThemeProviderCustom>
                    <JotaiMainProvider>
                        <GlobalMainHeader
                            userServiceBaseUrl={userServiceUrlPublic}
                        />
                        {children}
                        <Layout_Footer />
                        <Cookie_consent_banner />
                    </JotaiMainProvider>
                </ThemeProviderCustom>
                {isAnalyticsEnabled && <YandexMetrikaAnalytics />}
                <HtmlElementForJsonLD />
            </body>
            {isAnalyticsEnabled && <Google_Analytics gaid={gAIdPublic} />}
        </html>
    );
}

export const metadata: Metadata = root_layout_Metadata;
