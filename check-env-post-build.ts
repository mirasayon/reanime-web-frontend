import { checkProcessEnv } from "./src/configs/checker-env.utils.ts";
import { Logger, chalk } from "log-it-colored";
import { type TypeRequiredEnvVarbs, required_env_variables } from "./src/configs/needed-env-varbs.constants.ts";
const _env = await checkProcessEnv<TypeRequiredEnvVarbs>(required_env_variables);
Logger.raw(`Environment config is ok. Mode: ${chalk.blueBright(_env.NODE_ENV)}`);
