"use client";
import { useState, useTransition, type JSX } from "react";
import { MdDeleteForever } from "react-icons/md";
import { PiDotsThreeOutline } from "react-icons/pi";
import { useRouter } from "next/navigation";
import React from "react";
import { deleteCommentServerAction } from "./actions-for-comments/delete-comment";
import { useToast } from "#/components/layout/atoms-toasts-components/useToast";
import type { AuthenticatorType } from "../auth/cookie-authenticator.integrator";
import { internalErrTxt } from "#/integration/constants/messages-from-services";

export function EditOneCommentOnAnime({
    comment_id,
    current_profile,
    currUrl,
}: {
    currUrl: string;
    comment_id: string;
    current_profile: AuthenticatorType;
}): JSX.Element {
    const { success, error, info } = useToast();
    const [show_options, setShow] = useState<boolean>(false);
    const [pending, startTransition] = useTransition();
    async function deleteCommentFormHandler(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        startTransition(async () => {
            const res = await deleteCommentServerAction({ comment_id, current_profile: current_profile, currPath: currUrl });

            if (res !== false) {
                if (res.errors.length) {
                    for (const _error of res.errors) {
                        error(_error);
                    }
                    return;
                }
                success(res.message);
                return;
            } else {
                error(internalErrTxt);
                return;
            }
        });
    }
    return (
        <div>
            {show_options && (
                <form onSubmit={deleteCommentFormHandler} id={"edit_comment_form"} className="grid absolute left-[30px]">
                    <button type="submit" className="cursor-pointer hover:bg-red-500/50 active:bg-red-700  flex justify-center items-center p-1">
                        <MdDeleteForever size={20} color="red" />
                        <span className="  ">{pending ? "Удаляю..." : "Удалить"}</span>
                    </button>
                </form>
            )}

            <PiDotsThreeOutline
                className="m-2 cursor-pointer"
                onClick={(e) => {
                    e.preventDefault();
                    return setShow((e) => !e);
                }}
                size={20}
            />
        </div>
    );
}
