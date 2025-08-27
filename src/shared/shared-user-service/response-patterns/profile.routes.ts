import type { Account, AvatarPicture, Profile } from "&us/orm/client";

/** RESPONSES For Profile Route */
export namespace Profile_ResponseTypes {
    export type view_other_profiles = {
        account: Account;
        profile: Profile;
    };
    export type update_nickname = Profile;
    export type update_bio = Profile;
    export type view_my_profile = {
        account: Account;
        profile: Profile;
    };
    /** avatar hash */
    export type set_avatar = string;

    export type delete_avatar = AvatarPicture;
    /** avatar hash */
    export type update_avatar = string;
}

