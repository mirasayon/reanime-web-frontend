"use server";
import { ComingSoon } from "#/components/info/coming-soon";
import { sessionAuthenticator_S_A } from "#/integration/user-service/auth/cookie-authenticator.integrator";
import { redirect } from "next/navigation";
import { MainLoginComponent } from "./login-component";

export default async function __Login() {
    const is_logged = await sessionAuthenticator_S_A();

    if (is_logged === 500) {
        return <ComingSoon />;
    }
    if (is_logged?.data.username) {
        return redirect(`/user/${is_logged.data.username}`);
    }
    return <MainLoginComponent />;
}
