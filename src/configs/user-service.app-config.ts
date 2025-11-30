export const userServiceConfig = {
    session_token_name: "r6_session_token" as const,
    r6_current_username: "r6_current_username" as const,
};
export type userServiceConfig =
    (typeof userServiceConfig)[keyof typeof userServiceConfig];
