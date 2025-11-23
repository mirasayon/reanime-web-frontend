import { notLoggedErrorTxt } from "#/constants/frequent-errors-from-client";
import { internalErrTxt } from "#/integration/constants/messages-from-services";
import type { AuthenticatorType } from "./cookie-authenticator.integrator";
type authCurrentUserFindingWrapperForServerActionsUtilityRT =
    | {
          data: Exclude<NonNullable<AuthenticatorType>, 500>;
          error: null;
      }
    | {
          data: null;
          error: { errors: string[]; ok: false };
      };
export function authCurrentUserFindingWrapperForServerActionsUtility(
    notProcessedAuthData: AuthenticatorType,
): authCurrentUserFindingWrapperForServerActionsUtilityRT {
    if (notProcessedAuthData === null) {
        return {
            error: { errors: [notLoggedErrorTxt], ok: false },
            data: null,
        };
    }
    if (notProcessedAuthData === 500) {
        return { error: { errors: [internalErrTxt], ok: false }, data: null };
    }

    return { data: notProcessedAuthData, error: null };
}
