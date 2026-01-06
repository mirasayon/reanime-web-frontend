"use client";
import { AnimeCategoriesComponent } from "#/components/anime_page/anime-categories-links-component";
import { MainDropdownMenuInHeader } from "#/components/dropdown-menu-in-head-corner/main-dropdown-menu-in-header";
import { UI_Menu } from "#/components/layout/main-profile-menu-dashboard.user-interface";
import { websiteConstants } from "#/configs/website-constants";
import { DropdownMenuShadCN } from "#/shadcn-ui/dropdown-menu";
import { BORDER } from "#/styles/style-constants";
import Link from "next/link";

export function GlobalMainHeader({ username }: { username?: string }) {
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
                    <UI_Menu />
                </div>

                <MainDropdownMenuInHeader username={username} />
            </header>
        </div>
    );
}
