import { z } from "zod";
export declare const schemas: {
    other_profiles: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
    my_profile: z.ZodUndefined;
    avatar_view: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
    set_avatar: z.ZodUndefined;
    update_avatar: z.ZodUndefined;
    delete_avatar: z.ZodUndefined;
    update_bio: z.ZodString;
    update_name: z.ZodString;
};
export { schemas as profile_schemas };
export type Schemas = typeof schemas;
export declare namespace dto {
    type other_profiles = z.infer<Schemas["other_profiles"]>;
    type my_profile = z.infer<Schemas["my_profile"]>;
    type avatar_view = z.infer<Schemas["avatar_view"]>;
    type set_avatar = z.infer<Schemas["set_avatar"]>;
    type update_avatar = z.infer<Schemas["update_avatar"]>;
    type delete_avatar = z.infer<Schemas["delete_avatar"]>;
    type update_bio = z.infer<Schemas["update_bio"]>;
    type update_name = z.infer<Schemas["update_name"]>;
}
//# sourceMappingURL=profile.validator.routes.d.ts.map