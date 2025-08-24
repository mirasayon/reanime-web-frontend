import { ResourseServiceFetcher } from "./resource-service-fetcher.integrator";
import type { ITypeShikimoriNextEpisodesCalendar } from "@reanime/resource-service/animes-db-types/shikimori-next-episode-calendar.types.js";
export async function GetShikimoriReleaseCalendar(): Promise<ITypeShikimoriNextEpisodesCalendar[]> {
    const json = await ResourseServiceFetcher<ITypeShikimoriNextEpisodesCalendar[]>(`/animedb/release_calendar`);
    return json;
}
