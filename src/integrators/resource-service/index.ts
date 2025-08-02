import { ResService_Core } from "./core";
import { ResService_InternalStatic } from "./internals-static";
import { ResService_Categories } from "./categories";

export const ResServiceApi = new (class ReanimeAPIClass {
    core = new ResService_Core();
    categories = ResService_Categories;
    internals = ResService_InternalStatic;
})();
