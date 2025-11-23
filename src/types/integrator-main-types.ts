export type ServerActionResponseWithPromise = Promise<
    { ok: false; errors: string[] } | { ok: true; msg: string }
>;
export type ServerActionResponse =
    | { ok: false; errors: string[] }
    | { ok: true; msg: string };
