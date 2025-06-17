export namespace NextTN {
    export type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;
    export type Params<Slug> = Promise<Slug>;
    export type LayoutProps = Readonly<{
        children: React.ReactNode;
    }>;
}
