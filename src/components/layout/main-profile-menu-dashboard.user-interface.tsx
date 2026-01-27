"use client";
import { useState } from "react";
import { SwitchThemesButtonComponent } from "../themes/switch_themes";
import { MdCancelPresentation } from "react-icons/md";
import { Palette } from "lucide-react";
export function ThemeSwitcher(): React.JSX.Element {
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
                {isOpen ? <MdCancelPresentation size={25} /> : <Palette size={25} />}
            </button>

            <div
                className={`${!isOpen && "hidden"} flex flex-wrap `}
                onClick={(e) => {
                    e.preventDefault();
                    setOpen((p) => !p);
                }}
            >
                <SwitchThemesButtonComponent />
            </div>
        </div>
    );
}
