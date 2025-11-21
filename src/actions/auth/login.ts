"use server";
import { mainUserServiceFetcher } from "#/integration/user-service/user-service-fetcher.integrator-util";
import { cookies, headers } from "next/headers";
import { UserService } from "#/configs/user-service.app-config";
import { sessionAuthenticator_S_A } from "#/integration/user-service/auth/cookie-authenticator.integrator";
import type { Authentication_ResponseTypes } from "#user-service/shared/response-patterns/authentication.routes.js";
import { authentication_schemas, type dto } from "#user-service/shared/validators/authentication.validator.routes.js";
import { cookieOptionsForSetToken } from "./cookie-option";
import type { ServerActionResponse } from "#T/integrator-main-types";
import { internalErrTxt } from "#/integration/constants/messages-from-services";
export async function loginAction(data: { username: string; password: string }): Promise<ServerActionResponse> {
    const auth = await sessionAuthenticator_S_A();
    if (auth === 500) {
        return { ok: false, errors: [internalErrTxt] };
    }
    if (auth) {
        return { ok: false, errors: ["Вы уже авторизованы"] };
    }
    const parsed = await authentication_schemas.login_via_username.safeParseAsync(data);
    if (!parsed.success) {
        const errorList = parsed.error.issues.map(({ path, message }) => {
            return `${path.join(".")} -- ${message}` as const;
        });
        return { ok: false, errors: errorList };
    }
    const { username, password } = parsed.data;
    const _cookies = await cookies();
    const _headers = await headers();
    const r6f_session_token = _cookies.get(UserService.session_token_name)?.value;
    const agent = _headers.get("user-agent") ?? undefined;
    const ip = _headers.get("x-forwarded-for") ?? undefined;
    const res = await mainUserServiceFetcher<Authentication_ResponseTypes.login_via_username>({
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
    if (!res || res === 500) {
        return { ok: false, errors: [internalErrTxt] };
    }
    if (res.errors.length || !res.data) {
        return { ok: false, errors: res.errors };
    }
    _cookies.set(cookieOptionsForSetToken(res.data.session.token));
    return { ok: true, msg: res.message };
}
