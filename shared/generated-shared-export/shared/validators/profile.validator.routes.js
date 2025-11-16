import { profile_nickname } from "./utils/profile_name.schema.js";
import { UtilitySchemas } from "./utils/common.js";
import { account_username } from "./utils/username.validator.js";
import { z } from "zod";
export const schemas = new (class Profile_ValidatorSchemas {
    other_profiles = account_username;
    my_profile = UtilitySchemas.void;
    avatar_view = account_username;
    set_avatar = UtilitySchemas.void;
    update_avatar = UtilitySchemas.void;
    delete_avatar = UtilitySchemas.void;
    update_bio = UtilitySchemas.message("О себе");
    update_name = profile_nickname;
})();
export { schemas as profile_schemas };
//# sourceMappingURL=profile.validator.routes.js.map