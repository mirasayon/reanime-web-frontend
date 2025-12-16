import { Google_Analytics, Google_TagManager } from "#/components/analytics/google-analytics";
import { YandexMetrikaAnalytics } from "#/components/analytics/yandex_metrika";
import { JotaiMainProvider } from "#/components/layout/atoms-toasts-components/jotai-main-provider";
import { Cookie_consent_banner } from "#/components/layout/cookie_consent-button";
import { Layout_Footer } from "#/components/layout/global/global-main-footer";
import { GlobalMainHeader } from "#/components/layout/global/global-main-header";
import { ThemeProviderCustom } from "#/components/themes/provider.themes";
import { inter } from "#/fonts/main-font.provider";
import { HtmlElementForJsonLD } from "#/meta/json_ld.static-metadata-setter";
import { root_layout_Metadata } from "#/meta/root-layout.metadata";
import layoutStyles from "#/styles/global/layout.module.css";
import "#/styles/global/main.tailwind.css";
import type { LayoutProps } from "#T/nextjs";
import type { Metadata } from "next";
import type { JSX } from "react";
const isAnalyticsEnabled = process.env.NEXT_PUBLIC_ANALYTICS === "true";
const gAIdPublic = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID!;
const gTMidPublic = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID!;
const userServiceUrlPublic = process.env.NEXT_PUBLIC_USER_SERVICE_URL!;
type __Root_layoutProps = LayoutProps;
export default function __Root_layout({ children }: __Root_layoutProps): JSX.Element {
    return (
        <html lang="ru" suppressHydrationWarning>
            <head>
                <link rel="manifest" href="/manifest.webmanifest" />
            </head>
            {isAnalyticsEnabled && <Google_TagManager gtm_id={gTMidPublic} />}
            <body className={`${inter.className} ${layoutStyles.rootWeb}   `}>
                <ThemeProviderCustom>
                    <JotaiMainProvider>
                        <GlobalMainHeader userServiceBaseUrl={userServiceUrlPublic} />
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
