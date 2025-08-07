"use client";

import { filters_uids } from "#/constants/common.constants";
import { Label } from "#/shadcn-ui/components/ui/label";
import { RadioGroup, RadioGroupItem } from "#/shadcn-ui/components/ui/radio-group";
import { _categories } from "#/static/anime_categories";
import Link from "next/link";
type Props = {
    /** */
    current: (typeof filters_uids)[number];
};
export function RadioGroupSelectCategory({ current }: Props) {
    return (
        <RadioGroup defaultValue={current} className="p-5">
            {filters_uids.map((cate, index) => {
                return (
                    <div key={index} className="flex items-center space-x-2">
                        <RadioGroupItem className="p-2 outline-red-700 outline-8 " value={cate} id={cate} />
                        <Label className="p-1 cursor-pointer " htmlFor={cate}>
                            <Link href={`/list/${cate}`}>{_categories.find((w) => w.link_url.includes(cate))?.title}</Link>
                        </Label>
                    </div>
                );
            })}
        </RadioGroup>
    );
}
