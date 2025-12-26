import type { ResponseTypesFor_UserProfile_Section } from "#user-service/user-service-response-types-for-all.routes.js";
import { Badge, Card, CardContent } from "./dashboard/common";

export function Others_Profile_Dashboard({ data }: { data: ResponseTypesFor_UserProfile_Section.view_other_profiles }) {
    return (
        <div className="py-4 flex flex-col">
            <Card className="flex gap-6 items-start">
                <Badge>
                    <CardContent className="flex-1">
                        <h2 className="text-2xl font-bold mb-1">@{data.username}</h2>
                    </CardContent>
                </Badge>
                <CardContent className="flex-1">
                    <h2 className="text-2xl font-bold mb-1">{data.nickname || `@${data.username}`}</h2>
                    <p className="text-gray-700 dark:text-blue-100 whitespace-pre-line">
                        {data.bio || "О себе не написано"}
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
