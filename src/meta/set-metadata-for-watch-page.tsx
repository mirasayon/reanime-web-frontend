"use server";
import { hasOnlyNumericString, getAnimePosterUrlByShikimoriId } from "#/utils";
import { notFound } from "next/navigation";
import { WebsiteConfigs } from "#/configs/website-settings.app-config";
import { metadata404 } from "#/constants/common.constants";
import { loadEnvFile } from "#/configs/environment-variables.main-config";
import { getKodikApi } from "#/providers/kodik-api-client";
import type { Metadata } from "next/types";
export async function setMetadataForWatchAnimePage(shikimori_id: string): Promise<Metadata> {
    if (Number.isNaN(shikimori_id) || !hasOnlyNumericString(shikimori_id)) {
        return notFound();
    }
    const shikimori_id_web = Number(shikimori_id);
    const res = await (
        await getKodikApi()
    ).search({
        shikimori_id: shikimori_id_web,
        has_field: "shikimori_id",
        with_material_data: true,
        limit: 1,
        types: ["anime", "anime-serial"],
    });
    const anime = res.results[0] || null;
    if (!anime) {
        return metadata404;
    }
    const anime_title = `${anime.title} `;
    const image_src = getAnimePosterUrlByShikimoriId(anime.shikimori_id, (await loadEnvFile()).resource_service_url);
    const names = anime.material_data?.other_titles || [];
    return {
        title: `${anime_title} | ${WebsiteConfigs.public_domain}`,
        description: `${anime_title} смотреть аниме онлайн на сайте ${WebsiteConfigs.public_domain}`,
        keywords: [
            anime_title,
            ...names,
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
            url: `${WebsiteConfigs.public_full_domain}/anime/${anime.shikimori_id}`,
        },
        robots: {
            index: true,
            follow: true,
        },
    };
}

