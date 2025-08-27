import type { IReady_Animes_DB } from "&rs/ready-animes.types";

export const Normalize_anime_status = ({ str }: { str?: IReady_Animes_DB["status"] }) => {
    switch (str) {
        case "released":
            return <span className="bg-green-500  p-1">Завершён</span>;
        case "ongoing":
            return <span className="bg-violet-300  p-1">Онгоинг</span>;
        case null:
            return <span className=" text-slate-500">Неизвестно</span>;
        default:
            return <span>{str}</span>;
    }
};

