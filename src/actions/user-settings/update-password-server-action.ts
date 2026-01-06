"use server";
import { userServiceRequest } from "#/integration/user-service/user-service-fetcher.integrator-util";
import type { ServerActionResponseWithPromise } from "#T/integrator-main-types";
import { userServiceResponseHandler } from "../server-actions-utils/user-service-raw-response-pre-handler";
import {
    type AccountSectionValidationSchemaType,
    accountSectionSchemas,
} from "#user-service/request-validator-for-all.routes.ts";
import type { ResponseTypesFor_Account_Section } from "#user-service/user-service-response-types-for-all.routes.ts";
import { endpointsConfig } from "#user-service/endpoints-config.ts";

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
    const res = await userServiceRequest<ResponseTypesFor_Account_Section["update_password"]>(
        endpointsConfig.userAccount.baseUrl + endpointsConfig.userAccount.updatePassword,
        "PATCH",
        { jsonBody: parsed.data },
    );

    return userServiceResponseHandler(res);
}
