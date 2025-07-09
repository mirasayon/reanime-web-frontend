import { rea_wrapper_border } from "#/styles/provider";
export function Found_no_animes() {
    return (
        <div className="justify-center content-center text-center grid text-xl mb-40">
            <a href="/" className="flex justify-center">
                <img
                    src={"/_assets/404.png"}
                    width={743 * 0.5}
                    height={418 * 0.5}
                    alt={"not found"}
                />
            </a>
            <div>
                <p className="text-2xl">Ничего не найдено по вашему запросу.</p>
                <br />
                <a
                    className={`no-underline dark:text-white hover:dark:bg-slate-700 text-black hover:bg-white
                    text-xl p-2.5  ${rea_wrapper_border}  `}
                    href="/"
                >
                    Вернуться на главную страницу
                </a>
            </div>
        </div>
    );
}
