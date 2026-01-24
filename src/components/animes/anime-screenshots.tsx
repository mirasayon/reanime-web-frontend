"use client";

import { useEffect, useState } from "react";
import { BORDER } from "#/styles/style-constants";
import { getCookie, setCookie } from "cookies-next/client";

const IMG_HEIGHT = 360 / 1.5;
const IMG_WIDTH = 640 / 1.5;

const COOKIE_NAME = "anime_screenshots_disabled";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

type Props = {
    screenshots: string[];
    title_of_anime: string;
};

export function AnimesScreenshotsComponent({ title_of_anime, screenshots }: Props) {
    const [disabled, setDisabled] = useState<boolean>(true);

    useEffect(() => {
        setDisabled(getCookie(COOKIE_NAME) === "1");
    }, []);

    const toggleScreenshots = () => {
        const nextValue = !disabled;
        setCookie(COOKIE_NAME, nextValue ? "1" : "0", {
            maxAge: COOKIE_MAX_AGE,
            path: "/",
            httpOnly: false,
            secure: false,
            sameSite: "lax",
        });
        setDisabled(nextValue);
    };

    return (
        <div className={`p-4 ${BORDER}`}>
            <details open={!disabled}>
                <summary className="cursor-pointer select-none text-slate-900 dark:text-slate-100">Скриншоты</summary>
                <button
                    type="button"
                    onClick={toggleScreenshots}
                    className="mb-2 cursor-pointer text-slate-500/80 hover:underline"
                >
                    {disabled
                        ? "Нажмите, чтобы автоматически показывать скриншоты"
                        : "Нажмите, чтобы отключить автоматический показ скриншотов"}
                </button>
                <div className="flex flex-wrap overflow-hidden">
                    {screenshots.map((imgUrl, index) => (
                        <img
                            key={imgUrl}
                            src={imgUrl}
                            width={IMG_WIDTH}
                            height={IMG_HEIGHT}
                            className="p-2 object-contain"
                            alt={`Скриншот "${title_of_anime}", №${index + 1}`}
                            loading="lazy"
                        />
                    ))}
                </div>
            </details>
        </div>
    );
}
