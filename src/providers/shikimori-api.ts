import { ShikimoriApi } from "shikimoript";
import type { ApiFetcherType } from "shikimoript/types/custom-fetcher.d.ts";

const fetcherShikimori: ApiFetcherType = async (url, options) => {
    const res = await fetch(url, {
        ...options,
        next: { revalidate: 86_400_000 },
    });
    const txt = await res.text();
    return txt;
};

export const shikimoriApi = new ShikimoriApi({
    clientName: "Reanime.art internal services",
    fetcher: fetcherShikimori,
});
