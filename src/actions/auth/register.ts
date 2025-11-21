"use server";
import { mainUserServiceFetcher } from "#/integration/user-service/user-service-fetcher.integrator-util";
import { cookies, headers } from "next/headers";
import { UserService } from "#/configs/user-service.app-config";
import { sessionAuthenticator_S_A } from "#/integration/user-service/auth/cookie-authenticator.integrator";
import { authentication_schemas, type dto } from "#user-service/shared/validators/authentication.validator.routes.js";
import type { Authentication_ResponseTypes } from "#user-service/shared/response-patterns/authentication.routes.js";
import { cookieOptionsForSetToken } from "./cookie-option";
import { internalErrTxt } from "#/integration/constants/messages-from-services";
import type { ServerActionResponse } from "#T/integrator-main-types";
export async function registerForm_S_A(data: dto.registration): Promise<ServerActionResponse> {
    const auth = await sessionAuthenticator_S_A();
    if (auth) {
        return { ok: false, errors: ["Вы уже авторизованы"] };
    }
    if (auth === 500) {
        return { ok: false, errors: [internalErrTxt] };
    }
    const parsed = await authentication_schemas.registration.safeParseAsync(data);
    if (!parsed.success) {
        const errorList = parsed.error.issues.map(({ path, message }) => {
            return `${path.join(".")} -- ${message}` as const;
        });

        return { ok: false, errors: errorList };
    }
    const _cookies = await cookies();
    const _headers = await headers();
    const r6f_session_token = _cookies.get(UserService.session_token_name)?.value;
    const agent = _headers.get("user-agent") ?? undefined;
    const ip = _headers.get("x-forwarded-for") ?? undefined;

    const { username, password, nickname, password_repeat } = parsed.data;
    const res = await mainUserServiceFetcher<Authentication_ResponseTypes.registration>({
        url: "/v1/authentication/registration",
        session_token: r6f_session_token,
        method: "POST",
        json_body: { username, password, nickname, password_repeat },
        agent,
        ip,
    });
    if (!res || res === 500) {
        return { ok: false, errors: [internalErrTxt] };
    }
    if (res.ok && res.data) {
        _cookies.set(cookieOptionsForSetToken(res.data.session.token));
        return { ok: true, msg: res.message };
    }
    return { errors: res.errors, ok: false };
}
