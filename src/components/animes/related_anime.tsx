import { UtilityJSX } from "#/components/utilities/x_components";
import Link from "next/link";
import { ReaApi } from "#/services/apis/rea_api";
import type { JsonDB } from "#T/shared/json_db";
import { Utils } from "#/utils/functions";
class RelatedAnimesClass {
    RelatedCardForAnime = async ({
        shiki_id,
        relation,
    }: {
        shiki_id: number;
        relation: string;
    }) => {
        const data: JsonDB.ftype | null = await ReaApi.core.byid.any(shiki_id);
        return (
            data && (
                <Link
                    href={Utils.getUrlReaAnime(data)}
                    className="w-[20rem] border-4 h-[240px] flex m-2 border-violet-300 p-2"
                >
                    <img
                        src={Utils.SetREAPIUrl(data.img) || UtilityJSX.Default_poster(true)}
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
                            {Utils.getTypeOfAnimeRea(data)}
                        </span>
                    </div>
                </Link>
            )
        );
    };
    RelatedCardForManga({
        data,
        relation,
        is_dark,
    }: {
        is_dark: boolean;
        data: JsonDB.ftype["rels"][number]["manga"];
        relation: string;
    }) {
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
                    <UtilityJSX.BoldX
                        className={` p-1 ${is_dark ? "bg-slate-700" : "bg-slate-300"}`}
                    >
                        {relation}
                    </UtilityJSX.BoldX>
                    <br />
                    <span>{data?.russian}</span>
                    <br />
                    <UtilityJSX.BoldX>Тип: </UtilityJSX.BoldX>
                    <GetKindManga kind={data.kind} />
                </div>
            </div>
        );
    }
}
export const RelatedAnimes = new RelatedAnimesClass();
