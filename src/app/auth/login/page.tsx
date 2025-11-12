"use server";
import { redirect } from "next/navigation";
import { Login_Component } from "./login-component";
import { sessionAuthenticator } from "#/integration/user-service/auth/cookie-authenticator.integrator";

export default async function __Login() {
    const auth = await sessionAuthenticator();
    if (auth) {
        return redirect(`/user/${auth.data.account.username}`);
    }
    return <Login_Component />;
}
