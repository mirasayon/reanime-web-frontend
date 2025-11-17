import { z } from "zod";
declare const schemas: {
    explore_me: z.ZodUndefined;
    set_email: z.ZodEmail;
    update_email: z.ZodObject<{
        new_email: z.ZodEmail;
        current_email: z.ZodEmail;
    }, z.core.$strict>;
    update_password: z.ZodObject<{
        new_password: z.ZodString;
        current_password: z.ZodString;
    }, z.core.$strict>;
    update_username: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
    get_sessions: z.ZodUndefined;
    terminate_other_sessions: z.ZodUndefined;
    delete_account: z.ZodUndefined;
};
export { schemas as account_schemas };
export type Schemas = typeof schemas;
export declare namespace dto {
    type explore_me = z.infer<Schemas["explore_me"]>;
    type update_email = z.infer<Schemas["update_email"]>;
    type set_email = z.infer<Schemas["set_email"]>;
    type update_password = z.infer<Schemas["update_password"]>;
    type update_username = z.infer<Schemas["update_username"]>;
    type get_sessions = z.infer<Schemas["get_sessions"]>;
    type terminate_other_sessions = z.infer<Schemas["terminate_other_sessions"]>;
    type delete_account = z.infer<Schemas["delete_account"]>;
}
//# sourceMappingURL=account.validator.routes.d.ts.map