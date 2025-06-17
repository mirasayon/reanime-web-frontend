import Link from "next/link";
import { rea_wrapper_border } from "#/styles/provider";
export function Found_no_animes({ is_dark }: { is_dark: boolean }) {
    return (
        <div className="justify-center content-center text-center grid text-xl mb-40">
            <Link href="/" className="flex justify-center">
                <img
                    src={"/_assets/404.png"}
                    width={743 * 0.5}
                    height={418 * 0.5}
                    alt={"not found"}
                />
            </Link>
            <div>
                <p className="text-2xl">Ничего не найдено по вашему запросу.</p>
                <br />
                <Link
                    className={`no-underline ${is_dark ? "text-white hover:bg-slate-700" : " text-black hover:bg-white"}  text-xl p-2.5  ${rea_wrapper_border}  `}
                    href="/"
                >
                    Вернуться на главную страницу
                </Link>
            </div>
        </div>
    );
}
