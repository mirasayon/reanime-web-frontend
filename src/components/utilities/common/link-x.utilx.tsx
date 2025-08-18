import Link from "next/link";
export function LinkX({
    children,
    href,
    email,
    className,
}: {
    className?: string | undefined;
    children: React.ReactNode;
    email?: boolean;
    href: string;
}) {
    return (
        <Link
            className={`   dark:text-blue-400 dark:hover:text-blue-400  text-blue-700 hover:text-blue-900 ${className || ""}`}
            href={email ? `mailto:${href}` : href}
        >
            {children}
        </Link>
    );
}
