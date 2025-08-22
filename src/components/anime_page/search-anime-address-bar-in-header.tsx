"use client";
import { rea_wrapper_border } from "#/styles/provider";
import { useRouter, useSearchParams } from "next/navigation";
import { type JSX, useState } from "react";
export const search_query_name = "search_query" as const;
export function SearchAnimeAddressBarInHeader(): JSX.Element {
    const router = useRouter();
    const sp = useSearchParams().get(search_query_name);
    const [searhQ, setQ] = useState(sp ?? "");
    return (
        <form
            className={` ${rea_wrapper_border}   flex justify-between shadow-md`}
            onSubmit={(event) => {
                event.preventDefault();
                const sq = event.currentTarget[search_query_name].value as string | undefined;
                if (!sq || !/\S/.test(sq)) {
                    return;
                }
                const search_query = encodeURI(sq);
                return router.push(`/search?${search_query_name}=${search_query}`);
            }}
        >
            <input
                type="text"
                id={search_query_name}
                value={searhQ}
                onChange={(e) => {
                    e.preventDefault();
                    setQ(() => e.target.value);
                }}
                name={search_query_name}
                className={`px-2 bg-transparent rounded-md outline-hidden  
                    dark:text-white  text-black 
                    `}
                placeholder={"Что ищем, сэмпай?"}
            />
            <button
                className={`dark:bg-blue-800 bg-blue-300 
                    p-2 cursor-pointer rounded-e-md hover:bg-blue-900/50`}
                type="submit"
            >
                Поиск
            </button>
        </form>
    );
}
