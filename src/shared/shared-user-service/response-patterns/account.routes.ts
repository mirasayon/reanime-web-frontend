import type { Account, Session } from "../orm/client";

/** RESPONSES For Account Route */
export namespace Account_ResponseTypes {
    export type explore_me = Account;
    export type update_email = Account;
    export type set_email = Account;
    export type update_password = Account;
    export type update_username = Account;
    export type get_sessions = Session[];
    export type delete_all_other_sessions = number;
    export type delete_account = Account;
}
