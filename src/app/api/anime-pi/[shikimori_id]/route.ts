import { getAnyByShikimoriFromKodikApi } from "#/libs/kodik/kodik-api-utils/get-any-by-id";
import { existsSync } from "node:fs";
import { writeFile } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";
import z from "zod";
import { serveFile } from "./send-file";
const animePosterImagePath = join(process.cwd(), "uploads");

const ShikimoriIdSchema = z.int().positive().min(1).max(10_000_000);

type GetParams = { params: Promise<{ shikimori_id: string }> };
const notFoundResponse = new Response("Not found", { status: 404 });
export async function GET(request: Request, { params }: GetParams) {
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
    const kodikMaterialData = (await getAnyByShikimoriFromKodikApi(_shikimori_id).catch(() => null))?.material_data || null;
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

