import { BORDER } from "#/styles/style-constants";
import type { Metadata } from "next";

export default function __HowToRemoveAds() {
    return (
        <main className={`${BORDER} p-6 max-w-6xl mx-auto bg-white/60 dark:bg-slate-900/50 shadow-sm`}>
            <h1 className="text-2xl font-semibold mb-2 text-slate-900 dark:text-slate-100">
                Как отключить рекламу в плеере
            </h1>
            <p className="text-sm mb-4 text-slate-800 dark:text-slate-300">
                Это не прямой и не «официальный» способ отключения рекламы, а скорее случайно найденный вариант. Во
                время экспериментов с JavaScript я заметил, что реклама в плеере загружается с отдельных внутренних
                доменов, а не с самого плеера.
            </p>
            <p className="text-sm mb-4 dark:text-slate-300">
                Как работает: реклама плеера загружается с внутренних доменов, не с самого плеера. Если блокировать
                загрузку скриптов с этих доменов, реклама не появится — вместо неё могут быть короткие паузы (~2 с),
                пока блокировка срабатывает. Этот способ работает и на телефонах — например, в мобильном Firefox, где
                поддерживаются расширения.
            </p>
            <ol className="list-decimal list-inside space-y-3 text-sm text-slate-800 dark:text-slate-300">
                <li>
                    <strong>Установите расширение для блокировки JavaScript.</strong> Например, NoScript — простое и
                    распространённое решение (есть для Firefox; в других браузерах — проверяйте совместимость).
                </li>
                <li>
                    <strong>Разрешите JS только для необходимых доменов.</strong> Оставьте JavaScript включённым только
                    для
                    <em> reanime.art</em> и <em>kodik.info</em>, а все остальные домены заблокируйте. Это предотвращает
                    подгрузку рекламных скриптов.
                </li>
                <li>
                    <strong>Как это выглядит.</strong> Кликните на иконку расширения — вы увидите список доменов.
                    Разрешите только те, что нужны для плеера и сайта. Ниже примеры экранов настроек.
                </li>
            </ol>
            <div className="my-4">
                <img
                    src="/_assets/_blog/how-to-remove-ads/noscript-addon-page.png"
                    alt="Страница расширения NoScript"
                    className="mx-auto w-full max-w-lg rounded-md shadow-sm"
                />
            </div>
            <div className="my-4">
                <img
                    src="/_assets/_blog/how-to-remove-ads/noscript-addon-settings.png"
                    alt="Настройки NoScript — список доменов"
                    className="mx-auto w-full max-w-lg rounded-md shadow-sm"
                />
            </div>
            <p className="text-sm mb-3 text-slate-800 dark:text-slate-300">
                После блокировки вы увидите вместо рекламы такой экран (пример):
            </p>
            <div className="my-4">
                <img
                    src="/_assets/_blog/how-to-remove-ads/player-when-ad-blocked.png"
                    alt="Плеер с заблокированной рекламой"
                    className="mx-auto w-full max-w-2xl rounded-md shadow-sm"
                />
            </div>
            <p className="text-sm mb-4 text-slate-800 dark:text-slate-300">
                Чтобы убрать оверлей — нажмите красный крестик в углу или просто подождите ~2 секунды, пока блокировка
                завершится.
            </p>
            <p className="text-sm text-slate-800 dark:text-slate-300">
                Если у вас есть идеи, как реализовать отключение рекламы более элегантно или без пауз, буду рад
                предложениям. Приятного просмотра!
            </p>
        </main>
    );
}
export const metadata: Metadata = {
    robots: {
        follow: false,
        index: false,
        nocache: true,
    },
};
