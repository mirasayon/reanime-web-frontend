import type { ReactNode } from "react";
/** Awaited Nextjs's Search Query data */
type AwaitedNextSearchParams = { [key: string]: string | string[] | undefined };
/** server-side `/?search=queries` */
export type SearchParams = Promise<AwaitedNextSearchParams>;
/** layout pages */
export type LayoutProps = Readonly<{
    children: ReactNode;
}>;
export type SearchPageParams = { searchParams: SearchParams };
