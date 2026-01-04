"use server";
import { SESSION_TOKEN_NAME } from "#/configs/user-service-config";
import { fetchTheUserService } from "#/integration/user-service/user-service-fetcher.integrator-util";
import { endpointsConfig } from "#user-service/endpoints-config.ts";
import type { ResponseTypesForAuthentication } from "#user-service/user-service-response-types-for-all.routes.ts";
import { cookies } from "next/headers";
export async function sessionAuthenticator(): Promise<AuthenticatorType> {
    const nextCookie = await cookies();
    const session_token = nextCookie.get(SESSION_TOKEN_NAME)?.value;
    if (!session_token || session_token.length < 20) {
        return null;
    }
    const res = await fetchTheUserService<ResponseTypesForAuthentication["check_session"]>(
        endpointsConfig.authentication.baseUrl + endpointsConfig.authentication.checkSession,
        "POST",
    );
    if (res.data && res.ok) {
        return { data: res.data, session_token };
    }
    return null;
}
export type AuthenticatorType = {
    session_token: string;
    data: ResponseTypesForAuthentication["check_session"];
} | null;
