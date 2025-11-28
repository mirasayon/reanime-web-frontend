export const userServiceConfig = {
    session_token_name: "r6_session_token" as const,
};
export type userServiceConfig =
    (typeof userServiceConfig)[keyof typeof userServiceConfig];
