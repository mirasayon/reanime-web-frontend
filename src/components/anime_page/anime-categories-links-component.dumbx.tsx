"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { _categories, categories, genres, genresType } from "#/static/anime_categories";
import Link from "next/link";

export function AnimeCategoriesComponentDumb() {
    const [is_open_cate, set_is_open_cate] = useState(false);
    const [is_open_genre, set_is_open_genre] = useState(false);
    const pathname = usePathname();
    return (
        <nav className=" flex items-center gap-3 text-sm">
            <NavBarScroll text="По категориям" overflow={false} is_open={is_open_cate} setter={set_is_open_cate} list={_categories} />
            <NavBarScroll text="По жанрам" is_open={is_open_genre} overflow={true} setter={set_is_open_genre} list={genres} />
        </nav>
    );

    function NavBarScroll({
        is_open,
        text,
        list,
        overflow,
        setter,
    }: {
        overflow: boolean;
        setter: (value: React.SetStateAction<boolean>) => void;
        list: genresType[] | categories[];
        is_open: boolean;
        text: string;
    }) {
        return (
            <div className={" relative"}>
                <button
                    onMouseLeave={(e) => {
                        e.preventDefault();
                        return setter((_pv) => false);
                    }}
                    onMouseEnter={(e) => {
                        e.preventDefault();
                        return setter((pv) => true);
                    }}
                    onClick={(e) => {
                        e.preventDefault();
                        return setter((pv) => !pv);
                    }}
                    className={`cursor-pointer  p-1 border-4 border-transparent  hover:border-violet-500  ${
                        is_open && " border-b-violet-500 "
                    } dark:bg-gray-700 bg-violet-200 hover:bg-violet-200 dark:hover:bg-slate-700/20`}
                    type="button"
                >
                    {text}
                </button>
                <div
                    className={` absolute top-9 left-0 flex flex-col z-10 transition-all  ${
                        overflow ? " overflow-y-scroll scrollbar " : " overflow-hidden "
                    } duration-500 ease-in-out ${is_open ? " h-64 " : "h-0 "} `}
                    onMouseLeave={(e) => {
                        e.preventDefault();
                        return setter((pv) => false);
                    }}
                    onMouseEnter={(e) => {
                        e.preventDefault();
                        return setter((pv) => true);
                    }}
                    onMouseMove={(e) => {
                        e.preventDefault();
                        return setter((pv) => true);
                    }}
                    onClick={(e) => {
                        // e.preventDefault();
                        return setter((pv) => false);
                    }}
                >
                    {list.map((item, index, arr) => {
                        const is_active = pathname === arr[index].link_url;
                        return (
                            <Link
                                className={`p-2 ${
                                    is_active
                                        ? "dark:bg-blue-800 bg-blue-300 dark:hover:bg-gray-800 hover:bg-blue-400"
                                        : "dark:bg-gray-700 bg-gray-300 dark:hover:bg-gray-800 hover:bg-slate-100"
                                }`}
                                key={item.link_url}
                                href={item.link_url}
                            >
                                {item.title}
                            </Link>
                        );
                    })}
                </div>
            </div>
        );
    }
}
