// lib/validations/auth.ts
import { z } from "zod";
const password = (name: string) => z.string().min(8).max(80);
export const register_schema = z.strictObject({
    login: z.string({ error: "Please enter a valid login string" }),
    password: password("Password"),
    confirm_password: password("Confirmed password"),
});

export type RegisterInput = z.infer<typeof register_schema>;
