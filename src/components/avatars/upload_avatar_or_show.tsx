"use client";
import { ShowAvatar } from "./show-avatar";
import { SetAvatarForm } from "./set-avatar.el";
import type { Profile } from "&us/orm/client";
export function Upload_avatar_or_show({ profile }: { profile: Profile }) {
    // const [is_changed, set_changed] = useState<boolean>(false);
    // const [is_hover, set_hover] = useState<boolean>(false);

    return <div className=" flex">{profile.avatar_url_hash ? <ShowAvatar avatar={profile.avatar_url_hash} /> : <SetAvatarForm />}</div>;
}

