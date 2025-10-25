"use server";
import { cookies, headers } from "next/headers";
import { Register_Component } from "./register-component";
import { redirect } from "next/navigation";
import { getSessionFromClient } from "#/integration/user-service/auth/cookie-auther.integrator";

export default async function __Registration() {
    const _cookies = await cookies();
    const _headers = await headers();
    const is_logged = await getSessionFromClient({ headers: _headers, cookies: _cookies });

    if (is_logged) {
        return redirect(`/user/${is_logged.data.account.username}`);
    }
    return <Register_Component />;
}
