"use client";
import { useEffect, useState, type MouseEventHandler } from "react";

export function ModalDbConsent({
    open,
    onAccept,
    onClose,
}: {
    open: boolean;
    onAccept: Function;
    onClose: MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
}) {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(false);
    }, [open]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/40" onClick={onClose} />
            <div className="relative bg-slate-200 dark:bg-slate-800 rounded-lg shadow-lg max-w-lg w-full p-6">
                <h3 className="text-lg font-semibold">Внимание — нестабильность данных</h3>
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-100">
                    Наш модуль хранения пользовательских данных сейчас тестируется. Есть риск, что комментарии, аватары или профиль могут быть
                    утрачены. Подтвердите, что вы это понимаете и согласны продолжить.
                </p>

                <label className="mt-4 flex items-start gap-3">
                    <input type="checkbox" className="mt-1 cursor-pointer" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
                    <span className="text-sm ">Я понимаю риск и согласен(на), что мои данные могут быть потеряны.</span>
                </label>

                <div className="mt-5 flex justify-end gap-3">
                    <button onClick={onClose} className="px-4 py-2 rounded border cursor-pointer hover:bg-red-500/50">
                        Отмена
                    </button>
                    <button
                        disabled={!checked}
                        onClick={() => {
                            try {
                                localStorage.setItem("reanime:dbConsent", "1");
                            } catch {}
                            onAccept?.();
                        }}
                        className="px-4 py-2 rounded bg-indigo-600 text-white disabled:opacity-50 cursor-pointer hover:bg-indigo-600/90"
                    >
                        Согласен(на) и продолжить
                    </button>
                </div>
            </div>
        </div>
    );
}
