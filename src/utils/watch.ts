import { UtilityJSX } from "#/components/utilities/x_components";
import { ReaApi } from "#/services/apis/rea_api";
import { ApplicationConfig } from "#/configs/application";
import type { JsonDB } from "#T/shared/json_db";
import { Utils } from "#/utils/functions";
import { notFound } from "next/navigation";
import { WebsiteConfigs } from "#/configs/website";

class UtilsWatchClass {
    setMetadata = async (shikimori_id: string) => {
        if (Number.isNaN(shikimori_id) || !Utils.is_contains_only_numeric_string(shikimori_id)) {
            return notFound();
        }
        const shikimori_id_web = Number(shikimori_id);

        const anime: JsonDB.ftype | null = await ReaApi.core.byid.any(shikimori_id_web);
        if (!anime) {
            return ApplicationConfig.metadata404;
        }
        const season = anime.season ? `${anime.season} сезон` : "";
        const anime_title = `${anime.nms.ru} ${season}`;
        const image_src = Utils.SetREAPIUrl(anime.img) || UtilityJSX.Default_poster();
        return {
            title: `${anime_title} | ${WebsiteConfigs.public_domain}`,
            description: `${anime_title} смотреть аниме онлайн на сайте ${WebsiteConfigs.public_domain}`,
            keywords: [
                anime_title,
                ...anime.nms.all,
                "anime",
                "смотреть",
                "смотреть аниме",
                "аниме",
                WebsiteConfigs.cyrillic_name,
                WebsiteConfigs.name,
                WebsiteConfigs.public_domain,
            ],
            openGraph: {
                title: anime_title,
                description: `Аниме ${anime_title}`,
                images: { url: image_src },
                locale: "ru_RU",
                type: "website",
                url: `${WebsiteConfigs.public_full_domain}${Utils.getUrlReaAnime(anime)}`,
            },
            robots: {
                index: true,
                follow: true,
            },
        };
    };
}
export const UtilsWatch = new UtilsWatchClass();
