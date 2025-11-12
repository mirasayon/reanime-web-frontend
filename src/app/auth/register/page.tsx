"use server";
import { cookies, headers } from "next/headers";
import { Register_Component } from "./register-component";
import { redirect } from "next/navigation";
import { sessionAuthenticator } from "#/integration/user-service/auth/cookie-authenticator.integrator";

export default async function __Registration() {
    const _cookies = await cookies();
    const _headers = await headers();
    const is_logged = await sessionAuthenticator({ cookies: _cookies, headers: _headers });

    if (is_logged) {
        return redirect(`/user/${is_logged.data.account.username}`);
    }
    return <Register_Component />;
}
