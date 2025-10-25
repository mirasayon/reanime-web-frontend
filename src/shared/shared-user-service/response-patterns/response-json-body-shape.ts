import type { I_UserServiceResponseStatusCodes, ResponseCode } from "#/shared/constants/response.constants.js";

/**
 * Type representing the standard JSON response structure
 * @template Data - The type of data included in the response
 */
export interface UserServiceResponceBodyPattern<DATA> {
    data: DATA | null;
    errors: string[];
    message: string;
    response_code: ResponseCode;
    status_code: I_UserServiceResponseStatusCodes;
}

export type optionalMessage = { message?: string };
export type optionalMessageAndErrors = { errors: string[] } & optionalMessage;
export type optionalMessageAndData<DATA> = { data: DATA | undefined } & optionalMessage;

