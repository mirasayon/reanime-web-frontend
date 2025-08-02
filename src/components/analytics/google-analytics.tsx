import { EnvConfig } from "#/configs/env";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

/** Tag manager */
export const Google_TagManager = () => {
    if (!EnvConfig.mode.prod) {
        return;
    }
    return <GoogleTagManager gtmId={EnvConfig.gtm_id} />;
};
/** Google Analytics */
export const Google_Analytics = () => {
    if (!EnvConfig.mode.prod) {
        return;
    }
    return <GoogleAnalytics gaId={EnvConfig.gaid} />;
};
