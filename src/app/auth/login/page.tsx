"use server";
import { redirect } from "next/navigation";
import { Login_Component } from "./login-component";
import { sessionAuthenticator } from "#/integration/user-service/auth/cookie-authenticator.integrator";

export default async function __Login() {
    const is_logged = await sessionAuthenticator();
    if (is_logged) {
        return redirect(`/user/${is_logged.data.account.username}`);
    }
    return <Login_Component />;
}
