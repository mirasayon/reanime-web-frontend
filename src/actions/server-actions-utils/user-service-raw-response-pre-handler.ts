import { internalErrTxt } from "#/integration/constants/messages-from-services";
import type { ServerActionResponse } from "#T/integrator-main-types";
import type {
    UserServiceHttpResponseConventionalCodeType,
    UserServiceHttpResponseStatusCodeType,
} from "#user-service/user-service-response-types-for-all.routes.ts";

export function userServiceResponseHandler<
    T extends {
        message: string;
        data: Y;
        errors: string[];
        ok: boolean;
        response_code: UserServiceHttpResponseConventionalCodeType;
        status_code: UserServiceHttpResponseStatusCodeType;
    } | null,
    Y,
>(
    res: T,
    after: {
        onSuccessFunction?: (res: NonNullable<T> & { data: NonNullable<Y> }) => Promise<void> | void;
        onFailFunction?: (data: T) => void;
    } = {},
): ServerActionResponse {
    if (!res) {
        return { ok: false, errors: [internalErrTxt] };
    }
    if (res.errors.length || !res.data) {
        if (after.onFailFunction) {
            after.onFailFunction(res);
        }
        return { ok: false, errors: res.errors };
    }
    if (res.ok) {
        if (after.onSuccessFunction) {
            after.onSuccessFunction(res as NonNullable<T> & { data: NonNullable<Y> });
        }
        return { ok: true, msg: res.message };
    }
    return { errors: res.errors ?? ["default"], ok: false };
}
