import { BoldX } from "#/components/utilities/common/assembler-of-utilities.utilx";
import type { JSX } from "react";

export function ShowRelationTypeForBothMangaAndAnime({ relation }: { relation: string }): JSX.Element {
    return <BoldX className={` p-1 dark:bg-slate-700 bg-slate-300 rounded-xs`}>{relation}</BoldX>;
}
