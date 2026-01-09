import { strictObject, type z as Z, z } from "zod";
import psl from "better-psl";
/** Utility Zod schemas */
class ZodRequiredSchemaBase {
    // prettier-ignore
    private reservedWordsForUsernames: string[] = ["about","access","account","accounts","activate","activities","activity","address","admin","administration","administrator","adult","advertising","affiliate","affiliates","ajax","alpha","analysis","analytics","android","anon","anonymous","apps","archive","archives","article","asct","asset","atom","auth","authentication","avatar","backup","balancer-manager","banner","banners","beta","billing","blog","blogs","board","book","bookmark","bots","business","cache","cadastro","calendar","call","campaign","cancel","captcha","career","careers","cart","categories","category","cgi-bin","changelog","chat","check","checking","checkout","client","cliente","clients","code","codereview","comercial","comment","comments","communities","community","company","compare","compras","config","configuration","connect","contact","contact-us","contact_us","contactus","contest","contribute","corp","create","dashboard","data","default","delete","demo","design","designer","destroy","devel","developer","developers","diagram","diary","dict","dictionary","direct_messages","directory","dist","docs","documentation","domain","download","downloads","ecommerce","edit","editor","education","email","employment","empty","enterprise","entries","entry","error","errors","eval","event","exit","explore","facebook","favorite","favorites","feature","features","feed","feedback","feeds","file","files","first","flash","fleet","fleets","flog","follow","followers","following","forgot","form","forum","forums","founder","free","friend","friends","gadget","gadgets","game","games","ghost","gift","gifts","gist","github","graph","group","groups","guest","guests","help","home","homepage","host","hosting","hostmaster","hostname","howto","html","http","httpd","https","iamges","icon","icons","idea","ideas","image","images","imap","index","indice","info","information","inquiry","instagram","intranet","invitations","invite","ipad","iphone","issue","issues","item","items","java","javascript","jobs","join","json","jump","knowledgebase","language","languages","last","ldap-status","legal","license","link","links","linux","list","lists","log-in","log-out","log_in","log_out","login","logout","logs","mail","mail1","mail2","mail3","mail4","mail5","mailer","mailing","maintenance","manager","manual","maps","marketing","master","media","member","members","message","messages","messenger","microblog","microblogs","mine","mobile","movie","movies","music","musicas","mysql","name","named","navi","navigation","network","news","newsletter","nick","nickname","notes","noticias","notification","notifications","notify","ns10","null","oauth","oauth_clients","offer","offers","official","online","openid","operator","order","orders","organization","organizations","overview","owner","owners","page","pager","pages","panel","password","payment","perl","phone","photo","photoalbum","photos","phpmyadmin","phppgadmin","phpredisadmin","pics","ping","plan","plans","plugin","plugins","policy","pop3","popular","portal","post","postfix","postmaster","posts","premium","press","price","pricing","privacy","privacy-policy","privacy_policy","privacypolicy","private","product","products","profile","project","projects","promo","public","purpose","python","query","random","ranking","read","readme","recent","recruit","recruitment","register","registration","release","remove","replies","report","reports","repositories","repository","request","requests","reset","root","ruby","rule","sale","sales","sample","samples","save","school","script","scripts","search","secure","security","self","send","server","server-info","server-status","service","services","session","sessions","setting","settings","setup","share","shop","show","sign-in","sign-up","sign_in","sign_up","signin","signout","signup","site","sitemap","sites","smartphone","smtp","soporte","source","spec","special","ssladmin","ssladministrator","sslwebmaster","staff","stage","staging","start","stat","state","static","stats","status","store","stores","stories","style","styleguide","stylesheet","stylesheets","subdomain","subscribe","subscriptions","suporte","support","sysadmin","sysadministrator","system","tablet","tablets","talk","task","tasks","team","teams","tech","telnet","term","terms","terms-of-service","terms_of_service","termsofservice","test","test1","test2","test3","teste","testing","tests","theme","themes","thread","threads","todo","tool","tools","topic","topics","tour","translations","trends","tutorial","twitter","undef","unfollow","unsubscribe","update","upload","uploads","usage","user","username","users","usuario","vendas","version","video","videos","visitor","watch","weather","webhook","webhooks","webmail","webmaster","website","websites","welcome","widget","widgets","wiki","windows","word","work","works","workshop","www1","www2","www3","www4","www5","www6","www7","wwws","wwww","xmpp","yaml","year","yourdomain","yourname","yoursite","yourusername","admin","administrator","root","superuser","sysadmin","system","operator","developer","error","moderator","undefined","support","help","info","contact","sales","billing","security","abuse","postmaster","webmaster","mail","email","smtp","imap","status","monitor","dashboard","guest","anonymous","test","tester","terms","cookie","cookies","owner","manager","moderator","rootuser","super","reanime","reanimeapp","reanimeart","reanimeweb","anime","reanime.art"]

    /** Regexp for login string.
     *
     *  Description:
     *	The line must be written in lowercase letters.
     *	There may be letters, numbers and underscores in the middle.
     *	The line must not end with an underscore.
     *
     *	An example of a string that matches the expression is `user_name123`, and an incorrect example is `user_name_`.
     */
    private usernameRegex = /^(?=.{4,24}$)(?!.*(?:\.\.|__))(?![_.])[a-zA-Z0-9]+(?:[._][a-zA-Z0-9]+)*$/;

    // export const _username_regex = /^[a-z][a-z0-9_]*[a-z0-9]$/;
    private usernameRegexError =
        "Неверный формат имени пользователя. Допустимые символы: A-Z, 0-9, _, . Имя не может начинаться/заканчиваться на _ или ., не должно быть последовательных __ или .." as const;

    private usernameSchemaConfig = {
        min: 4,
        max: 24,
        error: `Имя пользователя обязательна`,
    };
    /** min  4,
     *  max 24;
     * @param name
     * @returns
     */
    accountUsernameValidatorSchema = z
        .string({
            error: this.usernameSchemaConfig.error,
        })
        .trim()
        .min(this.usernameSchemaConfig.min, {
            error: `Имя пользователя должно содержать как минимум ${this.usernameSchemaConfig.min} символов`,
        })
        .max(this.usernameSchemaConfig.max, {
            error: `Имя пользователя должно содержать меньше либо ровно ${this.usernameSchemaConfig.max} символов`,
        })
        .regex(this.usernameRegex, { error: this.usernameRegexError })
        .transform((val) => val.toLowerCase())
        .refine((val) => !this.reservedWordsForUsernames.includes(val), {
            error: "Это имя пользователя зарезервировано",
        })
        .refine(
            (val) => {
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
                return false;
            },
            {
                error: "Имя пользователя не может заканчиваться суффиксом домена (.com, .net и т.д.)",
            },
        );

    /** Regex for Unicode letters (L) and combining marks (M), plus spaces, hyphens, apostrophes, underscores, and digits: */
    private nicknameRegex = /^[\p{L}\p{M}0-9 _'-]+$/u;
    /**  UserProfile nickname validator. Min 1 chars. Max 30 chars */
    profileNickname = z
        .string({
            error: `Требуется никнейм`,
        })
        .min(1, {
            error: "Никнейм должен содержать более 1 символа",
        })

        .max(30, {
            error: `Слишком длинный никнейм (максимум 30 символов)`,
        })
        .trim()
        .refine((val) => val === val.normalize("NFC"), {
            error: "Никнейм содержит недопустимые символы",
        })
        .regex(this.nicknameRegex, {
            error: "Никнейм может содержать только буквы (любого языка), цифры, пробелы, дефисы, подчеркивания, апострофы",
        });

    /** `undefined` data type validator */
    void = z.undefined();
    /** UserAccount inputted password
     * @defaultValue min 8
     * @defaultValue max 80
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
    /** min = 0; max = 300;
     * @param name
     * @returns ZodString
     */
    userAgent = (() => {
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
    ipAddress = z.string({ error: "IP-адрес обязателен" });

    /** Just boolean type validator.  */
    justBoolean = (name: string) => {
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
    pageNumber = (() => {
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
    pageSize = (() => {
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

    private animeIdConfig = {
        min: 1,
        max: 10_000_000,
        error: `Требуется айди аниме`,
    };
    /** Shikimori ID. number. With coerce
     * min = 1;
     * max = 10_000_000;
     */
    animeId = z.coerce
        .number({ error: this.animeIdConfig.error })
        .int({ error: `Айди аниме должно быть целым числом` })
        .positive({
            error: `Айди аниме должно быть положительным целым числом`,
        })
        .min(this.animeIdConfig.min, {
            error: `Айди аниме должен быть больше ${this.animeIdConfig.min}`,
        })
        .max(this.animeIdConfig.max, {
            error: `Айди аниме должен быть меньше ${this.animeIdConfig.max}`,
        });

    /** Text validator for comments, reply etc.
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
     * Classic CUID validator  @length 20
     * @param name
     * @returns zod schema
     */
    cuid = (name: string) => {
        const invalid_txt = `Поле для ${name} имеет недопустимый CUID`;
        const required_txt = `Поле для ${name} обязательно`;
        return z.cuid({ error: (issue) => (issue.input === undefined ? required_txt : invalid_txt) });
    };

    reply_id = this.cuid("Айди ответа на комментарий");
    comment_id = this.cuid("Айди комментария");

    /** Email Validator */
    email = z
        .email({ error: "Адрес электронной почты должен быть действительным" })
        .trim()
        .max(100, { error: "Адрес электронной почты должен быть короче 100 символов" });
    session_meta = z.strictObject({
        ip: this.ipAddress,
        agent: this.userAgent,
    });

    /**  For reporting replies and comments */
    details = this.message("Подробности");
    /** For report type  */
    report_type = z.enum(["spam", "offensive", "other"] as const);
}
const zodRequiredSchemaBase = new ZodRequiredSchemaBase();

//----------------------------------------------------------------------------------------------------------------------------------------------------------------
export const accountSectionSchemas = {
    explore_me: zodRequiredSchemaBase.void,
    set_email: zodRequiredSchemaBase.email,
    update_email: strictObject({
        new_email: zodRequiredSchemaBase.email,
        current_email: zodRequiredSchemaBase.email,
    }),
    update_password: strictObject({
        new_password: zodRequiredSchemaBase.account_password,
        repeat_new_password: zodRequiredSchemaBase.account_password,
        current_password: zodRequiredSchemaBase.account_password,
    }),
    update_username: zodRequiredSchemaBase.accountUsernameValidatorSchema,
    get_sessions: zodRequiredSchemaBase.void,
    terminate_other_sessions: zodRequiredSchemaBase.void,
    terminate_specific_session: zodRequiredSchemaBase.cuid("Айди сессии"),
    delete_account: zodRequiredSchemaBase.void,
};
/** Request Validator DTO Types */
export interface AccountSectionValidationSchemaType {
    explore_me: Z.infer<(typeof accountSectionSchemas)["explore_me"]>;
    update_email: Z.infer<(typeof accountSectionSchemas)["update_email"]>;
    set_email: Z.infer<(typeof accountSectionSchemas)["set_email"]>;
    update_password: Z.infer<(typeof accountSectionSchemas)["update_password"]>;
    update_username: Z.infer<(typeof accountSectionSchemas)["update_username"]>;
    get_sessions: Z.infer<(typeof accountSectionSchemas)["get_sessions"]>;
    terminate_other_sessions: Z.infer<(typeof accountSectionSchemas)["terminate_other_sessions"]>;
    terminate_specific_session: Z.infer<(typeof accountSectionSchemas)["terminate_specific_session"]>;
    delete_account: Z.infer<(typeof accountSectionSchemas)["delete_account"]>;
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
export const administratorSectionValidatorSchemas = {
    get_all_users: zodRequiredSchemaBase.void,
};

/** Request Validator DTO Types */
export interface AdministratorSectionValidationSchemaType {
    get_all_users: Z.infer<(typeof administratorSectionValidatorSchemas)["get_all_users"]>;
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
export const authenticationSectionSchemas = {
    logout: zodRequiredSchemaBase.void,
    registration: strictObject({
        nickname: z.optional(
            z.preprocess((val: string): string | undefined => {
                return typeof val === "string" && val.trim() === "" ? undefined : val;
            }, zodRequiredSchemaBase.profileNickname.optional()),
        ),
        username: zodRequiredSchemaBase.accountUsernameValidatorSchema,
        email: zodRequiredSchemaBase.email.optional(),
        password: zodRequiredSchemaBase.account_password,
        password_repeat: zodRequiredSchemaBase.account_password,
    }),

    /** Check the current session */
    check_session: zodRequiredSchemaBase.void,
    login_by_username: strictObject({
        username: zodRequiredSchemaBase.accountUsernameValidatorSchema,
        password: zodRequiredSchemaBase.account_password,
    }),
    /** For checking username for availability */
    check_username_availability: zodRequiredSchemaBase.accountUsernameValidatorSchema,

    login_by_email: strictObject({
        email: zodRequiredSchemaBase.email,
        password: zodRequiredSchemaBase.account_password,
    }),
};

/** Request Validator DTO Types */
export interface AuthenticationSectionValidatorSchemaType {
    logout: Z.infer<(typeof authenticationSectionSchemas)["logout"]>;
    registration: Z.infer<(typeof authenticationSectionSchemas)["registration"]>;
    check_session: Z.infer<(typeof authenticationSectionSchemas)["check_session"]>;
    login_by_email: Z.infer<(typeof authenticationSectionSchemas)["login_by_email"]>;
    login_by_username: Z.infer<(typeof authenticationSectionSchemas)["login_by_username"]>;

    check_username_availability: Z.infer<(typeof authenticationSectionSchemas)["check_username_availability"]>;
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

export const replyForCommentSectionValidatorSchemas = {
    get_1_reply_by_its_id: zodRequiredSchemaBase.reply_id,

    get_replies_by_comment_id: strictObject({
        page: zodRequiredSchemaBase.pageNumber,
        limit: zodRequiredSchemaBase.pageSize,
        comment_id: zodRequiredSchemaBase.comment_id,
    }),
    create_reply: strictObject({
        comment_id: zodRequiredSchemaBase.comment_id,
        content: zodRequiredSchemaBase.message("Ответ на комментарий"),
    }),

    update_reply: strictObject({
        content: zodRequiredSchemaBase.message("Новый ответ"),
        reply_id: zodRequiredSchemaBase.reply_id,
    }),
    delete_reply: zodRequiredSchemaBase.reply_id,

    report_reply: strictObject({
        reply_id: zodRequiredSchemaBase.reply_id,
        details: zodRequiredSchemaBase.details,
        type: zodRequiredSchemaBase.report_type,
    }),

    add_like: zodRequiredSchemaBase.reply_id,

    add_dislike: zodRequiredSchemaBase.reply_id,

    delete_like: zodRequiredSchemaBase.reply_id,

    delete_dislike: zodRequiredSchemaBase.reply_id,
};

/** Request Validator DTO Types */
export interface ReplyForCommentSectionValidationSchemaType {
    get_1_reply_by_its_id: Z.infer<(typeof replyForCommentSectionValidatorSchemas)["get_1_reply_by_its_id"]>;
    get_replies_by_comment_id: Z.infer<(typeof replyForCommentSectionValidatorSchemas)["get_replies_by_comment_id"]>;
    create_reply: Z.infer<(typeof replyForCommentSectionValidatorSchemas)["create_reply"]>;
    update_reply: Z.infer<(typeof replyForCommentSectionValidatorSchemas)["update_reply"]>;
    delete_reply: Z.infer<(typeof replyForCommentSectionValidatorSchemas)["delete_reply"]>;
    report_reply: Z.infer<(typeof replyForCommentSectionValidatorSchemas)["report_reply"]>;
    add_like: Z.infer<(typeof replyForCommentSectionValidatorSchemas)["add_like"]>;
    add_dislike: Z.infer<(typeof replyForCommentSectionValidatorSchemas)["add_dislike"]>;
    delete_like: Z.infer<(typeof replyForCommentSectionValidatorSchemas)["delete_like"]>;
    delete_dislike: Z.infer<(typeof replyForCommentSectionValidatorSchemas)["delete_dislike"]>;
}

//---------------------------------------------------------------------------------------------------------------------------------

export const commentToAnimeSectionValidatorSchemas = {
    create: strictObject({
        anime_id: zodRequiredSchemaBase.animeId,
        content: zodRequiredSchemaBase.message("Комментарий"),
    }),
    get_all_for_anime: strictObject({
        page: zodRequiredSchemaBase.pageNumber,
        limit: zodRequiredSchemaBase.pageSize,
        anime_id: zodRequiredSchemaBase.animeId,
    }),
    /** new 2025.11.15 */
    all_my_comments: strictObject({
        page: zodRequiredSchemaBase.pageNumber,
        limit: zodRequiredSchemaBase.pageSize,
    }),
    /** new 2025.11.15 */
    all_for_public_profile: strictObject({
        page: zodRequiredSchemaBase.pageNumber,
        username: zodRequiredSchemaBase.accountUsernameValidatorSchema,
        limit: zodRequiredSchemaBase.pageSize,
    }),

    update_comment: strictObject({
        new_content: zodRequiredSchemaBase.message("Новый комментарий"),
        comment_id: zodRequiredSchemaBase.comment_id,
    }),

    delete_comment: zodRequiredSchemaBase.comment_id,

    report: strictObject({
        comment_id: zodRequiredSchemaBase.comment_id,
        details: zodRequiredSchemaBase.details,
        type: zodRequiredSchemaBase.report_type,
    }),
    /** modified 2025.11.24  */
    add_like: zodRequiredSchemaBase.comment_id,
    add_dislike: zodRequiredSchemaBase.comment_id,

    delete_like: zodRequiredSchemaBase.comment_id,
    delete_dislike: zodRequiredSchemaBase.comment_id,
};
/** Request Validator DTO Types */
export interface CommentToAnimeSectionValidationSchemaType {
    create: Z.infer<(typeof commentToAnimeSectionValidatorSchemas)["create"]>;
    get_all_for_anime: Z.infer<(typeof commentToAnimeSectionValidatorSchemas)["get_all_for_anime"]>;
    update_comment: Z.infer<typeof commentToAnimeSectionValidatorSchemas.update_comment>;
    delete_comment: Z.infer<(typeof commentToAnimeSectionValidatorSchemas)["delete_comment"]>;
    report: Z.infer<(typeof commentToAnimeSectionValidatorSchemas)["report"]>;
    all_my_comments: Z.infer<(typeof commentToAnimeSectionValidatorSchemas)["all_my_comments"]>;
    all_for_public_profile: Z.infer<(typeof commentToAnimeSectionValidatorSchemas)["all_for_public_profile"]>;

    add_like: Z.infer<(typeof commentToAnimeSectionValidatorSchemas)["add_like"]>;
    add_dislike: Z.infer<(typeof commentToAnimeSectionValidatorSchemas)["add_dislike"]>;
    delete_like: Z.infer<(typeof commentToAnimeSectionValidatorSchemas)["delete_like"]>;
    delete_dislike: Z.infer<(typeof commentToAnimeSectionValidatorSchemas)["delete_dislike"]>;
}

//------------------------------------------------------------------------------------------------------------------------------------------------------------------

export const voteToAnimeSectionSchemas = {
    explore_likes: zodRequiredSchemaBase.void,
    explore_dislikes: zodRequiredSchemaBase.void,
    view_vote_on_anime: zodRequiredSchemaBase.animeId,
    add_like_to_anime: zodRequiredSchemaBase.animeId,
    delete_like_from_anime: zodRequiredSchemaBase.animeId,
    add_dislike_to_anime: zodRequiredSchemaBase.animeId,
    delete_dislike_from_anime: zodRequiredSchemaBase.animeId,
};
/** Request Validator DTO Types */
export interface VoteToAnimeSectionValidationSchemaType {
    explore_likes: Z.infer<(typeof voteToAnimeSectionSchemas)["explore_likes"]>;
    explore_dislikes: Z.infer<(typeof voteToAnimeSectionSchemas)["explore_dislikes"]>;
    view_vote_on_anime: Z.infer<(typeof voteToAnimeSectionSchemas)["view_vote_on_anime"]>;
    add_like_to_anime: Z.infer<(typeof voteToAnimeSectionSchemas)["add_like_to_anime"]>;
    delete_like_from_anime: Z.infer<(typeof voteToAnimeSectionSchemas)["delete_like_from_anime"]>;
    add_dislike_to_anime: Z.infer<(typeof voteToAnimeSectionSchemas)["add_dislike_to_anime"]>;
    delete_dislike_from_anime: Z.infer<(typeof voteToAnimeSectionSchemas)["delete_dislike_from_anime"]>;
}

// ----------------------------------------------------------------------------------------------------------------------------------------------
export const animeMarkedCollection_schemas = {
    get_all_list: zodRequiredSchemaBase.void,
    explore_for_anime: zodRequiredSchemaBase.animeId,
    get_list_of_completed: zodRequiredSchemaBase.void,
    get_list_of_planned: zodRequiredSchemaBase.void,
    get_list_of_abandoned: zodRequiredSchemaBase.void,
    get_list_of_watching: zodRequiredSchemaBase.void,

    create_completed: zodRequiredSchemaBase.animeId,
    create_planned: zodRequiredSchemaBase.animeId,
    create_abandoned: zodRequiredSchemaBase.animeId,
    create_watching: zodRequiredSchemaBase.animeId,

    delete_completed: zodRequiredSchemaBase.animeId,
    delete_planned: zodRequiredSchemaBase.animeId,
    delete_abandoned: zodRequiredSchemaBase.animeId,
    delete_watching: zodRequiredSchemaBase.animeId,
};

/** Request Validator DTO Types */
export interface MarkedAnimeCollectionSectionValidationSchemaType {
    get_all_list: Z.infer<(typeof animeMarkedCollection_schemas)["get_all_list"]>;
    explore_for_anime: Z.infer<(typeof animeMarkedCollection_schemas)["explore_for_anime"]>;
    get_list_of_completed: Z.infer<(typeof animeMarkedCollection_schemas)["get_list_of_completed"]>;
    get_list_of_planned: Z.infer<(typeof animeMarkedCollection_schemas)["get_list_of_planned"]>;
    get_list_of_abandoned: Z.infer<(typeof animeMarkedCollection_schemas)["get_list_of_abandoned"]>;
    get_list_of_watching: Z.infer<(typeof animeMarkedCollection_schemas)["get_list_of_watching"]>;
    create_completed: Z.infer<(typeof animeMarkedCollection_schemas)["create_completed"]>;
    create_planned: Z.infer<(typeof animeMarkedCollection_schemas)["create_planned"]>;
    create_abandoned: Z.infer<(typeof animeMarkedCollection_schemas)["create_abandoned"]>;
    create_watching: Z.infer<(typeof animeMarkedCollection_schemas)["create_watching"]>;
    delete_completed: Z.infer<(typeof animeMarkedCollection_schemas)["delete_completed"]>;
    delete_planned: Z.infer<(typeof animeMarkedCollection_schemas)["delete_planned"]>;
    delete_abandoned: Z.infer<(typeof animeMarkedCollection_schemas)["delete_abandoned"]>;
    delete_watching: Z.infer<(typeof animeMarkedCollection_schemas)["delete_watching"]>;
}

//--------------------------------------------------------------------------------------------------------------------------------------

export const mediaRouteValidatorSchemas = {
    set_avatar: zodRequiredSchemaBase.void,
    update_avatar: zodRequiredSchemaBase.void,
    delete_avatar: zodRequiredSchemaBase.void,
};

/** Request Validator DTO Types */
export interface MediaRouteValidationSchemaType {
    set_avatar: Z.infer<typeof mediaRouteValidatorSchemas.set_avatar>;
    update_avatar: Z.infer<(typeof mediaRouteValidatorSchemas)["update_avatar"]>;
    delete_avatar: Z.infer<(typeof mediaRouteValidatorSchemas)["delete_avatar"]>;
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------
export const profileRouteValidatorSchemas = {
    /** View other profiles, no auth needed */
    other_profiles: zodRequiredSchemaBase.accountUsernameValidatorSchema,
    my_profile: zodRequiredSchemaBase.void,
    update_bio: zodRequiredSchemaBase.message("О себе"),
    update_name: zodRequiredSchemaBase.profileNickname,
};

/** Request Validator DTO Types */
export interface ProfileSectionValidationSchemaType {
    other_profiles: Z.infer<(typeof profileRouteValidatorSchemas)["other_profiles"]>;
    my_profile: Z.infer<(typeof profileRouteValidatorSchemas)["my_profile"]>;
    update_bio: Z.infer<(typeof profileRouteValidatorSchemas)["update_bio"]>;
    update_name: Z.infer<(typeof profileRouteValidatorSchemas)["update_name"]>;
}
