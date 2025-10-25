"use server";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { Login_Component } from "./login-component";
import { getSessionFromClient } from "#/integration/user-service/auth/cookie-auther.integrator";

export default async function __Login() {
    const _cookies = await cookies();
    const _headers = await headers();
    const is_logged = await getSessionFromClient({ headers: _headers, cookies: _cookies });
    if (is_logged) {
        return redirect(`/user/${is_logged.data.account.username}`);
    }
    return <Login_Component />;
}
