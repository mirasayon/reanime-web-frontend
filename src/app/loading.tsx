import { rea_wrapper_border } from "#/styles/provider";

export default function __Loading_component() {
    return (
        <div
            className={`${rea_wrapper_border} p-10 py-20 animate-pulse text-center font-bold font-mono text-3xl flex justify-center`}
        >
            Загрузка...
        </div>
    );
}
