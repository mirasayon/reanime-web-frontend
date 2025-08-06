import type { NextConfig } from "next";

export default {
    images: {
        remotePatterns: [new URL("https://media-service.reanime.art/storage/avatar/*")],
    },
    async redirects() {
        return [
            {
                source: "/serial/:path*",
                destination: "/s/:path*",
                permanent: true,
            },

            {
                source: "/m/:path*",
                destination: "/movie/:path*",
                permanent: true,
            },
            {
                source: "/s/:path*",
                destination: "/series/:path*",
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
        "localhost", // covers http://localhost:3000
        "192.168.0.105", // covers http://192.168.0.105:3000
    ],
    poweredByHeader: false,
} satisfies NextConfig;
