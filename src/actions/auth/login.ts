"use server";
import { Global_Utilities } from "#/utils/functions";
import { LoginInput, loginSchema } from "#/validators/auth/login";
import { cookies } from "next/headers";
import { redirect, RedirectType } from "next/navigation";
type TreeErrors = {
    login?: string[] | undefined;
    password?: string[] | undefined;
};
interface ResponceActionType {
    errors?: TreeErrors;
    ok: boolean;
}
export async function loginAction(data: LoginInput): Promise<ResponceActionType> {
    const parsed = await loginSchema.safeParseAsync(data);
    if (!parsed.success) {
        const errors: ResponceActionType = { ok: false, errors: parsed.error.flatten().fieldErrors };
        return errors;
    }

    const { login, password } = parsed.data;
    const user = await fakeAuth(login, password);
    if (!user) {
        const errors: ResponceActionType = { ok: false, errors: { login: ["Invalid login or password"] } };
        return errors;
    }
    return redirect("/dashboard", RedirectType.push);
    // return { ok: true };
}
async function fakeAuth(login: string, password: string) {
    await Global_Utilities.sleepX(1000);
    const _cookies = await cookies();

    const existed_auth_token = _cookies.get("auth_test_token")?.value;
    console.log({ existed_auth_token });

    // _cookies.set({
    //     name: "auth_test_token",
    //     value: "nq4cn-97q-c498d8j-w-548vy4nc4889nhb58-59nw5n-8h5",
    //     httpOnly: false,
    //     maxAge: ApplicationConfig.two_thousand_year,
    //     path: "/",
    // });

    console.log("FAKE AUTH COMPLETED");
    return { login, password };
}
