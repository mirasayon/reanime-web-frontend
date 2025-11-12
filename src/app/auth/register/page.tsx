"use server";
import { Register_Component } from "./register-component";
import { redirect } from "next/navigation";
import { sessionAuthenticator } from "#/integration/user-service/auth/cookie-authenticator.integrator";

export default async function __Registration() {
    const is_logged = await sessionAuthenticator();

    if (is_logged) {
        return redirect(`/user/${is_logged.data.account.username}`);
    }
    return <Register_Component />;
}
