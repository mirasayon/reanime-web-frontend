import { Linker } from "#/components/utilities/common/linker-utility-component";
import { TEMPORARY_TURN_OFF_THE_USER_SERVICE } from "#/settings/resource-service";
import type React from "react";
export function TestModeBanner(): React.JSX.Element | null {
    if (TEMPORARY_TURN_OFF_THE_USER_SERVICE) {
        return null;
    }
    return (
        <Linker
            href="/about/test-mode"
            linkType="internal"
            clearTheDefaultStylings
            className="p-1 text-sm dark:text-red-500 text-red-800 hover:underline "
        >
            Внимание! Сайт работает в тестовом режиме! — данные пользователей
            (комментарии, аватары, профили и т.д.) могут быть потеряны.
            Подробнее →
        </Linker>
    );
}
