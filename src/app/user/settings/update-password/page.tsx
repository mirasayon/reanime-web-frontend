"use server";
import { UpdatePasswordFormComponent } from "#/components/security-settings-dashboard/update-password-component";
import { sessionAuthenticator_S_A } from "#/integration/user-service/auth/cookie-authenticator.integrator";
import { rea_wrapper_border } from "#/styles/provider";
import { notFound, redirect } from "next/navigation";
import { BackToUserPageButtonComponent } from "../sessions/back-button-component";

export default async function __UpdatePasswordPage() {
    const auth = await sessionAuthenticator_S_A();
    if (auth === 500) {
        return notFound();
    }
    if (auth) {
        return (
            <div className={` ${rea_wrapper_border} p-2 flex flex-col gap-2`}>
                <h1>Обновить пароль пользователя</h1>
                <BackToUserPageButtonComponent username={auth.data.username} />
                <UpdatePasswordFormComponent username={auth.data.username} />
            </div>
        );
    }
    return redirect("/auth/login");
}
