import { EnvConfig } from "#/configs/env";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { JSX } from "react";

/** Tag manager */
export const Google_TagManager = (): JSX.Element | null => {
    if (!EnvConfig.mode.prod) {
        return null;
    }
    return <GoogleTagManager gtmId={EnvConfig.gtm_id} />;
};
/** Google Analytics */
export const Google_Analytics = (): JSX.Element | null => {
    if (!EnvConfig.mode.prod) {
        return null;
    }
    return <GoogleAnalytics gaId={EnvConfig.gaid} />;
};
