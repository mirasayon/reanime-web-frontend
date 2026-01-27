"use client";
import { UpdateAvatarForm } from "../update-avatar-component";
import { DeleteAvatarForm } from "../delete-avatar-component";
import { IoMenuSharp } from "react-icons/io5";
import { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
export function DropdownMenuForEditAvatar(): React.JSX.Element {
    const [open, setOpen] = useState(false);
    return (
        <div className="flex flex-col text-sm p-1">
            <button
                className="dark:bg-slate-900 bg-blue-200 p-2"
                onClick={(e) => {
                    e.preventDefault();
                    setOpen((pv) => !pv);
                }}
            >
                <div className="dark:bg-blue-950 bg-blue-300 p-1 cursor-pointer flex flex-row justify-center items-center gap-2">
                    {open ? (
                        <>
                            <MdOutlineCancel />
                            <span>Закрыть</span>
                        </>
                    ) : (
                        <>
                            <IoMenuSharp />
                            <span>Меню аватара</span>
                        </>
                    )}
                </div>
            </button>
            {open && (
                <div className="gap-3 p-2 flex flex-col dark:bg-slate-900 bg-blue-200 dark:text-blue-100 text-black">
                    <Separator />
                    <UpdateAvatarForm />
                    <Separator />
                    <DeleteAvatarForm />
                </div>
            )}
        </div>
    );
}
export function Separator() {
    return <div className=" dark:bg-white bg-black flex p-[0.5]" />;
}
