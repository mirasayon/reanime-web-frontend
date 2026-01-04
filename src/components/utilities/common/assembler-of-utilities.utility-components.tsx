import { AnimeCardMainComponent } from "#/components/anime_page/main-anime-card-shower";
import { ANIME_POSTER_404_IMAGE_LIGHT, ANIME_POSTER_404_IMAGE_DARK } from "#/constants/common.constants";
import type { JSX } from "react";
import { Linker } from "./linker-utility-component";
import type { EntityDataObject } from "kodik/types";

export function BoldX({ children, className }: { className?: string; children: React.ReactNode }) {
    return <span className={`font-bold ${className ?? ""} `}>{children}</span>;
}

export function AnimeListsIsNotPermitted() {
    return (
        <Linker className="flex flex-wrap max-w-[30px] p-2" href={"/auth/login"}>
            <span className="text-sm text-wrap">Авторизуйтесь или создайте аккаунт чтобы добавлять в свои списки</span>
        </Linker>
    );
}
type Anime_List_ComponentProps = {
    data: EntityDataObject[];
};
export function Anime_List_Component({ data: kodiks }: Anime_List_ComponentProps): React.JSX.Element {
    return (
        <div className=" flex flex-wrap justify-around ">
            {kodiks.map((kodik) => (
                <AnimeCardMainComponent key={kodik.id} data={kodik} />
            ))}
        </div>
    );
}

export const GhostedTextComponent = ({ children }: { children: React.ReactNode }) => {
    return <div className={` text-slate-500/80 `}>{children}</div>;
};
export const GhostedUnknown = () => {
    return <span className={` text-slate-500/80 `}>неизвестно</span>;
};

export const Default_poster = (is_dark = true) => {
    return is_dark ? ANIME_POSTER_404_IMAGE_DARK : ANIME_POSTER_404_IMAGE_LIGHT;
};
