import { BORDER } from "#/styles/style-constants";

export default function __Loading_component() {
    return (
        <div
            className={`${BORDER} p-10 py-20 animate-pulse text-center font-bold font-mono text-3xl flex justify-center`}
        >
            Загрузка...
        </div>
    );
}
