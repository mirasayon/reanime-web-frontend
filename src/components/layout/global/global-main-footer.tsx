import { rea_wrapper_border } from "#/styles/provider";
import { WebsiteConfigs } from "#/configs/website-settings.app-config";
import { birth_year, this_year } from "#/constants/common.constants";
import Link from "next/link";
import { Linker } from "#/components/utilities/common/linker-utility-component";

export function Layout_Footer() {
    const style = ` p-2  dark:hover:bg-violet-500/10 hover:bg-blue-300/40"  `;
    return (
        <footer className={"dark:bg-transparent bg-blue-400/10"}>
            <div className={`flex flex-col h-auto ${rea_wrapper_border} `}>
                <nav className="flex flex-wrap flex-row mx-2 justify-between">
                    <span className="mt-2 ml-2  flex  flex-row justify-between    w-full">
                        <span>
                            &copy; {birth_year} - {this_year} {WebsiteConfigs.public_domain}
                        </span>
                    </span>
                    <Linker className={style} href={"/right/terms"}>
                        Соглашение
                    </Linker>
                    <Linker className={style} href={"/right/privacy"}>
                        Конфиденциальность
                    </Linker>
                    <Linker className={style} href={"/right/contacts"}>
                        Контакты и поддержка
                    </Linker>

                    {/* <LinkX
                           
                            className={style}
                            href={"/info/support_us"}
                        >
                            Поддержите нас
                        </LinkX> */}

                    <Linker className="p-2 dark:hover:bg-violet-500/10 hover:bg-blue-300/40 float-right" href={WebsiteConfigs.developer_website}>
                        О разработчиках
                    </Linker>
                </nav>
                <div className=" mx-2 mb-2 grid">
                    <div className=" bg-slate-500/30 h-[1px] m-2" />
                    <span className={"p-2 dark:text-violet-400/80 text-violet-900/80"}>
                        Все представленные на данном сайте материалы являются собственностью их изготовителя (владельца прав), охраняются
                        международными правовыми конвенциями и предназначены только для ознакомления, носят исключительно ознакомительный и
                        развлекательный характер. Все материалы взяты из свободных источников и открытых Web API
                    </span>
                    <span className="px-2 dark:text-violet-400/80 text-violet-900/80">Приятного просмотра аниме&#41;</span>
                </div>
            </div>
        </footer>
    );
}
