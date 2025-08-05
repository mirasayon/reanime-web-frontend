import { ResService_InternalStatic } from "./internals-static";
import { ResService_Categories } from "./categories";
import { by_genre, byid } from "./genres";
import { search } from "./search";

export const ResServiceApi = new (class ReanimeAPIClass {
    by_genre = by_genre;
    byid = byid;
    search = search;
    categories = ResService_Categories;
    internals = ResService_InternalStatic;
})();
