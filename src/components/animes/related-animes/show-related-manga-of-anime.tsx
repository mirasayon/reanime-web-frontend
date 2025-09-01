import { BoldX } from "#/components/utilities/common/assembler-of-utilities.utilx";
import type { IShikimoriRelated } from "&rs/shikimori-related.types";
import Image from "next/image";
import type { JSX } from "react";
function GetKindManga({ kind }: { kind: (string & {}) | ("light_novel" | "manga") }) {
    if (kind === "manga") {
        return <span>Манга</span>;
    }
    if (kind === "light_novel") {
        return <span>Новелла</span>;
    }
    return <span>{kind}</span>;
}
export function RelatedCardForManga({ data, relation }: { data: IShikimoriRelated["manga"]; relation: string }): JSX.Element | null {
    if (!data) {
        return null;
    }
    const url = "https://shikimori.one" + data.image.original.split("?")[0];
    return (
        <div className="w-[20rem] border-4 h-[240px] overflow-hidden flex m-2 border-slate-100 p-2">
            <Image
                width={150}
                height={212}
                loading="lazy"
                src={url}
                alt={`Обложка от манги ${data.russian || ""}`}
                className="rounded-sm object-cover h-[212px] w-[150px]"
            />
            <div className="m-2">
                <BoldX className={` p-1 dark:bg-slate-700 bg-slate-300 `}>{relation}</BoldX>
                <br />
                <span>{data?.russian}</span>
                <br />
                <BoldX>Тип: </BoldX>
                <GetKindManga kind={data.kind} />
            </div>
        </div>
    );
}

