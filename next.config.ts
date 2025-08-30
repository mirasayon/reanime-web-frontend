import type { NextConfig } from "next";
const animePath = "/anime/:path*";
export default {
    images: {
        remotePatterns: [new URL("https://shikimori.one/system/mangas/original/**")],
    },
    async redirects() {
        return [
            {
                source: "/series/:path*",
                destination: animePath,
                permanent: true,
            },
            {
                source: "/movie/:path*",
                destination: animePath,
                permanent: true,
            },
            {
                source: "/serial/:path*",
                destination: animePath,
                permanent: true,
            },

            {
                source: "/m/:path*",
                destination: animePath,
                permanent: true,
            },
            {
                source: "/s/:path*",
                destination: animePath,
                permanent: true,
            },
        ];
    },
    devIndicators: {
        position: "bottom-left",
    },
    experimental: {
        serverActions: {
            bodySizeLimit: "20mb",
        },
    },
    allowedDevOrigins: [
        // "localhost", // covers http://localhost:3000
        "192.168.0.105", // covers http://192.168.0.105:3000
    ],
    poweredByHeader: false,
} satisfies NextConfig;

