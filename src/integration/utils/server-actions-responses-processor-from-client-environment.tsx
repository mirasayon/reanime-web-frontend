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
    error: (msg: string) => void;
    info: (msg: string) => void;
    success: (msg: string) => void;
    onSuccessFunction?: Function;
    onFailFunction?: Function;
}) {
    if (res.ok) {
        success(res.msg);
        onSuccessFunction && onSuccessFunction();
        return;
    }
    for (const err of res.errors) {
        onFailFunction && onFailFunction();
        error(err);
    }
    return;
}
