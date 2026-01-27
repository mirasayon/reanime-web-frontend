"use client";
import Link from "next/link";
import layoutStyles from "#/styles/global/layout.module.css";
import "#/styles/global/main.tailwind.css";
import { ThemeProviderCustom } from "#/components/themes/provider.themes";
import { interFont } from "#/fonts/main-font.provider";
import type { Metadata } from "next/types";
export default function __GlobalErrorPage() {
    return (
        <html lang="ru" suppressHydrationWarning>
            <head>
                <link rel="manifest" href="/manifest.webmanifest" />
            </head>
            <body className={`${interFont.className} ${layoutStyles.rootWeb}   `}>
                <ThemeProviderCustom>
                    <main className="min-h-screen flex items-center justify-center ">
                        <section className="container mx-auto px-6 py-24">
                            <div className="max-w-4xl mx-auto border        bg-blue-200/50 dark:bg-indigo-600/10 rounded-xl shadow p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
                                <div className="flex-1 text-center md:text-left ">
                                    <div className="inline-flex items-center gap-3 mb-4">
                                        <img src="/icon.png" alt="иконка" className="w-12 h-12" />

                                        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
                                            Внутренняя ошибка сервера
                                        </h1>
                                    </div>

                                    <p className="mt-2 text-slate-700 dark:text-slate-300 max-w-xl">
                                        Сервер столкнулся с непредвиденной ошибкой. Мы уже изучаем проблему — попробуйте
                                        обновить страницу или вернитесь на главную.
                                    </p>

                                    <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3 justify-center md:justify-start">
                                        <Link
                                            href="/"
                                            className="cursor-pointer inline-flex items-center justify-center rounded-lg px-5 py-2.5 bg-white border border-gray-200 dark:bg-transparent dark:border-slate-600 text-slate-900 dark:text-slate-100 hover:bg-gray-50 dark:hover:bg-gray-500/50 transition font-medium shadow-sm"
                                        >
                                            На главную
                                        </Link>

                                        <button
                                            onClick={() => typeof window !== "undefined" && window.location.reload()}
                                            className="cursor-pointer inline-flex items-center justify-center rounded-lg px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-medium shadow-lg transition"
                                        >
                                            Обновить
                                        </button>
                                    </div>

                                    <div className="mt-6 text-sm text-slate-500 dark:text-slate-400">
                                        <strong className="text-slate-700 dark:text-slate-200">Код ошибки:</strong>
                                        <span className="ml-2">500</span>
                                    </div>
                                </div>

                                <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-xl overflow-hidden border border-gray-200 dark:border-slate-700 bg-gray-100 dark:bg-slate-700 flex items-center justify-center">
                                    <img
                                        src="/_assets/_icons/dark-500-error-icon.jpg"
                                        alt="error icon"
                                        className="w-full h-full object-cover hidden dark:block"
                                        loading="lazy"
                                    />

                                    <img
                                        src="/_assets/_icons/light-500-error-icon.jpg"
                                        alt="error icon"
                                        className="w-full h-full object-cover dark:hidden"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                            <div className="mt-8 text-center text-xs text-slate-600 dark:text-slate-400">
                                Ошибка временная. Попробуйте обновить страницу через некоторое время.
                            </div>
                        </section>
                    </main>
                </ThemeProviderCustom>
            </body>
        </html>
    );
}

export const metadata: Metadata = {
    title: "Ошибка сервера",
};
