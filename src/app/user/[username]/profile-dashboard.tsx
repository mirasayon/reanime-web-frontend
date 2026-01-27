"use client";
import React, { useState, type ReactNode } from "react";
import { User as UserIcon, Mail, UserCircle } from "lucide-react";
import { LogoutBtnForProfileDashboard } from "#/components/auth/log-out.user-interface-for-dashboard";
import { UpdateProfileNickname } from "./forms-for-user-page-for-editing-profile/update-profile-name";
import { FaEdit } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import type { ResponseTypesFor_UserProfile_Section } from "#user-service/user-service-response-types-for-all.routes.ts";
import { UpdateBioForm } from "./update-bio-component";
type ProfileDashboardProps = {
    user: ResponseTypesFor_UserProfile_Section["view_my_profile"];
};

export function MainProfileDashboard({ user }: ProfileDashboardProps): React.JSX.Element {
    const [isEditingBio, setIsEditingBio] = useState(false);
    const [isEditingNickname, setIsEditingNickname] = useState(false);
    const [isEditingUsername, setIsEditingUsername] = useState(false);
    return (
        <div className="p-3  transition-colors ">
            <div className="p-4 rounded-2xl shadow">
                <h2 className="text-lg font-medium mb-2">О себе</h2>
                <div>
                    {isEditingBio ? (
                        <UpdateBioForm
                            setEditingFunction={setIsEditingBio}
                            username={user.username}
                            existingBio={user.bio}
                        />
                    ) : (
                        <div className="text-sm">{user.bio || "О себе не написано"}</div>
                    )}
                    <button
                        className="p-2 cursor-pointer"
                        type="button"
                        onClick={(e) => {
                            e.preventDefault();
                            setIsEditingBio((pv) => !pv);
                        }}
                    >
                        {!isEditingBio && <FaEdit />}
                    </button>
                </div>

                <div className="mt-4 space-y-2">
                    <div className=" flex flex-row gap-2">
                        {isEditingNickname ? (
                            <UpdateProfileNickname
                                setOpenEditorFunction={setIsEditingNickname}
                                previousName={user.nickname}
                            />
                        ) : (
                            <QuickItem
                                icon={<UserCircle size={16} />}
                                title="Имя"
                                desc={user.nickname || "Имя не добавлена"}
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
                            {isEditingNickname ? <MdOutlineCancel /> : <FaEdit />}
                        </button>
                    </div>
                    <QuickItem icon={<UserIcon size={16} />} title="Юзернейм" desc={"@" + user.username} />
                    <QuickItem icon={<Mail size={16} />} title="Почта" desc={user.email || "Почта не добавлена"} />
                </div>

                <div className="mt-2 flex gap-2">
                    <div>
                        <LogoutBtnForProfileDashboard />
                    </div>
                </div>
            </div>
        </div>
    );
}

function QuickItem({ icon, title, desc }: { icon: ReactNode; title: string; desc: string }): React.JSX.Element {
    return (
        <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg border border-gray-100 dark:border-gray-700">{icon}</div>
            <div>
                <p className="text-sm font-medium">{title}</p>
                <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
        </div>
    );
}
