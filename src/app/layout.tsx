import "#/styles/global/main.tailwind.css";
import type { Metadata } from "next";
import { Cookie_consent_banner } from "#/components/layout/cookie_consent-button";
import { YandexMetrikaAnalytics } from "#/components/analytics/yandex_metrika";
import { inter } from "#/fonts/main-font.provider";
import type { LayoutProps } from "#T/nextjs";
import layoutStyles from "#/styles/global/layout.module.css";
import { Google_Analytics, Google_TagManager } from "#/components/analytics/google-analytics";
import { ThemeProviderCustom } from "#/components/themes/provider.themes";
import { Layout_Footer } from "#/components/layout/global/global-main-footer";
import { GlobalMainHeader } from "#/components/layout/global/global-main-header";
import { root_layout_Metadata } from "#/meta/root-layout.metadata";
import { cookies, headers } from "next/headers";
import { HtmlElementForJsonLD } from "#/meta/json_ld.static-metadata-setter";
import type { JSX } from "react";
import { nextLoadEnvSSR } from "#/configs/environment-variables.main-config";
import { sessionAuthenticator } from "#/integration/user-service/auth/cookie-authenticator.integrator";
import { JotaiMainProvider } from "#/components/layout/atoms-toasts-components/jotai-main-provider";
import { UserService } from "#/configs/user-service.app-config";

type ReturnTypes = Promise<JSX.Element>;
type __Root_layoutProps = LayoutProps;

export default async function __Root_layout({ children }: __Root_layoutProps): ReturnTypes {
    const _env = await nextLoadEnvSSR();
    const auth = await sessionAuthenticator();
    return (
        <html lang="ru" suppressHydrationWarning>
            <head>
                <link rel="manifest" href="/manifest.webmanifest" />
            </head>
            {_env.is_prod && _env.gtm_id && <Google_TagManager gtm_id={_env.gtm_id} />}
            <body className={`${inter.className} ${layoutStyles.rootweb}   `}>
                <ThemeProviderCustom>
                    <JotaiMainProvider>
                        <GlobalMainHeader
                            account={auth?.data.account || null}
                            profile={auth?.profile.profile || null}
                            userServiceBaseUrl={_env.user_service.url}
                        />
                        {children}
                        <Layout_Footer />
                        <Cookie_consent_banner />
                    </JotaiMainProvider>
                </ThemeProviderCustom>
                {_env.is_prod && <YandexMetrikaAnalytics />}
                <HtmlElementForJsonLD />
            </body>
            {_env.is_prod && _env.gaid && <Google_Analytics gaid={_env.gaid} />}
        </html>
    );
}

export const metadata: Metadata = root_layout_Metadata;
