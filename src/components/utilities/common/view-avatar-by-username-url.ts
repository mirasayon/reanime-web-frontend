import { envClient } from "#/env/env-client";
import { endpointsConfig } from "#/user-service-shared-package/endpoints-config";

export function viewAvatarByUsernameUrl(username: string) {
    return (
        envClient.userServiceUrl +
        "/v1" +
        endpointsConfig.media.baseUrl +
        endpointsConfig.media.avatarViewByUsername(username)
    );
}
