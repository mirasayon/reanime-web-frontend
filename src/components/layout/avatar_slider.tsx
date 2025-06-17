"use client";
import { Logout_user } from "#/components/layout/reusable";
import {
    Switch_interface_format_button,
    Switch_themes_button,
} from "#/components/themes/switch_themes";
import { sendMsgAtom } from "#/stores/g_messanger";
import { useAtom } from "jotai";
import Link from "next/link";
import { useState } from "react";

export function Avatar_slider({
    img_src,
    is_dark,
    is_web_format,
}: {
    is_dark: boolean;
    is_web_format: boolean;
    img_src: string | null;
}) {
    const [_slide, set_slide] = useState(false);
    const [_zone, set_zone] = useState(false);
    const [sendS, sendSet] = useAtom(sendMsgAtom);
    function serviceDown(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        sendSet({
            message:
                "Регистрация и логин пользователей временно приостаноавлена. Мы работаетаем над этим...",
        });
    }
    const style = `${
        is_dark ? "hover:border-blue-800 " : "hover:border-blue-800 "
    }   border-2  border-transparent`;
    const __hovertw = is_dark ? "hover:bg-black" : ("hover:bg-blue-400/20" as const);
    function UI_Parameters() {
        return (
            <>
                <div className={`m-1 flex ${style} ${__hovertw}`}>
                    <Switch_themes_button is_dark={is_dark} />
                </div>
                <div className={`m-1 flex ${style} ${__hovertw}`}>
                    <Switch_interface_format_button is_web={is_web_format} />
                </div>
            </>
        );
    }
    return (
        <div className="relative">
            <button
                className="m-2 "
                type={"button"}
                onClick={(e) => {
                    e.preventDefault();
                    set_slide((pv) => !pv);
                }}
            >
                {img_src ? (
                    <img
                        src={img_src}
                        alt="avatar"
                        className="rounded-sm w-[50px] h-[50px] object-cover"
                    />
                ) : (
                    <span
                        className={` p-2 flex rounded-sm border-4 ${
                            is_dark
                                ? "border-blue-600/80 hover:bg-blue-600"
                                : "border-blue-400/80 hover:bg-blue-400"
                        }`}
                    >
                        Войти
                    </span>
                )}
            </button>
            {_slide &&
                (img_src ? (
                    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
                    <div
                        className=" w-screen m-0 p-0 h-screen absolute top-0 right-0 bg-black/40"
                        onTouchStart={(_e) => set_zone((_pv) => false)}
                        onTouchMove={(_e) => set_zone((_pv) => false)}
                        onClick={(_e) => {
                            // e.preventDefault();
                            if (_zone === false) {
                                set_slide((_pv) => false);
                            }
                        }}
                    >
                        <div
                            className={` ${
                                is_dark ? "bg-slate-800" : "bg-slate-400"
                            } absolute  top-0 right-0 shadow-purple-400 shadow-md w-[200px] z-0 `}
                            onMouseEnter={(e) => {
                                e.preventDefault();
                                set_zone((_pv) => true);
                            }}
                            onFocus={(e) => {
                                e.preventDefault();
                                set_zone((_pv) => true);
                            }}
                            onTouchMove={(e) => {
                                e.preventDefault();
                                set_zone((_pv) => true);
                            }}
                            onMouseOver={(e) => {
                                e.preventDefault();
                                set_zone((_pv) => true);
                            }}
                            onMouseLeave={(e) => {
                                e.preventDefault();
                                set_zone((_pv) => false);
                            }}
                        >
                            <div className=" relative  h-[80vh] grid">
                                <div className={"   "}>
                                    <div className={" flex gap-2 flex-col"}>
                                        <Link href="/me" className={`m-1  ${style} ${__hovertw}`}>
                                            <div className="flex justify-between text-center">
                                                <img
                                                    src={img_src}
                                                    alt="avatar_image"
                                                    className="rounded-sm w-[30px] m-1 h-[30px] object-cover"
                                                />
                                                <span className="m-1 text-center">Профиль</span>
                                            </div>
                                        </Link>
                                        <UI_Parameters />
                                    </div>
                                </div>
                                <div className=" bottom-4 absolute ">
                                    <div className={` ${style} ${__hovertw}`}>
                                        <Logout_user />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div
                        className=" w-screen h-screen absolute top-0 right-0 bg-black/40"
                        onClick={(_e) => {
                            set_slide((_pv) => false);
                        }}
                    >
                        <div
                            className={` ${
                                is_dark ? "bg-slate-800" : "bg-slate-400"
                            } absolute  top-0 right-0 shadow-purple-400 shadow-md w-[200px] z-0 `}
                            onMouseEnter={(e) => {
                                e.preventDefault();
                                set_zone((_pv) => true);
                            }}
                            onMouseLeave={(e) => {
                                e.preventDefault();
                                set_zone((_pv) => false);
                            }}
                        >
                            <div className=" relative h-[80vh] grid">
                                <div className={"   "}>
                                    <div className={" flex gap-2 flex-col"}>
                                        <button
                                            type="button"
                                            onClick={serviceDown}
                                            className={`m-1 cursor-pointer flex justify-between text-center ${style} ${__hovertw}`}
                                        >
                                            <span className="m-1 text-center">Войти</span>
                                        </button>
                                        <button
                                            onClick={serviceDown}
                                            type="button"
                                            className={`m-1 cursor-pointer flex justify-between text-center ${style} ${__hovertw}`}
                                        >
                                            <span className="m-1 text-center">
                                                Зарегистрироваться
                                            </span>
                                        </button>
                                        <UI_Parameters />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
}
/**
 * 
 * 										<Link href="/auth/login" className={`m-1 flex justify-between text-center ${style} ${__hovertw}`}>
											<span className="m-1 text-center">Войти</span>
										</Link>
										<Link href="/auth/register" className={`m-1 flex justify-between text-center ${style} ${__hovertw}`}>
											<span className="m-1 text-center">Зарегистрироваться</span>
										</Link>
 */
