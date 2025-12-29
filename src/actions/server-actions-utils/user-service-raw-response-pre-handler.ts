import { internalErrTxt } from "#/integration/constants/messages-from-services";
import type { ServerActionResponseWithPromise } from "#T/integrator-main-types";
import type {
    UserServiceHttpResponseConventionalCodeType,
    UserServiceHttpResponseStatusCodeType,
} from "#user-service/user-service-response-types-for-all.routes.js";

export async function userServiceRawResponsePreHandler<
    T extends
        | {
              message: string;
              data: Y;
              errors: string[];
              ok: boolean;
              response_code: UserServiceHttpResponseConventionalCodeType;
              status_code: UserServiceHttpResponseStatusCodeType;
          }
        | 500
        | null,
    Y,
>(
    res: T,
    {
        onSuccessFunction = undefined,
        onFailFunction = undefined,
    }:
        | {
              onSuccessFunction?: (
                  res: Exclude<NonNullable<T>, 500> & { data: NonNullable<Y> },
              ) => Promise<void> | void;
              onFailFunction?: (data: T) => void;
          }
        | undefined = {},
): ServerActionResponseWithPromise {
    if (!res || res === 500) {
        return { ok: false, errors: [internalErrTxt] };
    }
    if (res.errors.length || !res.data) {
        if (onFailFunction) {
            onFailFunction(res);
        }
        return { ok: false, errors: res.errors };
    }
    if (res.data && res.ok) {
        if (onSuccessFunction) {
            await onSuccessFunction(res as Exclude<NonNullable<T>, 500> & { data: NonNullable<Y> });
        }
        return { ok: true, msg: res.message };
    }
    return { errors: res.errors ?? ["default"], ok: false };
}
