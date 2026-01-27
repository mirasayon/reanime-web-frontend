import Link from "next/link";
import { FaRegRegistered } from "react-icons/fa6";
import { MdOutlineLogin } from "react-icons/md";
import { DASHBOARD_LINKS_STYLE } from "./for-logged-users";

export function LoginAndRegisterLinksAtAvatarPlace() {
    return (
        <div className="text-sm flex flex-col justify-between gap-2">
            <Link className={DASHBOARD_LINKS_STYLE} href="/auth/login">
                <MdOutlineLogin size={25} fill={"white"} />
                <span className="p-1 text-center">Войти</span>
            </Link>
            <Link className={DASHBOARD_LINKS_STYLE} href="/auth/register">
                <FaRegRegistered size={25} fill={"white"} />

                <span className="p-1 text-center">Зарегистрироваться</span>
            </Link>
        </div>
    );
}
