import Link from "next/link";
export function Linker({
    children,
    href,
    linkType = "internal",
    className,
    target,
    rel,
}: {
    className?: string | undefined;
    rel?: string;
    children: React.ReactNode;
    target?: string;
    /**
     * @defaultValue "internal"
     */
    linkType?: "email" | "raw" | "internal";
    href: string;
}) {
    const email: boolean = linkType === "email";
    return (
        <Link
            target={target}
            rel={rel}
            className={`   dark:text-blue-400 dark:hover:text-blue-500  text-blue-700 hover:text-blue-900 ${className || ""}`}
            href={email ? `mailto:${href}` : href}
        >
            {children}
        </Link>
    );
}
