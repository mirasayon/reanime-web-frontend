import type { NextConfig } from "next";

export default {
    async redirects() {
        return [
            {
                source: "/movie/:path*",
                destination: "/m/:path*",
                permanent: true,
            },
            {
                source: "/serial/:path*",
                destination: "/s/:path*",
                permanent: true,
            },
        ];
    },
    devIndicators: {
        position: "bottom-left",
    },

    poweredByHeader: false,
} satisfies NextConfig;
