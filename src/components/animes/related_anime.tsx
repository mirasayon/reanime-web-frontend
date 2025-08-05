import { UtilityJSX } from "#/components/utilities/x_components";
import type { JsonDB } from "#T/shared/json_db";
import { Global_Utilities } from "#/utils/functions";
import { ResServiceApi } from "#/integrators/resource-service/index";
import Link from "next/link";
export const RelatedAnimes = new (class RelatedAnimesClass {
    RelatedCardForAnime = async ({ shiki_id, relation }: { shiki_id: number; relation: string }) => {
        const data: JsonDB.ftype | null = await ResServiceApi.byid.any_by_id(shiki_id);
        return (
            data && (
                <Link
                    href={Global_Utilities.get_anime_url_by_id_and_type(data)}
                    className="w-[20rem] border-4 h-[240px] flex m-2 border-violet-300 p-2"
                >
                    <img
                        src={Global_Utilities.get_poster_image_url_by_filename(data.img) || UtilityJSX.Default_poster(true)}
                        alt={`Обложка от аниме ${data.nms.ru}`}
                        className="rounded-sm object-cover h-[212px] w-[150px]"
                    />
                    <div className="m-2">
                        <UtilityJSX.BoldX>{relation}</UtilityJSX.BoldX>
                        <br />
                        <span>{data.nms.ru || data.nms.ru}</span>
                        <br />
                        {data.season && <span>{data.season} сезон</span>}
                        <br />
                        <span>
                            <UtilityJSX.BoldX>Тип: </UtilityJSX.BoldX>
                            {Global_Utilities.get_type_of_anime(data)}
                        </span>
                    </div>
                </Link>
            )
        );
    };
    RelatedCardForManga({ data, relation }: { data: JsonDB.ftype["rels"][number]["manga"]; relation: string }) {
        if (!data) return;
        type ikind = typeof data.kind;
        function GetKindManga({ kind }: { kind: ikind }) {
            if (kind === "manga") {
                return <span>Манга</span>;
            }
            if (kind === "light_novel") {
                return <span>Новелла</span>;
            }
            return <span>{kind}</span>;
        }
        return (
            <div className="w-[20rem] border-4 h-[240px] overflow-hidden flex m-2 border-blue-300 p-2">
                <img
                    src={`https://shikimori.one${data.poster}`}
                    alt={`Обложка от манги ${data.russian || ""}`}
                    className="rounded-sm object-cover h-[212px] w-[150px]"
                />
                <div className="m-2">
                    <UtilityJSX.BoldX className={` p-1 dark:bg-slate-700 bg-slate-300 `}>{relation}</UtilityJSX.BoldX>
                    <br />
                    <span>{data?.russian}</span>
                    <br />
                    <UtilityJSX.BoldX>Тип: </UtilityJSX.BoldX>
                    <GetKindManga kind={data.kind} />
                </div>
            </div>
        );
    }
})();
