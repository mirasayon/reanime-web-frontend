"use server";
import { sessionAuthenticator_S_A } from "#/integration/user-service/auth/cookie-authenticator.integrator";
import { mainUserServiceFetcher } from "#/integration/user-service/user-service-fetcher.integrator-util";
import { supported_pfp_format, UserServiceMediaConfigs } from "./config";
import type { Profile_ResponseTypes } from "#user-service/shared/response-patterns/profile.routes.js";
import type { UserServiceResponseBodyPattern } from "#user-service/shared/response-patterns/response-json-body-shape.js";
import { notLoggedErrorTxt } from "#/constants/frequent-errors-from-client";
/** Server Action */
export async function AvatarUpdate_ServerAction(
    imageFile: File,
    currUrl: string,
): Promise<{
    res?: UserServiceResponseBodyPattern<string>;
    internalError?: true;
    middleErrors?: string[];
}> {
    const auth = await sessionAuthenticator_S_A();
    if (!auth || auth === 500) {
        return { internalError: true };
    }
    if (!auth) {
        return {
            middleErrors: [notLoggedErrorTxt],
        };
    }
    if (!imageFile?.size) {
        return {
            middleErrors: ["Изображение не добавлено"],
        };
    }
    if (!supported_pfp_format.includes(imageFile.type)) {
        return { middleErrors: ["Недодерживаемый формат"] };
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
        return { internalError: true };
    }

    if (res.errors.length) {
        return { res };
    }
    if (res.data) {
        return { res };
    }
    return { internalError: true };
}
