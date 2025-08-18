import { Normalize_age_rating } from "#/components/utilities/common/normalize-age-rating.utilx";
import { SiShikimori } from "react-icons/si";
import { CoverImage } from "#/components/animes/cover_image";
import type { IReady_Animes_DB } from "@reanime/resource-parser/types/animes-db-types/ready-animes.types.js";
import { rea_wrapper_border } from "#/styles/provider";
import Link from "next/link";
import { BoldX, Normalize_anime_status, It_will_be_known_soon } from "../utilities/common/assembler-of-utilities.utilx";

// import { UserList } from "#/components/animes/options/user_list_animes";
export function Anime_description({
    current_user,
    anime,
    cover_image_src,
}: {
    cover_image_src: string;
    anime: IReady_Animes_DB;
    current_user: null;
}) {
    const type_ru = anime.type === "movie" ? "Фильм" : "ТВ Сериал";
    return (
        <>
            <div className={`  flex flex-wrap ${rea_wrapper_border}`}>
                <span className={`p-3`}>{anime.names.ru}</span>
                {anime.season && <span className="p-3">{anime.season} сезон</span>} {"\t"}
                <span className="text-slate-500 p-3">{anime.names.ofc}</span>
                <span className={`p-3 float-end dark:bg-slate-200 dark:text-black bg-slate-400 text-blue-900`}>{type_ru}</span>
            </div>

            <div className={`${rea_wrapper_border} p-4 flex-row flex max-md:grid`}>
                <div className="min-w-max flex flex-col">
                    <CoverImage image_src={cover_image_src} anime_title={`Обложка от аниме ${anime.names.ru}`} />
                    {/* <div className="flex justify-between flex-wrap border-4 border-blue-400 mr-4">
                        {current_user ? (
                            <>
                                <UserList.Add_to_liked_list_element userP={current_user} p_shiki_id={shikimori_id} />
                                <UserList.Add_to_watch_list_element userP={current_user} p_shiki_id={shikimori_id} />
                                <UserList.Add_to_plan_list_element userP={current_user} p_shiki_id={shikimori_id} />
                                <UserList.Add_to_viewed_list_element userP={current_user} p_shiki_id={shikimori_id} />
                            </>
                        ) : (
                            <AnimeListsIsNotPermitted />
                        )}
                    </div> */}
                </div>

                <div>
                    <br />
                    <BoldX>Название: </BoldX>
                    <span>{anime.names.ru}</span>
                    <br />
                    <BoldX>Альтернативные названия: </BoldX>
                    {anime.names.org}, {anime.names.all.toString()}
                    <br />
                    <BoldX>Год выпуска: </BoldX>
                    {anime.rel_year}
                    <br />
                    <BoldX>Тип: </BoldX>
                    {anime.kind} ({type_ru})
                    <br />
                    {anime.type === "series" && (
                        <>
                            <BoldX>Сезон: </BoldX>
                            {anime.season}
                            <br />
                        </>
                    )}
                    <span className="flex">
                        <BoldX>Рейтинг (от шикимори): </BoldX> <SiShikimori className="p-1" size={25} />{" "}
                        {anime.rating ? `${anime.rating}/10` : "неизвестно"}
                    </span>
                    <BoldX>Статус: </BoldX>
                    <Normalize_anime_status str={anime.status} />
                    <br />
                    <BoldX>Возрастной рейтинг: </BoldX>
                    <Normalize_age_rating minimal_age={anime.minimal_age || null} rating={anime.rating_mpaa} />
                    <br />
                    {anime.type === "series" && (
                        <>
                            <BoldX>Количество серий: </BoldX>
                            {anime.eps_total || "неизвестно"}
                            <br />
                        </>
                    )}
                    {anime.status !== "released" && (
                        <>
                            <BoldX>Количество вышедших серий: </BoldX>
                            {anime.eps_aired || "неизвестно"}
                            <br />
                        </>
                    )}
                    <BoldX>Студии: </BoldX>
                    {anime.studios_sh.length === 0 ? (
                        <It_will_be_known_soon />
                    ) : (
                        anime.studios_sh.map((item, ind) => {
                            return (
                                <span key={item.id}>
                                    {ind !== 0 && ","} {item.filtered_name}
                                </span>
                            );
                        })
                    )}
                    <br />
                    <BoldX>Страна издания: </BoldX>
                    {anime.cntrs ? (
                        anime.cntrs.split(",").map((_county, ind) => (
                            <span key={_county}>
                                {ind !== 0 && ","} {_county}
                            </span>
                        ))
                    ) : (
                        <It_will_be_known_soon />
                    )}
                    <br />
                    <BoldX>Дата релиза: </BoldX>
                    {anime.rel_date}
                    <br />
                    <BoldX>Жанры: </BoldX>
                    {anime.genres_ShM.length === 0 ? (
                        <It_will_be_known_soon />
                    ) : (
                        anime.genres_ShM.map((genre, ind) => (
                            <Link href={`/genres/${genre.name.toLowerCase()}`} key={genre.id}>
                                {ind !== 0 && ","}{" "}
                                <span className={`dark:hover:text-cyan-300 dark:text-violet-400 text-indigo-800 font-bold`}>{genre.russian}</span>
                            </Link>
                        ))
                    )}
                    <br />
                    <BoldX>Актёры: </BoldX>
                    {!anime.actors || anime.actors.length === 0 ? (
                        <It_will_be_known_soon />
                    ) : (
                        anime.actors.map((actor, indx) => {
                            return (
                                <span key={actor}>
                                    {indx !== 0 && ","} {actor}
                                </span>
                            );
                        })
                    )}
                    <br />
                    {!anime.desc && <It_will_be_known_soon />}
                </div>
            </div>

            {anime.desc && (
                <div className={`${rea_wrapper_border} p-4`}>
                    <BoldX>Описание:</BoldX>
                    <p className="text-wrap whitespace-pre-wrap mt-2">{anime.desc}</p>
                </div>
            )}
        </>
    );
}
