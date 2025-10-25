import { Card, Badge, CardContent } from "./dashboard/common";
import type { Profile, Account } from "&us/orm/client";
export function My_Profile_Dashboard({ profile: { nickname, bio }, account }: { profile: Profile; account: Account }) {
    return (
        <div className="py-4 flex flex-col">
            <Card className="flex gap-6 items-start">
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
