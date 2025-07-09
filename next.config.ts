import type { NextConfig } from "next";

export default {
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
    experimental: {},
    poweredByHeader: false,
} satisfies NextConfig;
