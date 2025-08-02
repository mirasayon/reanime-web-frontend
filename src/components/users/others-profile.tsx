import React from "react";
import { Account, Profile } from "reanime/user-service/response/response-data-types.js";
import { Avatar, AvatarFallback, AvatarImage, Badge, Card, CardContent } from "./dashboard/common";

export function Others_Profile_Dashboard({
    profile: { nickname, avatar_url_hash, cover_url_hash, bio },
    account,
}: {
    profile: Profile;
    account: Account;
}) {
    return (
        <div className="py-4 flex flex-col">
            <Card className="flex gap-6 items-start">
                <Avatar className="w-28 h-28 shadow-md">
                    <AvatarImage
                        className="w-full h-full object-contain rounded-sm "
                        avatar={avatar_url_hash ? `https://media-service.reanime.art/storage/avatar/${avatar_url_hash}` : undefined}
                    />
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
