"use client";
import { BORDER } from "#/styles/style-constants";
import { useState } from "react";
type ShowAnimesScreenshotsComponentProps = { screenshots: string[]; title_of_anime: string };
export function ShowAnimesScreenshotsComponent({ title_of_anime, screenshots }: ShowAnimesScreenshotsComponentProps) {
    const [is_extended, set_is_extended] = useState(false);
    const img_height = 360 / 1.5; //240 // 720 / 2;
    const img_width = 640 / 1.5; // 1280 / 2;
    return (
        <div className={`p-2 ${BORDER} flex flex-col justify-center items-center`}>
            <div>
                <span className="text-lg px-3">Скриншоты</span>
                <button
                    type="button"
                    className="p-2 cursor-pointer bg-blue-500/50"
                    onClick={(e) => {
                        set_is_extended((s) => !s);
                    }}
                >
                    {!is_extended ? "Раскрыть" : "Скрыть"}
                </button>
            </div>
            <div
                className={`flex flex-wrap overflow-hidden scrollbar   ease-in-out duration-400 ${is_extended ? "h-max" : "h-0"}`}
            >
                {screenshots.map((img_url, ind) => {
                    const alt_string: string = `кадры от ${title_of_anime}, N-${ind + 1}`;
                    return (
                        <img
                            className="p-2 object-contain"
                            height={img_height}
                            key={img_url}
                            width={img_width}
                            src={img_url}
                            alt={alt_string}
                        />
                    );
                })}
            </div>
        </div>
    );
}
