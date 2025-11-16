import { UtilitySchemas } from "./utils/common.js";
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
//# sourceMappingURL=marked-anime-collection.validator.routes.js.map