import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { LogoutUserAtHeaderComponent } from "../auth/log-out.user-interface";
export const styles5465 = `flex text-center hover:bg-blue-800/80 rounded cursor-pointer p-1 border`;
export function AvatarDashboardForLoggedInUser({
    username,
}: {
    username: string;
}) {
    return (
        <div className="w-30 flex flex-col justify-between gap-2">
            <Link className={styles5465} href={`/user/${username}`}>
                <CgProfile
                    size={20}
                    className="m-1 items-center"
                    fill={"white"}
                />
                <span className="p-1 items-center text-sm">Профиль</span>
            </Link>
            <LogoutUserAtHeaderComponent />
        </div>
    );
}
