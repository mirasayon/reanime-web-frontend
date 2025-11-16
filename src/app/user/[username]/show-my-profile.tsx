import { Upload_avatar_or_show } from "#/components/avatars/upload_avatar_or_show";
import { My_Profile_Dashboard } from "#/components/users/my-profile";
import { MyAccountDashboard } from "#/components/profile-dashboard";
import type { Profile_ResponseTypes } from "#user-service/shared/response-patterns/profile.routes.js";
import type { Comment } from "#user-service/databases/orm/client.js";
import { CommentsFromUserList } from "./inside-profile-ui/comments-by-one-user";

export function ShowMyProfile_Dashboard({
    data,
    userServiceBaseUrl,
    commentsByThisProfile,
}: {
    commentsByThisProfile: Omit<Comment, "by_profile_id">[];
    userServiceBaseUrl: string;
    data: Profile_ResponseTypes.view_my_profile;
}) {
    return (
        <>
            <div>Ваш профиль</div>
            <Upload_avatar_or_show profile={data.profile} userServiceBaseUrl={userServiceBaseUrl} />
            <My_Profile_Dashboard profile={data.profile} account={data.account} />
            <MyAccountDashboard />
            <CommentsFromUserList comments={commentsByThisProfile} />
        </>
    );
}
