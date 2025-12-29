"use server";
import { mainUserServiceFetcher } from "#/integration/user-service/user-service-fetcher.integrator-util";
import type { ServerActionResponseWithPromise } from "#T/integrator-main-types";
import { userServiceRawResponsePreHandler } from "../server-actions-utils/user-service-raw-response-pre-handler";
import {
    type AccountSectionValidationSchemaType,
    accountSectionSchemas,
} from "#user-service/request-validator-for-all.routes.ts";
import type { ResponseTypesFor_Account_Section } from "#user-service/user-service-response-types-for-all.routes.ts";

export async function updatePassword_ServerAction(
    data: AccountSectionValidationSchemaType["update_password"],
): ServerActionResponseWithPromise {
    const parsed = await accountSectionSchemas.update_password.safeParseAsync(data);
    if (!parsed.success) {
        const errorList = parsed.error.issues.map(({ path, message }) => {
            return `${path.join(".")} -- ${message}` as const;
        });
        return { ok: false, errors: errorList };
    }
    const res = await mainUserServiceFetcher<ResponseTypesFor_Account_Section["update_password"]>(
        "/v1/account/update/password",
        "PATCH",
        { jsonBody: parsed.data },
    );

    return userServiceRawResponsePreHandler(res, {});
}
