import { Google_Analytics, Google_TagManager } from "#/components/analytics/google-analytics";
import { YandexMetrikaAnalytics } from "#/components/analytics/yandex_metrika";
import { JotaiMainProvider } from "#/components/layout/atoms-toasts-components/jotai-main-provider";
import { CookieConsentBanner } from "#/components/layout/cookie_consent-button";
import { LayoutFooter } from "#/components/layout/global/layout-footer";
import { LayoutHeader } from "#/components/layout/global/layout-header";
import { ThemeProviderCustom } from "#/components/themes/provider.themes";
import { envClient } from "#/env/env-client";
import { interFont } from "#/fonts/main-font.provider";
import { getAccountSession } from "#/integration/user-service/auth/get-account-session";
import { HtmlElementForJsonLD } from "#/meta/json_ld.static-metadata-setter";
import { layoutMetadata } from "#/meta/root-layout.metadata";
import layoutStyles from "#/styles/global/layout.module.css";
import "#/styles/global/main.tailwind.css";
import type { LayoutProps } from "#T/nextjs";
import type { Metadata } from "next";
export default async function __RootLayout({ children }: LayoutProps): Promise<React.JSX.Element> {
    const auth = await getAccountSession();
    return (
        <html lang="ru" suppressHydrationWarning>
            <head>
                <link rel="manifest" href="/manifest.webmanifest" />
            </head>
            {envClient.googleTagManagerId && <Google_TagManager gtm_id={envClient.googleTagManagerId} />}
            <body className={`${interFont.className} ${layoutStyles.rootWeb}   `}>
                <ThemeProviderCustom>
                    <JotaiMainProvider>
                        <LayoutHeader
                            avatar={auth?.avatar || null}
                            logged={!!auth?.selector}
                            username={auth?.username || null}
                        />
                        {children}
                        <LayoutFooter />
                        <CookieConsentBanner />
                    </JotaiMainProvider>
                </ThemeProviderCustom>
                {envClient.googleTagManagerId && <YandexMetrikaAnalytics />}
                <HtmlElementForJsonLD />
            </body>
            {envClient.googleAnalyticsId && <Google_Analytics gaid={envClient.googleAnalyticsId} />}
        </html>
    );
}

export const metadata: Metadata = layoutMetadata;

export const dynamic = "force-dynamic";
