"use server";
import { mainUserServiceFetcher } from "#/integration/user-service/user-service-fetcher.integrator-util";
import { isUserServiceAliveNow } from "#/settings/user-service";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MainUserListShower } from "./admin-all-users-ui-component";
import type { ResponseTypesForAdministratorSection } from "#user-service/user-service-response-types-for-all.routes.ts";
export default async function __Admin_All_Users_Page(): Promise<React.JSX.Element> {
    const allUsersData = await mainUserServiceFetcher<ResponseTypesForAdministratorSection["get_all_users"]>(
        `/v1/administrator/get_all_users`,
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
    if (!(await isUserServiceAliveNow())) {
        return notFound();
    }
    const allUsersData = await mainUserServiceFetcher<ResponseTypesForAdministratorSection["get_all_users"]>(
        `/v1/administrator/get_all_users`,
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
