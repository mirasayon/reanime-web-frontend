import { Google_Analytics, Google_TagManager } from "#/components/analytics/google-analytics";
import { YandexMetrikaAnalytics } from "#/components/analytics/yandex_metrika";
import { ComingSoon } from "#/components/info/coming-soon";
import { JotaiMainProvider } from "#/components/layout/atoms-toasts-components/jotai-main-provider";
import { CookieConsentBanner } from "#/components/layout/cookie_consent-button";
import { Layout_Footer } from "#/components/layout/global/global-main-footer";
import { GlobalMainHeader } from "#/components/layout/global/global-main-header";
import { ThemeProviderCustom } from "#/components/themes/provider.themes";
import { inter } from "#/fonts/main-font.provider";
import { sessionAuthenticator_S_A } from "#/integration/user-service/auth/cookie-authenticator.integrator";
import { HtmlElementForJsonLD } from "#/meta/json_ld.static-metadata-setter";
import { root_layout_Metadata } from "#/meta/root-layout.metadata";
import layoutStyles from "#/styles/global/layout.module.css";
import "#/styles/global/main.tailwind.css";
import type { LayoutProps } from "#T/nextjs";
import type { Metadata } from "next";
const gAIdPublic = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;
const gTMidPublic = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID;
type __Root_layoutProps = LayoutProps;
export default async function __Root_layout({ children }: __Root_layoutProps): Promise<React.JSX.Element> {
    const auth = await sessionAuthenticator_S_A();
    if (auth === 500) {
        return <ComingSoon />;
    }

    return (
        <html lang="ru" suppressHydrationWarning>
            <head>
                <link rel="manifest" href="/manifest.webmanifest" />
            </head>
            {gTMidPublic && <Google_TagManager gtm_id={gTMidPublic} />}
            <body className={`${inter.className} ${layoutStyles.rootWeb}   `}>
                <ThemeProviderCustom>
                    <JotaiMainProvider>
                        <GlobalMainHeader username={auth?.data.username} />
                        {children}
                        <Layout_Footer />
                        <CookieConsentBanner />
                    </JotaiMainProvider>
                </ThemeProviderCustom>
                {gTMidPublic && <YandexMetrikaAnalytics />}
                <HtmlElementForJsonLD />
            </body>
            {gAIdPublic && <Google_Analytics gaid={gAIdPublic} />}
        </html>
    );
}

export const metadata: Metadata = root_layout_Metadata;
