"use client";
import { revokeSpecificSession_ServerAction } from "#/actions/auth/revoke-specific-session-server-action";
import { useGToaster } from "#/components/layout/atoms-toasts-components/useToast";
import { serverActionsResponsesProcessorFromClientEnvironment } from "#/integration/utils/server-actions-responses-processor-from-client-environment";
import type { Session } from "#user-service/databases/orm/client.js";
import { useTransition } from "react";
import { parseUA } from "./user-agent-string-parser";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
type SessionsViewerProps = {
    session: Session;
    isCurrentSession: boolean;
    address: string | null;
};
export function SessionsViewerComponent({
    isCurrentSession,
    address,
    session: s,
}: SessionsViewerProps) {
    const [pending, startTransition] = useTransition();
    const toaster = useGToaster();
    function buttonRevokeHandler(
        id: string,
        e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    ) {
        return startTransition(async () => {
            e.preventDefault();
            if (confirm) {
                if (!confirm("Удалить этот сеанс?")) {
                    return;
                }
            } else {
                return toaster.error("Ошибка, ваш браузер устарел");
            }
            const res = await revokeSpecificSession_ServerAction(id);
            return serverActionsResponsesProcessorFromClientEnvironment({
                res,
                error: toaster.error,
                success: toaster.success,
            });
        });
    }
    const ua = s.user_agent ? parseUA(s.user_agent) : null;

    return (
        <div
            key={s.id}
            className="p-2 w-85 max-lg:w-full h-50 overflow-scroll rounded border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-sm"
        >
            <div className="flex items-center flex-row justify-between gap-3">
                <button
                    className="px-3 py-1 cursor-pointer rounded-sm text-sm border border-rose-300 text-rose-600 dark:text-rose-300 hover:bg-rose-50 dark:hover:bg-rose-900"
                    onClick={(e) => {
                        return buttonRevokeHandler(s.id, e);
                    }}
                >
                    {pending ? "Загрузка..." : "Удалить"}
                </button>{" "}
                {isCurrentSession && (
                    <div className="text-xs w-full p-2 text-blue-900 font-bold dark:text-cyan-400">
                        Текущая сессия
                    </div>
                )}
            </div>

            <hr className="my-2 border-slate-100 dark:border-slate-800" />

            <div className="text-xs grid gap-2">
                <div className="flex items-center justify-between">
                    <div className="text-slate-500 dark:text-slate-400  cursor-pointer">
                        Создано
                    </div>
                    <div>{formatDate(s.created_at)}</div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="text-slate-500 dark:text-slate-400">
                        Активен до
                    </div>
                    {s.expires_at ? (
                        <div>{formatDate(s.expires_at)}</div>
                    ) : (
                        <span>∞Бесконечен</span>
                    )}
                </div>
                <div className="flex items-center justify-between">
                    <div className="text-slate-500 dark:text-slate-400">
                        IP-адрес
                    </div>
                    <div>
                        {address ? (
                            address
                        ) : (
                            <div>
                                {s.ip_address ? s.ip_address : "неизвестно"}
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="text-slate-500 dark:text-slate-400">
                        Локация
                    </div>
                    <div>{address ? address : "неизвестно"}</div>
                </div>
                <div>
                    <div className="text-slate-500 dark:text-slate-400">
                        User agent
                    </div>
                    {ua ? (
                        <div className="text-xs font-mono wrap-break-word max-h-20 overflow-auto">
                            {ua.browser}-v
                            {ua.browserVersion}
                            {", "}
                            {ua.os}-v
                            {ua.osVersion}-{ua.deviceType}
                            {ua.deviceModel && ", " + ua.deviceModel}
                        </div>
                    ) : (
                        "—"
                    )}
                </div>
            </div>
        </div>
    );
}
function formatDate(d: Date | string | null): string {
    if (!d) return "—";

    const date = typeof d === "string" ? new Date(d) : d;

    if (isNaN(date.getTime())) return "—";

    return format(date, "dd MMMM yyyy HH:mm", { locale: ru });
}
