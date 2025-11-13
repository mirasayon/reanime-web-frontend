"use server";
import { sessionAuthenticator } from "#/integration/user-service/auth/cookie-authenticator.integrator";
import { UserServiceFetcher } from "#/integration/user-service/user-service-fetcher.integrator-util";
import { supported_pfp_format, UserServiceMediaConfigs } from "./config";
import type { Profile_ResponseTypes } from "&us/response-patterns/profile.routes";
import type { UserServiceResponseBodyPattern } from "&us/response-patterns/response-json-body-shape";
import { cookies, headers } from "next/headers";
/** Server Action */
export async function AvatarUpdate_ServerAction(
    imageFile: File,
    currUrl: string,
): Promise<{ res?: UserServiceResponseBodyPattern<string>; internalError?: true; middleErrors?: string[] }> {
    const auth = await sessionAuthenticator();
    if (!auth) {
        return {
            middleErrors: ["Вы не авторизованы"],
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
    forwardData.append(UserServiceMediaConfigs.avatar_file_name_for_user_service, blob, imageFile.name);
    const res = await UserServiceFetcher<Profile_ResponseTypes.update_avatar>({
        url: `/v1/profile/avatar/update`,
        method: "PATCH",
        raw_body: forwardData,
        agent: auth.agent,
        ip: auth.ip,
        session_token: auth.data.session.token,
    });

    if (res.errors.length) {
        return { res };
    }
    if (res.data) {
        return { res };
    }
    return { internalError: true };
}
