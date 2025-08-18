import { rea_wrapper_border } from "#/styles/provider";
import { WebsiteConfigs } from "#/configs/website-settings.app-config";
import type { Metadata } from "next";
import { LinkX } from "#/components/utilities/common/link-x.utilx";

export default function __Contacts_page() {
    return (
        <div className={`${rea_wrapper_border} h-80`}>
            <div className="p-5 flex  flex-col gap-2">
                <h1 className="text-xl">Контакты:</h1>
                <span>
                    По вопросам сотрудничества или связь с администрацией сайта:{" "}
                    <LinkX email href={WebsiteConfigs.mail}>
                        {WebsiteConfigs.mail}
                    </LinkX>
                </span>
                <span>
                    Для поддержки пользователей или сообщению об ошибках (контакт разработчика):{" "}
                    <LinkX email href={`${WebsiteConfigs.devs_mail}`}>
                        {WebsiteConfigs.devs_mail}
                    </LinkX>
                </span>
            </div>
        </div>
    );
}
export const metadata: Metadata = {
    title: `Контакты и поддержка | ${WebsiteConfigs.public_domain}`,
};
