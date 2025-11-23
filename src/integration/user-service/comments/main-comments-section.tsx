import { rea_wrapper_border } from "#/styles/provider";
import { MainCreateCommentComponent } from "./create-comment-component";
import type { AuthenticatorType } from "../auth/cookie-authenticator.integrator";
import { mainUserServiceFetcher } from "../user-service-fetcher.integrator-util";
import type { Comment_ResponseTypes } from "#user-service/shared/response-patterns/comment.routes.js";
import type { JSX } from "react";
import { LoggedProfileCommentShower } from "./logged-users-comment-shower";
import { NotLoggedProfileCommentShower } from "./not-logged-users-comment-shower";
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
    const all_comments =
        await mainUserServiceFetcher<Comment_ResponseTypes.get_all_for_anime>({
            agent: current_user?.agent,
            ip: current_user?.ip,
            method: "GET",
            url: `/v1/comment/get/all_comments_for_anime/${shikimori_id}?page=1&limit=20`,
        });
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
                            <div className=" py-4 px-3">
                                Пока нет комментариев...
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}

//{
/* <div className="flex">
									<form action="/" className="p-2">
										<button type="submit">
											{" "}
											<FaArrowUp size={20} />
										</button>
									</form>
									<BoldX className="p-2 text-lg">{item.count}</BoldX>

									<form action="/" className="p-2">
										<button type="submit">
											{" "}
											<FaArrowDown size={20} />
										</button>
									</form>
								</div> */

//}
