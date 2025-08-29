import { profile_nickname } from "./utils/profile_name.schema";
import { UtilitySchemas } from "./utils/common";
import { account_username } from "./utils/username.validator";
import { z } from "zod";

export const schemas = new (class Profile_ValidatorSchemas {
    /** View other profiles, no auth needed */
    other_profiles = account_username;
    my_profile = UtilitySchemas.void;

    set_avatar = UtilitySchemas.void;
    update_avatar = UtilitySchemas.void;
    delete_avatar = UtilitySchemas.void;

    update_bio = UtilitySchemas.message("О себе");
    update_name = profile_nickname;
})();
export { schemas as profile_schemas };

export type Schemas = typeof schemas;
/** Request Validator DTO Types */
export namespace dto {
    export type other_profiles = z.infer<Schemas["other_profiles"]>;
    export type my_profile = z.infer<Schemas["my_profile"]>;
    export type set_avatar = z.infer<Schemas["set_avatar"]>;
    export type update_avatar = z.infer<Schemas["update_avatar"]>;
    export type delete_avatar = z.infer<Schemas["delete_avatar"]>;
    export type update_bio = z.infer<Schemas["update_bio"]>;
    export type update_name = z.infer<Schemas["update_name"]>;
}

