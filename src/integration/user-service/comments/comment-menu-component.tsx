"use client";
import { useState, type Dispatch, type JSX, type SetStateAction } from "react";
import { PiDotsThreeOutline } from "react-icons/pi";
import type { AuthenticatorType } from "../auth/cookie-authenticator.integrator";
import { MainDeleteCommentComponent } from "./delete-component";
import { EditCommentComponent } from "./edit-the-component";

export function MenuCommentComponent({
    comment_id,
    current_profile,
    animeId,
    setFunction,
}: {
    animeId: number;
    setFunction: Dispatch<SetStateAction<boolean>>;
    userServerBaseUrl: string;
    comment_id: string;
    current_profile: AuthenticatorType;
}): JSX.Element {
    const [show_options, setShowOptionsMenu] = useState<boolean>(false);

    return (
        <div>
            <PiDotsThreeOutline
                className="m-2 cursor-pointer"
                onClick={(e) => {
                    e.preventDefault();
                    return setShowOptionsMenu((e) => !e);
                }}
                size={20}
            />
            {show_options && (
                <div className=" flex flex-col p-2 gap-2 bg-slate-700/50 dark:bg-slate-500/50 absolute">
                    <MainDeleteCommentComponent
                        {...{
                            comment_id,
                            current_profile,
                            animeId,
                            setShowOptionsMenu,
                        }}
                    />
                    <EditCommentComponent
                        {...{ setFunction, setShowOptionsMenu }}
                    />
                </div>
            )}
        </div>
    );
}
