"use server";
import { fetchTheUserService } from "#/integration/user-service/user-service-fetcher.integrator-util";
import { supported_pfp_format, UserServiceMediaConfigs } from "./config";
import type { ServerActionResponseWithPromise } from "#T/integrator-main-types";
import { internalErrTxt } from "#/integration/constants/messages-from-services";
import type { ResponseTypesFor_Media_Section } from "#user-service/user-service-response-types-for-all.routes.ts";
import { endpointsConfig } from "#user-service/endpoints-config.ts";
import { userServiceResponseHandler } from "../server-actions-utils/user-service-raw-response-pre-handler";
export async function AvatarUpdate_ServerAction(imageFile: File): ServerActionResponseWithPromise {
    if (!imageFile?.size) {
        return { ok: false, errors: ["Файл для загрузки не найден"] };
    }
    if (!supported_pfp_format.includes(imageFile.type)) {
        return { ok: false, errors: ["Недодерживаемый формат"] };
    }
    const arrayBuffer = await imageFile.arrayBuffer();
    const blob = new Blob([arrayBuffer], { type: imageFile.type });
    const forwardData = new FormData();
    forwardData.append(UserServiceMediaConfigs.avatar_file_name_for_user_service, blob, imageFile.name);
    const res = await fetchTheUserService<ResponseTypesFor_Media_Section["update_avatar"]>(
        endpointsConfig.media.baseUrl + endpointsConfig.media.updateAvatar,
        "PATCH",
        { rawBody: forwardData },
    );
    return userServiceResponseHandler(res);
}
