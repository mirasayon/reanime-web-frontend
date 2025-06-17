"use client";
import { useState } from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";

export function Liked_Anime_Hover_C({ state }: { state: "create" | "delete" }) {
    const [hover_, set_hover] = useState<boolean>(false);
    return (
        <div className="  relative">
            {state === "create" ? (
                <AiOutlineLike
                    onMouseEnter={(e) => {
                        e.preventDefault();
                        return set_hover((e) => true);
                    }}
                    onMouseLeave={(e) => {
                        e.preventDefault();
                        return set_hover((e) => false);
                    }}
                    size={60}
                    className="p-3 hover:bg-blue-400"
                />
            ) : (
                <AiFillLike
                    onMouseEnter={(e) => {
                        e.preventDefault();
                        return set_hover((e) => true);
                    }}
                    onMouseLeave={(e) => {
                        e.preventDefault();
                        return set_hover((e) => false);
                    }}
                    size={60}
                    className="p-3 hover:bg-blue-400"
                />
            )}

            {hover_ &&
                (state === "create" ? (
                    <span className=" absolute bg-slate-100 dark:bg-slate-900 text-lg p-3">
                        Добавить в избранные
                    </span>
                ) : (
                    <span className="  absolute bg-slate-100 dark:bg-slate-900 text-lg p-3">
                        Удалить из списка избранных
                    </span>
                ))}
        </div>
    );
}
