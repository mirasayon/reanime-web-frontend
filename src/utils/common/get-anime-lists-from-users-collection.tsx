import { ResServiceApi } from "#/integrators/resource-service/resource-service-main.integrator";
import type { IReady_Animes_DB } from "@reanime/resource-service/animes-db-types/ready-animes.types.js";

export const GetListAnimes = async ({
    liked_animes_ids,
    watching_animes_ids,
    inplan_animes_ids,
    viewed_animes_ids,
}: {
    liked_animes_ids: number[];
    watching_animes_ids: number[];
    inplan_animes_ids: number[];
    viewed_animes_ids: number[];
}) => {
    const watching_animes_kodiks: IReady_Animes_DB[] = [];
    for await (const element of watching_animes_ids) {
        const watching_: IReady_Animes_DB | null = await ResServiceApi.byid.any_by_id({ shikimori_id: element });
        watching_ && watching_animes_kodiks.push(watching_);
    }

    const viewed_animes: IReady_Animes_DB[] = [];
    for await (const element of viewed_animes_ids) {
        const watching_: IReady_Animes_DB | null = await ResServiceApi.byid.any_by_id({ shikimori_id: element });
        watching_ && viewed_animes.push(watching_);
    }

    const inplan_animes_kodiks: IReady_Animes_DB[] = [];
    for await (const element of inplan_animes_ids) {
        const watching_: IReady_Animes_DB | null = await ResServiceApi.byid.any_by_id({ shikimori_id: element });
        watching_ && inplan_animes_kodiks.push(watching_);
    }

    const liked_animes_kodiks: IReady_Animes_DB[] = [];

    for await (const element of liked_animes_ids) {
        const liked_: IReady_Animes_DB | null = await ResServiceApi.byid.any_by_id({ shikimori_id: element });
        liked_ && liked_animes_kodiks.push(liked_);
    }

    return {
        liked_animes_kodiks,
        inplan_animes_kodiks,
        viewed_animes,
        watching_animes_kodiks,
    };
};
