import { genres, typed_description_genres } from "#/static/anime_categories";
import Link from "next/link";
type Props = {
    /** */
    current: (typeof typed_description_genres)[number]["english_name"];
};
export function RadioGroupSelectGenre({ current }: Props) {
    return (
        <div>
            <div className="p-5 flex flex-2/5 flex-wrap gap-2">
                {genres.map((cate) => {
                    const active = `/genres/${current}` === cate.link_url;
                    return (
                        <Link
                            href={cate.link_url}
                            key={cate.link_url}
                            className={`  cursor-pointer w-44  items-center border-2 p-2 border-blue-500 ${active && "bg-blue-600"}`}
                        >
                            {cate.title}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
