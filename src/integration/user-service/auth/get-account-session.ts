import { SESSION_TOKEN_NAME } from "#/configs/user-service-config";
import { userServiceRequest } from "#/integration/user-service/user-service-fetcher.integrator-util";
import { endpointsConfig } from "#user-service/endpoints-config.ts";
import type { ResponseTypesForAuthentication } from "#user-service/user-service-response-types-for-all.routes.ts";
import { cookies as nextCookies } from "next/headers";
export async function getAccountSession(): Promise<AuthenticatorType> {
    const _cookie = await nextCookies();
    const session_token = _cookie.get(SESSION_TOKEN_NAME)?.value;
    if (!session_token || session_token?.length < 20) {
        return null;
    }
    const res = await userServiceRequest<ResponseTypesForAuthentication["check_session"]>(
        endpointsConfig.authentication.baseUrl + endpointsConfig.authentication.checkSession,
        "POST",
        {},
        session_token,
    );
    if (res?.data && res?.ok) {
        return res.data;
    }
    return null;
}
export type AuthenticatorType = ResponseTypesForAuthentication["check_session"] | null;
