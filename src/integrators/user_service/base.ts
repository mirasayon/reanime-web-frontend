import { EnvConfig } from "#/configs/env";
import axios from "axios";

class User_Service_BASE {
    ping = async () => {
        const url = EnvConfig.partners.user_service.url.current;
        const res = await axios.get(`${url}/v1/ping`, {
            headers: {
                "x-reanime-user-service-key": EnvConfig.partners.user_service.api_key,
            },
        });
        return res;
    };
}
export const User_service_base = new User_Service_BASE();
