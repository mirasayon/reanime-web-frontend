import { Linker } from "#/components/utilities/common/linker-utility-component";
import type { JSX } from "react";

type Props = {};
export function TestModeBanner({}: Props): JSX.Element {
    return (
        <div className="p-2 pt-3 text-red-500 flex flex-row gap-2">
            {/* <div>Сайт работает в тестовом режиме!</div> */}
            <div>
                <Linker
                    href="/about/test-mode"
                    className="text-sm  font-bold dark:text-red-500 text-red-700 hover:text-red-700 dark:hover:text-red-600 hover:underline"
                >
                    Внимание: тестовый режим — данные пользователей (комментарии, аватары, профили и т.д.) могут быть потеряны. Подробнее →
                </Linker>
            </div>
        </div>
    );
}
