"use client";
import { useTransition, type Dispatch, type SetStateAction } from "react";
import { FaEdit } from "react-icons/fa";
export function EditTheComment_Button_Component({
    setFunction,
    setShowOptionsMenu,
}: {
    setFunction: Dispatch<SetStateAction<boolean>>;
    setShowOptionsMenu: Dispatch<SetStateAction<boolean>>;
}) {
    const [pending, startTransition] = useTransition();
    function deleteCommentFormHandler(event: React.FormEvent<HTMLFormElement>) {
        startTransition(async () => {
            event.preventDefault();
            setFunction(true);
            setShowOptionsMenu(false);
            return;
        });
    }
    return (
        <div>
            <form
                onSubmit={deleteCommentFormHandler}
                id={"edit_comment_form"}
                className="flex flex-col dark:bg-slate-800 bg-slate-500  left-[30px]"
            >
                <button
                    type="submit"
                    className="cursor-pointer hover:bg-red-500/50 active:bg-red-700  flex justify-center items-center p-1"
                >
                    <FaEdit size={20} color="white" />
                    <span>{pending ? "Загрузка..." : "Обновить"}</span>
                </button>
            </form>
        </div>
    );
}
