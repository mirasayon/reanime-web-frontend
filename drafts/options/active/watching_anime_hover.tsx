"use client";

import { useState } from "react";
import { IoEyeSharp } from "react-icons/io5";

export function Watching_Anime_Hover_C({ state }: { state: "create" | "delete" }) {
    const [hover_, set_hover] = useState<boolean>(false);

    return (
        <div className="  relative">
            <IoEyeSharp
                onMouseEnter={(e) => {
                    e.preventDefault();
                    return set_hover((e) => true);
                }}
                onMouseLeave={(e) => {
                    e.preventDefault();
                    return set_hover((e) => false);
                }}
                color={state === "create" ? "silver" : "violet"}
                size={60}
                className={` p-3 hover:bg-blue-400 ${state === "delete" && "animate-pulse"} `}
            />

            {hover_ &&
                (state === "create" ? (
                    <span className=" absolute bg-slate-100 dark:bg-slate-900 text-lg p-3">
                        Добавить в список просмотра
                    </span>
                ) : (
                    <span className="  absolute bg-slate-100 dark:bg-slate-900 text-lg p-3">
                        Удалить из списка просмотра
                    </span>
                ))}
        </div>
    );
}
