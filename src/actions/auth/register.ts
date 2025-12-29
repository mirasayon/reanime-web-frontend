"use server";
import { mainUserServiceFetcher } from "#/integration/user-service/user-service-fetcher.integrator-util";
import { cookies, headers } from "next/headers";
import { userServiceConfig } from "#/configs/user-service.app-config";
import { sessionAuthenticator_S_A } from "#/integration/user-service/auth/cookie-authenticator.integrator";
import { internalErrTxt } from "#/integration/constants/messages-from-services";
import type { ServerActionResponseWithPromise } from "#T/integrator-main-types";
import { userServiceRawResponsePreHandler } from "../server-actions-utils/user-service-raw-response-pre-handler";
import {
    authenticationSectionSchemas,
    type AuthenticationSectionValidatorSchemaType,
} from "#user-service/request-validator-for-all.routes.js";
import { cookieOptionsForSetToken } from "./cookie-option";
import type { ResponseTypesForAuthentication } from "#user-service/user-service-response-types-for-all.routes.js";
export async function registerNewUser_ServerAction(
    data: AuthenticationSectionValidatorSchemaType["registration"],
): ServerActionResponseWithPromise {
    const auth = await sessionAuthenticator_S_A();
    if (auth) {
        return { ok: false, errors: ["Вы уже авторизованы"] };
    }
    if (auth === 500) {
        return { ok: false, errors: [internalErrTxt] };
    }
    const parsed = await authenticationSectionSchemas.registration.safeParseAsync(data);
    if (!parsed.success) {
        const errorList = parsed.error.issues.map(({ path, message }) => {
            return `${path.join(".")} -- ${message}` as const;
        });

        return { ok: false, errors: errorList };
    }
    const _cookies = await cookies();
    const _headers = await headers();
    const r6f_session_token = _cookies.get(userServiceConfig.session_token_name)?.value;
    const agent = _headers.get("user-agent") ?? undefined;
    const ip = _headers.get("x-forwarded-for") ?? undefined;

    const { username, password, nickname, password_repeat } = parsed.data;
    const res = await mainUserServiceFetcher<ResponseTypesForAuthentication["registration"]>(
        "/v1/authentication/registration",
        "POST",

        { jsonBody: { username, password, nickname, password_repeat } },
    );
    return await userServiceRawResponsePreHandler(res, {
        async onSuccessFunction(res) {
            _cookies.set(cookieOptionsForSetToken(res.data));
        },
    });
}
