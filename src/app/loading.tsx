import { rea_wrapper_border } from "#/styles/provider";
import type { JSX } from "react";

export default function Loading_component(): JSX.Element {
    return (
        <div
            className={`${rea_wrapper_border} p-10 py-20 animate-pulse text-center font-bold font-mono text-3xl flex justify-center`}
        >
            Загрузка...
        </div>
    );
}
