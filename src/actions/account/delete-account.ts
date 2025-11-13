"use server";
import { internalErrTxt } from "#/integration/constants/messages-from-services";
import { sessionAuthenticator, type AuthenticatorType } from "#/integration/user-service/auth/cookie-authenticator.integrator";
import { UserServiceFetcher } from "#/integration/user-service/user-service-fetcher.integrator-util";
import type { Profile_ResponseTypes } from "&us/response-patterns/profile.routes";
import type { UserServiceResponseBodyPattern } from "&us/response-patterns/response-json-body-shape";

type DeleteAccountPermanently_ServerActionRT = Promise<
    | {
          res: UserServiceResponseBodyPattern<Profile_ResponseTypes.delete_avatar>;
          ok: true;
      }
    | {
          errors: string[];
          ok: false;
      }
>;
/** `Server Action`
 *
 * Deletes account */
export async function DeleteAccountPermanently_ServerAction(): DeleteAccountPermanently_ServerActionRT {
    const auth: AuthenticatorType | null = await sessionAuthenticator();
    if (!auth) {
        return { ok: false, errors: ["Вы не авторизованы"] };
    }
    const res = await UserServiceFetcher<Profile_ResponseTypes.delete_avatar>({
        url: `/v1/account/delete_account`,
        method: "DELETE",
        agent: auth.agent,
        ip: auth.ip,
        session_token: auth.data.session.token,
    });

    if (res.errors.length) {
        return { errors: res.errors, ok: false };
    }
    if (res.data) {
        return { ok: true, res };
    }

    return { ok: false, errors: [internalErrTxt] };
}
