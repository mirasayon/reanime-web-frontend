import { websiteConstants } from "#/configs/website-constants";
const FRONTEND_REPO_URL = "https://github.com/mirasayon/reanime-web-frontend";
const BACKEND_REPO_URL = "https://github.com/mirasayon/reanime-user-service";
const DONATE_URLS = [
    { label: "Buy Me a Coffee", url: "https://buymeacoffee.com/mirasayon" },
    { label: "Github Sponsors", url: "https://github.com/sponsors/mirasayon" },
];

export default function __AboutPage() {
    return (
        <main className="m-5 py-10 px-6 sm:px-4 lg:px-24 bg-blue-100 dark:bg-slate-900 transition-colors">
            <div className="max-w-5xl mx-auto">
                <header className="mb-4">
                    <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100">О проекте — reanime.art</h1>
                </header>

                <section className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
                    <p>
                        <strong>reanime.art</strong> — Open Source проект. Весь код хранится на GitHub. Изначально он
                        создавался как учебный и экспериментальный, но со временем был развёрнут в продакшене и
                        продолжает развиваться.
                    </p>

                    <div className="rounded-lg border border-slate-200 dark:border-slate-800 p-4 bg-slate-100 dark:bg-transparent">
                        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">Где найти код</h2>
                        <ul className="space-y-2 list-disc list-inside text-slate-700 dark:text-slate-300">
                            <li>
                                <a
                                    href={FRONTEND_REPO_URL}
                                    className="underline hover:text-blue-500"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Фронтенд
                                </a>
                            </li>
                            <li>
                                <a
                                    href={BACKEND_REPO_URL}
                                    className="underline hover:text-blue-500"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Бэкенд
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="rounded-lg border border-slate-200 dark:border-slate-800 p-4 bg-slate-100 dark:bg-transparent">
                        <h2 className="text-slate-700 dark:text-slate-300 font-semibold">
                            Буду очень благодарен за любую поддержку, в разработке и финансово
                        </h2>

                        <div className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
                            <p>
                                <strong>В разработке:</strong> открывайте issues или присылайте PR'ы в репозитории.
                            </p>
                            <details className="mt-4 ">
                                <summary className="cursor-pointer select-none font-medium text-slate-900 dark:text-slate-100">
                                    Финансово: можете поддержать его любым удобным способом:
                                </summary>

                                <video autoPlay muted playsInline className="w-80 p-2">
                                    <source src="/_assets/pages/donation/naruto-thanks-you.mp4" type="video/mp4" />
                                </video>
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
                        </div>
                    </div>
                    <div className="mt-6 text-slate-700 dark:text-slate-300">
                        <p>Спасибо за внимание и поддержку💜</p>
                    </div>
                </section>
            </div>
        </main>
    );
}
