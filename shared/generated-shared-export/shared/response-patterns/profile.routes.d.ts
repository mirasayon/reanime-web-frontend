import type { Account, AvatarPicture, Profile } from "../../databases/orm/client.js";
export declare namespace Profile_ResponseTypes {
    type view_other_profiles = {
        account: Omit<Account, "password_hash">;
        profile: Profile & {
            avatar: AvatarPicture | null;
        };
    };
    type update_nickname = Profile;
    type update_bio = Profile;
    type view_my_profile = {
        account: Account;
        profile: Profile & {
            avatar: AvatarPicture | null;
        };
    };
    type set_avatar = boolean;
    type delete_avatar = AvatarPicture;
    type update_avatar = string;
}
//# sourceMappingURL=profile.routes.d.ts.map