"use server";
import { sessionAuthenticator } from "#/integration/user-service/auth/cookie-authenticator.integrator";
import { redirect } from "next/navigation";
import { MainLoginComponent } from "./login-component";

export default async function __Login() {
    const is_logged = await sessionAuthenticator();
    if (is_logged?.data.username) {
        return redirect(`/user/${is_logged.data.username}`);
    }
    return <MainLoginComponent />;
}
