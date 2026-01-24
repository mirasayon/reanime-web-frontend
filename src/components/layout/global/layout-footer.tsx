import { Linker } from "#/components/utilities/common/linker-utility-component";
import { BUG_REPORT_FORM_LINK, websiteConstants } from "#/configs/website-constants";
import { REANIME_BIRTH_YEAR, THIS_YEAR } from "#/constants/common.constants";
import { BORDER } from "#/styles/style-constants";
export function LayoutFooter() {
    return (
        <footer className={"dark:bg-transparent bg-blue-400/10"}>
            <div className={`flex flex-col ${BORDER} `}>
                <div className="flex flex-wrap gap-1 p-2 flex-row justify-between">
                    <span className="m-1  flex  flex-row justify-between w-full">
                        <span>
                            &copy; {REANIME_BIRTH_YEAR} - {THIS_YEAR} {websiteConstants.public_domain}
                        </span>
                    </span>
                    <Linker href={"/right/terms"}>Соглашение</Linker>
                    <Linker href={"/right/privacy"}>Конфиденциальность</Linker>
                    <Linker href={"/right/contacts"}>Контакты и поддержка</Linker>
                    <Linker href={"/about"}>О проекте</Linker>
                    <Linker href={BUG_REPORT_FORM_LINK}>Сообщить о баге</Linker>

                    <Linker href={"/blog/how-to-remove-ads"}>О рекламе в плеере</Linker>
                </div>
                <div className="m-1 grid">
                    <div className=" bg-slate-500/30 h-px m-1" />
                    <span className={"p-1 dark:text-violet-400/80 text-violet-900/80"}>
                        Все представленные на данном сайте материалы являются собственностью их изготовителя (владельца
                        прав), охраняются международными правовыми конвенциями и предназначены только для ознакомления,
                        носят исключительно ознакомительный и развлекательный характер. Все материалы взяты из свободных
                        источников. Приятного просмотра аниме:3
                    </span>
                </div>
            </div>
        </footer>
    );
}
