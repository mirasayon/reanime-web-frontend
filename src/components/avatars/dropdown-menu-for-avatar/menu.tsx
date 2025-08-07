import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "#/shadcn-ui/components/ui/dropdown-menu";
import { UpdateAvatarForm } from "../update-avatar";
import { DeleteAvatarForm } from "../delete-avatar";
export function DropdownMenuForAvatar() {
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
                <UpdateAvatarForm />
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
