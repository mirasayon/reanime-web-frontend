import { format } from "date-fns/format";
import { Logger } from "log-it-colored";
import { type NextRequest, NextResponse, userAgent } from "next/server";
/**
 * Proxy (middleware) for logging user device datas to server.
 */
export function proxy(request: NextRequest) {
    try {
        const nowTime = format(new Date(), "HH:mm:ss dd.MM.yyyy");
        const { device, browser, isBot, cpu, os } = userAgent(request);

        // device.type can be: 'mobile', 'tablet', 'console', 'smarttv',
        // 'wearable', 'embedded', or undefined (for desktop browsers)
        const viewport = device.type || "desktop";

        Logger.slate(
            "Bwr: ",
            browser.name,
            ";Vp: ",
            viewport,
            ";bot: ",
            isBot,
            ";Sys: ",
            cpu.architecture + "/" + os.name + " v" + os.version,
            ":",
            nowTime,
            "= " + request.url,
        );
        return NextResponse.next();
    } catch (error) {
        Logger.slate("Error while logging user device datas: ", error);
        return NextResponse.next();
    }
}
export const config = {
    matcher: [
        "/anime/:path*",
        "/",
        "/user/:path*",
        "/right/:path*",
        "/about/:path*",
        "/genres/:path*",
        "/search/:path*",
    ],
};
