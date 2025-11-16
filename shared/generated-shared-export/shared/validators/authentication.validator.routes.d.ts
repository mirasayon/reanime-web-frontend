import { z } from "zod";
declare const schemas: {
    logout: z.ZodUndefined;
    registration: z.ZodObject<{
        nickname: z.ZodString;
        username: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
        ip: z.ZodOptional<z.ZodString>;
        email: z.ZodOptional<z.ZodEmail>;
        agent: z.ZodOptional<z.ZodString>;
        password: z.ZodString;
        password_repeat: z.ZodString;
    }, z.core.$strict>;
    check_session: z.ZodUndefined;
    login_via_username: z.ZodObject<{
        username: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
        ip: z.ZodOptional<z.ZodString>;
        agent: z.ZodOptional<z.ZodString>;
        password: z.ZodString;
    }, z.core.$strict>;
    check_username_availability: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
    login_via_email: z.ZodObject<{
        email: z.ZodEmail;
        ip: z.ZodOptional<z.ZodString>;
        agent: z.ZodOptional<z.ZodString>;
        password: z.ZodString;
    }, z.core.$strict>;
};
export { schemas as authentication_schemas };
export type Schemas = typeof schemas;
export declare namespace dto {
    type logout = z.infer<Schemas["logout"]>;
    type registration = z.infer<Schemas["registration"]>;
    type check_session = z.infer<Schemas["check_session"]>;
    type login_via_email = z.infer<Schemas["login_via_email"]>;
    type login_via_username = z.infer<Schemas["login_via_username"]>;
    type check_username_availability = z.infer<Schemas["check_username_availability"]>;
}
//# sourceMappingURL=authentication.validator.routes.d.ts.map