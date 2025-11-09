"use server";
import { sessionAuthenticator } from "#/integration/user-service/auth/cookie-authenticator.integrator";
import { UserServiceFetcher } from "#/integration/user-service/user-service-fetcher.integrator-util";
import { cookies, headers } from "next/headers";
import { supported_pfp_format, UserServiceMediaConfigs } from "./config";
import type { Profile_ResponseTypes } from "&us/response-patterns/profile.routes";
import { UserServiceResponseStatusCodes } from "&us/constants/response.constants";
type AvatarSet_ServerActionRT = Promise<{
    errors: string[];
    uploaded: boolean;
}>;
export async function AvatarSet_ServerAction(formData: FormData): AvatarSet_ServerActionRT {
    const auth = await sessionAuthenticator();
    if (!auth) {
        return {
            errors: ["Вы не авторизованы"],
            uploaded: false,
        };
    }
    const imageFile = formData.get(UserServiceMediaConfigs.avatar_file_HTML_INPUT_name) as File | null;

    if (!imageFile?.size) {
        return {
            errors: ["Изображение не добавлено"],
            uploaded: false,
        };
    }

    if (!supported_pfp_format.includes(imageFile.type)) {
        return { errors: ["Неподдерживаемый формат"], uploaded: false };
    }
    const arrayBuffer = await imageFile.arrayBuffer();
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
        return { errors: res.errors, uploaded: false };
    }
    if (res.data) {
        return { uploaded: res.data, errors: [] };
    }
    return {
        errors: ["Что-то пошло не так"],
        uploaded: false,
    };
}
