import { internalErrTxt } from "#/integration/constants/messages-from-services";
import type { AuthenticatorType } from "#/integration/user-service/auth/cookie-authenticator.integrator";
import type { ServerActionResponse } from "#T/integrator-main-types";
type RT =
    | {
          auth: Exclude<NonNullable<AuthenticatorType>, 500>;
          errors: null;
      }
    | {
          auth: null;
          errors: ServerActionResponse;
      };
export function authenticator_ServerActionResponsePreHandler(
    auth: AuthenticatorType,
): RT {
    if (auth === 500) {
        return { errors: { ok: false, errors: [internalErrTxt] }, auth: null };
    }
    if (!auth) {
        return {
            errors: { ok: false, errors: ["Вы не авторизованы"] },
            auth: null,
        };
    }
    if (auth?.data?.account) {
        return { auth: auth, errors: null };
    }

    return { errors: { ok: false, errors: [internalErrTxt] }, auth: null };
}
