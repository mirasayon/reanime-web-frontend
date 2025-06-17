"use client";
import { sendMsgAtom } from "#/stores/g_messanger";
import { useAtom } from "jotai";
import { useEffect } from "react";
/** UI massanger */
export function Messanger({ is_dark = true }: { is_dark: boolean }) {
    const [msg, setMsg] = useAtom(sendMsgAtom);
    useEffect(() => {
        if (msg.message) {
            setTimeout(() => {
                setMsg({
                    message: "",
                });
            }, 2000);
        }
    }, [msg.message]);

    return (
        msg.message && (
            <div
                className={`duration-300 mt-2 right-0 transition-all ease-in-out flex w-max p-2 sticky bottom-[85%] rounded-xs ${is_dark ? "bg-violet-900" : "bg-slate-200 text-black"}  `}
            >
                <span className="">{msg.message}</span>
            </div>
        )
    );
}
//
