import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { LogoutUserAtHeaderComponent } from "../auth/log-out.user-interface";
import type { Dispatch, SetStateAction } from "react";

export function Avatar_Dashboard({
    username,
    setOpenFunction,
}: {
    username: string;
    setOpenFunction: Dispatch<SetStateAction<boolean>>;
}) {
    const styles = () =>
        `flex justify-between text-center hover:bg-blue-800/40 rounded cursor-pointer p-1 border-2`;
    return (
        <div className=" flex flex-col justify-between gap-2">
            <Link
                className={styles()}
                href={`/user/${username}`}
                onClick={(e) => {
                    e.preventDefault();
                    setOpenFunction(false);
                }}
            >
                <CgProfile size={40} fill={"white"} />
                <span className="p-2 text-center">Профиль</span>
            </Link>
            <div>
                <LogoutUserAtHeaderComponent
                    setOpenFunction={setOpenFunction}
                />
            </div>
        </div>
    );
}
