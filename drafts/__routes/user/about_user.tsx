import type { User } from "@prisma/client";
import { rea_wrapper_border } from "#/styles/provider";
import { Upload_avatar_or_show } from "#/components/me/upload_avatar_or_show";
import { AppConstants } from "#settings/main";

export function Data_About_User_Component({
    current_user,
    purpose,
}: {
    current_user: User;
    purpose: "me" | "user";
}) {
    return (
        <div className={`flex ${rea_wrapper_border} p-2`}>
            {purpose === "user" ? (
                <>
                    <img
                        src={
                            current_user.avatar_image
                                ? `${AppConstants.internal_avatar_storage_path_url}${current_user.avatar_image}`
                                : AppConstants.__default_user_avatar
                        }
                        alt="user avatar"
                        className="m-2 w-[250px] h-[250px] object-cover"
                    />
                    <div>
                        <span className="m-2 p-2">Профиль</span>
                        <br />
                        <span className="m-2 p-2">Ник: {current_user.name}</span>
                        <br />
                        <span className="m-2 p-2">Юзернейм: {current_user.username}</span>
                    </div>
                </>
            ) : (
                <>
                    <Upload_avatar_or_show user={current_user} />
                    <div>
                        <span className="m-2 p-2">Профиль</span>
                        <br />
                        <span className="m-2 p-2">Ваш ник: {current_user.name}</span>
                        <br />
                        <span className="m-2 p-2">Ваша почта: {current_user.email}</span>
                        <br />
                        <span className="m-2 p-2">Ваш юзернейм: {current_user.username}</span>
                    </div>
                </>
            )}
        </div>
    );
}
