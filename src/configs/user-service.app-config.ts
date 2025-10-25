export const UserService = {
    session_token_name: "r6_session_token" as const,
};
export type UserService = (typeof UserService)[keyof typeof UserService];
