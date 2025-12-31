"use server";
import { fetchTheUserService } from "#/integration/user-service/user-service-fetcher.integrator-util";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MainUserListShower } from "./admin-all-users-ui-component";
import type { ResponseTypesForAdministratorSection } from "#user-service/user-service-response-types-for-all.routes.ts";
import { endpointsConfig } from "#user-service/endpoints-config.ts";
import { TEMPORARY_TURN_OFF_THE_USER_SERVICE } from "#/settings/user-service-static";
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
                <MainUserListShower
                    initialUsers={allUsersData.data}
                    userServiceUrl={process.env.NEXT_PUBLIC_USER_SERVICE_URL!}
                />
            </div>
        </>
    );
}
export async function generateMetadata(): Promise<Metadata> {
    if (TEMPORARY_TURN_OFF_THE_USER_SERVICE) {
        return notFound();
    }
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
