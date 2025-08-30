import type { ReactNode } from "react";
/** Awaited Nextjs's Search Query data */
export type AwaitedNextSQ = { [key: string]: string | string[] | undefined };
/** server-side `/?search=queries` */
export type SearchParams = Promise<AwaitedNextSQ>;
/** layout pages */
export type LayoutProps = Readonly<{
    children: ReactNode;
}>;

