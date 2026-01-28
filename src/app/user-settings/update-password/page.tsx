"use server";
import { UpdatePasswordFormComponent } from "#/components/security-settings-dashboard/update-password-component";
import { getAccountSession } from "#/integration/user-service/auth/get-account-session";
import { BORDER } from "#/styles/style-constants";
import { redirect } from "next/navigation";
import { BackToUserPageButtonComponent } from "../sessions/back-button-component";
import type { Metadata } from "next/types";

export default async function __UpdatePasswordPage() {
    const auth = await getAccountSession();
    if (auth) {
        return (
            <div className={` ${BORDER} p-2 flex flex-col gap-2`}>
                <h1>Обновить пароль пользователя</h1>
                <BackToUserPageButtonComponent username={auth.username} />
                <UpdatePasswordFormComponent username={auth.username} />
            </div>
        );
    }
    return redirect("/auth/login");
}

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Обновить пароль",
    };
}
