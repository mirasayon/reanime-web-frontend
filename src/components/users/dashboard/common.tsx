export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return <div className={`bg-white text-white dark:bg-blue-500/20 m-2 rounded-sm shadow p-4 ${className}`}>{children}</div>;
}

export function CardContent({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return <div className={className}>{children}</div>;
}

export function Avatar({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return <div className={`overflow-hidden ${className}`}>{children}</div>;
}
type AvatarImageProps = {
    /** just account username */
    avatar: string;
    className?: string;
};
export function AvatarImage({ avatar, className }: AvatarImageProps) {
    return <img src={avatar} alt="avatar" className={`${className ?? ""} w-40 h-40`} />;
}

export function Badge({ children, variant = "outline" }: { children: React.ReactNode; variant?: string }) {
    const styles =
        variant === "outline"
            ? "border border-gray-400 text-gray-700 dark:text-blue-100 px-2 py-0.5 rounded"
            : "bg-gray-700 text-white px-2 py-0.5 rounded";
    return <span className={styles}>{children}</span>;
}
