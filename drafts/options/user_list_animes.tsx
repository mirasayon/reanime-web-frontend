import type { LikedAnime, User } from "@prisma/client";
import { Submit_create_btn, Submit_delete_btn } from "./react_use_form_btn";
import { Liked_Anime_Hover_C } from "./active/liked_anime_hover";
import { action_for_liked_list } from "#server/user_list/actions_for_all_lists";
import type { WatchingAnime } from "@prisma/client";
import { Watching_Anime_Hover_C } from "./active/watching_anime_hover";
import type { ViewedAnime } from "@prisma/client";
import { action_for_viewed_list } from "#server/user_list/actions_for_all_lists";
import { Viewed_list_hover } from "./active/viewed_list_hover";
import { action_for_watching_list } from "#server/user_list/actions_for_all_lists";
import type { InplanAnime } from "@prisma/client";
import { Inplan_Anime_Hover_C } from "./active/inplan_hover";
import { action_for_plan_list } from "#server/user_list/actions_for_all_lists";
import {
    liked_list_f,
    plan_list_f,
    viewed_list_f,
    watch_list_f,
} from "#/components/animes/options/user_list_server";
class UserListAnimes {
    Add_to_plan_list_element = async ({
        p_shiki_id,
        userP,
    }: {
        p_shiki_id: number;
        userP: User;
    }) => {
        const init: InplanAnime | null = await plan_list_f(userP.id, p_shiki_id);
        const is_already_has_that_anime: boolean = !!init;
        const state = is_already_has_that_anime ? "delete" : "create";
        return (
            <>
                <form action={action_for_plan_list} className="flex">
                    <input
                        value={userP.id}
                        type="number"
                        name="userid"
                        id="userid"
                        readOnly
                        hidden
                    />
                    <input
                        value={p_shiki_id}
                        type="number"
                        name="source"
                        id="source"
                        readOnly
                        hidden
                    />
                    <input value={state} type="text" name="state" id="state" readOnly hidden />
                    <input
                        value={init?.id}
                        type="text"
                        name="alreadyhasid"
                        id="alreadyhasid"
                        readOnly
                        hidden
                    />

                    {state === "create" ? (
                        <Submit_create_btn>
                            <Inplan_Anime_Hover_C state="create" />
                            {/* <FaClipboardList
								color="silver"
								size={60}
								className="p-3 hover:bg-blue-400"
							/> */}
                        </Submit_create_btn>
                    ) : (
                        <Submit_delete_btn>
                            <Inplan_Anime_Hover_C state={"delete"} />
                            {/* <FaClipboardList size={60} color="blue" className="p-3 hover:bg-blue-400" /> */}
                        </Submit_delete_btn>
                    )}
                </form>
            </>
        );
    };

    Add_to_viewed_list_element = async ({
        p_shiki_id,
        userP,
    }: {
        p_shiki_id: number;
        userP: User;
    }) => {
        const init: ViewedAnime | null = await viewed_list_f(userP.id, p_shiki_id);
        const is_already_has_that_anime: boolean = !!init;
        const state: "delete" | "create" = is_already_has_that_anime ? "delete" : "create";

        return (
            <>
                <form action={action_for_viewed_list} className="flex">
                    <input
                        value={userP.id}
                        type="number"
                        name="userid"
                        id="userid"
                        readOnly
                        hidden
                    />
                    <input
                        value={p_shiki_id}
                        type="number"
                        name="source"
                        id="source"
                        readOnly
                        hidden
                    />
                    <input value={state} type="text" name="state" id="state" readOnly hidden />
                    <input
                        value={init?.id}
                        type="text"
                        name="alreadyhasid"
                        id="alreadyhasid"
                        readOnly
                        hidden
                    />

                    {state === "create" ? (
                        <Submit_create_btn>
                            <Viewed_list_hover state="create" />
                        </Submit_create_btn>
                    ) : (
                        <Submit_delete_btn>
                            <Viewed_list_hover state="delete" />
                        </Submit_delete_btn>
                    )}
                </form>
            </>
        );
    };

    Add_to_watch_list_element = async ({
        p_shiki_id,
        userP,
    }: {
        p_shiki_id: number;
        userP: User;
    }) => {
        const init: WatchingAnime | null = await watch_list_f(userP.id, p_shiki_id);

        const is_already_has_that_anime: boolean = !!init;
        const state: "delete" | "create" = is_already_has_that_anime ? "delete" : "create";

        return (
            <>
                <form action={action_for_watching_list} className="flex">
                    <input
                        value={userP.id}
                        type="number"
                        name="userid"
                        id="userid"
                        readOnly
                        hidden
                    />
                    <input
                        value={p_shiki_id}
                        type="number"
                        name="source"
                        id="source"
                        readOnly
                        hidden
                    />
                    <input value={state} type="text" name="state" id="state" readOnly hidden />
                    <input
                        value={init?.id}
                        type="text"
                        name="alreadyhasid"
                        id="alreadyhasid"
                        readOnly
                        hidden
                    />

                    {state === "create" ? (
                        <Submit_create_btn>
                            <Watching_Anime_Hover_C state="create" />
                        </Submit_create_btn>
                    ) : (
                        <Submit_delete_btn>
                            <Watching_Anime_Hover_C state="delete" />
                        </Submit_delete_btn>
                    )}
                </form>
            </>
        );
    };

    Add_to_liked_list_element = async ({
        p_shiki_id,
        userP,
    }: {
        p_shiki_id: number;
        userP: User;
    }): Promise<React.JSX.Element> => {
        const init: LikedAnime | null = await liked_list_f(userP.id, p_shiki_id);
        const is_already_has_that_anime = !!init;
        const state = is_already_has_that_anime ? "delete" : "create";
        return (
            <form action={action_for_liked_list} className="flex">
                <input value={userP.id} type="number" name="userid" id="userid" readOnly hidden />
                <input value={p_shiki_id} type="number" name="source" id="source" readOnly hidden />
                <input value={state} type="text" name="state" id="state" readOnly hidden />
                <input
                    value={init?.id}
                    type="text"
                    name="alreadyhasid"
                    id="alreadyhasid"
                    readOnly
                    hidden
                />
                {state === "create" ? (
                    <Submit_create_btn>
                        <Liked_Anime_Hover_C state="create" />
                    </Submit_create_btn>
                ) : (
                    <Submit_delete_btn>
                        <Liked_Anime_Hover_C state="delete" />
                    </Submit_delete_btn>
                )}
            </form>
        );
    };
}

export const UserList = new UserListAnimes();
