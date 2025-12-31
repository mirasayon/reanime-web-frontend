import { SESSION_TOKEN_NAME } from "#/configs/user-service-config";
import { THIRTY_DAYS } from "#/constants/common.constants";

export function setTokenToClientConfig(value: string) {
    return {
        name: SESSION_TOKEN_NAME,
        value,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: THIRTY_DAYS,
    } as const;
}
