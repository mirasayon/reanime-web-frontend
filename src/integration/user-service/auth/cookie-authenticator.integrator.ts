import { fetchTheUserService } from "#/integration/user-service/user-service-fetcher.integrator-util";
import { endpointsConfig } from "#user-service/endpoints-config.ts";
import type { ResponseTypesForAuthentication } from "#user-service/user-service-response-types-for-all.routes.ts";
export async function sessionAuthenticator(): Promise<AuthenticatorType> {
    const res = await fetchTheUserService<ResponseTypesForAuthentication["check_session"]>(
        endpointsConfig.authentication.baseUrl + endpointsConfig.authentication.checkSession,
        "POST",
    );
    if (res.data && res.ok) {
        return res.data;
    }
    return null;
}
export type AuthenticatorType = ResponseTypesForAuthentication["check_session"] | null;
