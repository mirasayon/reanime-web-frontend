import { existsSync } from "node:fs";
import { mkdir } from "node:fs/promises";
import { join, dirname } from "node:path";
/**
 * Ensures that the dirname of the inputted `path` does exist
 * @param paths paths
 * @returns joined path string
 */
export async function ensuredPathJoin<T extends string>(...paths: T[]): Promise<T> {
    const Path = join(...paths);
    if (!existsSync(Path)) {
        if (!Path.includes(".json")) {
            await mkdir(Path, { recursive: true });
        }
        if (Path.includes(".json")) {
            await mkdir(dirname(Path), { recursive: true });
        }
    }
    return Path as T;
}

