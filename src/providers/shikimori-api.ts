import ms from "ms";
import { ShikimoriApi } from "shikimoript";

export const shikimoriApi = new ShikimoriApi({
    clientName: "Reanime.art internal services",
    fetcher: async (url, options) => {
        const res = await fetch(url, { ...options, next: { revalidate: ms("2d") } });
        const txt = await res.text();
        return txt;
    },
});
