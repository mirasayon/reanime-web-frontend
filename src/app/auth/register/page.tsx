"use server";
import { sessionAuthenticator } from "#/integration/user-service/auth/cookie-authenticator.integrator";
import { redirect } from "next/navigation";
import { Register_Component } from "./register-component";

export default async function __Registration() {
    const is_logged = await sessionAuthenticator();
    if (is_logged) {
        return redirect(`/user/${is_logged.username}`);
    }
    return <Register_Component />;
}
