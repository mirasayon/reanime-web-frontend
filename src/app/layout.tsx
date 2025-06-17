import type { Metadata } from "next";
import "#/styles/global/main.tailwind.css";
import { Cookie_consent_banner } from "#/components/layout/cookie_consent";
import { LayoutJSX } from "#/components/layout/globals";
import { ServerSideThemeCookie } from "#/components/hooks/server_side_cookies";
import { rea_layout_globals } from "#/styles/provider";
import { AdsRSYA } from "#/components/ads/yandex_ads";
import { Messanger } from "#/components/ui/messanger";
import { ReaGA } from "#/components/analytics/google-a";
import { ReaYMA } from "#/components/analytics/yandex_metrika";
import { JsonLDStr } from "#/meta/json_ld";
import { inter } from "#/fonts/import";
import type { NextTN } from "#T/next";
import { WebsiteConfigs } from "#/configs/website";
import type { JSX } from "react";

export default async function Root_layout(props: NextTN.LayoutProps): Promise<JSX.Element> {
    const { is_dark, cookieStore } = await ServerSideThemeCookie();
    const ui_formatt = cookieStore.get("rea_interface_format")?.value as "web" | "app" | undefined;
    const isWebf = ui_formatt ? ui_formatt === "web" : true;
    const cavatar = cookieStore.get("rea_user_avatar")?.value || null;
    const root_styles = is_dark
        ? isWebf
            ? rea_layout_globals.root_dark_web
            : rea_layout_globals.root_dark_app
        : isWebf
          ? rea_layout_globals.root_light_web
          : rea_layout_globals.root_light_app;

    return (
        <html lang="ru">
            <head>
                <AdsRSYA.InitHead />
            </head>
            <ReaGA.TagManager />
            <body className={`${inter.className} ${root_styles}`}>
                <LayoutJSX.Header
                    is_web_format={isWebf}
                    is_dark={is_dark}
                    current_user_avatar={cavatar}
                />
                {props.children}
                <Messanger is_dark={is_dark} />
                {/* <AdsRSYA.PCFLoorAds is_dark={isDark} /> */}
                {/* <AdsRSYA.MobileFloorAds is_dark={isDark} /> */}
                <LayoutJSX.Footer is_dark={is_dark} />
                <Cookie_consent_banner is_dark={is_dark} />
                <AdsRSYA.PCFLoorAds is_dark={is_dark} />
                <AdsRSYA.MobileFloorAds is_dark={is_dark} />
                <ReaYMA.Mekrika />
                <script
                    type="application/ld+json"
                    // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
                    dangerouslySetInnerHTML={{ __html: JsonLDStr }}
                />
            </body>
            <ReaGA.Analytics />
        </html>
    );
}
export const metadata: Metadata = {
    title: `Смотреть аниме онлайн бесплатно на сайте ${WebsiteConfigs.public_domain}`,
    description: `${WebsiteConfigs.normalized_name} — смотреть аниме онлайн бесплатно. Вот уже много лет японская анимация  пользуется огромным 
    успехом по всему миру,  включая Россию. Эти ленты  любят за яркий сюжет,   оригинальную рисовку и неизменный накал эмоций.
    Многие поклонники любят смотреть аниме онлайн, однако для этого часто приходится пользоваться
    несколькими источниками, поскольку ни один из них нельзя назвать универсальным.   Но у нас есть отличная новость 
    для любителей аниме! Мы запустили новый проект ${WebsiteConfigs.normalized_name}, посвящённый онлайн-просмотру аниме. Теперь Вам не придётся бороздить
    просторы интернета в поисках любимого тайтла – все лучшие аниме в хорошем качестве уже есть на нашем портале.
    Мы сами очень любим этот жанр и поэтому постарались сделать наш сайт как можно более удобным и захватывающим.
    ${WebsiteConfigs.normalized_name} - Смотри аниме тут`,
    keywords: [
        "аниме",
        "anime",
        WebsiteConfigs.public_domain,
        WebsiteConfigs.public_full_domain,
        WebsiteConfigs.mail,
        WebsiteConfigs.name,
        "смотреть аниме онлайн",
        "смотреть аниме",
        WebsiteConfigs.cyrillic_name,
        WebsiteConfigs.cyrillic_normalized_name,
    ],
    icons: {
        apple: `${WebsiteConfigs.public_full_domain}/apple-icon.png`,
        icon: `${WebsiteConfigs.public_full_domain}/icon.png`,
    },
    openGraph: {
        title: WebsiteConfigs.normalized_name,
        url: WebsiteConfigs.public_full_domain,
        images: `${WebsiteConfigs.public_full_domain}/favicon.ico`,
        locale: "ru_RU",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
    },
    metadataBase: WebsiteConfigs.full_domain_URL,
};
