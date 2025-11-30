import { type Stats } from "node:fs";
import { extname } from "node:path";
import { readFile, stat } from "node:fs/promises";
import { contentType } from "mime-types";
const maxAgeSeconds = 86_400_0000; //10 days
export const serveFile = async ({
    fullPath,
    imgBuffer,
}: {
    fullPath?: string;
    imgBuffer?: Buffer<ArrayBufferLike>;
}) => {
    if (imgBuffer) {
        return new Response(Buffer.from(imgBuffer), {
            status: 200,
            headers: {
                "Cache-Control": `public, max-age=${maxAgeSeconds}, immutable`,
            },
        });
    }
    if (fullPath) {
        const _stat: Stats | null = await stat(fullPath).catch(() => null);
        if (!_stat || !_stat.isFile()) {
            return new Response("Not found", { status: 404 });
        }
        const mimet = contentType(extname(fullPath));
        if (!mimet) {
            return new Response("Not found", { status: 404 });
        }
        const etag = `W/"${_stat.size.toString(16)}-${_stat.mtimeMs.toString(
            16,
        )}"`;

        const bfr = await readFile(fullPath, {});

        return new Response(Buffer.from(bfr), {
            status: 200,
            headers: {
                "Content-Type": mimet,
                ETag: etag,
                "Last-Modified": _stat.mtime.toUTCString(),
                "Cache-Control": `public, max-age=${maxAgeSeconds}, immutable`,
            },
        });
    }
};
