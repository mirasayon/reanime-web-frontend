import Link from "next/link";
import type { JSX } from "react";
import { ApplicationConfig } from "#/configs/application";
import { Anime_card_main } from "#/components/anime_page/anime_card_main";
import type { JsonDB } from "#T/shared/json_db";
class UtilityJSXClass {
    LinkX = ({
        children,
        href,
        is_dark,
        email,
        className,
    }: {
        className?: string | undefined;
        is_dark: boolean;
        children: React.ReactNode;
        email?: boolean;
        href: string;
    }) => {
        return (
            <Link
                className={` ${
                    is_dark
                        ? "text-blue-400 hover:text-blue-400"
                        : "text-blue-700 hover:text-blue-900"
                } ${className || ""}`}
                href={email ? `mailto:${href}` : href}
            >
                {children}
            </Link>
        );
    };

    BoldX = ({ children, className }: { className?: string; children: React.ReactNode }) => {
        return <span className={`font-bold ${className ?? ""} `}>{children}</span>;
    };

    AnimeListsIsNotPermitted = ({ is_dark }: { is_dark: boolean }) => {
        return (
            // <this.LinkX is_dark={is_dark} className="flex flex-wrap max-w-[30px] p-2" href={"/auth/login"}>
            // 	<span className="text-sm text-wrap">Авторизуйтесь или создайте аккаунт чтобы добавлять в свои списки</span>
            // </this.LinkX>
            <></>
        );
    };
    Anime_List_Component = ({
        kodiks,
        is_dark,
        render_images,
    }: {
        kodiks: JsonDB.ftype[];
        is_dark: boolean;
        render_images: boolean;
    }): React.JSX.Element => {
        return (
            <div className=" flex  flex-wrap justify-around ">
                {kodiks.map((kodik, arr_ind) => (
                    <Anime_card_main
                        index={arr_ind}
                        render_images={render_images}
                        is_dark={is_dark}
                        key={kodik.sid}
                        data={kodik}
                    />
                ))}
            </div>
        );
    };

    It_will_be_known_soon = ({ className }: { className?: string }): JSX.Element => {
        const styles = className === undefined ? "" : className;
        return <span className={` text-slate-500/80 ${styles}`}> Данные скоро появятся</span>;
    };
    Normalize_anime_status = ({ str }: { str?: "released" | "ongoing" | string }) => {
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

    Normalize_ds_names = (title: string) => {
        return title
            .replace(".Subtitles", " (Субтитры)")
            .replace(".TV", "")
            .replace("Jut.su", "Jutsu");
    };

    Image_in_anime_cards = ({ anime_title, img_src }: { img_src: string; anime_title: string }) => {
        return (
            <img
                width={200}
                height={300}
                loading="lazy"
                src={img_src}
                alt={anime_title}
                className="object-cover w-[200px]"
            />
        );
    };

    Default_poster = (is_dark = true) => {
        return is_dark
            ? ApplicationConfig.error_image_for_night_theme
            : ApplicationConfig.error_image_for_light_theme;
    };
}
export const UtilityJSX = new UtilityJSXClass();
