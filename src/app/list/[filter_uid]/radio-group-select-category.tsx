import { filters_uids } from "#/constants/common.constants";
import { _categories } from "#/static/anime_categories";
import Link from "next/link";
type Props = {
    /** */
    current: (typeof filters_uids)[number];
};
export function RadioGroupSelectCategory({ current }: Props) {
    return (
        <div className="p-5 flex flex-2/5 flex-wrap gap-2">
            {filters_uids.map((cate) => (
                <Link
                    href={`/list/${cate}`}
                    key={cate}
                    className={`  cursor-pointer w-44  items-center border-2 p-2 border-blue-500 ${current === cate && "bg-blue-600"}`}
                >
                    {_categories.find((w) => w.link_url === `/list/${cate}`)?.title}
                </Link>
            ))}
        </div>
    );
}
