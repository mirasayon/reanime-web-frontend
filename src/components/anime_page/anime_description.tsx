import { Normalize_age_rating } from "#/components/utilities/age_rating";
import { UtilityJSX } from "#/components/utilities/x_components";
import { SiShikimori } from "react-icons/si";
import { CoverImage } from "#/components/animes/cover_image";
import type { JsonDB } from "#T/shared/json_db";
import { rea_wrapper_border } from "#/styles/provider";
import Link from "next/link";

// import { UserList } from "#/components/animes/options/user_list_animes";
export function Anime_description({ current_user, anime, cover_image_src }: { cover_image_src: string; anime: JsonDB.ftype; current_user: null }) {
    const type_ru = anime.t ? "Фильм" : "ТВ Сериал";
    return (
        <>
            <div className={`  flex flex-wrap ${rea_wrapper_border}`}>
                <span className={`p-3`}>{anime.nms.ru}</span>
                {anime.season && <span className="p-3">{anime.season} сезон</span>} {"\t"}
                <span className="text-slate-500 p-3">{anime.nms.ofc}</span>
                <span className={`p-3 float-end dark:bg-slate-200 dark:text-black bg-slate-400 text-blue-900`}>{type_ru}</span>
            </div>

            <div className={`${rea_wrapper_border} p-4 flex-row flex max-md:grid`}>
                <div className="min-w-max flex flex-col">
                    <CoverImage image_src={cover_image_src} anime_title={`Обложка от аниме ${anime.nms.ru}`} />
                    {/* <div className="flex justify-between flex-wrap border-4 border-blue-400 mr-4">
                        {current_user ? (
                            <>
                                <UserList.Add_to_liked_list_element userP={current_user} p_shiki_id={shikimori_id} />
                                <UserList.Add_to_watch_list_element userP={current_user} p_shiki_id={shikimori_id} />
                                <UserList.Add_to_plan_list_element userP={current_user} p_shiki_id={shikimori_id} />
                                <UserList.Add_to_viewed_list_element userP={current_user} p_shiki_id={shikimori_id} />
                            </>
                        ) : (
                            <UtilityJSX.AnimeListsIsNotPermitted />
                        )}
                    </div> */}
                </div>

                <div>
                    <br />
                    <UtilityJSX.BoldX>Название: </UtilityJSX.BoldX>
                    <span>{anime.nms.ru}</span>
                    <br />
                    <UtilityJSX.BoldX>Альтернативные названия: </UtilityJSX.BoldX>
                    {anime.nms.org}, {anime.nms.all.toString()}
                    <br />
                    <UtilityJSX.BoldX>Год выпуска: </UtilityJSX.BoldX>
                    {anime.rel_year}
                    <br />
                    <UtilityJSX.BoldX>Тип: </UtilityJSX.BoldX>
                    {anime.kind} ({type_ru})
                    <br />
                    {!anime.t && (
                        <>
                            <UtilityJSX.BoldX>Сезон: </UtilityJSX.BoldX>
                            {anime.season}
                            <br />
                        </>
                    )}
                    <span className="flex">
                        <UtilityJSX.BoldX>Рейтинг (от шикимори): </UtilityJSX.BoldX> <SiShikimori className="p-1" size={25} />{" "}
                        {anime.rating ? `${anime.rating}/10` : "неизвестно"}
                    </span>
                    <UtilityJSX.BoldX>Статус: </UtilityJSX.BoldX>
                    <UtilityJSX.Normalize_anime_status str={anime.status} />
                    <br />
                    <UtilityJSX.BoldX>Возрастной рейтинг: </UtilityJSX.BoldX>
                    <Normalize_age_rating minimal_age={anime.minimal_age || null} rating={anime.rating_mpaa} />
                    <br />
                    {!anime.t && (
                        <>
                            <UtilityJSX.BoldX>Количество серий: </UtilityJSX.BoldX>
                            {anime.eps_total || "неизвестно"}
                            <br />
                        </>
                    )}
                    {anime.status !== "released" && (
                        <>
                            <UtilityJSX.BoldX>Количество вышедших серий: </UtilityJSX.BoldX>
                            {anime.eps_aired || "неизвестно"}
                            <br />
                        </>
                    )}
                    <UtilityJSX.BoldX>Студии: </UtilityJSX.BoldX>
                    {anime.studios_sh.length === 0 ? (
                        <UtilityJSX.It_will_be_known_soon />
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
                    <UtilityJSX.BoldX>Страна издания: </UtilityJSX.BoldX>
                    {anime.cntrs ? (
                        anime.cntrs.split(",").map((_county, ind) => (
                            <span key={_county}>
                                {ind !== 0 && ","} {_county}
                            </span>
                        ))
                    ) : (
                        <UtilityJSX.It_will_be_known_soon />
                    )}
                    <br />
                    <UtilityJSX.BoldX>Дата релиза: </UtilityJSX.BoldX>
                    {anime.rel_date}
                    <br />
                    <UtilityJSX.BoldX>Жанры: </UtilityJSX.BoldX>
                    {anime.genres_ShM.length === 0 ? (
                        <UtilityJSX.It_will_be_known_soon />
                    ) : (
                        anime.genres_ShM.map((genre, ind) => (
                            <Link href={`/genres/${genre.name.toLowerCase()}`} key={genre.id}>
                                {ind !== 0 && ","}{" "}
                                <span className={`dark:hover:text-cyan-300 dark:text-violet-400 text-indigo-800 font-bold`}>{genre.russian}</span>
                            </Link>
                        ))
                    )}
                    <br />
                    <UtilityJSX.BoldX>Актёры: </UtilityJSX.BoldX>
                    {!anime.actors || anime.actors.length === 0 ? (
                        <UtilityJSX.It_will_be_known_soon />
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
                    {!anime.desc && <UtilityJSX.It_will_be_known_soon />}
                </div>
            </div>

            {anime.desc && (
                <div className={`${rea_wrapper_border} p-4`}>
                    <UtilityJSX.BoldX>Описание:</UtilityJSX.BoldX>
                    <p className="text-wrap whitespace-pre-wrap mt-2">{anime.desc}</p>
                </div>
            )}
        </>
    );
}
