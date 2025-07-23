"use client";
import { rea_wrapper_border } from "#/styles/provider";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export function Current_page_switcher({
    is_start_now,
    current_page,
    is_over_now,
}: {
    is_over_now: boolean;
    is_start_now: boolean;
    current_page: number;
}) {
    const spEntires = useSearchParams().entries();
    const params = { params: "", ind: 0 };
    for (const [key, value] of spEntires) {
        if (key === "c_page") {
            continue;
        }
        if (params.ind === 0) {
            params.ind++;
            params.params += `?${key}=${value}`;
            continue;
        }
        params.params += `&${key}=${value}`;
    }
    const ps = {
        prev: `c_page=${current_page - 1}`,
        next: `c_page=${current_page + 1}`,
    };
    const next = params.ind === 0 ? `?${ps.next}#a_list` : `${params.params}&${ps.next}`;
    const prev = params.ind === 0 ? `?${ps.prev}#a_list` : `${params.params}&${ps.prev}`;
    return (
        <Suspense fallback={<span>Loading...</span>}>
            <div id="m_switcher" className={`flex justify-between items-center ${rea_wrapper_border} `}>
                {is_start_now ? (
                    <div className={"m-2 text-slate-500 hover:cursor-not-allowed"}>Предыдущая страница</div>
                ) : (
                    <Link href={prev} className={`hover:text-cyan-300 m-2 "hover:text-cyan-300 text-blue-500 `}>
                        Предыдущая страница
                    </Link>
                )}
                <span>
                    Страница <span className=" font-bold">{current_page}</span>
                </span>
                {is_over_now ? (
                    <div className={" m-2 text-slate-500 hover:cursor-not-allowed "}>Следующая страница</div>
                ) : (
                    <Link href={next} className={` hover:text-cyan-300 m-2 "hover:text-cyan-300 text-blue-500 `}>
                        Следующая страница
                    </Link>
                )}
            </div>
        </Suspense>
    );
}
