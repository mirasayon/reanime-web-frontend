import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "#/shadcn-ui/dropdown-menu";
import { UpdateAvatarForm } from "../update-avatar";
import { DeleteAvatarForm } from "../delete-avatar";
import { IoMenuSharp } from "react-icons/io5";
import type { JSX } from "react";
export function DropdownMenuForAvatar({ currUrl }: { currUrl: string }): JSX.Element {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="bg-blue-950 ">
                <div className="p-1 cursor-pointer flex flex-row justify-center items-center gap-3">
                    <IoMenuSharp />
                    Меню аватара
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className=" dark:bg-slate-900 bg-blue-200 dark:text-blue-100 text-black">
                <DropdownMenuLabel>
                    <span>Настройки аватара</span>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />
                {/* <DropdownMenuItem
                    className=" hover:dark:bg-slate-900 hover:bg-blue-200"
                    onClick={(e) => {
                        e.preventDefault();
                        }}
                        > */}
                <DropdownMenuLabel>
                    <span>Обновить аватар</span>
                </DropdownMenuLabel>

                <UpdateAvatarForm currUrl={currUrl} />
                {/* </DropdownMenuItem> */}
                <DropdownMenuSeparator />
                {/* <DropdownMenuItem
                    className=" hover:dark:bg-slate-900 hover:bg-blue-200"
                    onClick={(e) => {
                        e.preventDefault();
                        }}
                        > */}
                <DeleteAvatarForm />
                {/* </DropdownMenuItem> */}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
