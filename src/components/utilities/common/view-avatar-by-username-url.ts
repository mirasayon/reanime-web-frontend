import { envClient } from "#/env/env-client";
import { endpointsConfig } from "#/user-service-shared-package/endpoints-config";
export type AvatarFSType = { path_dirname: string; path_filename: string } | null;
export function makeAvatarFullUrl(avatar: AvatarFSType) {
    if (!avatar) {
        return "/_assets/_users/_default-avatar/m.jpg";
    }
    return (
        envClient.userServiceUrl +
        "/v1" +
        endpointsConfig.media.baseUrl +
        endpointsConfig.media.viewAvatarByFs +
        "/" +
        avatar.path_dirname +
        "/" +
        avatar.path_filename +
        ".webp"
    );
}
