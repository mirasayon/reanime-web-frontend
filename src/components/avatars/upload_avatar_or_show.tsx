import { ShowAvatar } from "./show-avatar";
import { SetAvatarForm } from "./set-avatar.el";
import type { AvatarPicture, Profile } from "&us/orm/client";
export function Upload_avatar_or_show({
    profile,
    userServiceBaseUrl,
}: {
    profile: Profile & { avatar: AvatarPicture | null };
    userServiceBaseUrl: string;
}) {
    // const [is_changed, set_changed] = useState<boolean>(false);
    // const [is_hover, set_hover] = useState<boolean>(false);

    return (
        <div className=" flex">
            {profile.avatar?.url ? <ShowAvatar avatar={profile.avatar.url} userServiceBaseUrl={userServiceBaseUrl} /> : <SetAvatarForm />}
        </div>
    );
}
