"use server";
import { userServiceConfig } from "#/configs/user-service.app-config";
import { mainUserServiceFetcher } from "#/integration/user-service/user-service-fetcher.integrator-util";
import { isUserServiceAliveNow } from "#/settings/user-service";
import type { ResponseTypesForAuthentication } from "#user-service/user-service-response-types-for-all.routes.ts";
import { cookies } from "next/headers";
export async function sessionAuthenticator_S_A(): Promise<AuthenticatorType> {
    if (!(await isUserServiceAliveNow())) {
        return null;
    }
    const nextCookie = await cookies();
    const session_token = nextCookie.get(userServiceConfig.session_token_name)?.value;
    if (!session_token || session_token.length < 20) {
        return null;
    }
    const res = await mainUserServiceFetcher<ResponseTypesForAuthentication["check_session"]>(
        "/v1/authentication/check_session",
        "POST",
    );

    if (res === 500) {
        return 500;
    }
    if (res.data && res.ok) {
        // if (_cookies.get(userServiceConfig.r6_current_username)?.value !== res.data.account.username) {
        //     _cookies.set(cookieOptionsForJustSettingUsernameData(res.data.account.username));
        // }
        return { data: res.data, session_token };
    }
    return null;
}
export type AuthenticatorType =
    | {
          session_token: string;
          data: ResponseTypesForAuthentication["check_session"];
          //   ip: string | undefined;
          //   agent: string | undefined;
      }
    | 500
    | null;
