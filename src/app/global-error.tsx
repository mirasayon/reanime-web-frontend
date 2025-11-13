"use client";
import "#/styles/global/main.tailwind.css";
type __GlobalErrorProps = { error: Error & { digest?: string }; reset: () => void };
export default function __GlobalError({ error, reset }: __GlobalErrorProps) {
    return (
        <html lang="ru">
            <body className="font-mono">
                <div className={` bg-gray-950 text-white h-screen flex flex-col items-center justify-center `}>
                    <div className="text-center p-6 rounded-2xl shadow-xl bg-gray-900 max-w-md mx-auto">
                        <h1 className="text-3xl font-bold mb-4 text-red-500">Упс! Что-то пошло не так.</h1>
                        <p className="text-gray-300 mb-6">Произошла ошибка на сервере. Мы уже занимаемся решением проблемы.</p>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                return reset();
                            }}
                            className="bg-red-600 hover:bg-red-500 cursor-pointer text-white font-semibold py-2 px-4 rounded-xl transition"
                        >
                            Попробовать снова
                        </button>
                    </div>
                </div>
            </body>
        </html>
    );
}
