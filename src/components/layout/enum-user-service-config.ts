export const cookiesConfig = {
    cookies_consent_value_name: "r6_cookies_consent",
} as const;
export type cookiesConfig = (typeof cookiesConfig)[keyof typeof cookiesConfig];

