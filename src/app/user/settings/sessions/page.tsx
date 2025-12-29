"use server";
import { sessionAuthenticator_S_A } from "#/integration/user-service/auth/cookie-authenticator.integrator";
import { mainUserServiceFetcher } from "#/integration/user-service/user-service-fetcher.integrator-util";
import { rea_wrapper_border } from "#/styles/provider";
import { notFound, redirect } from "next/navigation";
import { SessionsViewerComponent } from "./session-viewer-component";
import { BackToUserPageButtonComponent } from "./back-button-component";
import type { ResponseTypesFor_Account_Section } from "#user-service/user-service-response-types-for-all.routes.ts";

export default async function __SettingSlashSessionsPage() {
    const auth = await sessionAuthenticator_S_A();
    if (auth === 500) {
        return notFound();
    }

    if (auth) {
        const all_sessions = await mainUserServiceFetcher<ResponseTypesFor_Account_Section["get_sessions"]>(
            "/v1/account/all/sessions",
            "GET",
        );
        if (all_sessions === 500) {
            return (
                <div className={rea_wrapper_border + " p-2 bg-red-500/20"}>
                    Ошибка во время получения данных, попробуйте позже
                </div>
            );
        }
        if (!all_sessions.data) {
            return redirect("/auth/login");
        }
        const sessions = all_sessions.data;
        const currentSession = auth.data;
        return (
            <div className={rea_wrapper_border + " p-2 flex flex-col gap-2"}>
                <h1>Редактирование и просмотр сессий пользователя</h1>
                <BackToUserPageButtonComponent username={auth.data.username} />
                <div className="space-y-4">
                    <h2 className=" font-semibold text-slate-800 dark:text-slate-100">
                        Все сессии пользователя ({sessions.length})
                    </h2>

                    <div className="flex flex-row flex-wrap gap-4">
                        {sessions.map((s) => {
                            const isCurrentSession = s.id === currentSession.id;
                            return (
                                <SessionsViewerComponent
                                    key={s.id}
                                    address={"address"}
                                    session={s}
                                    isCurrentSession={isCurrentSession}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
    return redirect("/auth/login");
}
