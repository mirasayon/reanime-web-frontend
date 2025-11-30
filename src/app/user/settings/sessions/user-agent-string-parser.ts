// ESM / TypeScript
import { UAParser } from "ua-parser-js";

export function parseUA(uaString: string) {
    const p = new UAParser(uaString);
    const browser = p.getBrowser(); // { name, version }
    const os = p.getOS(); // { name, version }
    const device = p.getDevice(); // { vendor, model, type }
    return {
        str: p.getUA(),
        browser: browser.name ?? null,
        browserVersion: browser.version ?? null,
        os: os.name ?? null,
        osVersion: os.version ?? null,
        deviceType: device.type ?? "desktop",
        deviceModel: device.model ?? null,
    };
}
