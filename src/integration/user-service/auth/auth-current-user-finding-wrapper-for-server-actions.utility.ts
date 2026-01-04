import { notLoggedErrorTxt } from "#/constants/frequent-errors-from-client";
import type { AuthenticatorType } from "./cookie-authenticator.integrator";
type authCurrentUserFindingWrapperForServerActionsUtilityRT =
    | {
          data: NonNullable<AuthenticatorType>;
          error: null;
      }
    | {
          data: null;
          error: { errors: string[]; ok: false };
      };
export function ensuredPassedUser_ForServerActions(
    notProcessedAuthData: AuthenticatorType,
): authCurrentUserFindingWrapperForServerActionsUtilityRT {
    if (notProcessedAuthData === null) {
        return {
            error: { errors: [notLoggedErrorTxt], ok: false },
            data: null,
        };
    }

    return { data: notProcessedAuthData, error: null };
}
