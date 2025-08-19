import { rea_wrapper_border } from "#/styles/provider";
import { AnimeCategoriesComponentDumb } from "#/components/anime_page/anime-categories-links-component.dumbx";
import { DropdownMenuInHeader } from "#/components/dropdown-menu-in-head-corner";
import { SearchAnimeAddressBarInHeader } from "#/components/anime_page/search-anime-address-bar-in-header";
import { WebsiteConfigs } from "#/configs/website-settings.app-config";
import Link from "next/link";
import { UI_Menu } from "#/components/layout/main-profile-menu-dashboard.user-interface";
import { Account, Profile } from "@reanime.art/user-service/types/responses/db/db-schema-types.js";
export function Layout_Header({ profile, account }: { profile: Profile | null; account: Account | null }) {
    return (
        <>
            {/* <TestModeBanner /> */}
            <header
                className={`max-md:flex-col max-md:w-full shadow-violet-500/50 shadow-lg flex sticky top-0 z-2 justify-between ${rea_wrapper_border} dark:bg-slate-800 bg-blue-100 `}
                id="home"
            >
                <div className="flex flex-wrap justify-start gap-7">
                    <Link href="/" className="ml-2 flex items-center justify-center ">
                        <img src={"/icon.png"} className=" w-[40px] h-[40px]  object-cover" alt={`${WebsiteConfigs.name}'s icon`} />
                    </Link>
                    <AnimeCategoriesComponentDumb />
                </div>
                <div>
                    <UI_Menu />
                </div>
                <div className=" flex flex-wrap justify-end">
                    <SearchAnimeAddressBarInHeader />
                    <DropdownMenuInHeader profile={profile} account={account} />
                </div>
            </header>
        </>
    );
}
