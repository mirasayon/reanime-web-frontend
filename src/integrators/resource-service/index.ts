import { ResService_InternalStatic } from "./internals-static";
import { ResService_Categories } from "./categories";
import { by_genre } from "./genres";
import { search } from "./search";
import { FindByIds } from "./by-id";

export const ResServiceApi = new (class ReanimeAPIClass {
    by_genre = by_genre;
    byid = FindByIds;
    search = search;
    categories = ResService_Categories;
    internals = ResService_InternalStatic;
})();
