"use server";
import { ComingSoon } from "#/components/info/coming-soon";
import { sessionAuthenticator_S_A } from "#/integration/user-service/auth/cookie-authenticator.integrator";
import { redirect } from "next/navigation";
import { MainLoginComponent } from "./login-component";
import { TEMPORARY_TURN_OFF_THE_USER_SERVICE } from "#/settings/user-service-static";

export default async function __Login() {
    if (TEMPORARY_TURN_OFF_THE_USER_SERVICE) {
        return <ComingSoon />;
    }
    const is_logged = await sessionAuthenticator_S_A();

    if (is_logged === 500) {
        return <div>Ошибка</div>;
    }
    if (is_logged?.data.username) {
        return redirect(`/user/${is_logged.data.username}`);
    }
    return <MainLoginComponent />;
}
