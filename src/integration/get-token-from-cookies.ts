import { cookieOptionsForGETToken } from "#/actions/auth/cookie-option";
import { cookies } from "next/headers";
import { headers } from "next/headers";

export async function getUserAgentAndIpFromCookies(): Promise<{
    ip: string | null;
    agent: string | null;
    token: string | null;
}> {
    const header = await headers();
    const cookie = await cookies();
    const token = cookie.get(cookieOptionsForGETToken.name)?.value;
    const ip = header.get("x-forwarded-for");
    const agent = header.get("user-agent");
    return { ip, agent, token: token || null };
}
