import { EnvConfig } from "#/configs/env";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
class GoogleAnalyticsClass {
    /** Tag manager */
    TagManager = () => {
        if (!EnvConfig.mode.prod) {
            return;
        }
        return <GoogleTagManager gtmId={EnvConfig.gtm_id} />;
    };
    /** Google Analytics */
    Analytics = () => {
        if (!EnvConfig.mode.prod) {
            return;
        }
        return <GoogleAnalytics gaId={EnvConfig.gaid} />;
    };
}
export const ReaGA = new GoogleAnalyticsClass();
