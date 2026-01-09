import { CgProfile } from "react-icons/cg";
import { makeAvatarFullUrl, type AvatarFSType } from "../utilities/common/view-avatar-by-username-url";

export function AvatarOrLoginRegButtonForHeader({ avatar, logged }: { avatar: AvatarFSType; logged: boolean }) {
    return logged ? (
        <img className="  w-10 h-10 rounded-full" src={makeAvatarFullUrl(avatar)} />
    ) : (
        <CgProfile size={40} />
    );
}
