"use client";

import { Avatar, AvatarFallback, AvatarImage } from "#/shadcn-ui/components/ui/avatar";
import type { Dispatch, SetStateAction } from "react";
import { CgProfile } from "react-icons/cg";
import { MdCancelPresentation } from "react-icons/md";
type Props = {
    setterIsOpen: Dispatch<SetStateAction<boolean>>;
    loggedUser: {
        show_name: string;
        avatar: string | null;
    } | null;
    isOpen: boolean;
};
export function DropdownMenuInHeaderEntryPoint({ loggedUser, setterIsOpen, isOpen }: Props) {
    return (
        <>
            <div>
                <button
                    type="button"
                    className={`cursor-pointer p-2 ${isOpen && " "}`}
                    onClick={(e) => {
                        e.preventDefault();
                        setterIsOpen((p) => !p);
                    }}
                >
                    {" "}
                    {loggedUser ? (
                        <div className="">
                            <Avatar>
                                <AvatarImage src={`https://media-service.reanime.art/storage/avatar/${loggedUser.avatar}`} />
                                <AvatarFallback>{loggedUser.show_name}</AvatarFallback>
                            </Avatar>
                            {/* <AvatarImage className="size-12 rounded-full" avatar={profile.avatar_url_hash} /> */}
                        </div>
                    ) : isOpen ? (
                        <MdCancelPresentation size={40} />
                    ) : (
                        <CgProfile size={40} />
                    )}
                </button>
            </div>
        </>
    );
}
