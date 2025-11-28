"use client";
import React, { useState, type JSX, type ReactNode } from "react";
import { User as UserIcon, Mail, UserCircle } from "lucide-react";
import type { Profile_ResponseTypes } from "#user-service/shared/response-patterns/profile.routes.js";
import { Logout_userForDashboard } from "#/components/auth/log-out.user-interface-for-dashboard";
import { UpdateProfileNickname } from "./forms-for-user-page-for-editing-profile/update-profile-name";
import { FaEdit } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
type ProfileDashboardProps = {
    user: Profile_ResponseTypes.view_my_profile;
};

export function MainProfileDashboard({
    user,
}: ProfileDashboardProps): JSX.Element {
    const [isEditingBio, setIsEditingBio] = useState(false);
    const [isEditingNickname, setIsEditingNickname] = useState(false);
    const [isEditingUsername, setIsEditingUsername] = useState(false);
    const [isEditingPassword, setIsEditingPassword] = useState(false);
    return (
        <div className="p-3  transition-colors ">
            <div className="p-4 rounded-2xl shadow">
                <h2 className="text-lg font-medium mb-2">О себе</h2>
                <p className="text-sm text-muted-foreground">
                    {user.profile.bio || "О себе не написано"}
                </p>

                <div className="mt-4 space-y-2">
                    <div className=" flex flex-row gap-2">
                        {isEditingNickname ? (
                            <UpdateProfileNickname
                                setOpenEditorFunction={setIsEditingNickname}
                                previousName={user.profile.nickname}
                            />
                        ) : (
                            <QuickItem
                                icon={<UserCircle size={16} />}
                                title="Имя"
                                desc={
                                    user.profile.nickname || "Имя не добавлена"
                                }
                            />
                        )}
                        <button
                            className="p-2 cursor-pointer"
                            type="button"
                            onClick={(e) => {
                                e.preventDefault();
                                setIsEditingNickname((pv) => !pv);
                            }}
                        >
                            {isEditingNickname ? (
                                <MdOutlineCancel />
                            ) : (
                                <FaEdit />
                            )}
                        </button>
                    </div>
                    <QuickItem
                        icon={<UserIcon size={16} />}
                        title="Юзернейм"
                        desc={"@" + user.account.username}
                    />
                    <QuickItem
                        icon={<Mail size={16} />}
                        title="Почта"
                        desc={user.account.email || "Почта не добавлена"}
                    />
                </div>

                <div className="mt-2 flex gap-2">
                    <div>
                        <Logout_userForDashboard />
                    </div>
                </div>
            </div>
        </div>
    );
}

function QuickItem({
    icon,
    title,
    desc,
}: {
    icon: ReactNode;
    title: string;
    desc: string;
}): React.JSX.Element {
    return (
        <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg border border-gray-100 dark:border-gray-700">
                {icon}
            </div>
            <div>
                <p className="text-sm font-medium">{title}</p>
                <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
        </div>
    );
}
