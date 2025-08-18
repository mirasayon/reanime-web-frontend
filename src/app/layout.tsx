import "#/styles/global/main.tailwind.css";
import type { Metadata } from "next";
import { Cookie_consent_banner } from "#/components/layout/cookie_consent-button";
import { Yandex_Mekrika_Analytics } from "#/components/analytics/yandex_metrika";
import { inter } from "#/fonts/main-font.provider";
import type { NextJS_Types } from "#T/next";
import themesSCC from "#/styles/global/layout.module.css";
import { Google_Analytics, Google_TagManager } from "#/components/analytics/google-analytics";
import { ThemeProviderCustom } from "#/components/themes/provider.themes";
import { Layout_Footer } from "#/components/layout/global/global-main-footer";
import { Layout_Header } from "#/components/layout/global/global-main-header";
import { root_layout_metas } from "#/metadatas/root-layout.metadata";
import { AutherType, getSessionFromClient } from "#/integrators/auth/cookie-auther";
import { cookies, headers } from "next/headers";
import { HtmlElementForJsonLD } from "#/meta/json_ld";
import { JSX } from "react";

type ReturnTypes = Promise<JSX.Element>;
type Props = NextJS_Types.LayoutProps;

export default async function __Root_layout({ children }: Props): ReturnTypes {
    const auth: AutherType | null = null;
    // const auth = await getSessionFromClient({ cookies: await cookies(), headers: await headers() });
    return (
        <html lang="ru">
            <head>
                <link rel="manifest" href="/manifest.webmanifest" />
            </head>
            <Google_TagManager />
            <body className={`${inter.className} ${themesSCC.rootweb}   `}>
                <ThemeProviderCustom>
                    <Layout_Header
                        profile={
                            // auth?.data.profile ??

                            null
                        }
                        account={
                            // auth?.data.account
                            // ??

                            null
                        }
                    />
                    {children}
                    <Layout_Footer />
                    <Cookie_consent_banner />
                </ThemeProviderCustom>
                <Yandex_Mekrika_Analytics />
                <HtmlElementForJsonLD />
            </body>
            <Google_Analytics />
        </html>
    );
}

export const metadata: Metadata = root_layout_metas;
