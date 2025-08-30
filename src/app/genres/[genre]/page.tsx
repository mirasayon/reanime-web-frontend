import { rea_wrapper_border } from "#/styles/provider";
import { notFound, redirect } from "next/navigation";
import type { JSX } from "react";
import type { SearchParams } from "#T/nextjs";
import type { Metadata } from "next";
import { WebsiteConfigs } from "#/configs/website-settings.app-config";
import { _categories, typed_description_genres } from "#/static/anime_categories";
import { RadioGroupSelectGenre } from "./radio-group-select-genre";
import { Anime_List_Component } from "#/components/utilities/common/assembler-of-utilities.utilx";
import { loadEnvFile } from "#/configs/environment-variables.main-config";
import { r6DescribeGenres } from "#/integrators/resource-service/get-internals-static-datas.integrator";
import { kodikByGenre } from "#/integrators/resource-service/get-animes-list-for-inputted-genre.integrator";
import { Logger } from "log-it-colored";
import { dedupeAnimes } from "#/libs/kodik-wrapper-utils/reducer-deduper";
type GenresPageProps = {
    params: Promise<{ genre: string }>;
    searchParams: SearchParams;
};
export default async function GenresPage({ params, searchParams }: GenresPageProps): Promise<JSX.Element> {
    const genre = decodeURI((await params).genre);
    const desc = (await r6DescribeGenres()).find((g) => g.russian_name === genre);

    if (!desc) {
        return notFound();
    }
    const res = await kodikByGenre(desc.russian_name);
    if (res === null) {
        return notFound();
    }
    // if (res === null) {
    //     return redirect("/genres/Повседневность");
    // }

    const results = dedupeAnimes(res.results);

    const res_url = (await loadEnvFile()).resource_service.url;
    return (
        <>
            <h1 className=" font-bold text-center border-b-4 border-blue-300">
                По жанрам: {typed_description_genres.find((w) => w.russian_name.includes(genre))?.russian_name}
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

export async function generateMetadata({ params }: GenresPageProps): Promise<Metadata> {
    const genre = decodeURI((await params).genre);
    const desc = (await r6DescribeGenres()).find((g) => g.russian_name === genre);
    if (!desc) {
        return notFound();
    }
    return {
        title: `По жанру: ${desc.russian_name} | ${WebsiteConfigs.public_domain}`,
    } satisfies Metadata;
}

