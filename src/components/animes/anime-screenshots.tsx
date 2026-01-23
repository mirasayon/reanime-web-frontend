"use client";
import { BORDER } from "#/styles/style-constants";
import { getCookie, setCookie } from "cookies-next/client";
const imgHeight = 360 / 1.5;
const imgWidth = 640 / 1.5;
const COOKIE_NAME = "anime_screenshots_disabled";
type Props = { screenshots: string[]; title_of_anime: string };
export function AnimesScreenshotsComponent({ title_of_anime, screenshots }: Props) {
    const cookieValue = getCookie(COOKIE_NAME);
    const disabled = cookieValue === "1" ? false : true;
    return (
        <div className={"p-4 " + BORDER}>
            <button
                onClick={(event) => {
                    event.preventDefault();
                    setCookie(COOKIE_NAME, disabled ? "1" : "0", {
                        maxAge: 31_536_000_000,
                        path: "/",
                        httpOnly: false,
                        secure: false,
                    });
                    window?.location?.reload?.();
                }}
                type="button"
                className={"cursor-pointer hover:underline text-slate-500/80"}
            >
                {disabled
                    ? "Нажмите, чтобы видеть скриншоты всегда автоматически"
                    : "Нажмите, чтобы отключить автоматический показ скриншотов"}
            </button>
            <details open={!disabled}>
                <summary className="cursor-pointer select-none text-slate-900 dark:text-slate-100">Скриншоты</summary>

                <div className={"flex flex-wrap overflow-hidden scrollbar   ease-in-out duration-400"}>
                    {screenshots.map((imgUrl, ind) => {
                        return (
                            <img
                                className="p-2 object-contain"
                                height={imgHeight}
                                key={imgUrl}
                                width={imgWidth}
                                src={imgUrl}
                                alt={`Скриншот от ${title_of_anime}, N-${ind + 1}`}
                            />
                        );
                    })}
                </div>
            </details>
        </div>
    );
}
