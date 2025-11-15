"use server";
import { UserServiceFetcher } from "#/integration/user-service/user-service-fetcher.integrator-util";
import { cookies, headers } from "next/headers";
import { redirect, RedirectType } from "next/navigation";
import { UserService } from "#/configs/user-service.app-config";
import { sessionAuthenticator } from "#/integration/user-service/auth/cookie-authenticator.integrator";
import type { Authentication_ResponseTypes } from "&us/response-patterns/authentication.routes";
import { authentication_schemas, type dto } from "&us/validators/authentication.validator.routes";
import { cookieOptionsForSetToken } from "./cookie-option";
export async function loginAction(data: { username: string; password: string }): Promise<void | string[]> {
    const auth = await sessionAuthenticator();
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
    _cookies.set(cookieOptionsForSetToken(res.data.session.token));
    return res;
}
