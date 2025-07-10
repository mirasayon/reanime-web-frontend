// lib/validations/auth.ts
import { z } from "zod";

export const loginSchema = z.object({
    login: z.string({ message: "Please enter a valid login string" }),
    password: z.string().min(8, { message: "Password must be at least 6 characters" }).max(64, {
        message: "Password must not be more than 64 chars",
    }),
});

export type LoginInput = z.infer<typeof loginSchema>;
