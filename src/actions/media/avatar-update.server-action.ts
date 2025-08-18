"use server";
import { getSessionFromClient } from "#/integrators/auth/cookie-auther.integrator";
import { UserServiceFetcher } from "#/integrators/user_service/user-service-fetcher.integrator-util";
import { cookies, headers } from "next/headers";
import { Profile_ResponseTypes } from "@reanime.art/user-service/types/responses/routes/profile.js";
import { supported_pfp_format, UserServiceMediaConfigs } from "./config";
import { ResponseCode, UserServiceResponseStatusCodes } from "@reanime.art/user-service/response/constants.js";
type AvatarUpdate_ServerActionRT = Promise<{
    errors: string[];
    hash: null | string;
}>;
export async function AvatarUpdate_ServerAction(formData: FormData): AvatarUpdate_ServerActionRT {
    const auth = await getSessionFromClient({ cookies: await cookies(), headers: await headers() });
    if (!auth) {
        return {
            errors: ["Вы не авторизованы"],
            hash: null,
        };
    }
    const imageFile = formData.get(UserServiceMediaConfigs.avatar_file_HTML_INPUT_name) as File | null;

    if (!imageFile?.size) {
        return {
            errors: ["Изображение не добавлено"],
            hash: null,
        };
    }

    if (!supported_pfp_format.includes(imageFile.type)) {
        return { errors: ["Неподерживаемый формат"], hash: null };
    }
    // Example: read the bytes
    const arrayBuffer = await imageFile.arrayBuffer();
    // const buffer = Buffer.from(arrayBuffer);
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
        return { errors: res.errors, hash: null };
    }
    if (res.data) {
        return { hash: res.data, errors: [] };
    }
    if (res.status_code === UserServiceResponseStatusCodes.TOO_MANY_REQUESTS) {
        return {
            errors: ["Слишком много запросов. Попробуйте позже"],
            hash: null,
        };
    }

    if (res.response_code === ResponseCode.PAYLOAD_TOO_LARGE) {
        return {
            errors: ["Слишком большой файл"],
            hash: null,
        };
    }
    return {
        errors: ["Что-то пошло не так"],
        hash: null,
    };
}
