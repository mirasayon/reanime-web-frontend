import type { ServerActionResponse } from "#T/integrator-main-types";

export function serverActionsResponsesProcessorFromClientEnvironment({
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
        onSuccessFunction && onSuccessFunction(res.msg);
        return;
    }
    for (const err of res.errors) {
        onFailFunction && onFailFunction(res.errors);
        error && error(err);
    }
    return;
}
