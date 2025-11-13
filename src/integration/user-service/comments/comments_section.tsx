"use server";
import { rea_wrapper_border } from "#/styles/provider";
import Link from "next/link";
// import { FaArrowDown } from "react-icons/fa";
// import { FaArrowUp } from "react-icons/fa";
import { Add_comment_form } from "./component-create_comment";
import { EditOneCommentOnAnime } from "./edit-one-comment";
import type { JSX } from "react";
import type { AuthenticatorType } from "../auth/cookie-authenticator.integrator";
import { UserServiceFetcher } from "../user-service-fetcher.integrator-util";
import type { Comment_ResponseTypes } from "&us/response-patterns/comment.routes";

export async function Comments_section({
    shikimori_id,
    userServerBaseUrl,
    currUrl,
    current_user,
}: {
    current_user: AuthenticatorType | null;
    shikimori_id: number;
    userServerBaseUrl: string;
    currUrl: string;
}): Promise<JSX.Element> {
    const all_comments = await UserServiceFetcher<Comment_ResponseTypes.get_all_for_anime>({
        agent: current_user?.agent,
        ip: current_user?.ip,
        method: "GET",
        url: `/v1/comment/get/all/${shikimori_id}?page=1&limit=20`,
    });
    const is_dark = true;
    return (
        <section className={rea_wrapper_border}>
            <div className="m-2">
                <div>Комментарии</div>
                <Add_comment_form profile={current_user} animeId={Number(shikimori_id)} userServerBaseUrl={userServerBaseUrl} />
                <div className="grid">
                    {all_comments?.data?.length ? (
                        all_comments.data.map((item) => {
                            const user = item.by_profile;
                            return (
                                <div key={item.id} className="m-2 grid p-2 items-center">
                                    <div className=" flex items-center">
                                        {user?.avatar ? (
                                            <Link className="flex items-center" href={`/user/${user.by_account.username}`}>
                                                <img
                                                    src={userServerBaseUrl + "/v1/profile/avatar/view/" + user.avatar.url}
                                                    alt="user avatar"
                                                    className="rounded-full object-cover w-[50px] h-[50px]"
                                                />
                                            </Link>
                                        ) : (
                                            <>
                                                <div>no avatar</div>
                                            </>
                                        )}
                                        <span className="p-2 font-semibold  "> {user.nickname || user.by_account.username}</span>

                                        {current_user && current_user.profile.profile.id === item.by_profile_id && (
                                            <div className="relative">
                                                <EditOneCommentOnAnime comment_id={item.id} current_profile={current_user} currUrl={currUrl} />
                                            </div>
                                        )}
                                    </div>

                                    <div className="grid items-center">
                                        <span id={`comment_id_${item.id}`} className={` p-2 m-2 w-full ${is_dark ? "bg-slate-800" : "bg-slate-100"}`}>
                                            {item.content}
                                            {/* {item.id} */}
                                        </span>{" "}
                                    </div>
                                </div>
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
