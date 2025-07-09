import "#/styles/global/main.tailwind.css";
import type { Metadata } from "next";
import { Cookie_consent_banner } from "#/components/layout/cookie_consent";
import { LayoutJSX } from "#/components/layout/globals";
import { AdsRSYA } from "#/components/ads/yandex_ads";
import { Messanger } from "#/components/ui/messanger";
import { ReaGA } from "#/components/analytics/google-a";
import { ReaYMA } from "#/components/analytics/yandex_metrika";
import { JsonLDStr } from "#/meta/json_ld";
import { inter } from "#/fonts/import";
import type { NextTN } from "#T/next";
import { WebsiteConfigs } from "#/configs/website";
import { ThemeProvider } from "next-themes";
// import { ThemeProvider } from "#/components/themes/theme-provider";
import themesSCC from "#/styles/global/layout.module.css";
export default async function Root_layout(props: NextTN.LayoutProps) {
    // const ui_formatt = cookieStore.get("rea_interface_format")?.value as "web" | "app" | undefined;
    const ui_formatt = "web" as "web" | "app" | undefined;
    const is_web_format = ui_formatt ? ui_formatt === "web" : true;

    return (
        <html lang="ru" suppressHydrationWarning>
            <head>
                <AdsRSYA.InitHead />
            </head>
            <ReaGA.TagManager />
            <body className={`${inter.className} ${themesSCC.rootweb}  `}>
                <ThemeProvider enableSystem>
                    <div
                        className={""}
                        //     className={`
                        //         dark:bg-amber-50
                        //      [background: linear-gradient(to bottom, transparent, rgb(231, 251, 255)) rgb(228, 243, 255);]
                        // dark:[background: linear-gradient(to bottom, transparent, rgb(0, 34, 47)) rgb(0, 41, 52);]
                        //     `}
                    >
                        <LayoutJSX.Header
                            is_web_format={is_web_format}
                            current_user_avatar={null}
                        />
                        {props.children}
                        <Messanger />
                        {/* <AdsRSYA.PCFLoorAds is_dark={isDark} /> */}
                        {/* <AdsRSYA.MobileFloorAds is_dark={isDark} /> */}
                        <LayoutJSX.Footer />
                        <Cookie_consent_banner />
                    </div>
                </ThemeProvider>
                <AdsRSYA.PCFLoorAds />
                <AdsRSYA.MobileFloorAds />
                <ReaYMA.Mekrika />
                <script
                    type="application/ld+json"
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
