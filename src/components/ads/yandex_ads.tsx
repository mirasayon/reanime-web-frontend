import { EnvConfig } from "#/configs/env";
import Script from "next/script";
import type { JSX } from "react";
/** Class for all Yendex Ads */
class AdsRSYAClass {
    /** Ads init */
    InitHead = (): JSX.Element | undefined => {
        if (!EnvConfig.mode.prod) {
            return;
        }
        return (
            <>
                <Script id="InitHead" strategy="beforeInteractive">
                    {" window.yaContextCb = window.yaContextCb || []; "}
                </Script>
                <Script
                    id="InitHead_script"
                    src="https://yandex.ru/ads/system/context.js"
                    async={true}
                    strategy="beforeInteractive"
                />
            </>
        );
    };

    FeedAds = ({ is_dark }: { is_dark?: boolean }): JSX.Element | undefined => {
        if (!EnvConfig.mode.prod) {
            return;
        }
        return (
            <div className={" h-[30%] m-2 border-emerald-500 border-2 "}>
                {/* <!-- Yandex.RTB R-A-12114109-1 --> */}
                <div id="yandex_rtb_R-A-12114109-1" />
                <Script id="show-FeedAds" strategy="afterInteractive">
                    {`
	  					window.yaContextCb.push(() => {
							Ya.Context.AdvManager.render({
								blockId: "R-A-12114109-1",
								renderTo: "yandex_rtb_R-A-12114109-1",
								type: "feed",
							});
						});
	 				`}
                </Script>
            </div>
        );
    };
    /** Bottom block of advertising For Desktops */
    PCFLoorAds = ({ is_dark }: { is_dark: boolean }): JSX.Element | undefined => {
        if (!EnvConfig.mode.prod) {
            return;
        }
        const block_id = is_dark ? "R-A-12114109-2" : "R-A-12114109-7";
        return (
            <Script id="PCFLoorAds" strategy="afterInteractive">
                {`
					window.yaContextCb.push(() => {
						Ya.Context.AdvManager.render({
							blockId: "${block_id}",
							type: "floorAd",
							platform: "desktop",
						});
					});
				`}
            </Script>
        );
    };
    /** Bottom block of advertising For phones */
    MobileFloorAds = ({ is_dark }: { is_dark: boolean }): JSX.Element | undefined => {
        if (!EnvConfig.mode.prod) {
            return;
        }
        const bid = is_dark ? "R-A-12114109-8" : "R-A-12114109-3";
        return (
            <Script id="MobileFloorAds" strategy="afterInteractive">
                {`
					window.yaContextCb.push(() => {
						Ya.Context.AdvManager.render({
							blockId: "${bid}",
							type: "floorAd",
							platform: "touch",
						});
					});
				`}
            </Script>
        );
    };
    UniversalBanner = ({
        className = "",
        is_dark,
    }: {
        is_dark: boolean;
        className?: string;
    }): JSX.Element | undefined => {
        if (!EnvConfig.mode.prod) {
            return;
        }
        const yaid = is_dark
            ? { div: "yandex_rtb_R-A-12114109-4", bid: "R-A-12114109-4" }
            : { bid: "R-A-12114109-9", div: "yandex_rtb_R-A-12114109-9" };
        return (
            <div className="p-2">
                <div id={yaid.div} className={` ${className} `} />
                <Script id="UniversalCommonBanner" strategy="afterInteractive">
                    {`
						window.yaContextCb.push(() => {
							Ya.Context.AdvManager.render({
								blockId: "${yaid.bid}",
								renderTo: "${yaid.div}",
							});
						});
					`}
                </Script>
            </div>
        );
    };
    /** Banner Used in Frames */
    BannerInFrames = ({ is_dark }: { is_dark: boolean }) => {
        if (!EnvConfig.mode.prod) {
            return;
        }
        const yaid = is_dark
            ? { div: "yandex_rtb_R-A-12114109-6", bid: "R-A-12114109-6" }
            : { bid: "R-A-12114109-10", div: "yandex_rtb_R-A-12114109-10" };

        return (
            <>
                {/* <!-- Yandex.RTB R-A-12114109-6 --> */}
                <div id={yaid.div} />
                <Script id="BannerInFrames" strategy="afterInteractive">
                    {`
						window.yaContextCb.push(() => {
							Ya.Context.AdvManager.render({
								blockId: "${yaid.bid}",
								renderTo: "${yaid.div}",
							});
						});
					`}
                </Script>
            </>
        );
    };
}
/** All Yandex Ads */
export const AdsRSYA = new AdsRSYAClass();
