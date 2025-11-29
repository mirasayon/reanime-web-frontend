"use server";
import { sessionAuthenticator_S_A } from "#/integration/user-service/auth/cookie-authenticator.integrator";
import { mainUserServiceFetcher } from "#/integration/user-service/user-service-fetcher.integrator-util";
import type { ServerActionResponseWithPromise } from "#T/integrator-main-types";
import type { Account_ResponseTypes } from "#user-service/shared/response-patterns/account.routes.js";
import {
    account_schemas,
    type dto,
} from "#user-service/shared/validators/account.validator.routes.js";
import { headers as nextHeaders } from "next/headers";
import { userServiceRawResponsePreHandler } from "../server-actions-utils/user-service-raw-response-pre-handler";
import { authenticator_ServerActionResponsePreHandler } from "../server-actions-utils/authenticator-server-action-response-pre-handler";

export async function updatePassword_ServerAction(
    data: dto.update_password,
): ServerActionResponseWithPromise {
    const userSession = authenticator_ServerActionResponsePreHandler(
        await sessionAuthenticator_S_A(),
    );
    if (userSession.errors || !userSession.auth) {
        return userSession.errors;
    }
    const parsed = await account_schemas.update_password.safeParseAsync(data);
    if (!parsed.success) {
        const errorList = parsed.error.issues.map(({ path, message }) => {
            return `${path.join(".")} -- ${message}` as const;
        });
        return { ok: false, errors: errorList };
    }
    const headers = await nextHeaders();
    const agent = headers.get("user-agent") ?? undefined;
    const ip = headers.get("x-forwarded-for") ?? undefined;
    const res =
        await mainUserServiceFetcher<Account_ResponseTypes.update_password>({
            url: "/v1/account/update/password",
            session_token: userSession.auth.data.session.token,
            method: "PATCH",
            json_body: parsed.data,
            agent,
            ip,
        });

    return userServiceRawResponsePreHandler(res, {});
}
