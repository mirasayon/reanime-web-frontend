import { rea_wrapper_border } from "#/styles/provider";
import { Filter_animes_links } from "#/components/anime_page/catalog_links";
import { Avatar_slider } from "#/components/layout/avatar_slider";
import { UtilityJSX } from "#/components/utilities/x_components";
import { Search_Anime_in_Header } from "#/components/anime_page/search_anime";
import { WebsiteConfigs } from "#/configs/website";
import { UI_Menu } from "./menu";
import { birth_year, this_year } from "#/constants/common.constants";

export function Header() {
    return (
        <header
            className={`max-md:flex-col max-md:w-full shadow-violet-500/50 shadow-lg flex sticky top-0 z-2 justify-between ${rea_wrapper_border} dark:bg-slate-800 bg-blue-100 `}
            id="home"
        >
            <div className="flex flex-wrap justify-start gap-7">
                <a href="/" className="ml-2 flex items-center justify-center ">
                    <img src={"/icon.png"} className=" w-[40px] h-[40px]  object-cover" alt={`${WebsiteConfigs.name}'s icon`} />
                </a>
                <Filter_animes_links />
            </div>
            <div>
                <UI_Menu />
            </div>
            <div className=" flex flex-wrap justify-end">
                <Search_Anime_in_Header />
                <Avatar_slider />
            </div>
        </header>
    );
}
export function Footer() {
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
                    <UtilityJSX.LinkX className={style} href={"/right/terms"}>
                        Соглашение
                    </UtilityJSX.LinkX>
                    <UtilityJSX.LinkX className={style} href={"/right/privacy"}>
                        Конфиденциальность
                    </UtilityJSX.LinkX>
                    <UtilityJSX.LinkX className={style} href={"/right/contacts"}>
                        Контакты и поддержка
                    </UtilityJSX.LinkX>

                    {/* <UtilityJSX.LinkX
                           
                            className={style}
                            href={"/info/support_us"}
                        >
                            Поддержите нас
                        </UtilityJSX.LinkX> */}

                    <UtilityJSX.LinkX
                        className="p-2 dark:hover:bg-violet-500/10 hover:bg-blue-300/40 float-right"
                        href={WebsiteConfigs.developer_website}
                    >
                        Сайт разработчика
                    </UtilityJSX.LinkX>
                </nav>
                <div className=" mx-2 mb-2 grid">
                    <div className=" bg-slate-500/30 h-[1px] m-2" />
                    <a className={"flex w-max  "} href="/#home">
                        <img src={"/icon.png"} className="ml-2 size-8" width={30} height={30} alt={`${WebsiteConfigs.name}'s icon`} />
                        <span className=" ml-3 my-auto text-xl text-blue-500/80">{WebsiteConfigs.normalized_name}.art</span>
                    </a>
                    {/* <span className="p-2 text-slate-500/80">Все материалы взяты из свободных источников и открытых Web API</span> */}
                    <span className={"p-2 dark:text-violet-400/80 text-violet-900/80"}>
                        Все представленные на данном сайте материалы являются собственностью их изготовителя (владельца прав), охраняются
                        международными правовыми конвенциями и предназначены только для ознакомления, носят исключительно ознакомительный и
                        развлекательный характер.
                    </span>
                </div>
            </div>
        </footer>
    );
}
