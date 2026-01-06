"use server";
import { userServiceRequest } from "#/integration/user-service/user-service-fetcher.integrator-util";
import { SUPPORTED_AVATAR_IMAGE_FORMATS, userServiceMediaConfigs } from "./config";
import type { ServerActionResponseWithPromise } from "#T/integrator-main-types";
import type { ResponseTypesFor_Media_Section } from "#user-service/user-service-response-types-for-all.routes.ts";
import { endpointsConfig } from "#user-service/endpoints-config.ts";
import { userServiceResponseHandler } from "../server-actions-utils/user-service-raw-response-pre-handler";

export async function setProfileAvatar_ServerAction(formData: FormData): ServerActionResponseWithPromise {
    const imageFile = formData.get(userServiceMediaConfigs.avatar_file_HTML_INPUT_name) as File | null;

    if (!imageFile?.size) {
        return {
            errors: ["Изображение не добавлено"],
            ok: false,
        };
    }

    if (!SUPPORTED_AVATAR_IMAGE_FORMATS.includes(imageFile.type)) {
        return { errors: ["Неподдерживаемый формат"], ok: false };
    }
    const arrayBuffer = await imageFile.arrayBuffer();
    const blob = new Blob([arrayBuffer], { type: imageFile.type });
    const forwardData = new FormData();
    forwardData.append(userServiceMediaConfigs.avatar_file_name_for_user_service, blob, imageFile.name);
    const res = await userServiceRequest<ResponseTypesFor_Media_Section["set_avatar"]>(
        endpointsConfig.media.baseUrl + endpointsConfig.media.setAvatar,
        "POST",
        { rawBody: forwardData },
    );
    return userServiceResponseHandler(res);
}
