import { rea_wrapper_border } from "#/styles/provider";
import { notFound, redirect } from "next/navigation";
import React from "react";
import type { SearchParams, IPageParams } from "#T/next";
import type { Metadata } from "next";
import { WebsiteConfigs } from "#/configs/website-settings.app-config";
import { ResServiceApi } from "#/integrators/resource-service/resource-service-main.integrator";
import { _categories, typed_description_genres } from "#/static/anime_categories";
import { RadioGroupSelectGenre } from "./radio-group-select-genre";
import { Anime_List_Component } from "#/components/utilities/common/assembler-of-utilities.utilx";
import { loadEnvFile } from "#/configs/environment-variables.main-config";
export default async function GenresPage({ params, searchParams }: { params: IPageParams<{ genre_en: string }>; searchParams: SearchParams }) {
    const genre = (await params).genre_en;
    const desc = (await ResServiceApi.internals.get_desc_genres()).find((g) => g.english_name.toLowerCase() === genre);
    if (!desc) {
        return notFound();
    }
    let res = await ResServiceApi.by_genre(desc.russian_name);
    if (!res) {
        return redirect("/genres/Slice of life");
    }
    if (!res) {
        return notFound();
    }
    const { results } = res;

    const res_url = (await loadEnvFile()).resource_service.url;
    return (
        <>
            <h1 className=" font-bold text-center border-b-4 border-blue-300">
                По жанрам: {typed_description_genres.find((w) => w.english_name.toLowerCase().includes(genre))?.russian_name}
            </h1>
            <RadioGroupSelectGenre current={genre} />
            <div className={`min-h-[200px] ${rea_wrapper_border}`}>
                <div className={" m-4 text-xl"}>
                    {desc.russian_name} - {desc.description}
                </div>
            </div>
            <Anime_List_Component kodiks={results} resUrl={res_url} />
        </>
    );
}

export async function generateMetadata({ params }: { params: IPageParams<{ genre_en: string }> }): Promise<Metadata> {
    const genre_en = decodeURI((await params).genre_en);
    const desc = (await ResServiceApi.internals.get_desc_genres()).find((g) => g.english_name.toLowerCase() === genre_en);
    if (!desc) {
        return notFound();
    }
    return {
        title: `По жанру: ${desc.russian_name} | ${WebsiteConfigs.public_domain}`,
    } satisfies Metadata;
}

