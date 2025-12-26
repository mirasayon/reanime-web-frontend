import { z } from "zod";
import psl from "better-psl";
import consola from "consola";
import { reservedWordsForUsernames } from "./reserved-usernames-words.static.js";
export const _username_regex = /^(?=.{4,24}$)(?!.*(?:\.\.|__))(?![_.])[a-zA-Z0-9]+(?:[._][a-zA-Z0-9]+)*$/;
const username_regex_error = "Неверный формат имени пользователя. Допустимые символы: A-Z, 0-9, _, . Имя не может начинаться/заканчиваться на _ или ., не должно быть последовательных __ или ..";
export const accountUsernameZodSchema = (() => {
    const min = 4;
    const max = 24;
    const error = `Имя пользователя обязательна`;
    return z
        .string({
        error,
    })
        .trim()
        .min(min, {
        error: `Имя пользователя должно содержать как минимум ${min} символов`,
    })
        .max(max, {
        error: `Имя пользователя должно содержать меньше либо ровно ${max} символов`,
    })
        .regex(_username_regex, { error: username_regex_error })
        .transform((val) => val.toLowerCase())
        .refine((val) => !reservedWordsForUsernames.includes(val), {
        error: "Это имя пользователя зарезервировано",
    })
        .refine((val) => {
        const parsed = psl.parse(val);
        if (parsed.error) {
            return true;
        }
        if (!parsed.parsed) {
            return true;
        }
        if (!parsed.parsed.listed) {
            return true;
        }
        if (parsed.parsed.tld) {
            const passes = !psl.rules.includes(parsed.parsed.tld);
            return passes;
        }
        consola.error("Unexpected validation handle. input: ", val);
        return false;
    }, {
        error: "Имя пользователя не может заканчиваться суффиксом домена (.com, .net и т.д.)",
    });
})();
