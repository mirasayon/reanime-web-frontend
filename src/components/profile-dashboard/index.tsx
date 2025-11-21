"use client";
import { RxDropdownMenu } from "react-icons/rx";
import { Settings } from "lucide-react";
import { DeleteAccountPermanentlyComponent } from "./delete-account";
import type { Profile_ResponseTypes } from "#user-service/shared/response-patterns/profile.routes.js";
import { useState } from "react";

export function MyAccountDashboard({ auth }: { auth: Profile_ResponseTypes.view_my_profile }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className=" flex flex-col w-max">
            <button
                type="button"
                className="cursor-pointer flex gap-2 p-2 rounded-lg border border-gray-200 dark:border-gray-700"
                onClick={(e) => {
                    e.preventDefault();
                    return setIsOpen((e) => !e);
                }}
            >
                {isOpen ? <RxDropdownMenu size={25} /> : <Settings />}
                Настройки профиля
            </button>
            <div className={` ${isOpen && "hidden"}`}>
                <DeleteAccountPermanentlyComponent />
            </div>
        </div>
    );
}
