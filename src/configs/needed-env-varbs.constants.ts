export const required_env_variables = [
    "NODE_ENV",
    "GOOGLE_ANALYTICS_ID",
    "GOOGLE_TAG_MANAGER_ID",
    "REANIME_RESOURCE_SERVICE_URL",
    "REANIME_RESOURCE_SERVICE_API_KEY",
    "REANIME_USER_SERVICE_URL",
    "REANIME_USER_SERVICE_API_KEY",
    "REANIME_MEDIA_SERVICE_URL",
] as const;
export type TypeRequiredEnvVarbs = {
    [key in (typeof required_env_variables)[number]]: string;
};
