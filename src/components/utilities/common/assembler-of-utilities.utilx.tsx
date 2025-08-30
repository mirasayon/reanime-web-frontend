import { Anime_card_main } from "#/components/anime_page/main-anime-card-shower";
import { error_image_for_light_theme, error_image_for_night_theme } from "#/constants/common.constants";
import type { MaterialObject } from "kodik-api-simplified/index";
import type { JSX } from "react";
import { LinkX } from "./link-x.utilx";

export function BoldX({ children, className }: { className?: string; children: React.ReactNode }) {
    return <span className={`font-bold ${className ?? ""} `}>{children}</span>;
}

export function AnimeListsIsNotPermitted() {
    return (
        <LinkX className="flex flex-wrap max-w-[30px] p-2" href={"/auth/login"}>
            <span className="text-sm text-wrap">Авторизуйтесь или создайте аккаунт чтобы добавлять в свои списки</span>
        </LinkX>
    );
}
type Anime_List_ComponentProps = {
    resUrl: string;
    kodiks: MaterialObject[];
};
export function Anime_List_Component({ kodiks, resUrl }: Anime_List_ComponentProps): JSX.Element {
    return (
        <div className=" flex  flex-wrap justify-around ">
            {kodiks.map((kodik) => (
                <Anime_card_main resUrl={resUrl} key={kodik.id} data={kodik} />
            ))}
        </div>
    );
}

export const It_will_be_known_soon = ({ className }: { className?: string }) => {
    const styles = className === undefined ? "" : className;
    return <span className={` text-slate-500/80 ${styles}`}> Данные скоро появятся</span>;
};
export const GhostedTextComponent = ({ children }: { children: React.ReactNode }) => {
    return <div className={` text-slate-500/80 `}>{children}</div>;
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

