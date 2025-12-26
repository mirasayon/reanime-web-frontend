"use server";
import { sessionAuthenticator_S_A } from "#/integration/user-service/auth/cookie-authenticator.integrator";
import { mainUserServiceFetcher } from "#/integration/user-service/user-service-fetcher.integrator-util";
import { isUserServiceAliveNow } from "#/settings/user-service";
import type { Administrator_ResponseTypes } from "#user-service/shared/response-patterns/administrator.routes.js";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { JSX } from "react";
import { MainUserListShower } from "./admin-all-users-ui-component";
export default async function __Admin_All_Users_Page(): Promise<JSX.Element> {
    const auth = await sessionAuthenticator_S_A();
    if (auth === 500 || !auth) {
        return notFound();
    }
    const ip = auth.ip;
    const agent = auth.agent;
    const allUsersData = await mainUserServiceFetcher<Administrator_ResponseTypes.get_all_users>({
        method: "GET",
        agent: agent,
        ip: ip,
        url: `/v1/administrator/get_all_users`,
        session_token: auth.data.session.token,
    });
    if (!allUsersData || allUsersData === 500) {
        return notFound();
    }
    if (allUsersData.status_code === 404) {
        return notFound();
    }
    if (!allUsersData.data) {
        return notFound();
    }
    return (
        <>
            <div className="">
                <MainUserListShower
                    initialUsers={allUsersData.data}
                    userServiceUrl={process.env.NEXT_PUBLIC_USER_SERVICE_URL!}
                />
            </div>
        </>
    );
}
export async function generateMetadata(): Promise<Metadata> {
    if (!(await isUserServiceAliveNow())) {
        return notFound();
    }
    const auth = await sessionAuthenticator_S_A();
    if (auth === 500 || !auth) {
        return notFound();
    }
    const ip = auth.ip;
    const agent = auth.agent;
    const allUsersData = await mainUserServiceFetcher<Administrator_ResponseTypes.get_all_users>({
        method: "GET",
        agent: agent,
        ip: ip,
        url: `/v1/administrator/get_all_users`,
        session_token: auth.data.session.token,
    });
    if (!allUsersData || allUsersData === 500) {
        return notFound();
    }
    if (allUsersData.status_code === 404) {
        return notFound();
    }
    if (!allUsersData.data) {
        return notFound();
    }
    return {
        title: "All Users Data",
        description: "All Users Data",
        robots: {
            index: false,
            follow: false,
            nocache: true,
        },
    };
}
