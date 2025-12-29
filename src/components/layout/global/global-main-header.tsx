"use client";
import { AnimeCategoriesComponent } from "#/components/anime_page/anime-categories-links-component";
import { MainDropdownMenuInHeader } from "#/components/dropdown-menu-in-head-corner/main-dropdown-menu-in-header";
import { UI_Menu } from "#/components/layout/main-profile-menu-dashboard.user-interface";
import { WebsiteConfigs } from "#/configs/website-settings.app-config";
import { rea_wrapper_border } from "#/styles/provider";
import Link from "next/link";

export function GlobalMainHeader({ username, userServiceUrl }: { username?: string; userServiceUrl: string }) {
    return (
        <div className=" flex flex-col">
            <header className={`flex flex-wrap justify-between ${rea_wrapper_border} `} id="home">
                <div className="flex flex-wrap justify-start">
                    <Link href="/" className="p-1 flex items-center justify-center ">
                        <img
                            src={"/icon.png"}
                            className=" w-[30px] h-[30px] mx-3 object-cover"
                            alt={`${WebsiteConfigs.name}'s icon`}
                        />
                    </Link>
                    <AnimeCategoriesComponent />
                    <UI_Menu />
                </div>
                <div className=" flex flex-wrap justify-end">
                    <MainDropdownMenuInHeader username={username} userServiceUrl={userServiceUrl} />
                </div>
            </header>
        </div>
    );
}
