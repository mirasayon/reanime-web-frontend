import type { Comments, User } from "@prisma/client";
import { prisma } from "#providers/prisma_provider";
import { rea_wrapper_border } from "#/styles/provider";
import Link from "next/link";
// import { FaArrowDown } from "react-icons/fa";
// import { FaArrowUp } from "react-icons/fa";
import { AppConstants } from "#settings/main";
import { Add_comment_form } from "#/components/comments/add_comment";
import { EditComments } from "#/components/comments/edit_comment";

export async function Comments_section({
    shikimori_id,
    current_user,
    is_dark,
}: {
    is_dark: boolean;
    current_user: User | null;
    shikimori_id: number;
}): Promise<JSX.Element> {
    const all_comments: Comments[] = await prisma.comments.findMany({
        where: { animeId: Number(shikimori_id) },
        take: 20,
    });

    const user_list: User[] = [];
    for await (const element of all_comments) {
        const user: User | null = await prisma.user.findUnique({
            where: {
                id: element.ownerId,
            },
        });
        if (!user) {
            continue;
        }
        user_list.push(user);
    }

    const comment_full_list = all_comments.map((item) => {
        return {
            commentdata: item,
            comment_owner: user_list.find((u) => u.id === item.ownerId) as User,
        };
    });
    return (
        <section className={rea_wrapper_border}>
            <div className="m-2">
                <div>Комментарии</div>
                <Add_comment_form user={current_user} animeid={Number(shikimori_id)} />
                <div className="grid">
                    {comment_full_list.map((item) => {
                        const user = item.comment_owner;
                        return (
                            <div key={item.commentdata.id} className="m-2 grid p-2 items-center">
                                <div className=" flex items-center">
                                    <Link
                                        className="flex items-center"
                                        href={`/user/${user.username}`}
                                    >
                                        <img
                                            src={
                                                user?.avatar_image
                                                    ? AppConstants.internal_avatar_storage_path_url +
                                                      user.avatar_image
                                                    : AppConstants.__default_user_avatar
                                            }
                                            alt="user avatar"
                                            className="rounded object-cover w-[50px] h-[50px]"
                                        />
                                    </Link>
                                    <span className="p-2 font-semibold  ">
                                        {" "}
                                        {user.name || user.username}
                                    </span>

                                    {current_user &&
                                        current_user.id === item.commentdata.ownerId && (
                                            <div className="relative">
                                                <EditComments comment_id={item.commentdata.id} />
                                            </div>
                                        )}
                                </div>

                                <div className="grid items-center">
                                    <span
                                        id={`comment_id_${item.commentdata.id}`}
                                        className={` p-2 m-2 w-full ${
                                            is_dark ? "bg-slate-800" : "bg-slate-100"
                                        }`}
                                    >
                                        {item.commentdata.text}
                                        {/* {item.id} */}
                                    </span>{" "}
                                    {/* <div className="flex">
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
								</div> */}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
