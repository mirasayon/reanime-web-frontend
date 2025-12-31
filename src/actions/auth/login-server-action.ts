"use server";
import { fetchTheUserService } from "#/integration/user-service/user-service-fetcher.integrator-util";
import { cookies } from "next/headers";
import { sessionAuthenticator_S_A } from "#/integration/user-service/auth/cookie-authenticator.integrator";
import type { ServerActionResponse } from "#T/integrator-main-types";
import { internalErrTxt } from "#/integration/constants/messages-from-services";
import { userServiceRawResponsePreHandler } from "../server-actions-utils/user-service-raw-response-pre-handler";
import { cookieOptionsForSetToken } from "./cookie-option";
import { authenticationSectionSchemas } from "#user-service/request-validator-for-all.routes.ts";
import type { ResponseTypesForAuthentication } from "#user-service/user-service-response-types-for-all.routes.ts";
import { endpointsConfig } from "#user-service/endpoints-config.ts";
export async function loginTheUserServerAction(data: {
    username: string;
    password: string;
}): Promise<ServerActionResponse> {
    const auth = await sessionAuthenticator_S_A();
    if (auth === 500) {
        return { ok: false, errors: [internalErrTxt] };
    }
    if (auth) {
        return { ok: false, errors: ["Вы уже авторизованы"] };
    }
    const parsed = await authenticationSectionSchemas.login_by_username.safeParseAsync(data);
    if (!parsed.success) {
        const errorList = parsed.error.issues.map(({ path, message }) => {
            return `${path.join(".")} -- ${message}` as const;
        });
        return { ok: false, errors: errorList };
    }
    const _cookies = await cookies();
    const res = await fetchTheUserService<ResponseTypesForAuthentication["login_via_username"]>(
        endpointsConfig.authentication.baseUrl + endpointsConfig.authentication.loginByUsername,
        "POST",
        {
            jsonBody: parsed.data,
        },
    );
    return await userServiceRawResponsePreHandler(res, {
        onSuccessFunction: (res) => {
            _cookies.set(cookieOptionsForSetToken(res.data));
        },
    });
}
