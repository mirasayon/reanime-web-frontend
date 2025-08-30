import { Normalize_age_rating } from "#/components/utilities/common/normalize-age-rating.utilx";
import { SiShikimori } from "react-icons/si";
import { CoverImage } from "#/components/animes/cover_image";
import { rea_wrapper_border } from "#/styles/provider";
import Link from "next/link";
import { BoldX, It_will_be_known_soon, GhostedTextComponent } from "../utilities/common/assembler-of-utilities.utilx";
import { Normalize_anime_status } from "../utilities/common/ru-anime-status";
import type { MaterialObject } from "kodik-api-simplified/index";
export function AnimeDescriptionModule({ anime, cover_image_src }: { cover_image_src: string; anime: MaterialObject }) {
    const type_ru = anime.type === "anime" ? "Фильм" : "ТВ Сериал";
    return (
        <div className={rea_wrapper_border}>
            <div className={`p-3 text-center`}>{anime.title}</div>
            <div className={` p-4 flex-row flex max-md:grid`}>
                <div className="min-w-max flex flex-col">
                    <CoverImage image_src={cover_image_src} anime_title={`Обложка от аниме ${anime.title}`} />
                </div>

                <div className=" flex flex-col justify-between">
                    <div>
                        {" "}
                        <BoldX>Альтернативные названия: </BoldX>
                        {anime.other_title},{/* {anime.names.all.toString()}{" "} */}
                    </div>
                    <div>
                        <BoldX>Год выпуска: </BoldX>
                        {anime.year}
                    </div>

                    <div>
                        <BoldX>Тип: </BoldX>
                        {anime.material_data?.anime_kind} ({type_ru})
                    </div>

                    {/* <div>
                        {anime.type === "anime-serial" && (
                            <>
                                <BoldX>Сезон: </BoldX>
                                {anime.material_data.sea}
                                <br />
                            </>
                        )}
                    </div> */}

                    <div>
                        <span className="flex">
                            <BoldX>Рейтинг (от шикимори): </BoldX> <SiShikimori className="p-1" size={25} />{" "}
                            {anime.material_data?.shikimori_rating
                                ? `${anime.material_data?.shikimori_rating}/10 (${anime.material_data.shikimori_votes})`
                                : "неизвестно"}
                        </span>
                    </div>

                    <div>
                        <BoldX>Статус: </BoldX>
                        <Normalize_anime_status str={anime.material_data?.anime_status} />
                    </div>
                    <div>
                        <BoldX>Возрастной рейтинг: </BoldX>
                        <Normalize_age_rating minimal_age={anime.material_data?.minimal_age || null} rating={anime.material_data?.rating_mpaa} />
                    </div>

                    <div>
                        {anime.type === "anime-serial" && (
                            <>
                                <BoldX>Количество серий: </BoldX>
                                {anime.episodes_count || <GhostedTextComponent>неизвестно</GhostedTextComponent>}
                            </>
                        )}
                    </div>

                    <div>
                        {anime.material_data?.anime_status !== "released" && (
                            <>
                                <BoldX>Количество вышедших серий: </BoldX>
                                {anime.material_data?.episodes_aired || <GhostedTextComponent>неизвестно</GhostedTextComponent>}
                            </>
                        )}
                    </div>

                    <div>
                        <BoldX>Студии: </BoldX>
                        {anime.material_data?.anime_studios && anime.material_data?.anime_studios?.length > 0 ? (
                            anime.material_data?.anime_studios.map((item, ind) => (
                                <span key={item}>
                                    {ind !== 0 && ","} {item}
                                </span>
                            ))
                        ) : (
                            <It_will_be_known_soon />
                        )}
                    </div>

                    <div>
                        <BoldX>Страна издания: </BoldX>
                        {anime.material_data?.countries ? (
                            anime.material_data?.countries.map((_county, ind) => (
                                <span key={_county}>
                                    {ind !== 0 && ","} {_county}
                                </span>
                            ))
                        ) : (
                            <It_will_be_known_soon />
                        )}
                    </div>

                    <div>
                        <BoldX>Дата релиза: </BoldX>
                        {anime.material_data?.released_at}
                    </div>

                    <div>
                        <BoldX>Жанры: </BoldX>
                        {anime.material_data?.genres && anime.material_data?.genres.length === 0 ? (
                            anime.material_data?.genres.map((genre, ind) => (
                                <Link href={`/genres/${genre.toLowerCase()}`} key={genre}>
                                    {ind !== 0 && ","}{" "}
                                    <span className={`dark:hover:text-cyan-300 dark:text-violet-400 text-indigo-800 font-bold`}>{genre}</span>
                                </Link>
                            ))
                        ) : (
                            <It_will_be_known_soon />
                        )}
                    </div>

                    <div>
                        <BoldX>Актёры: </BoldX>
                        {anime.material_data?.actors && anime.material_data.actors.length === 0 ? (
                            anime.material_data.actors.map((actor, indx) => (
                                <span key={actor}>
                                    {indx !== 0 && ","} {actor}
                                </span>
                            ))
                        ) : (
                            <It_will_be_known_soon />
                        )}
                    </div>
                </div>
            </div>
            <div className={` p-2`}>
                <BoldX>Описание:</BoldX>
                <div className="text-wrap whitespace-pre-wrap mt-2">{anime.material_data?.anime_description || <It_will_be_known_soon />}</div>
            </div>
        </div>
    );
}

