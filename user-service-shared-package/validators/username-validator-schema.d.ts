import { z } from "zod";
export declare const _username_regex: RegExp;
export declare const accountUsernameZodSchema: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
