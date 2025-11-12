"use server";
import { redirect } from "next/navigation";
import { Login_Component } from "./login-component";
import { sessionAuthenticator } from "#/integration/user-service/auth/cookie-authenticator.integrator";
import { cookies, headers } from "next/headers";

export default async function __Login() {
    const _cookies = await cookies();
    const _headers = await headers();
    const is_logged = await sessionAuthenticator({ cookies: _cookies, headers: _headers });
    if (is_logged) {
        return redirect(`/user/${is_logged.data.account.username}`);
    }
    return <Login_Component />;
}
