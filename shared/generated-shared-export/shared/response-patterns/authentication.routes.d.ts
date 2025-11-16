import type { Account, Profile, Session } from "../../databases/orm/client.js";
export declare namespace Authentication_ResponseTypes {
    type login_via_email = {
        session: Session;
        account: Account;
    };
    type login_via_username = {
        session: Session;
        account: Account;
    };
    type registration = {
        session: Session;
        account: Account;
    };
    type check_username_availability = boolean;
    type check_session = {
        session: Session;
        profile: Profile;
        account: Account;
    };
    type logout = string;
}
//# sourceMappingURL=authentication.routes.d.ts.map