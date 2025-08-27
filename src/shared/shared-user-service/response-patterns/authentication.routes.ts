import type { Account, Profile, Session } from "&us/orm/client";

/** RESPONSES For Auth Route */
export namespace Authentication_ResponseTypes {
    export type login_via_email = { session: Session; account: Account };
    export type login_via_username = { session: Session; account: Account };
    export type registration = { session: Session; account: Account };
    /** `false` if username is used, `true` if available */
    export type check_username_availability = boolean;
    export type check_session = {
        session: Session;
        profile: Profile;
        account: Account;
    };
    /** deleted session's token */
    export type logout = string;
}

