import { CgProfile } from "react-icons/cg";
type Props = {
    username?: string;
    userServiceBaseUrl: string;
};
export function AvatarOrLoginRegButtonForHeader({
    username,
    userServiceBaseUrl,
}: Props) {
    return username ? (
        <img
            className="  w-10 h-10 rounded-full"
            src={userServiceBaseUrl + "/v1/profile/avatar/view/" + username}
        />
    ) : (
        <CgProfile size={40} />
    );
}
