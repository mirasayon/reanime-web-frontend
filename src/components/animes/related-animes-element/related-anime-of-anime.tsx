import { UtilityJSX } from "#/components/utilities/common/assembler-of-utilities.utilx";
import type { IReady_Animes_DB } from "@reanime/resource-parser/types/animes-db-types/ready-animes.types.js";
import { Global_Utilities } from "#/utils/common";
import { ResServiceApi } from "#/integrators/resource-service/resource-service-main.integrator";
import Link from "next/link";
export function RelatedCardForManga({ data, relation }: { data: IReady_Animes_DB["rels"][number]["manga"]; relation: string }) {
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
        <div className="w-[20rem] border-4 h-[240px] overflow-hidden flex m-2 border-slate-100 p-2">
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
