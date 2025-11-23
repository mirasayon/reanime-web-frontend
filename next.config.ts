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
    allowedDevOrigins: ["192.168.0.105"],
    poweredByHeader: false,
} satisfies NextConfig;
