"use server";
import { mainUserServiceFetcherForPingingOnly } from "#/integration/user-service/ping-user-service";
import consola from "consola";
import { TEMPORARY_TURN_OFF_THE_USER_SERVICE } from "./user-service-static";

export async function isUserServiceAliveNow(): Promise<boolean> {
    try {
        if (TEMPORARY_TURN_OFF_THE_USER_SERVICE) {
            return false;
        }
        const pingUrl = "/v1/ping";
        const res = await mainUserServiceFetcherForPingingOnly<"pong">({
            agent: undefined,
            ip: undefined,
            method: "GET",
            url: pingUrl,
        });
        if (res === 500 || !res) {
            return false;
        }
        if (res.ok && res.data === "pong") {
            return true;
        }
        return false;
    } catch (error) {
        consola.warn(`Error while pinging the User Service. ${isUserServiceAliveNow.name}(): `, error);
        return false;
    }
}
