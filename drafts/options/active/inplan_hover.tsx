"use client";
import { useState } from "react";
import { FaClipboardList } from "react-icons/fa6";

export function Inplan_Anime_Hover_C({ state }: { state: "create" | "delete" }) {
    const [hover_, set_hover] = useState<boolean>(false);

    return (
        <div className="  relative">
            <FaClipboardList
                onMouseEnter={(e) => {
                    e.preventDefault();
                    return set_hover((e) => true);
                }}
                onMouseLeave={(e) => {
                    e.preventDefault();
                    return set_hover((e) => false);
                }}
                color={state === "create" ? "silver" : "blue"}
                size={60}
                className="p-3 hover:bg-blue-400"
            />

            {hover_ &&
                (state === "create" ? (
                    <span className=" absolute bg-slate-100 dark:bg-slate-900 text-lg p-3">
                        Добавить в запланированный список
                    </span>
                ) : (
                    <span className="  absolute bg-slate-100 dark:bg-slate-900 text-lg p-3">
                        Удалить из в запланированного списка
                    </span>
                ))}
        </div>
    );
}
