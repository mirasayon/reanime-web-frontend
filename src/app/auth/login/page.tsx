"use server";
import { redirect } from "next/navigation";
import { Login_Component } from "./login-component";
import { getSessionFromClient } from "#/integration/user-service/auth/cookie-auther.integrator";

export default async function __Login() {
    const is_logged = await getSessionFromClient();
    if (is_logged) {
        return redirect(`/user/${is_logged.data.account.username}`);
    }
    return <Login_Component />;
}
