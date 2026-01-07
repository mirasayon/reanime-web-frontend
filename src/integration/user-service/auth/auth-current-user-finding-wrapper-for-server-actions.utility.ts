import { NOT_LOGGED_ERROR_TEXT } from "#/constants/frequent-errors-from-client";
import type { AuthenticatorType } from "./get-account-session";
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
            error: { errors: [NOT_LOGGED_ERROR_TEXT], ok: false },
            data: null,
        };
    }

    return { data: notProcessedAuthData, error: null };
}
