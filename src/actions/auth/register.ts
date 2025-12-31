"use server";
import { fetchTheUserService } from "#/integration/user-service/user-service-fetcher.integrator-util";
import { cookies } from "next/headers";
import type { ServerActionResponseWithPromise } from "#T/integrator-main-types";
import { userServiceRawResponsePreHandler } from "../server-actions-utils/user-service-raw-response-pre-handler";
import {
    authenticationSectionSchemas,
    type AuthenticationSectionValidatorSchemaType,
} from "#user-service/request-validator-for-all.routes.ts";
import { cookieOptionsForSetToken } from "./cookie-option";
import type { ResponseTypesForAuthentication } from "#user-service/user-service-response-types-for-all.routes.ts";
import { endpointsConfig } from "#user-service/endpoints-config.ts";
export async function registerNewUser_ServerAction(
    data: AuthenticationSectionValidatorSchemaType["registration"],
): ServerActionResponseWithPromise {
    const parsed = await authenticationSectionSchemas.registration.safeParseAsync(data);
    if (!parsed.success) {
        const errorList = parsed.error.issues.map(({ path, message }) => {
            return `${path.join(".")} -- ${message}` as const;
        });
        return { ok: false, errors: errorList };
    }
    const _cookies = await cookies();
    const res = await fetchTheUserService<ResponseTypesForAuthentication["registration"]>(
        endpointsConfig.authentication.baseUrl + endpointsConfig.authentication.registration,
        "POST",
        { jsonBody: parsed.data },
    );
    return await userServiceRawResponsePreHandler(res, {
        async onSuccessFunction(res) {
            _cookies.set(cookieOptionsForSetToken(res.data));
        },
    });
}
