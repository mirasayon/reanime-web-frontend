"use server";
import { sessionAuthenticator_S_A } from "#/integration/user-service/auth/cookie-authenticator.integrator";
import { mainUserServiceFetcher } from "#/integration/user-service/user-service-fetcher.integrator-util";
import { supported_pfp_format, UserServiceMediaConfigs } from "./config";
import { notLoggedErrorTxt } from "#/constants/frequent-errors-from-client";
import type { ServerActionResponseWithPromise } from "#T/integrator-main-types";
import { internalErrTxt } from "#/integration/constants/messages-from-services";
import type { ResponseTypesFor_Media_Section } from "#user-service/user-service-response-types-for-all.routes.js";
export async function AvatarUpdate_ServerAction(imageFile: File): ServerActionResponseWithPromise {
    const auth = await sessionAuthenticator_S_A();
    if (!auth || auth === 500) {
        return { ok: false, errors: [internalErrTxt] };
    }
    if (!auth) {
        return { ok: false, errors: [notLoggedErrorTxt] };
    }
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
    const res = await mainUserServiceFetcher<ResponseTypesFor_Media_Section["update_avatar"]>(
        `/v1/profile/avatar/update`,
        "PATCH",
        { rawBody: forwardData },
    );
    if (!res || res === 500) {
        return { ok: false, errors: [internalErrTxt] };
    }

    if (res.data) {
        return { ok: true, msg: res.message };
    }
    return { ok: false, errors: res.errors || ["default"] };
}
