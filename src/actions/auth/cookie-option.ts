import { UserService } from "#/configs/user-service.app-config";
import { two_thousand_years } from "#/constants/common.constants";

export const cookieOptionsForSetToken = (value: string) => {
    return {
        name: UserService.session_token_name,
        value: value,
        httpOnly: true,
        // path: "/auth" as const,
        secure: false,
        priority: "high" as const,
        sameSite: "strict" as const,
        maxAge: two_thousand_years,
    };
};
export const cookieOptionsForGETToken = {
    name: UserService.session_token_name,
} as const;
export const cookieOptionsForDELETEToken = {
    name: UserService.session_token_name,
} as const;
