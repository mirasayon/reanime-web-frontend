"use server";
import { internalErrTxt } from "#/integration/constants/messages-from-services";
import { sessionAuthenticator, type AuthenticatorType } from "#/integration/user-service/auth/cookie-authenticator.integrator";
import { UserServiceFetcher } from "#/integration/user-service/user-service-fetcher.integrator-util";
import type { Profile_ResponseTypes } from "&us/response-patterns/profile.routes";
import { cookies } from "next/headers";
import { cookieOptionsForDELETEToken } from "../auth/cookie-option";

/** `Server Action` for Deleting account */
export async function DeleteAccountPermanently_ServerAction(): DeleteAccountPermanently_ServerActionRT {
    const auth: AuthenticatorType | null = await sessionAuthenticator();
    if (!auth) {
        return { ok: false, errors: ["Вы не авторизованы"] };
    }
    const _cookies = await cookies();
    const res = await UserServiceFetcher<Profile_ResponseTypes.delete_avatar>({
        url: `/v1/account/delete_account`,
        method: "DELETE",
        agent: auth.agent,
        ip: auth.ip,
        session_token: auth.data.session.token,
    });
    if (res.errors.length || !res.ok) {
        return { errors: res.errors || [], ok: false };
    }
    if (res.data) {
        _cookies.delete(cookieOptionsForDELETEToken.name);
        return { ok: true, message: res.message };
    }
    return { ok: false, errors: [internalErrTxt] };
}
type DeleteAccountPermanently_ServerActionRT = Promise<
    | {
          ok: true;
          message: string;
      }
    | {
          errors: string[];
          ok: false;
      }
>;
