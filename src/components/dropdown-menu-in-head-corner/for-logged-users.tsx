import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { Logout_user } from "../auth/log-out.user-interface";

export function Avatar_Dashboard({ username }: { username: string }) {
    const styles = () => `flex justify-between text-center hover:bg-blue-800/40 rounded cursor-pointer p-1 border-2`;
    return (
        <div className=" flex flex-col justify-between gap-2">
            <Link className={styles()} href={`/user/${username}`}>
                <CgProfile size={40} fill={"white"} />
                <span className="p-2 text-center">Профиль</span>
            </Link>
            <Logout_user />
        </div>
    );
}
