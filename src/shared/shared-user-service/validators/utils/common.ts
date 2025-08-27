import { z } from "zod";
/**
 *  Utility Zod schemas
 */
export const UtilitySchemas = new (class Utility_ValidatorSchemas {
    /** `undefined` validator */
    void = z.undefined();
    /**
     * Account inputted password
     * @default min 8
     * @default max 80
     */
    account_password = (() => {
        const min: number = 8;
        const max: number = 80;
        return z
            .string({
                error: "Поле для пароля обязательно",
            })
            .min(min, {
                error: `Пароль должен содержать более ${min} символов`,
            })
            .max(max, {
                error: `Пароль должен содержать меньше ${max} символов`,
            });
    })();
    /**
     * min = 0;
        max = 300;
     * @param name 
     * @returns ZodString
     */
    user_agent = (() => {
        const name: string = "Пользовательский агент";
        const min = 0;
        const max = 300;
        const error = `Невалидный ${name}`;

        return z
            .string({ error })
            .trim()
            .min(min, {
                error: `Field for ${name} must be more than ${min} symbol`,
            })
            .max(max, {
                error: `Field for ${name} must be less than ${max} symbols`,
            })
            .optional();
    })();
    /** IP format */
    ip_address = (() => {
        return z.string({ error: "Неверный айпи адрес" }).optional();
    })();

    /** Just boolean type validator.  */
    just_boolean = (name: string) => {
        const invalid_txt = `Field for ${name} must be a boolean`;
        return z
            .boolean({
                error: invalid_txt,
            })
            .readonly();
    };
    /** For pagination.
     *
     * @Default 1
     *
     *  min = 1
     *  max = Infinity;
     */
    page_number = (() => {
        const min = 1;
        const required_txt = `Номер страницы обязателен`;
        return z.coerce
            .number({
                error: required_txt,
            })
            .int({ error: `Номер страницы должен быть целым числом` })
            .positive({
                error: `Номер страницы должен быть позитивным числом`,
            })
            .min(min, { error: `Номер страницы должен быть больше ${min}` })
            .default(1);
    })();
    /**
     * For pagination
     *  min = 1;
     *  max = Infinity;
     * @param name
     * @returns
     */
    page_size = (() => {
        const name = "Размер одной страницы для пагинации";
        const min = 1;
        const error = `${name} должен быть числом`;
        return z.coerce
            .number({ error })
            .int({ error: `${name} должно быть целым числом` })
            .positive({
                error: `${name} должен быть положительным числом`,
            })
            .min(min, { error: `${name} должен быть больше ${min}` });
    })();
    /** Shikimori ID. number. With coerce
     * min = 1;
     * max = 10_000_000;
     */
    anime_id = (() => {
        const min = 1;
        const max = 10_000_000;
        const error = `Требуется айди аниме`;
        return z.coerce
            .number({ error })
            .int({ error: `Айди аниме должно быть целым числом` })
            .positive({
                error: `Айди аниме должно быть положительным целым числом`,
            })
            .min(min, {
                error: `Айди аниме должен быть больше ${min}`,
            })
            .max(max, {
                error: `Айди аниме должен быть меньше ${max}`,
            });
    })();
    /**
     * Text validator for comments, reply etc.
     *
     *
     * @min 1
     * @max 10000 symbols
     *
     * @param name Description for field
     * @returns zod schema
     */
    message = (name: string) => {
        const min = 1;
        const max = 10_000;
        const invalid_txt = `Поле для ${name} должно быть строкой`;
        const required_txt = `Поле для ${name} обязательно`;

        return z
            .string({ error: (issue) => (issue.input === undefined ? required_txt : invalid_txt) })
            .trim()
            .min(min, {
                error: `Поле для ${name} должно содержать более ${min} символов`,
            })
            .max(max, {
                error: `Поле для ${name} должно быть меньше ${max} символов.`,
            });
    };
    /**
     * Classic CUID validator
     *
     * @length 20
     * @param name
     * @returns zod schema
     */
    cuid = (name: string) => {
        const invalid_txt = `Поле для ${name} имеет недопустимый CUID`;
        const required_txt = `Поле для ${name} обязательно`;
        return z.cuid({ error: (issue) => (issue.input === undefined ? required_txt : invalid_txt) });
    };

    reply_id = this.cuid("Айди ответа");
    comment_id = this.cuid("Айди комента");

    /** Email Validator */
    email = (() => {
        return z
            .email({ error: "Адрес электронной почты должен быть действительным" })
            .trim()
            .max(100, { error: "Адрес электронной почты должен быть короче 100 символов" });
    })();
    /** Zod validator for Session Token in the cookie from the request
     * @lenght 577
     */
    session_token = (() => {
        return z.string().length(577, { error: "Длина токена сеанса должна составлять ровно 577 символов" });
    })();

    session_meta = z.strictObject({
        ip: this.ip_address,
        agent: this.user_agent,
    });

    /**
     * For reporting replies and comments
     */
    details = this.message("Подробности");
    /**
     * For report type
     *
     * Enum
     */
    report_type = z.enum(["spam", "offensive", "other"] as const);
})();
