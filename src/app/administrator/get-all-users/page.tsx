import { fetchTheUserService } from "#/integration/user-service/user-service-fetcher.integrator-util";
import { notFound } from "next/navigation";
import { MainUserListComponent } from "./admin-all-users-ui-component";
import type { ResponseTypesForAdministratorSection } from "#user-service/user-service-response-types-for-all.routes.ts";
import { endpointsConfig } from "#user-service/endpoints-config.ts";
export default async function __AdminAllUsersPage(): Promise<React.JSX.Element> {
    const allUsersData = await fetchTheUserService<ResponseTypesForAdministratorSection["get_all_users"]>(
        endpointsConfig.administration.baseUrl + endpointsConfig.administration.getAllUsersInfo,
        "GET",
    );
    if (!allUsersData || allUsersData.status_code === 404 || !allUsersData.data) {
        return notFound();
    }
    return <MainUserListComponent initialUsers={allUsersData.data} />;
}
export const dynamic = "force-dynamic";
