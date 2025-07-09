import { rea_wrapper_border } from "#/styles/provider";
import { UtilityJSX } from "#/components/utilities/x_components";
import { WebsiteConfigs } from "#/configs/website";
import type { Metadata } from "next";

export default async function __Contacts_page() {
    return (
        <div className={`${rea_wrapper_border} h-80`}>
            <div className="p-5 flex  flex-col gap-2">
                <h1 className="text-xl">Контакты:</h1>
                <span>
                    По вопросам сотрудничества или связь с администрацией сайта:{" "}
                    <UtilityJSX.LinkX email href={WebsiteConfigs.mail}>
                        {WebsiteConfigs.mail}
                    </UtilityJSX.LinkX>
                </span>
                <span>
                    Для поддержки пользователей или сообщению об ошибках (контакт разработчика):{" "}
                    <UtilityJSX.LinkX email href={`${WebsiteConfigs.devs_mail}`}>
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
