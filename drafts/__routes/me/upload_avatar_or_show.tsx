"use client";
import type { User } from "@prisma/client";
import { AppConstants } from "#settings/main";
import { upload_avatar_action } from "#server/avatars/upload_avatar_action";
import { useState } from "react";
import { useRouter } from "next/navigation";
export function Upload_avatar_or_show({ user }: { user: User }) {
    const ruoter = useRouter();
    const [is_changed, set_changed] = useState<boolean>(false);
    const [is_hover, set_hover] = useState<boolean>(false);
    async function upload_avatar_form_action(fd: FormData) {
        const res = await upload_avatar_action(fd);
        if (res === "ok") {
            return ruoter.refresh();
        }
        return console.error(res);
    }
    return user.avatar_image ? (
        <img
            src={`${AppConstants.internal_avatar_storage_path_url}${user.avatar_image}`}
            alt="avatar"
            className="m-2 w-[250px] h-[250px] object-cover"
        />
    ) : (
        <form action={upload_avatar_form_action}>
            <label
                className={"m-2 w-[200px] flex overflow-hidden"}
                onMouseEnter={(e) => {
                    e.preventDefault();
                    return set_hover(true);
                }}
                onMouseLeave={(e) => {
                    e.preventDefault();
                    return set_hover(false);
                }}
                htmlFor="file"
            >
                <div
                    className="w-max flex transition-transform ease-out duration-50 relative"
                    style={{
                        transform: `translateX(-${is_changed ? 400 : is_hover ? 200 : 0}px)`,
                    }}
                >
                    <img
                        src={AppConstants.__default_user_avatar}
                        alt="default avatar"
                        className="cursor-pointer w-[200px] h-[200px]"
                    />

                    <img
                        src="/_assets/e_click_to_add_avatar.png"
                        alt="upload avatar"
                        className="animate-pulse cursor-pointer w-[200px] h-[200px] bg-teal-200 relative"
                    />

                    <button
                        type="submit"
                        className="bg-violet-200 transition-transform ease-out duration-100 p-2 min-w-[200px] animate-pulse hover:translate-y-[-10px]"
                    >
                        <img
                            src="/_assets/click_to_save_avatar.png"
                            alt="upload avatar"
                            className="w-[200px] h-[200px]"
                        />
                    </button>
                </div>
            </label>
            <input
                required
                className="m-2"
                id="file"
                type="file"
                accept="image/png, image/jpeg, image/jpg"
                onChange={(e) => {
                    e.preventDefault();
                    return set_changed(true);
                }}
                name="file"
                hidden
            />
            <input value={user.username} name="username" hidden readOnly />
            <input value={user.id} name="userid" hidden readOnly />
        </form>
    );
}
