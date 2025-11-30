import { nextLoadEnvSSR } from "#/configs/environment-variables.main-config";
/** Ping the server */
export async function pingTheUserService_IntegratorUtil(): Promise<"pong"> {
    const url = process.env.NEXT_PUBLIC_USER_SERVICE_URL!;
    const res = await fetch(`${url}/v1/ping`, {
        method: "GET",
        cache: "no-cache",
        headers: {
            "x-reanime-user-service-key": (
                await nextLoadEnvSSR()
            ).user_service_api_key,
        },
    });
    const rt = await res.text();
    return rt as "pong";
}
