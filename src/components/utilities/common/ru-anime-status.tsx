export const Normalize_anime_status = ({ str }: { str?: string & {} }) => {
    switch (str) {
        case "released":
            return <span className="bg-green-500 dark:bg-green-900 p-1">Завершён</span>;
        case "ongoing":
            return <span className="dark:bg-violet-800 bg-violet-300  p-1">Онгоинг</span>;
        case null:
        case undefined:
            return <span className=" text-slate-500 ">Неизвестно</span>;
        default:
            return <span>{str}</span>;
    }
};
