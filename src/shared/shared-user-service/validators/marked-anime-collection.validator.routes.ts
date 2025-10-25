import { UtilitySchemas } from "./utils/common";
import { z } from "zod";
const schemas = new (class AnimeMarkedCollection_ValidatorSchemas {
    get_all_list = UtilitySchemas.void;
    explore_for_anime = UtilitySchemas.anime_id;
    get_list_of_completed = UtilitySchemas.void;
    get_list_of_planned = UtilitySchemas.void;
    get_list_of_abandoned = UtilitySchemas.void;
    get_list_of_watching = UtilitySchemas.void;

    create_completed = UtilitySchemas.anime_id;
    create_planned = UtilitySchemas.anime_id;
    create_abandoned = UtilitySchemas.anime_id;
    create_watching = UtilitySchemas.anime_id;

    delete_completed = UtilitySchemas.anime_id;
    delete_planned = UtilitySchemas.anime_id;
    delete_abandoned = UtilitySchemas.anime_id;
    delete_watching = UtilitySchemas.anime_id;
})();
export { schemas as animeMarkedCollection_schemas };

export type Schemas = typeof schemas;

/** Request Validator DTO Types */
export namespace dto {
    export type get_all_list = z.infer<Schemas["get_all_list"]>;
    export type explore_for_anime = z.infer<Schemas["explore_for_anime"]>;
    export type get_list_of_completed = z.infer<Schemas["get_list_of_completed"]>;
    export type get_list_of_planned = z.infer<Schemas["get_list_of_planned"]>;
    export type get_list_of_abandoned = z.infer<Schemas["get_list_of_abandoned"]>;
    export type get_list_of_watching = z.infer<Schemas["get_list_of_watching"]>;
    export type create_completed = z.infer<Schemas["create_completed"]>;
    export type create_planned = z.infer<Schemas["create_planned"]>;
    export type create_abandoned = z.infer<Schemas["create_abandoned"]>;
    export type create_watching = z.infer<Schemas["create_watching"]>;
    export type delete_completed = z.infer<Schemas["delete_completed"]>;
    export type delete_planned = z.infer<Schemas["delete_planned"]>;
    export type delete_abandoned = z.infer<Schemas["delete_abandoned"]>;
    export type delete_watching = z.infer<Schemas["delete_watching"]>;
}
