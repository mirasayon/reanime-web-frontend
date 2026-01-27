import {
    DropdownMenuShadCN,
    DropdownMenuContentShadCN,
    DropdownMenuLabelShadCN,
    DropdownMenuSeparator,
    DropdownMenuTriggerShadCN,
} from "#/shadcn-ui/dropdown-menu";
import { UpdateAvatarForm } from "../update-avatar-component";
import { DeleteAvatarForm } from "../delete-avatar-component";
import { IoMenuSharp } from "react-icons/io5";
export function DropdownMenuForEditAvatar(): React.JSX.Element {
    return (
        <DropdownMenuShadCN>
            <DropdownMenuTriggerShadCN className="dark:bg-blue-950 bg-blue-300 rounded">
                <div className="p-1 cursor-pointer flex flex-row justify-center items-center gap-3">
                    <IoMenuSharp />
                    Меню аватара
                </div>
            </DropdownMenuTriggerShadCN>
            <DropdownMenuContentShadCN className=" dark:bg-slate-900 bg-blue-200 dark:text-blue-100 text-black">
                <DropdownMenuLabelShadCN>
                    <span>Настройки аватара</span>
                </DropdownMenuLabelShadCN>

                <DropdownMenuSeparator />
                <DropdownMenuLabelShadCN>
                    <span>Обновить аватар</span>
                </DropdownMenuLabelShadCN>

                <UpdateAvatarForm />
                <DropdownMenuSeparator />
                <DeleteAvatarForm />
            </DropdownMenuContentShadCN>
        </DropdownMenuShadCN>
    );
}
