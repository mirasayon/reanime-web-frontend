import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import type { JSX } from "react";

type Google_TagManagerProps = { gtm_id: string };
/** Tag manager */
export function Google_TagManager({ gtm_id }: Google_TagManagerProps): JSX.Element {
    return <GoogleTagManager gtmId={gtm_id} />;
}

//
type Google_AnalyticsProps = { gaid: string };
/** Google Analytics */
export function Google_Analytics({ gaid }: Google_AnalyticsProps): JSX.Element {
    return <GoogleAnalytics gaId={gaid} />;
}
