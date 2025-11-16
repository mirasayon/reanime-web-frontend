import { z } from "zod";
declare const schemas: {
    get_all_list: z.ZodUndefined;
    explore_for_anime: z.ZodCoercedNumber<unknown>;
    get_list_of_completed: z.ZodUndefined;
    get_list_of_planned: z.ZodUndefined;
    get_list_of_abandoned: z.ZodUndefined;
    get_list_of_watching: z.ZodUndefined;
    create_completed: z.ZodCoercedNumber<unknown>;
    create_planned: z.ZodCoercedNumber<unknown>;
    create_abandoned: z.ZodCoercedNumber<unknown>;
    create_watching: z.ZodCoercedNumber<unknown>;
    delete_completed: z.ZodCoercedNumber<unknown>;
    delete_planned: z.ZodCoercedNumber<unknown>;
    delete_abandoned: z.ZodCoercedNumber<unknown>;
    delete_watching: z.ZodCoercedNumber<unknown>;
};
export { schemas as animeMarkedCollection_schemas };
export type Schemas = typeof schemas;
export declare namespace dto {
    type get_all_list = z.infer<Schemas["get_all_list"]>;
    type explore_for_anime = z.infer<Schemas["explore_for_anime"]>;
    type get_list_of_completed = z.infer<Schemas["get_list_of_completed"]>;
    type get_list_of_planned = z.infer<Schemas["get_list_of_planned"]>;
    type get_list_of_abandoned = z.infer<Schemas["get_list_of_abandoned"]>;
    type get_list_of_watching = z.infer<Schemas["get_list_of_watching"]>;
    type create_completed = z.infer<Schemas["create_completed"]>;
    type create_planned = z.infer<Schemas["create_planned"]>;
    type create_abandoned = z.infer<Schemas["create_abandoned"]>;
    type create_watching = z.infer<Schemas["create_watching"]>;
    type delete_completed = z.infer<Schemas["delete_completed"]>;
    type delete_planned = z.infer<Schemas["delete_planned"]>;
    type delete_abandoned = z.infer<Schemas["delete_abandoned"]>;
    type delete_watching = z.infer<Schemas["delete_watching"]>;
}
//# sourceMappingURL=marked-anime-collection.validator.routes.d.ts.map