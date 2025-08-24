"use client";
import { type JSX, useState } from "react";
import { Switch_themes_button } from "../themes/switch_themes";
import { FiMenu } from "react-icons/fi";
import { MdCancelPresentation } from "react-icons/md";
export function UI_Menu(): JSX.Element {
    const [isOpen, setOpen] = useState(false);
    return (
        <div className={`flex flex-wrap  `}>
            <button
                type="button"
                className={`cursor-pointer p-2 `}
                onClick={(e) => {
                    e.preventDefault();
                    setOpen((p) => !p);
                }}
            >
                {isOpen ? <MdCancelPresentation size={30} /> : <FiMenu size={30} />}
            </button>

            <div
                className={`${!isOpen && "hidden"} flex flex-wrap `}
                onClick={(e) => {
                    e.preventDefault();
                    setOpen((p) => !p);
                }}
            >
                <Switch_themes_button />
            </div>
        </div>
    );
}
