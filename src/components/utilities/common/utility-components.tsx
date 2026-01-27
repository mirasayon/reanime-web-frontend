import { AnimeCardMainComponent } from "#/components/anime_page/main-anime-card-shower";
import { ANIME_POSTER_404_IMAGE_LIGHT, ANIME_POSTER_404_IMAGE_DARK } from "#/constants/common.constants";
import { Linker } from "./linker-utility-component";
import type { EntityDataObject } from "kodik/types";

export function BoldX({ children, className }: { className?: string; children: React.ReactNode }) {
    return <span className={`font-bold ${className ?? ""} `}>{children}</span>;
}

export function LoginForCollection() {
    return (
        <Linker className="flex flex-wrap max-w-[30px] p-2" href={"/auth/login"}>
            <span className="text-sm text-wrap">Авторизуйтесь или создайте аккаунт чтобы добавлять в свои списки</span>
        </Linker>
    );
}
type AnimeListComponentProps = {
    data: EntityDataObject[];
};
export function AnimeList({ data }: AnimeListComponentProps): React.JSX.Element {
    return (
        <div className=" flex flex-wrap justify-around ">
            {data.map((kodik) => (
                <AnimeCardMainComponent key={kodik.id} data={kodik} />
            ))}
        </div>
    );
}

export function GhostedText({ children }: { children: React.ReactNode }) {
    return <div className={` text-slate-500/80 `}>{children}</div>;
}
export function GhostedUnknown() {
    return <span className={"text-slate-500/80"}>неизвестно</span>;
}

export const GetDefaultAnimePoster = (isDark = true) => {
    return isDark ? ANIME_POSTER_404_IMAGE_DARK : ANIME_POSTER_404_IMAGE_LIGHT;
};
