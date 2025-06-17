import type { JsonDB } from "#T/shared/json_db";

export namespace IRApi {
    export type paginatedResponse<T> = {
        paginated: T[];
        is_start_web: boolean;
        is_over_now: boolean;
        current_page: number;
        is_start_now: boolean;
    };
}
export type paginated = IRApi.paginatedResponse<JsonDB.ftype>;
