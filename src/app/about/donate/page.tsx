import { Linker } from "#/components/utilities/common/linker-utility-component";
import { constantDonationLinks } from "./constants.donate";
const linksStyles =
    "inline-flex items-center justify-center p-3 rounded-xl bg-slate-800 text-white font-bold hover:opacity-95 shadow-md dark:bg-slate-800 dark:text-white hover:text-white dark:hover:text-white";

export default function __SupportPage() {
    return (
        <div className="m-5 flex flex-col flex-wrap justify-center items-center bg-slate-200 dark:bg-slate-900 shadow-lg rounded-2xl p-6">
            <div>
                <video autoPlay muted playsInline>
                    <source src="/_assets/pages/donation/naruto-thanks-you.mp4" type="video/mp4" />
                </video>
            </div>
            <section className="max-w-5xl mx-auto px-6">
                <div className="flex flex-col justify-center gap-4">
                    <h2 className="text-lg font-medium">Поддержать проект</h2>
                    <p className="text-md dark:text-slate-300 text-slate-700">
                        Я делаю этот проект один и бесплатно. На сайте нет рекламы (кроме плеера Kodik, который от меня
                        не зависит). Любая финансовая поддержка помогает оплатить хостинг, домен и моё время.
                    </p>
                    <div>
                        <h2 className="text-lg font-medium">Через GitHub Sponsors</h2>
                        <Linker
                            href={constantDonationLinks.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={linksStyles}
                        >
                            Ссылка на мой GitHub профиль
                        </Linker>
                        <h2 className="text-lg font-medium">Через криптовалюты</h2>
                        <Linker
                            href={constantDonationLinks.crypto}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={linksStyles}
                        >
                            Ссылка на мои кошельки
                        </Linker>
                    </div>
                </div>
            </section>
        </div>
    );
}
