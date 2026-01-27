"use client";
import { AnimeCategoriesComponent } from "#/components/anime_page/anime-categories-links-component";
import { DropdownMenuForHeader } from "#/components/dropdown-menu-in-head-corner/dropdown-menu-for-feader";
import { ThemeSwitcher } from "#/components/layout/main-profile-menu-dashboard.user-interface";
import type { AvatarFSType } from "#/components/utilities/common/view-avatar-by-username-url";
import { websiteConstants } from "#/configs/website-constants";
import { BORDER } from "#/styles/style-constants";
import Link from "next/link";

export function LayoutHeader({
    avatar,
    logged,
    username,
}: {
    avatar: AvatarFSType;
    logged: boolean;
    username: string | null;
}) {
    return (
        <div className=" flex flex-col">
            <header className={`flex flex-wrap justify-between ${BORDER} `} id="home">
                <div className="flex flex-wrap justify-start">
                    <Link href="/" className="p-1 flex items-center justify-center ">
                        <img
                            src={"/icon.png"}
                            className=" w-[30px] h-[30px] mx-3 object-cover"
                            alt={`${websiteConstants.name}'s icon`}
                        />
                    </Link>
                    <AnimeCategoriesComponent />
                    <ThemeSwitcher />
                </div>

                <DropdownMenuForHeader avatar={avatar} logged={logged} username={username} />
            </header>
        </div>
    );
}
