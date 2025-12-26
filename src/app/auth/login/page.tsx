"use server";
import { ComingSoon } from "#/components/info/coming-soon";
import { sessionAuthenticator_S_A } from "#/integration/user-service/auth/cookie-authenticator.integrator";
import { isUserServiceAliveNow } from "#/settings/user-service";
import { redirect } from "next/navigation";
import { MainLoginComponent } from "./login-component";

export default async function __Login() {
    if (!(await isUserServiceAliveNow())) {
        return <ComingSoon />;
    }
    const is_logged = await sessionAuthenticator_S_A();

    if (is_logged === 500) {
        return <div>Ошибка</div>;
    }
    if (is_logged) {
        return redirect(`/user/${is_logged.data.account.username}`);
    }
    return <MainLoginComponent />;
}
