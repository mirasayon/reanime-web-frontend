import type { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { cookies } from "next/headers";
export async function ServerSideThemeCookie(existed_instance?: ReadonlyRequestCookies) {
    let _cookie = existed_instance;
    if (!_cookie) {
        _cookie = await cookies();
    }
    const current_theme = _cookie.get("rea_ui_theme")?.value as "light" | "dark" | undefined;
    const is_dark = current_theme === "dark" || current_theme === undefined;
    const is_light_now = current_theme === "light";
    return { current_theme, is_dark, is_light_now, cookieStore: _cookie };
}

export async function ServerSide_get_avatar_cookies() {
    const cookie = await cookies();
    const avatar = cookie.get("rea_user_avatar")?.value;
    return { avatar, is_guest: avatar === undefined };
}
