"use client";
import { Linker } from "#/components/utilities/common/linker-utility-component";
import { BORDER } from "#/styles/style-constants";
import { useState } from "react";
export function RequireLoginNotice() {
    const [showNotice, setShowNotice] = useState(false);
    return (
        <div className={`p-3 ${BORDER}`}>
            {showNotice ? (
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white">
                        <img src="/_assets/_pages/_anime/oh-no.png" alt="oh-no.png" />
                    </div>
                    <div className="flex-1">
                        <h3 className="">Просмотр доступен только после входа</h3>
                        <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                            <strong>Коротко почему:</strong> это уменьшает вероятность блокировки сайта.
                        </div>
                        <p className="mt-2 text-sm ">
                            Чтобы защитить контент и пользователей, мы показываем плеер только авторизованным
                            пользователям. Регистрация бесплатна, занимает пару секунд и сохраняет только логин и
                            пароль.
                        </p>
                        <span className="mt-2 text-sm">
                            Защита от автоматических сканеров и жалоб — меньше шансов потерять сайт из-за возможного
                            бана.
                        </span>
                        <div className="mt-3 flex flex-wrap gap-4">
                            <Linker href="/auth/login">Войти</Linker>
                            <Linker href="/auth/register">Зарегистрироваться</Linker>
                        </div>
                    </div>
                </div>
            ) : (
                <button
                    hidden={showNotice}
                    onClick={(e) => {
                        e.preventDefault();
                        setShowNotice(true);
                    }}
                    className="p-2 rounded-lg cursor-pointer dark:hover:bg-blue-700 hover:bg-blue-400 bg-blue-500/20"
                    aria-pressed={showNotice}
                >
                    Смотреть
                </button>
            )}
        </div>
    );
}
