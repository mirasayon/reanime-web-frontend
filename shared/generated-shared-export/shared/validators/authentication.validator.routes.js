import { profile_nickname } from "./utils/profile_name.schema.js";
import { UtilitySchemas } from "./utils/common.js";
import { account_username } from "./utils/username.validator.js";
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
    check_session = UtilitySchemas.void;
    login_via_username = z.strictObject({
        username: account_username,
        ip: UtilitySchemas.ip_address,
        agent: UtilitySchemas.user_agent,
        password: UtilitySchemas.account_password,
    });
    check_username_availability = account_username;
    login_via_email = z.strictObject({
        email: UtilitySchemas.email,
        ip: UtilitySchemas.ip_address,
        agent: UtilitySchemas.user_agent,
        password: UtilitySchemas.account_password,
    });
})();
export { schemas as authentication_schemas };
//# sourceMappingURL=authentication.validator.routes.js.map