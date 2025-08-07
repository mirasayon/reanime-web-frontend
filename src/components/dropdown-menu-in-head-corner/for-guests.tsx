import Link from "next/link";
import { FaRegRegistered } from "react-icons/fa6";
import { MdOutlineLogin } from "react-icons/md";

export function Avatar_Login() {
    const styles = () => `flex justify-between text-center hover:bg-blue-800/40 rounded cursor-pointer p-1 border-2`;
    return (
        <div className=" flex flex-col justify-between gap-2">
            <Link className={styles()} href="/auth/login">
                <MdOutlineLogin size={40} fill={"white"} />
                <span className="p-2 text-center">Войти</span>
            </Link>

            <Link className={styles()} href="/auth/register">
                <FaRegRegistered size={40} fill={"white"} />

                <span className="p-2 text-center">Зарегистрироваться</span>
            </Link>
        </div>
    );
}
