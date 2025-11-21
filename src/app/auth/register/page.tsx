"use server";
import { Register_Component } from "./register-component";
import { redirect } from "next/navigation";
import { sessionAuthenticator_S_A } from "#/integration/user-service/auth/cookie-authenticator.integrator";
import { TEMPORARY_TURN_OFF_THE_USER_SERVICE } from "#/settings/resource-service";
import { ComingSoon } from "#/components/info/coming-soon";

export default async function __Registration() {
    if (TEMPORARY_TURN_OFF_THE_USER_SERVICE) {
        return <ComingSoon />;
    }
    const is_logged = await sessionAuthenticator_S_A();

    if (!is_logged || is_logged === 500) {
        return <div>Ошибка</div>;
    }
    if (is_logged) {
        return redirect(`/user/${is_logged.data.account.username}`);
    }
    return <Register_Component />;
}
