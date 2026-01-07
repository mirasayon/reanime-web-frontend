"use server";
import { getAccountSession } from "#/integration/user-service/auth/get-account-session";
import { redirect } from "next/navigation";
import { Register_Component } from "./register-component";

export default async function __Registration() {
    const is_logged = await getAccountSession();
    if (is_logged) {
        return redirect(`/user/${is_logged.username}`);
    }
    return <Register_Component />;
}
