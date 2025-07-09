import { UtilityJSX } from "#/components/utilities/x_components";
import { ApplicationConfig } from "#/configs/application";
import type { JsonDB } from "#T/shared/json_db";
import { Global_Utilities } from "#/utils/functions";
import { notFound } from "next/navigation";
import { WebsiteConfigs } from "#/configs/website";
import { Reanime_Resource_Service_Api_Integrator } from "#/integrators/resource_service.integrator";

class UtilsWatchClass {
    setMetadata = async (shikimori_id: string) => {
        if (
            Number.isNaN(shikimori_id) ||
            !Global_Utilities.is_contains_only_numeric_string(shikimori_id)
        ) {
            return notFound();
        }
        const shikimori_id_web = Number(shikimori_id);

        const anime: JsonDB.ftype | null =
            await Reanime_Resource_Service_Api_Integrator.core.byid.any_by_id(shikimori_id_web);
        if (!anime) {
            return ApplicationConfig.metadata404;
        }
        const season = anime.season ? `${anime.season} сезон` : "";
        const anime_title = `${anime.nms.ru} ${season}`;
        const image_src =
            Global_Utilities.get_poster_image_url_by_filename(anime.img) ||
            UtilityJSX.Default_poster();
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
                url: `${
                    WebsiteConfigs.public_full_domain
                }${Global_Utilities.get_anime_url_by_id_and_type(anime)}`,
            },
            robots: {
                index: true,
                follow: true,
            },
        };
    };
}
export const Anime_Series_Utils = new UtilsWatchClass();
