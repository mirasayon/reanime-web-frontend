import { join } from "node:path";
import { dirnamePath } from "./dirname.ts";
import { removeFolder } from "./remove-folder.ts";
await removeFolder(join(dirnamePath, "..", ".next"));
