"use server";
import { sessionAuthenticator_S_A } from "#/integration/user-service/auth/cookie-authenticator.integrator";
import { mainUserServiceFetcher } from "#/integration/user-service/user-service-fetcher.integrator-util";
import { rea_wrapper_border } from "#/styles/provider";
import type { Account_ResponseTypes } from "#user-service/shared/response-patterns/account.routes.js";
import { notFound, redirect } from "next/navigation";
import { SessionsViewerComponent } from "./session-viewer-component";
import { BackToUserPageButtonComponent } from "./back-button-component";
import maxmind, { type CountryResponse } from "maxmind";
import { join } from "node:path";

const lookup = await maxmind.open<CountryResponse>(
    join(process.cwd(), "internal-resources", "GeoLite2-Country.mmdb"),
);

function getCountryByIp(ip: string) {
    const data = lookup.get(ip);
    if (!data || data == null || !data.country?.names.ru) {
        return null;
    }
    return data.country?.names.ru;
}
export default async function __SettingSlashSessionsPage() {
    const auth = await sessionAuthenticator_S_A();
    if (auth === 500) {
        return notFound();
    }

    if (auth) {
        const all_sessions =
            await mainUserServiceFetcher<Account_ResponseTypes.get_sessions>({
                agent: auth.agent,
                ip: auth.ip,
                method: "GET",
                url: "/v1/account/all/sessions",
                session_token: auth.session_token,
            });
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
        const currentSession = auth.data.session;
        return (
            <div className={rea_wrapper_border + " p-2 flex flex-col gap-2"}>
                <h1>Редактирование и просмотр сессий пользователя</h1>
                <BackToUserPageButtonComponent
                    username={auth.data.account.username}
                />
                <div className="space-y-4">
                    <h2 className=" font-semibold text-slate-800 dark:text-slate-100">
                        Все сессии пользователя ({sessions.length})
                    </h2>

                    <div className="flex flex-row flex-wrap gap-4">
                        {sessions.map((s) => {
                            const isCurrentSession = s.id === currentSession.id;
                            let address: null | string = null;
                            if (s.ip_address) {
                                address = getCountryByIp(s.ip_address);
                            }
                            return (
                                <SessionsViewerComponent
                                    key={s.id}
                                    address={address}
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
