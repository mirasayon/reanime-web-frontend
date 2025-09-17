import { Normalize_age_rating } from "#/components/utilities/common/normalize-age-rating.utilx";
import { SiShikimori } from "react-icons/si";
import { AnimePosterImage } from "#/components/animes/anime-poster-image";
import { rea_wrapper_border } from "#/styles/provider";
import Link from "next/link";
import { BoldX, GhostedUnknown } from "../utilities/common/assembler-of-utilities.utilx";
import { Normalize_anime_status } from "../utilities/common/ru-anime-status";
import type { EntityDataObject } from "kodik/types";
import { getTypeOfAnime } from "#/utils";
import { Logger } from "log-it-colored";
export function AnimeDescription({ anime, cover_image_src }: { cover_image_src: string; anime: EntityDataObject }) {
    const type_ru = getTypeOfAnime(anime.type);
    return (
        <div className={rea_wrapper_border}>
            <div className={`p-3 text-center`}>{anime.title}</div>
            <div className={` p-4 flex-row flex max-md:grid`}>
                <div className="min-w-max flex flex-col">
                    <AnimePosterImage image_src={cover_image_src} anime_title={`Обложка от аниме ${anime.title}`} />
                </div>

                <div className=" flex flex-col justify-between">
                    <div className=" flex flex-col">
                        {" "}
                        <BoldX>Альтернативные названия: </BoldX>
                        {[anime.other_title].concat(anime.material_data?.other_titles ?? []).map((item) => (
                            <div className=" px-2" key={item}>
                                {/* {ind !== 0 && ","}  */}
                                {item}
                            </div>
                        ))}
                    </div>
                    <div>
                        <BoldX>Год выпуска: </BoldX>
                        {anime.year ? <span>{anime.year}</span> : <GhostedUnknown />}
                    </div>

                    <div>
                        <BoldX>Тип аниме: </BoldX>
                        {anime.material_data?.anime_kind ? (
                            <span>
                                {anime.material_data.anime_kind.toUpperCase()} ({type_ru})
                            </span>
                        ) : (
                            <GhostedUnknown />
                        )}
                    </div>

                    <div>
                        {anime.type === "anime-serial" && anime.seasons && (
                            <>
                                <BoldX>Сезон: </BoldX>
                                {Object.values(anime.seasons).at(-1)}
                                <br />
                            </>
                        )}
                    </div>

                    <div>
                        <span className="flex">
                            <BoldX>Рейтинг (от шикимори): </BoldX> <SiShikimori className="p-1" size={25} />{" "}
                            {anime.material_data?.shikimori_rating ? (
                                `${anime.material_data.shikimori_rating}/10 (${anime.material_data.shikimori_votes ?? "0"})`
                            ) : (
                                <GhostedUnknown />
                            )}
                        </span>
                    </div>

                    <div>
                        <BoldX>Статус: </BoldX>
                        {anime.material_data?.anime_status ? <Normalize_anime_status str={anime.material_data.anime_status} /> : <GhostedUnknown />}
                    </div>
                    <div>
                        <BoldX>Возрастной рейтинг: </BoldX>
                        {anime.material_data?.minimal_age ? (
                            <Normalize_age_rating minimal_age={anime.material_data.minimal_age} rating={anime.material_data?.rating_mpaa} />
                        ) : (
                            <GhostedUnknown />
                        )}
                    </div>

                    <div>
                        {anime.type === "anime-serial" && (
                            <>
                                <BoldX>Количество серий: </BoldX>
                                {anime.material_data?.episodes_total || <GhostedUnknown />}
                            </>
                        )}
                    </div>

                    <div>
                        {anime.material_data?.anime_status === "ongoing" && (
                            <>
                                <BoldX>Количество вышедших серий: </BoldX>
                                {anime.material_data?.episodes_aired ? (
                                    <span className="">{anime.material_data.episodes_aired}</span>
                                ) : (
                                    <GhostedUnknown />
                                )}
                            </>
                        )}
                    </div>

                    <div>
                        <BoldX>Студии: </BoldX>
                        {anime.material_data?.anime_studios && anime.material_data?.anime_studios?.length > 0 ? (
                            anime.material_data.anime_studios.map((item, ind) => (
                                <span key={item}>
                                    {ind !== 0 && ","} {item}
                                </span>
                            ))
                        ) : (
                            <GhostedUnknown />
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
                            <GhostedUnknown />
                        )}
                    </div>

                    <div>
                        <BoldX>Дата релиза: </BoldX>
                        {anime.material_data?.released_at ? anime.material_data.released_at : <GhostedUnknown />}
                    </div>
                    <div>
                        <BoldX>Лицензировано под: </BoldX>
                        {anime.material_data?.anime_licensed_by ? (
                            anime.material_data.anime_licensed_by.map((genre, ind) => (
                                <span key={genre}>
                                    {ind !== 0 && ","} <span>{genre}</span>
                                </span>
                            ))
                        ) : (
                            <GhostedUnknown />
                        )}
                    </div>

                    <div>
                        <BoldX>Жанры: </BoldX>
                        {anime.material_data?.anime_genres && anime.material_data.anime_genres.length !== 0 ? (
                            anime.material_data.anime_genres.map((genre, ind) => (
                                <Link href={`/genres/${genre}`} key={genre}>
                                    {ind !== 0 && ","}{" "}
                                    <span className={`dark:hover:text-cyan-300 dark:text-violet-400 text-indigo-800 font-bold`}>{genre}</span>
                                </Link>
                            ))
                        ) : (
                            <GhostedUnknown />
                        )}
                    </div>

                    <div>
                        <BoldX>Актёры: </BoldX>
                        {anime.material_data?.actors ? (
                            anime.material_data.actors.map((actor, indx) => (
                                <span key={actor}>
                                    {indx !== 0 && ","} {actor}
                                </span>
                            ))
                        ) : (
                            <GhostedUnknown />
                        )}
                    </div>
                </div>
            </div>
            <div className={` p-2`}>
                <BoldX>Описание:</BoldX>
                {anime.material_data?.anime_description ? (
                    <div className="text-wrap whitespace-pre-wrap mt-2">{anime.material_data.anime_description}</div>
                ) : (
                    <GhostedUnknown />
                )}
            </div>
        </div>
    );
}

