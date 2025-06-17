import { default as mcss } from "./core/reusable.module.css";
import { default as global_styles } from "./global/layout.module.css";
export type ClassName = string;
export const rea_wrapper_border = mcss.rea_wrapper_border;
export const rea_docs_wrapper = mcss.docs;
export const rea_layout_globals = global_styles as {
    root_dark_app: ClassName;
    root_light_app: ClassName;
    root_light_web: ClassName;
    root_dark_web: ClassName;
};
