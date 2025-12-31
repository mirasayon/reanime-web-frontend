"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export function AnimeCategoriesComponent() {
    const is_open_genres = usePathname().includes("genres");
    const is_open_list = usePathname().includes("list");
    const is_open_search = usePathname().includes("search");
    return (
        <nav className=" flex items-center gap-3 text-sm">
            {/* <Link prefetch={false}
                href={"/list/released"}
                 
                className={`cursor-pointer  p-1 border-4 border-transparent ${
                    is_open_list && " border-b-violet-500 "
                } dark:bg-gray-700 bg-violet-200 hover:bg-violet-200 dark:hover:bg-slate-700/20`}
            >
                По категориям
            </Link> */}
            <Link
                prefetch={false}
                href={"/genres/Повседневность"}
                className={`cursor-pointer  p-1 border-4 border-transparent ${
                    is_open_genres && " border-b-violet-500 "
                } dark:bg-gray-700 bg-violet-200 hover:bg-violet-200 dark:hover:bg-slate-700/20`}
            >
                По жанрам (бета)
            </Link>

            <Link
                prefetch={false}
                href={"/search"}
                className={`cursor-pointer  p-1 border-4 border-transparent ${
                    is_open_search && " border-b-violet-500 "
                } dark:bg-gray-700 bg-violet-200 hover:bg-violet-200 dark:hover:bg-slate-700/20`}
            >
                Найти
            </Link>
        </nav>
    );
}
