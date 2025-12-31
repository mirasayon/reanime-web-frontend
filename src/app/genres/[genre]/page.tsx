import { rea_wrapper_border } from "#/styles/provider";
import type { JSX } from "react";
import type { Metadata } from "next";
import { WebsiteConfigs } from "#/configs/website-settings.app-config";
import { _categories } from "#/static/anime_categories";
import { RadioGroupSelectGenre } from "./radio-group-select-genre";
import { Anime_List_Component } from "#/components/utilities/common/assembler-of-utilities.utility-components";
import { kodikByGenre } from "#/libs/kodik/get-animes-list-for-inputted-genre.integrator";
import { DescribeGenresStaticData, uiNeededGenres } from "#/static-but-it-is-typescript/describe-genres.static";
import { Found_no_animes } from "#/components/search_animes/found_no_animes";
import { dedupeAnimes } from "#/utils/reducer-deduper";
type GenresPageProps = {
    params: Promise<{ genre: string }>;
};
export default async function GenresPage({ params }: GenresPageProps): Promise<JSX.Element> {
    const genre = decodeURI((await params).genre);
    const desc = DescribeGenresStaticData.find((g) => g.russian_name === genre);

    let is404 = false;
    const res = await kodikByGenre(desc?.russian_name || genre);

    if (res === null || !res.results.length) {
        is404 = true;
    }

    const results = res ? dedupeAnimes(res.results) : null;

    return (
        <>
            <h1 className=" font-bold text-center border-b-4 border-blue-300">
                По жанрам: {uiNeededGenres.find((w) => w.russian_name.includes(genre))?.russian_name}
            </h1>
            <RadioGroupSelectGenre current={genre} />
            {desc && (
                <div className={` ${rea_wrapper_border} `}>
                    <div className={" m-4"}>
                        {desc.russian_name} - {desc.description}
                    </div>
                </div>
            )}
            {is404 && <Found_no_animes />}
            {results && <Anime_List_Component data={results} />}
        </>
    );
}

export async function generateMetadata({ params }: GenresPageProps): Promise<Metadata> {
    const genre = decodeURI((await params).genre);
    return {
        title: `По жанру: ${genre} | ${WebsiteConfigs.public_domain}`,
    } satisfies Metadata;
}
