import Link from "next/link";
import { error_reporting_form_link } from "./test-mode-constants";
import { isUserServiceAliveNow } from "#/settings/resource-service";
import { notFound } from "next/navigation";
import type { JSX } from "react";
const TITLE = "Режим тестирования — возможна потеря пользовательских данных";
const SUBTITLE =
    "Мы добавляем новые функции — комментарии, аватары и профили пользователей.";
const DESCRIPTION = `Спасибо, что используете reanime.art. Сайт работает в обычном режиме — аниме и трансляции берутся из внешнего API и сохраняются как обычно.
Однако наш собственный модуль хранения пользовательских данных (комментарии, аватары, профили, оценка и т. д.) сейчас проходит тестирование и временно находится в нестабильном состоянии.`;

export default async function __AboutTestModePage(): Promise<JSX.Element> {
    if (!(await isUserServiceAliveNow())) {
        return notFound();
    }
    return (
        <main className="flex items-baseline justify-center  p-6">
            <div className="max-w-7xl w-full rounded-2xl p-8 md:p-12">
                <div className="flex items-center gap-6">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-semibold">
                            {TITLE}
                        </h1>
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-100">
                            {SUBTITLE}
                        </p>
                    </div>
                </div>

                <section className="mt-6 text-gray-700 dark:text-gray-100 whitespace-pre-line">
                    {DESCRIPTION}
                </section>
                <br />
                <section>
                    <strong>
                        Есть вероятность частичной или полной потери данных
                        пользователей с базы данных.
                    </strong>
                </section>
                <section>
                    <p>Что это значит для вас:</p>
                    <ul className="mt-4 list-disc pl-6 space-y-2">
                        <li>
                            Комментарии, аватары и профильные данные могут
                            исчезнуть навсегда или отобразиться некорректно.
                        </li>
                        <li>
                            Мы рекомендуем не размещать важную или личную
                            информацию в комментариях и профиле.
                        </li>
                        <li>
                            Если вы хотите помочь тестированию — пожалуйста,
                            сообщайте найденные баги:
                        </li>
                    </ul>
                </section>
                <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <Link
                        href={error_reporting_form_link}
                        className="inline-block px-4 py-2 bg-indigo-600 text-white  rounded-md shadow hover:opacity-90"
                    >
                        Сообщить о баге
                    </Link>
                </div>
                <footer className="mt-8 text-xs text-gray-400">
                    Спасибо за вашу помощь в тестировании.
                </footer>
            </div>
        </main>
    );
}
