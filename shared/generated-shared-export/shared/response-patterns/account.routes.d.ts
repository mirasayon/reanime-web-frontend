import type { Account, Session } from "../../databases/orm/client.js";
export declare namespace Account_ResponseTypes {
    type explore_me = Account;
    type update_email = Account;
    type set_email = Account;
    type update_password = Account;
    type update_username = Account;
    type get_sessions = Session[];
    type delete_all_other_sessions = number;
    type delete_account = Account;
}
//# sourceMappingURL=account.routes.d.ts.map