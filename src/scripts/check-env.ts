import { Logger, chalk } from "log-it-colored";
import { validateEnvironment } from "safest-env";
import { envVarConfig } from "../configs/env-config.ts";
const _env = validateEnvironment(envVarConfig);
Logger.raw(`Environment config is ok. Current mode: ${chalk.blueBright(_env.NODE_ENV)}`);
