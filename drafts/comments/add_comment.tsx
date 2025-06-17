"use client";
import type { User } from "@prisma/client";
import Link from "next/link";
import type React from "react";
import { Add_Comment_F } from "#server/comments/comments";
import { UtilityJSX } from "#/components/utilities/x_components";
import { AppConstants } from "#settings/main";
import { useRouter } from "next/navigation";
export function Add_comment_form({
    user,
    animeid,
    is_dark,
}: {
    is_dark: boolean;
    user: User | null;
    animeid: number;
}) {
    const router = useRouter();
    if (!user) {
        return (
            <UtilityJSX.LinkX is_dark={is_dark} href="/auth/login">
                Залогинтесь чтобы оставлять комментарии
            </UtilityJSX.LinkX>
        );
    }
    async function SaveCommentON(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const comment_content = event.currentTarget.comment_content.value as string;
        const user_id = Number(event.currentTarget.user_id.value);
        const anime_id = Number(event.currentTarget.anime_id.value);
        if (comment_content?.length === 0) {
            console.info("return");
        }
        const res = await Add_Comment_F({
            anime_id,
            user_id,
            comment_content,
        });
        if (res === "ok") {
            router.refresh();
        }
    }
    const imgUrl = user.avatar_image
        ? AppConstants.internal_avatar_storage_path_url + user.avatar_image
        : AppConstants.__default_user_avatar;
    const userName = user.name ? user.name : user.username;
    return (
        <form
            onSubmit={SaveCommentON}
            id="comment_form"
            className={` ${is_dark ? "bg-slate-800" : "bg-blue-200"} p-2`}
        >
            <input type="number" name="user_id" id="user_id" value={user.id} readOnly hidden />{" "}
            <input type="number" name="anime_id" id="anime_id" value={animeid} readOnly hidden />{" "}
            <div className="flex mb-2 flex-row items-center justify-between">
                <Link href={"/me"}>
                    <img src={imgUrl} alt="" className="rounded object-cover w-[40px] h-[40px]" />
                </Link>
                <UtilityJSX.BoldX className="text-blue-700">{userName}</UtilityJSX.BoldX>
            </div>
            <textarea
                className={`min-h-8 rounded w-full outline-none ${is_dark ? "bg-slate-900" : "bg-blue-100"}  h-20`}
                placeholder="Оставить комментарий"
                name="comment_content"
                id="comment_content"
                required
                maxLength={800}
            />
            <button
                type="submit"
                className={`p-1 border-4 border-transparent ${is_dark ? "bg-blue-950" : " bg-blue-200"} active:bg-blue-400 hover:border-sky-600`}
            >
                Сохранить
            </button>
        </form>
    );
}
