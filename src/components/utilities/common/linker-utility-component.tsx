import Link from "next/link";
export function Linker({
    children,
    href,
    linkType = "internal",
    className,
    target,
    rel,
    clearTheDefaultStylings = false,
}: {
    className?: string | undefined;
    rel?: string;
    clearTheDefaultStylings?: boolean;
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
            className={
                !clearTheDefaultStylings
                    ? `   dark:text-blue-400 dark:hover:text-blue-500  text-blue-800 hover:text-blue-900 ${
                          className || ""
                      }`
                    : className || ""
            }
            href={email ? `mailto:${href}` : href}
        >
            {children}
        </Link>
    );
}
