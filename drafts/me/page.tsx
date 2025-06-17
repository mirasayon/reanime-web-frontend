import type { Metadata } from "next";
import { redirect } from "next/navigation";
import type { User } from "@prisma/client";
import { get_user_from_cookies } from "#server/auth/get_user_from_cookies";
import { Data_About_User_Component } from "#/components/user/about_user";
import type { possible_profile_tab_value_type } from "#T/userinserface";
import { get_all_user_lists } from "#server/data/experience";
import { Logout_user } from "#/components/auth/logout_user";
import { ServerSideThemeCookie } from "#/components/hooks/server_side_cookies";
import { AppConstants } from "#settings/main";
import { Utils } from "#/utils/functions";
import { Switch_tab_component } from "#/components/me/switch_tab";

export default async function __MePage({
    searchParams,
}: {
    searchParams: { tab: string | undefined };
}): Promise<React.JSX.Element> {
    const { is_dark } = ServerSideThemeCookie();
    const current_user: User | null = await get_user_from_cookies();
    if (!current_user) {
        return redirect("/auth/login");
    }
    let tab_value: string = searchParams.tab || "watching";

    if (!AppConstants.possible_profile_tab_value_patter.test(tab_value)) {
        tab_value = "watching";
    }
    const tab_valie_valid = tab_value as possible_profile_tab_value_type;

    const { liked_animes_ids, watching_animes_ids, inplan_animes_ids, viewed_animes_ids } =
        await get_all_user_lists(current_user);

    const List = await Utils.GetListAnimes({
        liked_animes_ids,
        watching_animes_ids,
        inplan_animes_ids,
        viewed_animes_ids,
    });
    return (
        <>
            <Data_About_User_Component purpose="me" current_user={current_user} />
            <Switch_tab_component
                is_dark={is_dark}
                tab_value={tab_valie_valid}
                liked_animes_kodiks={List.liked_animes_kodiks}
                inplan_animes_kodiks={List.inplan_animes_kodiks}
                watching_animes_kodiks={List.watching_animes_kodiks}
                viewed_animes_kodiks={List.viewed_animes}
            />
            <Logout_user />
        </>
    );
}

export const metadata: Metadata = {
    title: "Ваш профиль",
    description: "Ваш профиль",
    robots: {
        index: false,
        follow: false,
    },
};
