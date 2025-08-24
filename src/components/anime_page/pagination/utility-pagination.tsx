"use client";
import type { ReactNode } from "react";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "#/shadcn-ui/components/ui/pagination";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./pagination-select-utils";
import { cn } from "#/shadcn-ui/lib/utils";

export interface PaginationWithLinksProps {
    pageSizeSelectOptions?: {
        pageSizeSearchParam?: string;
        pageSizeOptions: number[];
    };
    totalCount: number;
    pageSize: number;
    page: number;
    pageSearchParam: string;
}
export function PaginationWithLinks({ pageSizeSelectOptions, pageSize, totalCount, page, pageSearchParam }: PaginationWithLinksProps) {
    const totalPageCount = Math.ceil(totalCount / pageSize);

    function buildLink(newPage: number) {
        return `?${pageSearchParam}=${newPage}`;
    }
    const renderPageNumbers = () => {
        const items: ReactNode[] = [];
        const maxVisiblePages = 5;

        const createPageItem = (pageNum: number) => {
            return (
                <PaginationItem key={pageNum}>
                    <PaginationLink href={buildLink(pageNum)} isActive={page === pageNum}>
                        {pageNum}
                    </PaginationLink>
                </PaginationItem>
            );
        };

        if (totalPageCount <= maxVisiblePages) {
            for (let i = 1; i <= totalPageCount; i++) {
                items.push(createPageItem(i));
            }
        } else {
            items.push(createPageItem(1));

            if (page > 3) {
                items.push(
                    <PaginationItem key="ellipsis-start">
                        <PaginationEllipsis />
                    </PaginationItem>,
                );
            }

            const start = Math.max(2, page - 1);
            const end = Math.min(totalPageCount - 1, page + 1);

            for (let i = start; i <= end; i++) {
                items.push(createPageItem(i));
            }

            if (page < totalPageCount - 2) {
                items.push(
                    <PaginationItem key="ellipsis-end">
                        <PaginationEllipsis />
                    </PaginationItem>,
                );
            }

            items.push(createPageItem(totalPageCount));
        }

        return items;
    };

    return (
        <div className="flex flex-col md:flex-row items-center gap-3 w-full">
            {/* {pageSizeSelectOptions && (
                <div className="flex flex-col gap-4 flex-1">
                    <SelectRowsPerPage options={pageSizeSelectOptions.pageSizeOptions} pageSize={pageSize} />
                </div>
            )} */}
            <Pagination className={cn({ "md:justify-end": pageSizeSelectOptions })}>
                <PaginationContent className="max-sm:gap-0">
                    <PaginationItem>
                        <PaginationPrevious
                            href={buildLink(Math.max(page - 1, 1))}
                            aria-disabled={page === 1}
                            tabIndex={page === 1 ? -1 : undefined}
                            className={page === 1 ? "pointer-events-none opacity-50" : undefined}
                        />
                    </PaginationItem>
                    {renderPageNumbers()}
                    <PaginationItem>
                        <PaginationNext
                            href={buildLink(Math.min(page + 1, totalPageCount))}
                            aria-disabled={page === totalPageCount}
                            tabIndex={page === totalPageCount ? -1 : undefined}
                            className={page === totalPageCount ? "pointer-events-none opacity-50" : undefined}
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
}
type SelectRowsPerPageProps = { options: number[]; setPageSize: (newSize: number) => void; pageSize: number };
function SelectRowsPerPage({ options, setPageSize, pageSize }: SelectRowsPerPageProps) {
    return (
        <div className="flex items-center gap-4 ">
            <span className="whitespace-nowrap text-sm">Эл. на одну страницу</span>

            <Select value={String(pageSize)} onValueChange={(value) => setPageSize(Number(value))}>
                <SelectTrigger className=" dark:bg-blue-950 dark:text-violet-100">
                    <SelectValue placeholder="Select page size">{String(pageSize)}</SelectValue>
                </SelectTrigger>
                <SelectContent className=" dark:bg-blue-950 dark:text-violet-100">
                    {options.map((option) => (
                        <SelectItem key={option} value={String(option)}>
                            {option}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
}
