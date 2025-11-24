"use server";
import { sessionAuthenticator_S_A } from "#/integration/user-service/auth/cookie-authenticator.integrator";
import { mainUserServiceFetcher } from "#/integration/user-service/user-service-fetcher.integrator-util";
import { supported_pfp_format, UserServiceMediaConfigs } from "./config";
import type { Profile_ResponseTypes } from "#user-service/shared/response-patterns/profile.routes.js";
import type { UserServiceResponseBodyPattern } from "#user-service/shared/response-patterns/response-json-body-shape.js";
import { notLoggedErrorTxt } from "#/constants/frequent-errors-from-client";
import type { ServerActionResponseWithPromise } from "#T/integrator-main-types";
import { internalErrTxt } from "#/integration/constants/messages-from-services";
/** Server Action */
export async function AvatarUpdate_ServerAction(
    imageFile: File,
): ServerActionResponseWithPromise {
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
    forwardData.append(
        UserServiceMediaConfigs.avatar_file_name_for_user_service,
        blob,
        imageFile.name,
    );
    const res =
        await mainUserServiceFetcher<Profile_ResponseTypes.update_avatar>({
            url: `/v1/profile/avatar/update`,
            method: "PATCH",
            raw_body: forwardData,
            agent: auth.agent,
            ip: auth.ip,
            session_token: auth.data.session.token,
        });
    if (!res || res === 500) {
        return { ok: false, errors: [internalErrTxt] };
    }

    if (res.data) {
        return { ok: true, msg: res.message };
    }
    return { ok: false, errors: res.errors || ["default"] };
}
