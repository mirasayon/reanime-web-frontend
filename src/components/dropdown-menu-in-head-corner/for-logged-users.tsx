import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { LogoutForHeaderComponent } from "../auth/logout-for-header-component";
export const DASHBOARD_LINKS_STYLE =
    "dark:border-white border-black my-1 w-full text-center hover:bg-blue-800/80 rounded cursor-pointer p-1 border-2  ";
export const DASHBOARD_LINKS_STYLE_RED_BORDER =
    "border-red-500 dark:border-red-500 hover:bg-red-500 my-1 w-full text-center rounded cursor-pointer p-1 border-2  ";
export function AvatarDashboardForLoggedInUser({ username }: { username: string }) {
    return (
        <div className="w-35 flex flex-col text-sm">
            <div className={DASHBOARD_LINKS_STYLE}>
                <Link href={`/user/${username}`} className=" flex justify-center items-center align-middle px-1 gap-1">
                    <CgProfile size={20} />
                    <span>Профиль</span>
                </Link>
            </div>
            <LogoutForHeaderComponent />
        </div>
    );
}
