import { Anime_card_main } from "#/components/anime_page/main-anime-card-shower.dumbx";
import { error_image_for_light_theme, error_image_for_night_theme } from "#/constants/common.constants";
import type { IReady_Animes_DB } from "@reanime/resource-service/types/animes-db-types/ready-animes.types.js";
import { AnimeElConfig } from "../component-utilx-config.config";
import type { JSX } from "react";

export const BoldX = ({ children, className }: { className?: string; children: React.ReactNode }) => {
    return <span className={`font-bold ${className ?? ""} `}>{children}</span>;
};

export const AnimeListsIsNotPermitted = () => {
    return (
        // <this.LinkX className="flex flex-wrap max-w-[30px] p-2" href={"/auth/login"}>
        // 	<span className="text-sm text-wrap">Авторизуйтесь или создайте аккаунт чтобы добавлять в свои списки</span>
        // </this.LinkX>
        <></>
    );
};
type Anime_List_ComponentProps = {
    resUrl: string;
    kodiks: IReady_Animes_DB[];
};
export const Anime_List_Component = ({ kodiks, resUrl }: Anime_List_ComponentProps): JSX.Element => {
    return (
        <div className=" flex  flex-wrap justify-around ">
            {kodiks.map((kodik) => (
                <Anime_card_main resUrl={resUrl} index={kodik.sid} render_images={AnimeElConfig.render_images} key={kodik.sid} data={kodik} />
            ))}
        </div>
    );
};

export const It_will_be_known_soon = ({ className }: { className?: string }) => {
    const styles = className === undefined ? "" : className;
    return <span className={` text-slate-500/80 ${styles}`}> Данные скоро появятся</span>;
};
export const GhostedTextComponent = ({ children }: { children: React.ReactNode }) => {
    return <div className={` text-slate-500/80 `}>{children}</div>;
};
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

export const Normalize_ds_names = (title: string) => {
    return title.replace(".Subtitles", " (Субтитры)").replace(".TV", "").replace("Jut.su", "Jutsu");
};

export const Image_in_anime_cards = ({ anime_title, img_src }: { img_src: string; anime_title: string }) => {
    return <img width={200} height={300} loading="lazy" src={img_src} alt={anime_title} className="object-cover w-[200px]" />;
};

export const Default_poster = (is_dark = true) => {
    return is_dark ? error_image_for_night_theme : error_image_for_light_theme;
};
