"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function Logout_function(fd: FormData) {
    const _cookies = await cookies();
    _cookies.delete("accessToken");
    _cookies.delete("rea_user_avatar");
    return redirect("/");
}
export async function Logout_function_no_redirect(fd?: FormData) {
    const _cookies = await cookies();
    _cookies.delete("accessToken");
    _cookies.delete("rea_user_avatar");
    return;
}
