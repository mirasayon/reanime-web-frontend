import type { paginatedResponse } from "@reanime/resource-service/types/animes-db-types/paginated-responce-from-server.types.js";
import type { IReady_Animes_DB } from "@reanime/resource-service/types/animes-db-types/ready-animes.types.js";

export type paginated = paginatedResponse<IReady_Animes_DB>;
