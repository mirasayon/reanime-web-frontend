import { uiNeededGenreLinks } from "#/static-but-it-is-typescript/describe-genres.static";
import Link from "next/link";
type Props = {
    current: string;
};
export function RadioGroupSelectGenre({ current }: Props) {
    return (
        <div className="p-5 flex flex-2/5 flex-wrap gap-2">
            {uiNeededGenreLinks.map((cate) => {
                const active = current === cate.russian_name;
                return (
                    <Link
                        href={cate.link_url}
                        key={cate.link_url}
                        className={`cursor-pointer items-center border-2 p-2 border-blue-500 ${active && "dark:bg-blue-900 bg-blue-400"}`}
                    >
                        {cate.russian_name}
                    </Link>
                );
            })}
        </div>
    );
}

