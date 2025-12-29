import { CgProfile } from "react-icons/cg";
type Props = {
    username?: string;
    userServiceUrl: string;
};
export function AvatarOrLoginRegButtonForHeader({ username, userServiceUrl }: Props) {
    return username ? (
        <img className="  w-10 h-10 rounded-full" src={userServiceUrl + "/v1/profile/avatar/view/" + username} />
    ) : (
        <CgProfile size={40} />
    );
}
