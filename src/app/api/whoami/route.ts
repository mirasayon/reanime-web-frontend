import {
    cookieOptionsForJustSettingUsernameData,
    cookieOptionsForJustSettingIsLoggedData,
} from "#/actions/auth/cookie-option";
import { userServiceConfig } from "#/configs/user-service.app-config";
import { sessionAuthenticator_S_A } from "#/integration/user-service/auth/cookie-authenticator.integrator";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function GET() {
    const auth = await sessionAuthenticator_S_A();
    if (auth === 500) {
        return redirect("/");
    }
    const _cookies = await cookies();
    if (auth?.data) {
        const username = _cookies.get(userServiceConfig.r6_current_username)?.value;
        if (!username) {
            _cookies.set(cookieOptionsForJustSettingUsernameData(auth.data.account.username));
            _cookies.set(cookieOptionsForJustSettingIsLoggedData("1"));
        }
        return redirect("/user/" + auth.data.account.username);
    }
    _cookies.set(cookieOptionsForJustSettingIsLoggedData("0"));
    _cookies.delete(userServiceConfig.r6_current_username);
    _cookies.delete(userServiceConfig.session_token_name);
    return redirect("/");
}
