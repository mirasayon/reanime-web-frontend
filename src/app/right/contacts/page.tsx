import { rea_wrapper_border } from "#/styles/provider";
import { ServerSideThemeCookie } from "#/components/hooks/server_side_cookies";
import { UtilityJSX } from "#/components/utilities/x_components";
import { WebsiteConfigs } from "#/configs/website";
import type { Metadata } from "next";

export default async function __Contacts_page() {
    const { is_dark } = await ServerSideThemeCookie();
    return (
        <div className={`${rea_wrapper_border} h-80`}>
            <div className="p-5 flex  flex-col gap-2">
                <h1 className="text-xl">Контакты:</h1>
                <span className="">
                    По вопросам сотрудничества или связь с администрацией сайта:{" "}
                    <UtilityJSX.LinkX is_dark={is_dark} email href={WebsiteConfigs.mail}>
                        {WebsiteConfigs.mail}
                    </UtilityJSX.LinkX>
                </span>
                <span className="">
                    Для поддержки пользователей или сообщению об ошибках (контакт разработчика):{" "}
                    <UtilityJSX.LinkX is_dark={is_dark} email href={`${WebsiteConfigs.devs_mail}`}>
                        {WebsiteConfigs.devs_mail}
                    </UtilityJSX.LinkX>
                </span>
            </div>
        </div>
    );
}
export const metadata: Metadata = {
    title: `Контакты и поддержка | ${WebsiteConfigs.public_domain}`,
};
