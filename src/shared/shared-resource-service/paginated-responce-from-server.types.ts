export type paginatedResponse<T> = {
    paginated: T[];
    is_start_web: boolean;
    is_over_now: boolean;
    current_page: number;
    is_start_now: boolean;
    total_length: number;
};
