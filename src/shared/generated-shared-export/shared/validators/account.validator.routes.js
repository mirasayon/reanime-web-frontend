import { UtilitySchemas } from "./utils/common.js";
import { account_username } from "./utils/username.validator.js";
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
//# sourceMappingURL=account.validator.routes.js.map