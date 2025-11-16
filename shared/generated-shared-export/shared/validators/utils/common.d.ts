import { z } from "zod";
export declare const UtilitySchemas: {
    void: z.ZodUndefined;
    account_password: z.ZodString;
    user_agent: z.ZodOptional<z.ZodString>;
    ip_address: z.ZodOptional<z.ZodString>;
    just_boolean: (name: string) => z.ZodReadonly<z.ZodBoolean>;
    page_number: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    page_size: z.ZodCoercedNumber<unknown>;
    anime_id: z.ZodCoercedNumber<unknown>;
    message: (name: string) => z.ZodString;
    cuid: (name: string) => z.ZodCUID;
    reply_id: z.ZodCUID;
    comment_id: z.ZodCUID;
    email: z.ZodEmail;
    session_token: z.ZodString;
    session_meta: z.ZodObject<{
        ip: z.ZodOptional<z.ZodString>;
        agent: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>;
    details: z.ZodString;
    report_type: z.ZodEnum<{
        other: "other";
        spam: "spam";
        offensive: "offensive";
    }>;
};
//# sourceMappingURL=common.d.ts.map