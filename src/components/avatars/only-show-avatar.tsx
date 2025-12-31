import { endpointsConfig } from "#user-service/endpoints-config.ts";
import { Avatar, AvatarImage } from "../users/dashboard/common";
export function OnlyShowOthersAvatar({
    username,
    userServiceBaseUrl,
}: {
    username: string;
    userServiceBaseUrl: string;
}) {
    const _url =
        userServiceBaseUrl +
        "/v1" +
        endpointsConfig.media.baseUrl +
        endpointsConfig.media.avatarViewByUsername(username);
    return (
        <div className=" flex ">
            <div className=" border-2 m-2 border-blue-400 w-full">
                <Avatar className="  m-2 h-48 w-48 object-cover ">
                    <AvatarImage avatar={_url} />
                </Avatar>
            </div>
        </div>
    );
}
