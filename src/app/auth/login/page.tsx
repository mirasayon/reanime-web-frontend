"use server";
import { getAccountSession } from "#/integration/user-service/auth/get-account-session";
import { redirect } from "next/navigation";
import { MainLoginComponent } from "./login-component";

export default async function __Login() {
    const is_logged = await getAccountSession();
    if (is_logged?.username) {
        return redirect(`/user/${is_logged.username}`);
    }
    return <MainLoginComponent />;
}
