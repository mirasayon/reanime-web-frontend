"use client";
import { useState, type JSX } from "react";
import { MdDeleteForever } from "react-icons/md";
import { PiDotsThreeOutline } from "react-icons/pi";
import { useRouter } from "next/navigation";
import React from "react";

export function EditOneCommentOnAnime({ comment_id }: { comment_id: string }): JSX.Element {
    const router = useRouter();
    const [show_options, setShow] = useState<boolean>(false);
    async function DeleteCommentON(event: React.FormEvent<HTMLFormElement>) {
        // event.preventDefault();
        // const res = await Delete_Comment_F({ comment_id });
        // if (res === "ok") {
        //     router.refresh();
        // }
    }
    return (
        <div>
            {show_options && (
                <form onSubmit={DeleteCommentON} id={"edit_comment_form"} className="grid absolute left-[30px]">
                    <button type="submit" className=" hover:bg-red-500/20 active:bg-red-400  flex justify-center items-center p-1">
                        <MdDeleteForever size={20} color="red" />
                        <span className="  ">удалить</span>
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
