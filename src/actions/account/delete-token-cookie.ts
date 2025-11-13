"use server";
import { UserService } from "#/configs/user-service.app-config";
import { cookies } from "next/headers";
export async function deleteTokenCookie() {
    try {
        const _cookies = await cookies();
        const token = _cookies.get(UserService.session_token_name)?.value;
        if (token !== "" && typeof token === "string") {
            _cookies.delete(UserService.session_token_name);
        }
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}
