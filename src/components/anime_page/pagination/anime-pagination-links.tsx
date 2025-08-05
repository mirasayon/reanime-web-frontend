import { PaginationWithLinks } from "./utility-pagination";
type Props = { currentPage: number; totalPages: number; pageSize: number };
export function AnimePaginationLinks({ currentPage, totalPages, pageSize }: Props) {
    return <PaginationWithLinks page={currentPage} pageSize={pageSize} totalCount={totalPages} navigationMode="link" />;
}
