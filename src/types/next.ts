export namespace NextJS_Types {
    /** For server-side `/?search=queries` */
    export type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;
    /** For `/:params`. And of course, server-side  */
    export type Params<Slug> = Promise<Slug>;
    /** For layout pages */
    export type LayoutProps = Readonly<{
        children: React.ReactNode;
    }>;
}
