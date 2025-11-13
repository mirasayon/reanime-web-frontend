"use server";
import { redirect } from "next/navigation";
import { Login_Component } from "./login-component";
import { sessionAuthenticator } from "#/integration/user-service/auth/cookie-authenticator.integrator";
import { TEMPORARY_TURN_OFF_THE_USER_SERVICE } from "#/settings/resource-service";
import { ComingSoon } from "#/components/info/coming-soon";

export default async function __Login() {
    if (TEMPORARY_TURN_OFF_THE_USER_SERVICE) {
        return <ComingSoon />;
    }
    const auth = await sessionAuthenticator();
    if (auth) {
        return redirect(`/user/${auth.data.account.username}`);
    }
    return <Login_Component />;
}
