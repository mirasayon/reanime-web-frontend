import type { I_UserServiceResponseStatusCodes, ResponseCode } from "../../shared/constants/response.constants.js";
export interface UserServiceResponseBodyPattern<DATA> {
    data: DATA | null;
    errors: string[];
    ok: boolean;
    message: string;
    response_code: ResponseCode;
    status_code: I_UserServiceResponseStatusCodes;
}
export type optionalMessage = {
    message?: string;
};
export type optionalMessageAndErrors = {
    errors: string[];
} & optionalMessage;
export type optionalMessageAndData<DATA> = {
    data: DATA | undefined;
} & optionalMessage;
//# sourceMappingURL=response-json-body-shape.d.ts.map