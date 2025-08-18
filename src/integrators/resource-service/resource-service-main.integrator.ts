import { ResService_InternalStatic } from "./get-internals-static-datas.integrator";
import { ResService_Categories } from "./categories";
import { by_genre } from "./get-animes-list-for-inputted-genre.integrator";
import { resourceServiceSearchForAnimeByQueryString } from "./resource-service-search-for-anime-by-query-string.integrator";
import { FindByIds } from "./resource-service-get-by-id.integrator";
/**
 * Resource Service integrator class
 */
export const ResServiceApi = new (class ReanimeAPIClass {
    by_genre = by_genre;
    byid = FindByIds;
    search = resourceServiceSearchForAnimeByQueryString;
    categories = ResService_Categories;
    internals = ResService_InternalStatic;
})();
