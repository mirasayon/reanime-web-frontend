import { rea_wrapper_border } from "#/styles/provider";
import { notFound, redirect } from "next/navigation";
import React from "react";
import type { NextJS_Types } from "#T/next";
import type { Metadata } from "next";
import { WebsiteConfigs } from "#/configs/website-settings.app-config";
import { ResServiceApi } from "#/integrators/resource-service/resource-service-main.integrator";
import { AnimePaginationLinks } from "#/components/anime_page/pagination/anime-pagination-links";
import { _categories, typed_description_genres } from "#/static/anime_categories";
import { RadioGroupSelectGenre } from "./radio-group-select-genre";
import { Anime_List_Component } from "#/components/utilities/common/assembler-of-utilities.utilx";
import { LoadConfig } from "#/configs/environment-variables.main-config";
export default async function GenresPage({
    params,
    searchParams,
}: {
    params: NextJS_Types.Params<{ genre_en: string }>;
    searchParams: NextJS_Types.SearchParams;
}) {
    let res = await ResServiceApi.by_genre(await searchParams, (await params).genre_en);
    if (!res) {
        return redirect("/genres/slice of life");
    }
    if (!res) {
        return notFound();
    }

    const { data, input } = res;
    const desc = (await ResServiceApi.internals.get_desc_genres()).find((g) => g.english_name.toLowerCase() === input.genre);
    if (!desc) {
        return notFound();
    }
    const res_url = (await LoadConfig()).partners.resource_service.url;
    return (
        <>
            <h1 className=" font-bold text-center border-b-4 border-blue-300">
                По жанрам: {typed_description_genres.find((w) => w.english_name.toLowerCase().includes(input.genre))?.russian_name}
            </h1>
            <RadioGroupSelectGenre current={input.genre} />
            <div className={`min-h-[200px] ${rea_wrapper_border}`}>
                <div className={" m-4 text-xl"}>
                    {desc.russian_name} - {desc.description}
                </div>
            </div>
            <Anime_List_Component kodiks={data.paginated} resUrl={res_url} />
            <AnimePaginationLinks totalPages={data.total_length} currentPage={input.current_page} pageSize={input.page_size} />
        </>
    );
}

export async function generateMetadata({ params }: { params: NextJS_Types.Params<{ genre_en: string }> }): Promise<Metadata> {
    const genre_en = decodeURI((await params).genre_en);
    const desc = (await ResServiceApi.internals.get_desc_genres()).find((g) => g.english_name.toLowerCase() === genre_en);
    if (!desc) {
        return notFound();
    }
    return {
        title: `По жанру: ${desc.russian_name} | ${WebsiteConfigs.public_domain}`,
    } satisfies Metadata;
}
