import { userServiceRequest } from "#/integration/user-service/user-service-fetcher.integrator-util";
import { notFound } from "next/navigation";
import { MainUserListComponent } from "./admin-all-users-ui-component";
import type { ResponseTypesForAdministratorSection } from "#user-service/user-service-response-types-for-all.routes.ts";
import { endpointsConfig } from "#user-service/endpoints-config.ts";
import type { Metadata } from "next/types";
export default async function __AdminAllUsersPage(): Promise<React.JSX.Element> {
    const allUsersData = await userServiceRequest<ResponseTypesForAdministratorSection["get_all_users"]>(
        endpointsConfig.administration.baseUrl + endpointsConfig.administration.getAllUsersInfo,
        "GET",
    );
    if (!allUsersData || allUsersData.status_code === 404 || !allUsersData.data) {
        return notFound();
    }
    return <MainUserListComponent initialUsers={allUsersData.data} />;
}
export const dynamic = "force-dynamic";
export async function generateMetadata(): Promise<Metadata> {
    const allUsersData = await userServiceRequest<ResponseTypesForAdministratorSection["get_all_users"]>(
        endpointsConfig.administration.baseUrl + endpointsConfig.administration.getAllUsersInfo,
        "GET",
    );
    if (!allUsersData || allUsersData.status_code === 404 || !allUsersData.data) {
        return notFound();
    }
    return {
        title: "All users",
        description: "All users",
        robots: {
            follow: false,
            index: false,
            nocache: true,
        },
    };
}
