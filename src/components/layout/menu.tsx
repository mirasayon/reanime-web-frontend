"use client";
import { useState } from "react";
import { RxDropdownMenu } from "react-icons/rx";
import { Switch_interface_format_button, Switch_themes_button } from "../themes/switch_themes";
import { FiMenu } from "react-icons/fi";
const style = "p-2 ";
const __hovertw = "dark:hover:bg-black/50 hover:bg-blue-400/20";
export function UI_Menu() {
    const [is_open, set_is_open] = useState(false);
    return (
        <>
            <div className={`relative `}>
                <div>
                    <button
                        type="button"
                        className={`cursor-pointer p-3 ${is_open && " "}`}
                        onClick={(e) => {
                            e.preventDefault();
                            set_is_open((p) => !p);
                        }}
                    >
                        {is_open ? <RxDropdownMenu size={40} /> : <FiMenu size={40} />}
                    </button>
                </div>

                <div className={` ${is_open ? " " : " w-0 h-0"}   `}>
                    <div
                        className={`absolute  dark:bg-slate-800 bg-blue-200 ${
                            !is_open && "h-0 w-0"
                        } `}
                    >
                        <div className={`${is_open ? "" : "hidden"} flex flex-col `}>
                            <div className={`m-1 ${style}`}>
                                <Switch_themes_button />
                            </div>
                            {/* <div className={`m-1  ${style} `}>
                                <Switch_interface_format_button is_web={!!1} />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
