"use client";
import { Suspense, useState } from "react";
import { Switch_themes_button } from "../themes/switch_themes";
import { FiMenu } from "react-icons/fi";
import { MdCancelPresentation } from "react-icons/md";
export function UI_Menu() {
    const [is_open, set_is_open] = useState(false);
    return (
        <Suspense fallback={<span>Загрузка...</span>}>
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
                        {is_open ? <MdCancelPresentation size={40} /> : <FiMenu size={40} />}
                    </button>
                </div>

                <div className={` ${is_open ? " " : " w-0 h-0"}   `}>
                    <div className={`absolute  dark:bg-slate-800 bg-blue-200 ${!is_open && "h-0 w-0"} `}>
                        <div className={`${is_open ? "" : "hidden"} flex flex-col `}>
                            <div className={"m-1 p-2"}>
                                <Switch_themes_button />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Suspense>
    );
}
