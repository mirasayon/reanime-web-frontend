import type { ITypeShikimoriNextEpisodesCalendar } from "&rs/shikimori-next-episode-calendar.types";
import { ResourseServiceFetcher } from "./resource-service-fetcher.integrator";
export async function GetShikimoriReleaseCalendar(): Promise<ITypeShikimoriNextEpisodesCalendar[]> {
    const json = await ResourseServiceFetcher<ITypeShikimoriNextEpisodesCalendar[]>(`/animedb/release_calendar`);
    return json;
}

