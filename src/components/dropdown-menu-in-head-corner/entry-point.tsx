"use client";
import { Avatar, AvatarFallback, AvatarImage } from "#/shadcn-ui/avatar";
import type { Dispatch, SetStateAction } from "react";
import { CgProfile } from "react-icons/cg";
import { MdCancelPresentation } from "react-icons/md";
type Props = {
    setterIsOpen: Dispatch<SetStateAction<boolean>>;
    loggedUser: {
        show_name: string;
        avatar: string | null;
    } | null;
    userServiceBaseUrl: string;
    isOpen: boolean;
};
export function DropdownMenuInHeaderEntryPoint({ loggedUser, setterIsOpen, isOpen, userServiceBaseUrl }: Props) {
    return (
        <div>
            <button
                type="button"
                className={`cursor-pointer p-2 ${isOpen && " "}`}
                onClick={(e) => {
                    e.preventDefault();
                    setterIsOpen((p) => !p);
                }}
            >
                {loggedUser ? (
                    <div className="">
                        <Avatar>
                            <AvatarImage
                                src={
                                    loggedUser.avatar
                                        ? userServiceBaseUrl + "/v1/profile/avatar/view/" + loggedUser.avatar
                                        : "/_assets/default-avatars/m.jpg"
                                }
                            />
                            <AvatarFallback>{loggedUser.show_name}</AvatarFallback>
                        </Avatar>
                    </div>
                ) : isOpen ? (
                    <MdCancelPresentation size={40} />
                ) : (
                    <CgProfile size={40} />
                )}
            </button>
        </div>
    );
}
