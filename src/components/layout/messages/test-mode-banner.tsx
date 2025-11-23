import { Linker } from "#/components/utilities/common/linker-utility-component";
import { TEMPORARY_TURN_OFF_THE_USER_SERVICE } from "#/settings/resource-service";
import type { JSX } from "react";

type Props = {};
export function TestModeBanner({}: Props): JSX.Element | null {
    if (TEMPORARY_TURN_OFF_THE_USER_SERVICE) {
        return null;
    }
    return (
        <div className="p-2 pt-3   flex flex-row gap-2">
            <div>
                <Linker
                    href="/about/test-mode"
                    linkType="internal"
                    cleanStyles
                    className="text-sm dark:text-red-500 text-red-800 font-medium  hover:underline"
                >
                    Внимание! Сайт работает в тестовом режиме! — данные
                    пользователей (комментарии, аватары, профили и т.д.) могут
                    быть потеряны. Подробнее →
                </Linker>
            </div>
        </div>
    );
}
