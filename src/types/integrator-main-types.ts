export type ServerActionResponse = { ok: false; errors: string[] } | { ok: true; msg: string };

export type ServerActionResponseWithPromise = Promise<ServerActionResponse>;
