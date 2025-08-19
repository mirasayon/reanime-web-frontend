import { EnvConfig } from "#/configs/environment-variables.main-config";
/** Ping the server */
export async function pingTheUserService_IntegratorUtil(): Promise<"pong"> {
    const url = (await EnvConfig()).partners.user_service.url;
    const res = await fetch(`${url}/v1/ping`, {
        method: "GET",
        cache: "no-cache",
        headers: {
            "x-reanime-user-service-key": (await EnvConfig()).partners.user_service.api_key,
        },
    });
    const rt = await res.text();
    return rt as "pong";
}
