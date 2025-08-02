"use server";
import { getSessionFromClient } from "#/integrators/auth/cookie-auther";
import { UserServiceFetcher } from "#/integrators/user_service/fetcher";
import { cookies, headers } from "next/headers";
import { Profile_ResponseTypes } from "reanime/user-service/response/response-data-types.js";
import { UserServiceMediaConfigs } from "./config";
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
    const imageFile = formData.get(UserServiceMediaConfigs.avatar_file_name) as File | null;
    if (!imageFile) {
        return {
            errors: ["Изображение не добавлено"],
            hash: null,
        };
    }

    // Example: read the bytes
    const arrayBuffer = await imageFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const blob = new Blob([arrayBuffer], { type: imageFile.type });
    const forwardData = new FormData();
    forwardData.append("one_avatar_image_file", blob, imageFile.name);
    const res = await UserServiceFetcher<Profile_ResponseTypes.set_avatar>({
        url: `/v1/profile/avatar/set`,
        method: "POST",
        raw_body: forwardData,
        session_token: auth.data.session.token,
    });

    if (res.errors.length) {
        return { errors: res.errors, hash: null };
    }
    if (res.data) {
        return { hash: res.data, errors: [] };
    }
    return {
        errors: ["Что пошло не так"],
        hash: null,
    };
}
