import React from "react";
import { Account, Profile } from "reanime/user-service/response/response-data-types.js";

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return <div className={`bg-white text-white dark:bg-blue-500/20 m-2 rounded-sm shadow p-4 ${className}`}>{children}</div>;
}

function CardContent({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return <div className={className}>{children}</div>;
}

function Avatar({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return <div className={`overflow-hidden ${className}`}>{children}</div>;
}

function AvatarImage({ src }: { src?: string }) {
    return src ? <img src={src} alt="avatar" className="w-full h-full object-contain rounded-sm" /> : null;
}

function AvatarFallback({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return <div className={`flex items-center justify-center w-full h-full bg-gray-400 text-white ${className}`}>{children}</div>;
}

function Badge({ children, variant = "outline" }: { children: React.ReactNode; variant?: string }) {
    const styles =
        variant === "outline"
            ? "border border-gray-400 text-gray-700 dark:text-blue-100 px-2 py-0.5 rounded"
            : "bg-gray-700 text-white px-2 py-0.5 rounded";
    return <span className={styles}>{children}</span>;
}

export function My_Profile_Dashboard({
    profile: { nickname, avatar_url_hash, cover_url_hash, bio },
    account,
}: {
    profile: Profile;
    account: Account;
}) {
    return (
        <div className="py-4 flex flex-col">
            {/* {avatar_url_hash && (
                <div
                    className="h-48 w-full rounded-2xl bg-cover bg-center mb-6 shadow-sm"
                    style={{ backgroundImage: `url(https://media-service.reanime.art/storage/avatar/${avatar_url_hash}` }}
                />
            )} */}

            <Card className="flex gap-6 items-start">
                <Avatar className="w-28 h-28 shadow-md">
                    <AvatarImage src={avatar_url_hash ? `https://media-service.reanime.art/storage/avatar/${avatar_url_hash}` : undefined} />
                    <AvatarFallback className="text-lg font-semibold">{nickname?.[0] || "U"}</AvatarFallback>
                </Avatar>
                <Badge>
                    <CardContent className="flex-1">
                        <h2 className="text-2xl font-bold mb-1">@{account.username}</h2>
                    </CardContent>
                </Badge>
                <CardContent className="flex-1">
                    <h2 className="text-2xl font-bold mb-1">{nickname || `@${account.username}`}</h2>
                    <p className="text-gray-700 dark:text-blue-100 whitespace-pre-line">{bio || "О себе не написано"}</p>
                </CardContent>
            </Card>
        </div>
    );
}
