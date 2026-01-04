import { BORDER } from "#/styles/style-constants";
import Link from "next/link";
export function Found_no_animes() {
    return (
        <div className="justify-center content-center text-center grid text-xl mb-40">
            <Link href="/" className="flex justify-center">
                <img src={"/_assets/page-not-found.png"} width={743 * 0.5} height={418 * 0.5} alt={"not found"} />
            </Link>
            <div>
                <p className="text-2xl">Ничего не найдено по вашему запросу.</p>
                <br />
                <Link
                    className={`no-underline dark:text-white hover:dark:bg-slate-700 text-black hover:bg-white
                    text-xl p-2.5  ${BORDER}  `}
                    href="/"
                >
                    Вернуться на главную страницу
                </Link>
            </div>
        </div>
    );
}
