import { CgProfile } from "react-icons/cg";
import { viewAvatarByUsernameUrl } from "../utilities/common/view-avatar-by-username-url";
type Props = {
    username?: string;
};
export function AvatarOrLoginRegButtonForHeader({ username }: Props) {
    return username ? (
        <img className="  w-10 h-10 rounded-full" src={viewAvatarByUsernameUrl(username)} />
    ) : (
        <CgProfile size={40} />
    );
}
