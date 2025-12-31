import type { ServerActionResponse } from "#T/integrator-main-types";

export function handleSaResponseForClient({
    error,
    info,
    res,
    success,
    onSuccessFunction,
    onFailFunction,
}: {
    res: ServerActionResponse;
    error?: (msg: string) => void;
    info?: (msg: string) => void;
    success?: (msg: string) => void;
    onSuccessFunction?: (msg: string) => void;
    onFailFunction?: (errors: string[]) => void;
}) {
    if (res.ok) {
        success && success(res.msg);
        info && info(res.msg);
        onSuccessFunction && onSuccessFunction(res.msg);
        return;
    }
    for (const err of res.errors) {
        error && error(err);
        info && info(err);
    }
    onFailFunction && onFailFunction(res.errors);
    return;
}
