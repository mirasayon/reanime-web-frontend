import { rea_wrapper_border } from "#/styles/provider";
import { AnimeCategoriesComponentDumb } from "#/components/anime_page/anime-categories-links-component.dumbx";
import { DropdownMenuInHeader } from "#/components/dropdown-menu-in-head-corner";
import { WebsiteConfigs } from "#/configs/website-settings.app-config";
import Link from "next/link";
import { UI_Menu } from "#/components/layout/main-profile-menu-dashboard.user-interface";
import type { Account, Profile } from "@reanime.art/user-service/types/responses/db/db-schema-types.js";
import { TestModeBanner } from "../messages/test-mode-banner";
export function Layout_Header({ profile, account }: { profile: Profile | null; account: Account | null }) {
    return (
        <header className={`flex flex-wrap sticky top-0 z-0 justify-between ${rea_wrapper_border} dark:bg-slate-800 bg-blue-100`} id="home">
            {/* <TestModeBanner /> */}
            <div className="flex flex-wrap justify-start">
                <Link href="/" className="p-2 flex items-center justify-center ">
                    <img src={"/icon.png"} className=" w-[30px] h-[30px]  object-cover" alt={`${WebsiteConfigs.name}'s icon`} />
                </Link>
                <AnimeCategoriesComponentDumb />
            </div>
            <div>
                <UI_Menu />
            </div>
            <div className=" flex flex-wrap justify-end">
                <DropdownMenuInHeader profile={profile} account={account} />
            </div>
        </header>
    );
}
