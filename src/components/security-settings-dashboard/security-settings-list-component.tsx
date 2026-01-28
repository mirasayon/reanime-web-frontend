"use client";
import { RxDropdownMenu } from "react-icons/rx";
import { Settings } from "lucide-react";
import { DeleteAccountPermanentlyComponent } from "./delete-account-button-component";
import { useState } from "react";
import { Linker } from "../utilities/common/linker-utility-component";

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
            <div className={` ${!isOpen && "hidden"} gap-2 flex flex-col w-60 py-2`}>
                <DeleteAccountPermanentlyComponent />
                <Linker
                    href="/user-settings/update-password"
                    clearTheDefaultStylings
                    className=" border-2 p-2 rounded "
                >
                    Обновить пароль
                </Linker>

                <Linker href="/user-settings/sessions" clearTheDefaultStylings className=" border-2 p-2 rounded ">
                    Активные сессии
                </Linker>
            </div>
        </div>
    );
}
