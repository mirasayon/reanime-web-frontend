import { BORDER } from "#/styles/style-constants";
import { websiteConstants } from "#/configs/website-constants";
import type { Metadata } from "next";
import { Linker } from "#/components/utilities/common/linker-utility-component";

export default function __Contacts_page() {
    return (
        <div className={`${BORDER} h-80`}>
            <div className="p-5 flex  flex-col gap-2">
                <h1 className="text-xl">Контакты:</h1>
                <span>
                    По вопросам сотрудничества или связь с администрацией сайта:{" "}
                    <Linker linkType="email" href={websiteConstants.mail}>
                        {websiteConstants.mail}
                    </Linker>
                </span>
                <span>
                    Для поддержки пользователей или сообщению об ошибках (контакт разработчика):{" "}
                    <Linker linkType="email" href={`${websiteConstants.devs_mail}`}>
                        {websiteConstants.devs_mail}
                    </Linker>
                </span>
            </div>
        </div>
    );
}
export const metadata: Metadata = {
    title: `Контакты и поддержка | ${websiteConstants.public_domain}`,
};
