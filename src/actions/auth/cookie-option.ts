import { userServiceConfig } from "#/configs/user-service.app-config";
import { two_thousand_years } from "#/constants/common.constants";

export const cookieOptionsForSetToken = (value: string) => {
    return {
        name: userServiceConfig.session_token_name,
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
    name: userServiceConfig.session_token_name,
} as const;
export const cookieOptionsForDELETEToken = {
    name: userServiceConfig.session_token_name,
} as const;

export const cookieOptionsForJustSettingUsernameData = (username: string) => {
    return {
        name: userServiceConfig.r6_current_username,
        value: username,
        httpOnly: false,
        secure: false,
        priority: "medium" as const,
        sameSite: "strict" as const,
        maxAge: two_thousand_years,
    };
};
export const cookieOptionsForJustSettingIsLoggedData = (value: string) => {
    return {
        name: userServiceConfig.r6_is_logged_user,
        value: value,
        httpOnly: false,
        secure: false,
        priority: "medium" as const,
        sameSite: "strict" as const,
        maxAge: two_thousand_years,
    };
};
