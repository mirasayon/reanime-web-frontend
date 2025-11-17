"use client";
import React, { type JSX, type ReactNode } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { User as UserIcon, Settings, Mail, Calendar, Briefcase, PieChart, LogOut, Edit, UserCircle } from "lucide-react";
import type { Profile_ResponseTypes } from "#user-service/shared/response-patterns/profile.routes.js";
import { Logout_userForDashboard } from "#/components/auth/log-out.user-interface-for-dashboard";
type ProfileDashboardProps = {
    user: Profile_ResponseTypes.view_my_profile;
};

export function MainProfileDashboard({ user }: ProfileDashboardProps): JSX.Element {
    return (
        <div className="p-6  transition-colors ">
            <motion.div initial={{ opacity: 0, y: 2 }} animate={{ opacity: 1, y: 0 }} className="p-4 rounded-2xl duration-1000  shadow">
                <h2 className="text-lg font-medium mb-2">О себе</h2>
                <p className="text-sm text-muted-foreground">{user.profile.bio || "О себе не написано"}</p>

                <div className="mt-4 space-y-2">
                    <QuickItem icon={<UserCircle size={16} />} title="Имя" desc={user.profile.nickname || "Имя не добавлена"} />
                    <QuickItem icon={<UserIcon size={16} />} title="Юзернейм" desc={"@" + user.account.username} />
                    <QuickItem icon={<Mail size={16} />} title="Почта" desc={user.account.email || "Почта не добавлена"} />
                </div>

                <div className="mt-2 flex gap-2">
                    <Link href={"/user-settings/" + user.account.username}>
                        <div className="flex-1 p-2 rounded-lg border border-gray-200 dark:border-gray-700">Настройки профиля</div>
                    </Link>
                    <div>
                        <Logout_userForDashboard />
                    </div>
                </div>
            </motion.div>
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
