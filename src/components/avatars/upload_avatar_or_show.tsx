import { ShowAvatarElement } from "./show-avatar-for-logged-user";
import { SetAvatarForm } from "./set-avatar.el";
import type { AvatarPicture, Profile } from "#user-service/databases/orm/client.js";
export function Upload_avatar_or_show({
    profile,
    userServiceBaseUrl,
}: {
    profile: Profile & { avatar: AvatarPicture | null };
    userServiceBaseUrl: string;
}) {
    // const has_avatar = !!profile.avatar?.url;
    return (
        <div className=" flex">
            {profile.avatar?.url ? <ShowAvatarElement username={profile.avatar.url} userServiceBaseUrl={userServiceBaseUrl} /> : <SetAvatarForm />}
        </div>
    );
}
