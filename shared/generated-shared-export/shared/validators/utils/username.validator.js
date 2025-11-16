import { z } from "zod";
import psl from "better-psl";
import { rules as domainSuffixes } from "better-psl";
import consola from "consola";
import { reserved_usernames } from "../../validators/static/reserved-usernames.static.js";
export const _username_regex = /^(?=.{4,24}$)(?!.*(?:\.\.|__))(?![_.])[a-zA-Z0-9]+(?:[._][a-zA-Z0-9]+)*$/;
const username_regex_error = "Неверный формат имени пользователя. Допустимые символы: A-Z, 0-9, _, . Имя не может начинаться/заканчиваться на _ или ., не должно быть последовательных __ или ..";
export const account_username = (() => {
    const min = 4;
    const max = 24;
    const error = `Имя пользователя обязательна`;
    return z
        .string({
        error,
    })
        .trim()
        .min(min, {
        error: `Имя пользователя должно содержать более ${min} символов`,
    })
        .max(max, {
        error: `Имя пользователя должно содержать меньше ${max} символов`,
    })
        .regex(_username_regex, { error: username_regex_error })
        .transform((val) => val.toLowerCase())
        .refine((val) => !reserved_usernames.includes(val), {
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
            const passes = !domainSuffixes.includes(parsed.parsed.tld);
            return passes;
        }
        consola.error("Unexpected validation handle. input: ", val);
        return false;
    }, {
        error: "Имя пользователя не может заканчиваться суффиксом домена (.com, .net и т.д.)",
    });
})();
//# sourceMappingURL=username.validator.js.map