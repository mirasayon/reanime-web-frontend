import ms from "ms";
import { ShikimoriApi } from "shikimoript";
import type { ApiFetcherType } from "shikimoript/types/custom-fetcher.js";

const fetcherShikimori: ApiFetcherType = async (url, options) => {
    const res = await fetch(url, { ...options, next: { revalidate: ms("1d") } });
    const txt = await res.text();
    return txt;
};

export const shikimoriApi = new ShikimoriApi({
    clientName: "Reanime.art internal services",
    fetcher: fetcherShikimori,
});

