import { rea_wrapper_border } from "#/styles/provider";
import type { ResponseTypesFor_CommentForAnime_Section } from "#user-service/user-service-response-types-for-all.routes.ts";
import type { JSX } from "react";
import type { AuthenticatorType } from "../auth/cookie-authenticator.integrator";
import { fetchTheUserService } from "../user-service-fetcher.integrator-util";
import { MainCreateCommentComponent } from "./create-comment-component";
import { LoggedProfileCommentShower } from "./logged-users-comment-shower";
import { NotLoggedProfileCommentShower } from "./not-logged-users-comment-shower";
import { endpointsConfig } from "#user-service/endpoints-config.ts";
export async function MainCommentsSection({
    shikimori_id,
    userServerBaseUrl,
    current_user,
}: {
    current_user: AuthenticatorType;
    shikimori_id: number;
    userServerBaseUrl: string;
}): Promise<JSX.Element> {
    if (current_user === 500) {
        return <div>Ошибка при загрузке комментариев</div>;
    }
    const all_comments = await fetchTheUserService<ResponseTypesFor_CommentForAnime_Section["get_all_for_anime"]>(
        endpointsConfig.commentAboutAnime.baseUrl +
            endpointsConfig.commentAboutAnime.allCommentsForAnime(String(shikimori_id)) +
            "?page=1&limit=20",
        "GET",
    );
    if (all_comments === 500 || !all_comments.ok || !all_comments?.data) {
        return <div>Ошибка при загрузке комментариев</div>;
    }
    return (
        <section className={rea_wrapper_border}>
            <div className="m-2">
                <h3 className="p-1 font-medium">Комментарии</h3>
                <MainCreateCommentComponent
                    profile={current_user}
                    animeId={shikimori_id}
                    userServerBaseUrl={userServerBaseUrl}
                />
                <div className="flex flex-col">
                    {all_comments.data.length ? (
                        all_comments.data.map((comment) => {
                            const isThereLoggedUserNow = current_user;
                            // && current_user.data.profile.id ===
                            //     comment.by_profile_id;

                            if (isThereLoggedUserNow) {
                                return (
                                    <LoggedProfileCommentShower
                                        key={comment.id}
                                        {...{
                                            comment,
                                            current_user,
                                            userServerBaseUrl,
                                        }}
                                    />
                                );
                            }
                            return (
                                <NotLoggedProfileCommentShower
                                    key={comment.id}
                                    {...{
                                        comment,
                                        userServerBaseUrl,
                                    }}
                                />
                            );
                        })
                    ) : (
                        <>
                            <div className=" py-4 px-3">Пока нет комментариев...</div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}
