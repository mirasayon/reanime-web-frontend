"use server";
import { UserServiceFetcher } from "#/integrators/user_service/user-service-fetcher.integrator-util";
import { Logger } from "log-it-colored";
import { authentication_schemas, type dto } from "@reanime.art/user-service/validators/authentication.js";
import { cookies, headers } from "next/headers";
import { redirect, RedirectType } from "next/navigation";
import type { Authentication_ResponseTypes } from "@reanime.art/user-service/types/responses/routes/auth.js";
import { two_thousand_years } from "#/constants/common.constants";
import { UserService } from "#/configs/user-service.app-config";
import { getSessionFromClient } from "#/integrators/auth/cookie-auther.integrator";

export async function loginAction(data: dto.login_via_username): Promise<void | string[]> {
    const auth = await getSessionFromClient({ cookies: await cookies(), headers: await headers() });
    if (auth) {
        return ["Вы уже авторизованы"];
    }
    const parsed = await authentication_schemas.login_via_username.safeParseAsync(data);
    if (!parsed.success) {
        const errorList = parsed.error.issues.map(({ path, message }) => {
            return `${path.join(".")} -- ${message}` as const;
        });
        return errorList;
    }
    const { username, password } = parsed.data;
    const user = await LoginFetch(username, password);
    if (user.errors.length || !user.data) {
        return user.errors;
    }
    return redirect(`/user/${user.data.account.username}`, RedirectType.push);
}
async function LoginFetch(username: string, password: string) {
    const _cookies = await cookies();
    const _headers = await headers();
    const r6f_session_token = _cookies.get(UserService.session_token_name)?.value;
    const agent = _headers.get("user-agent") ?? undefined;
    const ip = _headers.get("x-forwarded-for") ?? undefined;

    const res = await UserServiceFetcher<Authentication_ResponseTypes.login_via_username>({
        url: "/v1/authentication/login/via/username",
        session_token: r6f_session_token,
        method: "POST",
        json_body: {
            username,
            password,
        },
        agent,
        ip,
    });

    if (res.errors.length || !res.data) {
        return res;
    }

    _cookies.set({
        name: UserService.session_token_name,
        value: res.data.session.token,
        httpOnly: false,
        maxAge: two_thousand_years,
        path: "/",
    });

    Logger.success("Succesfully logged the user in");
    return res;
}
