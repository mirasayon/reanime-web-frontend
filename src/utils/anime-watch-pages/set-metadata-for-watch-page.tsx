import { UtilityJSX } from "#/components/utilities/common/assembler-of-utilities.utilx";
import type { IReady_Animes_DB } from "@reanime/resource-parser/types/animes-db-types/ready-animes.types.js";
import { Global_Utilities } from "#/utils/common";
import { notFound } from "next/navigation";
import { WebsiteConfigs } from "#/configs/website-settings.app-config";
import { ResServiceApi } from "#/integrators/resource-service/resource-service-main.integrator";
import { metadata404 } from "#/constants/common.constants";

export const setMetadataForWatchAnimePage = async (shikimori_id: string) => {
    if (Number.isNaN(shikimori_id) || !Global_Utilities.is_contains_only_numeric_string(shikimori_id)) {
        return notFound();
    }
    const shikimori_id_web = Number(shikimori_id);

    const anime: IReady_Animes_DB | null = await ResServiceApi.byid.any_by_id({ shikimori_id: shikimori_id_web });
    if (!anime) {
        return metadata404;
    }
    const season = anime.season ? `${anime.season} сезон` : "";
    const anime_title = `${anime.names.ru} ${season}`;
    const image_src = Global_Utilities.get_poster_image_url_by_filename(anime.poster_image_for_rea) || UtilityJSX.Default_poster();
    return {
        title: `${anime_title} | ${WebsiteConfigs.public_domain}`,
        description: `${anime_title} смотреть аниме онлайн на сайте ${WebsiteConfigs.public_domain}`,
        keywords: [
            anime_title,
            ...anime.names.all,
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
            url: `${WebsiteConfigs.public_full_domain}${Global_Utilities.get_anime_url_by_id_and_type(anime)}`,
        },
        robots: {
            index: true,
            follow: true,
        },
    };
};
