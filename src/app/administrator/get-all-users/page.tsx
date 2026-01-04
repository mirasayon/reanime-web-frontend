"use server";
import { fetchTheUserService } from "#/integration/user-service/user-service-fetcher.integrator-util";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MainUserListShower } from "./admin-all-users-ui-component";
import type { ResponseTypesForAdministratorSection } from "#user-service/user-service-response-types-for-all.routes.ts";
import { endpointsConfig } from "#user-service/endpoints-config.ts";
export default async function __Admin_All_Users_Page(): Promise<React.JSX.Element> {
    const allUsersData = await fetchTheUserService<ResponseTypesForAdministratorSection["get_all_users"]>(
        endpointsConfig.administration.baseUrl + endpointsConfig.administration.getAllUsersInfo,
        "GET",
    );
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
                <MainUserListShower initialUsers={allUsersData.data} />
            </div>
        </>
    );
}
export async function generateMetadata(): Promise<Metadata> {
    const allUsersData = await fetchTheUserService<ResponseTypesForAdministratorSection["get_all_users"]>(
        endpointsConfig.administration.baseUrl + endpointsConfig.administration.getAllUsersInfo,
        "GET",
    );
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
