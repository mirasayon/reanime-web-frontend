import type { NextConfig } from "next";
export default {
    devIndicators: {
        position: "bottom-left",
    },
    experimental: {
        serverActions: {
            bodySizeLimit: "20mb",
        },
    },
    allowedDevOrigins: [],
    poweredByHeader: false,
} satisfies NextConfig;
