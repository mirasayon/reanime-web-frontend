"use client";
import { BORDER } from "#/styles/style-constants";
import { useRouter } from "next/navigation";
type Props = {
    query?: string | null;
    redirect?: boolean;
};
export function SearchAnimeAddressBarInHeader({ query = null, redirect = false }: Props): React.JSX.Element {
    const router = useRouter();
    return (
        <form
            className={` ${BORDER} flex justify-between`}
            onSubmit={(event) => {
                event.preventDefault();
                const sq = event.currentTarget["search_query"].value as string | undefined;
                if (!sq || !/\S/.test(sq)) {
                    return;
                }
                if (redirect) {
                    return router.push(`/search?search_query=${encodeURI(sq)}`);
                }
                return router.push(`?search_query=${encodeURI(sq)}`);
            }}
        >
            <input
                type="search"
                id={"search_query"}
                {...(query ? { defaultValue: query } : {})}
                name={"search_query"}
                required
                minLength={2}
                inputMode="search"
                className={`px-2 bg-transparent w-full rounded-md outline-hidden`}
                placeholder={"Что ищем?"}
            />
            <button className={`dark:bg-blue-900 bg-blue-300 p-2 cursor-pointer hover:bg-blue-900/50`} type="submit">
                Поиск
            </button>
        </form>
    );
}
