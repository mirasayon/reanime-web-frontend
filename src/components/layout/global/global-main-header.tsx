"use client";
import { rea_wrapper_border } from "#/styles/provider";
import { AnimeCategoriesComponent } from "#/components/anime_page/anime-categories-links-component";
import { MainDropdownMenuInHeader } from "#/components/dropdown-menu-in-head-corner/main-dropdown-menu-in-header";
import { WebsiteConfigs } from "#/configs/website-settings.app-config";
import Link from "next/link";
import { UI_Menu } from "#/components/layout/main-profile-menu-dashboard.user-interface";
import { getCookie } from "cookies-next/client";
import { userServiceConfig } from "#/configs/user-service.app-config";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function GlobalMainHeader({ userServiceBaseUrl }: { userServiceBaseUrl: string }) {
    const router = useRouter();
    const [usernameClient, setUsernameClient] = useState<string | undefined>("");
    const [paused, setPaused] = useState(true);
    useEffect(() => {
        console.log("HERE");
        const hasCookieUsername = getCookie(userServiceConfig.r6_current_username);
        const r6_is_logged_user = getCookie(userServiceConfig.r6_is_logged_user);
        if (r6_is_logged_user === undefined) {
            return router.push("/api/whoami");
        }
        if (!hasCookieUsername && r6_is_logged_user === "1") {
            return router.push("/api/whoami");
        }

        if (hasCookieUsername && r6_is_logged_user === "0") {
            return router.push("/api/whoami");
        }
        setUsernameClient(hasCookieUsername);
        setPaused(false);
    }, [paused]);
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
                    <MainDropdownMenuInHeader username={usernameClient} userServiceBaseUrl={userServiceBaseUrl} />
                </div>
            </header>
        </div>
    );
}
