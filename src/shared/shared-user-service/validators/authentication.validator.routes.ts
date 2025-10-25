import { profile_nickname } from "./utils/profile_name.schema";
import { UtilitySchemas } from "./utils/common";
import { account_username } from "./utils/username.validator";
import { z } from "zod";

const schemas = new (class Auth_ValidatorSchemas {
    logout = UtilitySchemas.void;
    registration = z.strictObject({
        nickname: profile_nickname,
        username: account_username,
        ip: UtilitySchemas.ip_address,
        email: UtilitySchemas.email.optional(),
        agent: UtilitySchemas.user_agent,
        password: UtilitySchemas.account_password,
        password_repeat: UtilitySchemas.account_password,
    });

    /** Check the current session */
    check_session = UtilitySchemas.void;

    /** */
    login_via_username = z.strictObject({
        username: account_username,
        ip: UtilitySchemas.ip_address,
        agent: UtilitySchemas.user_agent,
        password: UtilitySchemas.account_password,
    });

    /** For checking username for availability */
    check_username_availability = account_username;

    login_via_email = z.strictObject({
        email: UtilitySchemas.email,
        ip: UtilitySchemas.ip_address,
        agent: UtilitySchemas.user_agent,
        password: UtilitySchemas.account_password,
    });
})();
export { schemas as authentication_schemas };

export type Schemas = typeof schemas;
/** Request Validator DTO Types */
export namespace dto {
    export type logout = z.infer<Schemas["logout"]>;
    export type registration = z.infer<Schemas["registration"]>;
    export type check_session = z.infer<Schemas["check_session"]>;
    export type login_via_email = z.infer<Schemas["login_via_email"]>;
    export type login_via_username = z.infer<Schemas["login_via_username"]>;

    export type check_username_availability = z.infer<Schemas["check_username_availability"]>;
}
