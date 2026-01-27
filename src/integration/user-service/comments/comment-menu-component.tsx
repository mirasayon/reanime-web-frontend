"use client";
import { useState, type Dispatch, type SetStateAction } from "react";
import { PiDotsThreeOutline } from "react-icons/pi";
import { DeleteCommentBtn } from "./delete-comment-component";
import { EditTheComment_Button_Component } from "./edit-the-comment-button-component";

export function MenuCommentComponent({
    commentId,
    animeId,
    setIsEditing,
}: {
    animeId: number;
    setIsEditing: Dispatch<SetStateAction<boolean>>;
    commentId: string;
}): React.JSX.Element {
    const [showMenuOptions, setShowMenuOptions] = useState<boolean>(false);

    return (
        <div>
            <PiDotsThreeOutline
                className="m-2 cursor-pointer"
                onClick={(e) => {
                    e.preventDefault();
                    return setShowMenuOptions((e) => !e);
                }}
                size={20}
            />
            {showMenuOptions && (
                <div className=" flex flex-col p-2 gap-2 bg-slate-700/50 dark:bg-slate-500/50 absolute">
                    <DeleteCommentBtn commentId={commentId} animeId={animeId} setShowMenuOptions={setShowMenuOptions} />
                    <EditTheComment_Button_Component
                        setIsEditing={setIsEditing}
                        setShowMenuOptions={setShowMenuOptions}
                    />
                </div>
            )}
        </div>
    );
}
