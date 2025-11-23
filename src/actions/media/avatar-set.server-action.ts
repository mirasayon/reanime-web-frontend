"use server";
import { sessionAuthenticator_S_A } from "#/integration/user-service/auth/cookie-authenticator.integrator";
import { mainUserServiceFetcher } from "#/integration/user-service/user-service-fetcher.integrator-util";
import { supported_pfp_format, UserServiceMediaConfigs } from "./config";
import type { Profile_ResponseTypes } from "#user-service/shared/response-patterns/profile.routes.js";
import { internalErrTxt } from "#/integration/constants/messages-from-services";
import { notLoggedErrorTxt } from "#/constants/frequent-errors-from-client";
type AvatarSet_ServerActionRT = Promise<{
    errors: string[];
    ok: boolean;
}>;
export async function AvatarSet_ServerAction(
    formData: FormData,
): AvatarSet_ServerActionRT {
    const auth = await sessionAuthenticator_S_A();
    if (!auth || auth === 500) {
        return { ok: false, errors: [internalErrTxt] };
    }
    if (!auth) {
        return {
            errors: [notLoggedErrorTxt],
            ok: false,
        };
    }
    const imageFile = formData.get(
        UserServiceMediaConfigs.avatar_file_HTML_INPUT_name,
    ) as File | null;

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
    forwardData.append(
        UserServiceMediaConfigs.avatar_file_name_for_user_service,
        blob,
        imageFile.name,
    );
    const res = await mainUserServiceFetcher<Profile_ResponseTypes.set_avatar>({
        url: `/v1/profile/avatar/set`,
        method: "POST",
        raw_body: forwardData,
        agent: auth.agent,
        ip: auth.ip,
        session_token: auth.data.session.token,
    });
    if (!res || res === 500) {
        return { ok: false, errors: [internalErrTxt] };
    }

    if (res.errors.length) {
        return { errors: res.errors, ok: false };
    }
    if (res.data) {
        return { ok: res.data, errors: [] };
    }
    return {
        errors: ["Что-то пошло не так"],
        ok: false,
    };
}
