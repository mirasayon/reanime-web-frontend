"use server";
import { sessionAuthenticator } from "#/integration/user-service/auth/cookie-authenticator.integrator";
import { fetchTheUserService } from "#/integration/user-service/user-service-fetcher.integrator-util";
import { supported_pfp_format, UserServiceMediaConfigs } from "./config";
import { internalErrTxt } from "#/integration/constants/messages-from-services";
import { notLoggedErrorTxt } from "#/constants/frequent-errors-from-client";
import type { ServerActionResponseWithPromise } from "#T/integrator-main-types";
import type { ResponseTypesFor_Media_Section } from "#user-service/user-service-response-types-for-all.routes.ts";
import { endpointsConfig } from "#user-service/endpoints-config.ts";

export async function setProfileAvatar_ServerAction(formData: FormData): ServerActionResponseWithPromise {
    const auth = await sessionAuthenticator();
    if (!auth) {
        return { ok: false, errors: [internalErrTxt] };
    }
    if (!auth) {
        return {
            errors: [notLoggedErrorTxt],
            ok: false,
        };
    }
    const imageFile = formData.get(UserServiceMediaConfigs.avatar_file_HTML_INPUT_name) as File | null;

    if (!imageFile?.size) {
        return {
            errors: ["Изображение не добавлено"],
            ok: false,
        };
    }

    if (!supported_pfp_format.includes(imageFile.type)) {
        return { errors: ["Неподдерживаемый формат"], ok: false };
    }
    const arrayBuffer = await imageFile.arrayBuffer();
    const blob = new Blob([arrayBuffer], { type: imageFile.type });
    const forwardData = new FormData();
    forwardData.append(UserServiceMediaConfigs.avatar_file_name_for_user_service, blob, imageFile.name);
    const res = await fetchTheUserService<ResponseTypesFor_Media_Section["set_avatar"]>(
        endpointsConfig.media.baseUrl + endpointsConfig.media.setAvatar,
        "POST",
        { rawBody: forwardData },
    );
    if (!res) {
        return { ok: false, errors: [internalErrTxt] };
    }
    if (res.errors.length) {
        return { errors: res.errors, ok: false };
    }
    if (res.data && res.ok) {
        return { msg: res.message, ok: true };
    }
    return {
        errors: ["Что-то пошло не так"],
        ok: false,
    };
}
