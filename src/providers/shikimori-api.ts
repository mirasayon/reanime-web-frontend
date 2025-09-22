import ms from "ms";
import { setTimeout } from "node:timers/promises";
import { ShikimoriApi } from "shikimoript";
import type { ApiFetcherType } from "shikimoript/types/custom-fetcher.js";

const fetcherShikimori: ApiFetcherType = async (url, options) => {
    await setTimeout(800);
    const res = await fetch(url, { ...options, next: { revalidate: ms("2d") } });
    if (res.status === 429) {
        await setTimeout(1500);
        const res = await fetch(url, { ...options, next: { revalidate: ms("2d") } });
        const txt = await res.text();
        return txt;
    }
    const txt = await res.text();
    return txt;
};

export const shikimoriApi = new ShikimoriApi({
    clientName: "Reanime.art internal services",
    fetcher: fetcherShikimori,
});

