import * as process from 'node:process';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
globalThis['__dirname'] = path.dirname(fileURLToPath(import.meta.url));
import * as runtime from "@prisma/client/runtime/client";
import * as $Enums from "./enums.js";
import * as $Class from "./internal/class.js";
import * as Prisma from "./internal/prismaNamespace.js";
export * as $Enums from './enums.js';
export * from "./enums.js";
export const PrismaClient = $Class.getPrismaClientClass(__dirname);
export { Prisma };
//# sourceMappingURL=client.js.map