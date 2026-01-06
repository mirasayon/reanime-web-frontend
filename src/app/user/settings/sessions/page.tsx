"use server";
import { sessionAuthenticator } from "#/integration/user-service/auth/cookie-authenticator.integrator";
import { fetchTheUserService } from "#/integration/user-service/user-service-fetcher.integrator-util";
import { BORDER } from "#/styles/style-constants";
import { redirect } from "next/navigation";
import { SessionsViewerComponent } from "./session-viewer-component";
import { BackToUserPageButtonComponent } from "./back-button-component";
import type { ResponseTypesFor_Account_Section } from "#user-service/user-service-response-types-for-all.routes.ts";
import { endpointsConfig } from "#user-service/endpoints-config.ts";

export default async function __SettingSlashSessionsPage() {
    const auth = await sessionAuthenticator();
    if (auth) {
        const all_sessions = await fetchTheUserService<ResponseTypesFor_Account_Section["get_sessions"]>(
            endpointsConfig.userAccount.baseUrl + endpointsConfig.userAccount.allSessions,
            "GET",
        );
        if (!all_sessions.data) {
            return redirect("/auth/login");
        }
        const sessions = all_sessions.data;
        return (
            <div className={BORDER + " p-2 flex flex-col gap-2"}>
                <h1>Редактирование и просмотр сессий пользователя</h1>
                <BackToUserPageButtonComponent username={auth.username} />
                <div className="space-y-4">
                    <h2 className=" font-semibold text-slate-800 dark:text-slate-100">
                        Все сессии пользователя ({sessions.length})
                    </h2>

                    <div className="flex flex-row flex-wrap gap-4">
                        {sessions.map((s) => {
                            const isCurrentSession = s.selector === auth.selector;
                            return (
                                <SessionsViewerComponent key={s.id} session={s} isCurrentSession={isCurrentSession} />
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
    return redirect("/auth/login");
}
