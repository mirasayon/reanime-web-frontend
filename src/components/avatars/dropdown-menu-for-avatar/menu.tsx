import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "#/shadcn-ui/dropdown-menu";
import { UpdateAvatarForm } from "../update-avatar";
import { DeleteAvatarForm } from "../delete-avatar";
import type { JSX } from "react";
export function DropdownMenuForAvatar({ currUrl }: { currUrl: string }): JSX.Element {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="dark:bg-slate-900 bg-blue-200 dark:text-blue-100 text-black">
                <div className="p-2 cursor-pointer">Меню аватара</div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="dark:bg-slate-900 bg-blue-200  dark:text-blue-100 text-black">
                <DropdownMenuLabel className=" dark:bg-slate-900 bg-blue-200">
                    <span>Настройки аватара</span>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />
                {/* <DropdownMenuItem
                    className=" hover:dark:bg-slate-900 hover:bg-blue-200"
                    onClick={(e) => {
                        e.preventDefault();
                    }}
                > */}
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
