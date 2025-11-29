"use client";
import { RxDropdownMenu } from "react-icons/rx";
import { Settings } from "lucide-react";
import { DeleteAccountPermanentlyComponent } from "./delete-account-button-component";
import { useState } from "react";
import { UpdatePasswordFormComponent } from "./update-password-component";

export function SecuritySettingsDashboardComponent() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className=" flex flex-col w-max p-2 m-2">
            <button
                type="button"
                className="cursor-pointer flex gap-2 p-2 rounded-lg border border-gray-200 dark:border-gray-700"
                onClick={(e) => {
                    e.preventDefault();
                    return setIsOpen((e) => !e);
                }}
            >
                {isOpen ? <RxDropdownMenu size={25} /> : <Settings />}
                Настройки безопасности
            </button>
            <div className={` ${!isOpen && "hidden"}`}>
                <DeleteAccountPermanentlyComponent />
                <UpdatePasswordFormComponent />
            </div>
        </div>
    );
}
