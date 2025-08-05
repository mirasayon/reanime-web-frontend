"use server";
import { getSessionFromClient } from "#/integrators/auth/cookie-auther";
import { UserServiceFetcher } from "#/integrators/user_service/fetcher";
import { cookies, headers } from "next/headers";
import { Profile_ResponseTypes } from "reanime/user-service/response/response-data-types.js";
import { UserServiceMediaConfigs } from "./config";
import { STATUS_MAP } from "reanime/user-service/response/constants.js";
type UploadImageRT = Promise<{
    errors: string[];
    hash: null | string;
}>;
export async function uploadImage(formData: FormData): UploadImageRT {
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

    // Example: read the bytes
    const arrayBuffer = await imageFile.arrayBuffer();
    // const buffer = Buffer.from(arrayBuffer);
    const blob = new Blob([arrayBuffer], { type: imageFile.type });
    const forwardData = new FormData();
    forwardData.append(UserServiceMediaConfigs.avatar_file_name_for_user_service, blob, imageFile.name);
    const res = await UserServiceFetcher<Profile_ResponseTypes.set_avatar>({
        url: `/v1/profile/avatar/set`,
        method: "POST",
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
    if (res.status_code === STATUS_MAP.TOO_MANY_REQUESTS) {
        return {
            errors: ["Слишком много запросов. Попробуйте позже"],
            hash: null,
        };
    }
    return {
        errors: ["Что-то пошло не так"],
        hash: null,
    };
}
