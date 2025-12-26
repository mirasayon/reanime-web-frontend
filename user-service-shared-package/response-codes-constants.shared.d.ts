export declare const responseHTTPCodes: {
    readonly OK: "OK";
    readonly CREATED: "CREATED";
    readonly ACCEPTED: "ACCEPTED";
    readonly BAD_REQUEST: "BAD_REQUEST";
    readonly UNAUTHORIZED: "UNAUTHORIZED";
    readonly FORBIDDEN: "FORBIDDEN";
    readonly USE_SECURE_HTTP: "USE_SECURE_HTTP";
    readonly NOT_FOUND: "NOT_FOUND";
    readonly CONFLICT: "CONFLICT";
    readonly BAD_GATEWAY: "BAD_GATEWAY";
    readonly PAYLOAD_TOO_LARGE: "PAYLOAD_TOO_LARGE";
    readonly TOO_MANY_REQUESTS: "TOO_MANY_REQUESTS";
    readonly NOT_IMPLEMENTED: "NOT_IMPLEMENTED";
    readonly UNEXPECTED_INTERNAL_ERROR: "UNEXPECTED_INTERNAL_ERROR";
    readonly EXPECTED_INTERNAL_ERROR: "EXPECTED_INTERNAL_ERROR";
    readonly SERVICE_UNAVAILABLE: "SERVICE_UNAVAILABLE";
    readonly I_AM_A_TEAPOT: "I_AM_A_TEAPOT";
};
export type responseHTTPCodes = (typeof responseHTTPCodes)[keyof typeof responseHTTPCodes];
export declare const ResponseHTTPStatusCodes: {
    readonly OK: 200;
    readonly CREATED: 201;
    readonly ACCEPTED: 202;
    readonly BAD_REQUEST: 400;
    readonly UNAUTHORIZED: 401;
    readonly FORBIDDEN: 403;
    readonly NOT_FOUND: 404;
    readonly CONFLICT: 409;
    readonly PAYLOAD_TOO_LARGE: 413;
    readonly TOO_MANY_REQUESTS: 429;
    readonly NOT_IMPLEMENTED: 501;
    readonly UNEXPECTED_INTERNAL_ERROR: 500;
    readonly USE_SECURE_HTTP: 426;
    readonly EXPECTED_INTERNAL_ERROR: 500;
    readonly SERVICE_UNAVAILABLE: 503;
    readonly MEDIA_SERVICE_NOT_AVAILABLE: 503;
    readonly MEDIA_SERVICE_ERROR: 503;
    readonly BAD_GATEWAY: 502;
    readonly I_AM_A_TEAPOT: 418;
};
export type I_UserServiceResponseStatusCodes = (typeof ResponseHTTPStatusCodes)[keyof typeof ResponseHTTPStatusCodes];
export interface HTTPResponseBodyPattern<Data> {
    data: Data | null;
    errors: string[];
    ok: boolean;
    message: string;
    response_code: responseHTTPCodes;
    status_code: I_UserServiceResponseStatusCodes;
}
export type BodyOptionalMessage = {
    message?: string;
};
export type BodyOptionalMessageAndErrors = {
    errors: string[];
    message?: string;
};
export type BodyOptionalMessageAndData<DATA> = {
    data: DATA | undefined;
    message?: string;
};
