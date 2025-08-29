import { UtilitySchemas } from "./utils/common";
import { account_username } from "./utils/username.validator";
import { z } from "zod";

const schemas = new (class Account_ValidatorSchemas {
    explore_me = UtilitySchemas.void;
    set_email = UtilitySchemas.email;
    update_email = z.strictObject({
        new_email: UtilitySchemas.email,
        current_email: UtilitySchemas.email,
    });

    update_password = z.strictObject({
        new_password: UtilitySchemas.account_password,
        current_password: UtilitySchemas.account_password,
    });
    update_username = account_username;

    get_sessions = UtilitySchemas.void;
    terminate_other_sessions = UtilitySchemas.void;

    delete_account = UtilitySchemas.void;
})();
export { schemas as account_schemas };
export type Schemas = typeof schemas;
/** Request Validator DTO Types */
export namespace dto {
    export type explore_me = z.infer<Schemas["explore_me"]>;
    export type update_email = z.infer<Schemas["update_email"]>;
    export type set_email = z.infer<Schemas["set_email"]>;
    export type update_password = z.infer<Schemas["update_password"]>;
    export type update_username = z.infer<Schemas["update_username"]>;
    export type get_sessions = z.infer<Schemas["get_sessions"]>;
    export type terminate_other_sessions = z.infer<Schemas["terminate_other_sessions"]>;
    export type delete_account = z.infer<Schemas["delete_account"]>;
}

