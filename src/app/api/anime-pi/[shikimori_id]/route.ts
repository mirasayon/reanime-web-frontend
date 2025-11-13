import { getAnyByShikimoriFromKodikApi } from "#/libs/kodik/kodik-api-utils/get-any-by-id";
import { existsSync } from "node:fs";
import { writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import sharp from "sharp";
import { z } from "zod";
import { serveFile } from "./send-file";
import { fileURLToPath } from "node:url";
import { ensuredPathJoin } from "#app/api/utils/ensured-path-join.util";
const filename = fileURLToPath(import.meta.url);
const ShikimoriIdSchema = z.int().positive().min(1).max(10_000_000);
const rootPath = process.cwd();
// join(dirname(filename), "..", "..", "..", "..", "..", "..");
const animePosterImagePath = await ensuredPathJoin(rootPath, "uploads");

type GetParams = { params: Promise<{ shikimori_id: string }> };
const notFoundResponse = new Response("Not found", { status: 404 });
export async function GET(request: Request, { params }: GetParams) {
    // if (rootPath !== ) {
    //     console.error("Internal Server Error. Cannot find path: ", { rootPath, cwd: process.cwd() });
    //     return new Response("Internal Server Error", { status: 500 });
    // }
    const _params = await params;
    const shikimori_id = await ShikimoriIdSchema.safeParseAsync(Number(_params.shikimori_id));
    if (!shikimori_id.success) {
        return notFoundResponse;
    }
    const _shikimori_id = shikimori_id.data;
    const imgPath = join(animePosterImagePath, _shikimori_id + ".webp");
    if (existsSync(imgPath)) {
        return await serveFile({ fullPath: imgPath });
    }
    let kodikMaterialData = null;
    try {
        const res = await getAnyByShikimoriFromKodikApi(_shikimori_id);
        if (res && res.material_data) {
            kodikMaterialData = res.material_data;
        }
    } catch {}
    if (!kodikMaterialData) {
        return notFoundResponse;
    }

    const anyPoster = kodikMaterialData.anime_poster_url || kodikMaterialData.poster_url || null;
    if (!anyPoster) {
        return notFoundResponse;
    }
    const imgRes = await fetch(anyPoster);
    const buffer = await imgRes.arrayBuffer();
    const imgBuffer = await sharp(buffer).toFormat("webp", { quality: 15, effort: 1 }).toBuffer();
    await writeFile(imgPath, imgBuffer, {});
    return await serveFile({ imgBuffer });
}
