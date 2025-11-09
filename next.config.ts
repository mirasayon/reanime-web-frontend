import type { NextConfig } from "next";
export default {
    images: {
        remotePatterns: [new URL("https://shikimori.one/system/mangas/original/**")],
    },
    //http://192.168.0.105:3642/v1/profile/avatar/view/mirasayon
    devIndicators: {
        position: "bottom-left",
    },
    experimental: {
        serverActions: {
            bodySizeLimit: "20mb",
        },
    },

    allowedDevOrigins: ["192.168.0.105"],
    poweredByHeader: false,
} satisfies NextConfig;
