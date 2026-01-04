import { websiteConstants } from "#/configs/website-constants";
const FRONTEND_REPO_URL = "https://github.com/mirasayon/reanime-web-frontend";
const BACKEND_REPO_URL = "https://github.com/mirasayon/reanime-user-service";
const DONATE_URLS = [
    { label: "Buy Me a Coffee", url: "https://buymeacoffee.com/mirasayon" },
    { label: "Github Sponsors", url: "https://github.com/sponsors/mirasayon" },
];

export default function __AboutPage() {
    return (
        <main className=" py-12 px-6 sm:px-8 lg:px-24 bg-blue-100 dark:bg-slate-900 transition-colors">
            <div className="max-w-5xl mx-auto">
                <header className="mb-8">
                    <h1 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100">
                        О проекте — reanime.art
                    </h1>
                </header>

                <section className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
                    <p>
                        <strong>reanime.art</strong> — Open Source проект. Весь код хранится на GitHub в публичных
                        репозиториях. Изначально он создавался как учебный и экспериментальный, но со временем был
                        развёрнут в продакшене и продолжает развиваться.
                    </p>

                    <div className="rounded-lg border border-slate-200 dark:border-slate-800 p-4 bg-slate-100 dark:bg-transparent">
                        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">Где найти код</h2>
                        <ul className="space-y-2 list-disc list-inside text-slate-700 dark:text-slate-300">
                            <li>
                                <a
                                    href={websiteConstants.developer_github}
                                    className="underline hover:text-blue-500"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Мой аккаунт GitHub
                                </a>
                            </li>
                            <li>
                                <a
                                    href={FRONTEND_REPO_URL}
                                    className="underline hover:text-blue-500"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Фронтенд (этот репозиторий)
                                </a>
                            </li>
                            <li>
                                <a
                                    href={BACKEND_REPO_URL}
                                    className="underline hover:text-blue-500"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Бэкенд / Сервисы
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="rounded-lg border border-slate-200 dark:border-slate-800 p-4 bg-slate-100 dark:bg-transparent">
                        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                            Поддержка проекта
                        </h2>
                        <p className="text-slate-700 dark:text-slate-300">
                            Буду очень благодарен за любую поддержку — в разработке (issues, pull requests, идеи) и
                            финансово. Это помогает окупать хостинг и домен.
                        </p>

                        <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300 list-disc list-inside">
                            <li>
                                <strong>Код:</strong> открывайте issues или присылайте PR'ы в репозитории.
                            </li>
                            <ul className="mt-2 ml-4 space-y-1 list-disc list-inside">
                                <details className="mt-4 group">
                                    <summary className="cursor-pointer select-none font-medium text-slate-900 dark:text-slate-100">
                                        Поддержать проект
                                    </summary>{" "}
                                    <p className="text-sm">
                                        Если проект оказался полезным — вы можете поддержать его любым удобным способом:
                                    </p>
                                    <div>
                                        <video autoPlay muted playsInline className="w-80 p-2">
                                            <source
                                                src="/_assets/pages/donation/naruto-thanks-you.mp4"
                                                type="video/mp4"
                                            />
                                        </video>
                                    </div>
                                    <div className="mt-3 ml-4 space-y-2 text-slate-700 dark:text-slate-300">
                                        <ul className="list-disc list-inside space-y-1">
                                            {DONATE_URLS.map((d) => (
                                                <li key={d.url}>
                                                    <a
                                                        href={d.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="underline hover:text-blue-500"
                                                    >
                                                        {d.label}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </details>
                            </ul>
                        </ul>
                    </div>

                    <div className="rounded-lg border border-slate-200 dark:border-slate-800 p-4 bg-slate-100 dark:bg-transparent">
                        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">Лицензия</h2>
                        <p className="text-slate-700 dark:text-slate-300">
                            Проект открыт под лицензией <strong>MIT</strong>
                        </p>
                    </div>

                    <div className="mt-6 text-slate-700 dark:text-slate-300">
                        <p>Спасибо за внимание — если хотите, помогите сделать проект лучше💜</p>
                    </div>
                </section>
            </div>
        </main>
    );
}
