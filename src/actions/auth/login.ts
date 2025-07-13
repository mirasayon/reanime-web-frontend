"use server";
import { Post } from "#/integrators/user_service/fetcher";
import { Global_Utilities } from "#/utils/functions";
import { Logger } from "@xamarin.city/reanime/tools/logge.js";
import {
    www_authentication_validator_schemas,
    www_comment_validator_schemas_inputs,
} from "@xamarin.city/reanime/user-service/validators/routes/authentication.request.js";
import { cookies, headers } from "next/headers";
import { redirect, RedirectType } from "next/navigation";
import { userAgent } from "next/server";
import { z } from "zod";
type AError<O extends { [key: string]: unknown }> = {
    [K in keyof O]?: string[] | undefined;
};

export type TreeErrors = AError<www_comment_validator_schemas_inputs["login"]>;

export type ResponceActionType = {
    errors?: TreeErrors;
    ok: boolean;
};

export async function loginAction(data: www_comment_validator_schemas_inputs["login"]): Promise<ResponceActionType> {
    const parsed = await www_authentication_validator_schemas.login.safeParseAsync(data);
    if (!parsed.success) {
        const errors = z.flattenError(parsed.error).fieldErrors;
        const res: ResponceActionType = { ok: false, errors };
        return res;
    }

    const { username, password } = parsed.data;
    const user = await Login(username, password);
    if (!user) {
        const errors: ResponceActionType = { ok: false, errors: { username: ["Invalid username or password"] } };
        return errors;
    }
    return redirect(`/user/${user.username}`, RedirectType.push);
    // return { ok: true };
}
async function Login(username: string, password: string) {
    await Global_Utilities.sleepX(1000);
    const _cookies = await cookies();
    const _headers = await headers();
    const r6f_session_token = _cookies.get("r6f_session_token")?.value;
    const agent = _headers.get("user-agent") ?? undefined;
    const ip = _headers.get("x-forwarded-for") ?? undefined;
    _headers.forEach((val, name) => {
        Logger.blue(`Header: ${name}  --  ${val}`);
    });
    const res = await Post({
        url: "/v1/authentication/login",
        cookies: {
            session_token: r6f_session_token,
        },
        body: {
            username,
            password,
        },
        agent,
        ip,
    });

    console.log(res);

    // _cookies.set({
    //     name: "auth_test_token",
    //     value: "nq4cn-97q-c498d8j-w-548vy4nc4889nhb58-59nw5n-8h5",
    //     httpOnly: false,
    //     maxAge: ApplicationConfig.two_thousand_year,
    //     path: "/",
    // });

    console.log("FAKE AUTH COMPLETED");
    return { username, password };
}
