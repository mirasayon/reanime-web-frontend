import { rea_wrapper_border } from "#/styles/provider";
import { AnimeCategoriesComponent } from "#/components/anime_page/anime-categories-links-component";
import { MainDropdownMenuInHeader } from "#/components/dropdown-menu-in-head-corner/main-dropdown-menu-in-header";
import { WebsiteConfigs } from "#/configs/website-settings.app-config";
import Link from "next/link";
import { UI_Menu } from "#/components/layout/main-profile-menu-dashboard.user-interface";
import type {
    Profile,
    Account,
    AvatarPicture,
} from "#user-service/databases/orm/client.js";

export function GlobalMainHeader({
    profile,
    account,
    userServiceBaseUrl,
    avatar,
}: {
    userServiceBaseUrl: string;
    profile: Profile | null;
    account: Account | null;
    avatar: AvatarPicture | null;
}) {
    return (
        <div className=" flex flex-col">
            <header
                className={`flex flex-wrap justify-between ${rea_wrapper_border} dark:bg-slate-800 bg-blue-100`}
                id="home"
            >
                <div className="flex flex-wrap justify-start">
                    <Link
                        href="/"
                        className="p-1 flex items-center justify-center "
                    >
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
                    <MainDropdownMenuInHeader
                        profile={profile}
                        avatar={avatar}
                        account={account}
                        userServiceBaseUrl={userServiceBaseUrl}
                    />
                </div>
            </header>
        </div>
    );
}
