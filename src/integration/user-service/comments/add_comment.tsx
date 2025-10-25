"use client";
import Link from "next/link";
import type React from "react";
// import { Add_Comment_F } from "#server/comments/comments";
import { useRouter } from "next/navigation";
import { useCurrentTheme } from "#/components/themes/get-current-theme";
import { LinkX } from "#/components/utilities/common/link-x.utilx";
import { BoldX } from "#/components/utilities/common/assembler-of-utilities.utilx";
import type { AutherType } from "../auth/cookie-auther.integrator";
export function Add_comment_form({
    profile,
    animeId,
    userServerBaseUrl,
}: {
    userServerBaseUrl: string;
    profile: AutherType | null;
    animeId: number;
}) {
    const { is_dark } = useCurrentTheme();
    const router = useRouter();
    if (!profile) {
        return <LinkX href="/auth/login">Войдите в свой аккаунт чтобы оставлять комментарии</LinkX>;
    }
    async function SaveCommentON(event: React.FormEvent<HTMLFormElement>) {
        // event.preventDefault();
        // const comment_content = event.currentTarget.comment_content.value as string;
        // const user_id = Number(event.currentTarget.user_id.value);
        // const anime_id = Number(event.currentTarget.anime_id.value);
        // if (comment_content?.length === 0) {
        //     console.info("return");
        // }
        // // const res = await Add_Comment_F({
        // //     anime_id,
        // //     user_id,
        // //     comment_content,
        // // });
        // if (res === "ok") {
        //     router.refresh();
        // }
    }
    const userName = profile.profile?.profile.nickname || profile.profile?.account.username;
    return (
        <form onSubmit={SaveCommentON} id="comment_form" className={` ${is_dark ? "bg-slate-800" : "bg-blue-200"} p-2`}>
            <input type="number" name="user_id" id="user_id" value={profile?.data.profile.id} readOnly hidden />{" "}
            <input type="number" name="anime_id" id="anime_id" value={animeId} readOnly hidden />{" "}
            <div className="flex mb-2 flex-row items-center justify-between">
                <Link href={"/me"}>
                    {profile.profile?.profile?.avatar?.url ? (
                        <img
                            src={userServerBaseUrl + "/v1/profile/avatar/view/" + profile.profile.profile.avatar.url}
                            alt=""
                            className="rounded object-cover w-[40px] h-[40px]"
                        />
                    ) : (
                        <>
                            <div>no avatar</div>
                        </>
                    )}
                </Link>
                <BoldX className="text-blue-700">{userName}</BoldX>
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
