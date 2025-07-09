import { rea_wrapper_border } from "#/styles/provider";
import { Filter_animes_links } from "#/components/anime_page/catalog_links";
import { ApplicationConfig } from "#/configs/application";
import { Avatar_slider } from "#/components/layout/avatar_slider";
import Link from "next/link";
import { Init_Theme_UI_format } from "#/components/layout/reusable";
import { UtilityJSX } from "#/components/utilities/x_components";
import { Search_anime_element } from "#/components/anime_page/search_anime";
import { WebsiteConfigs } from "#/configs/website";
class LayoutClass {
    Header = ({
        is_dark,
        is_web_format,
        current_user_avatar,
    }: {
        current_user_avatar: string | null;
        is_dark: boolean;
        is_web_format: boolean;
    }): React.JSX.Element => {
        const is_def_avatar = current_user_avatar?.endsWith("default_avatar.png") === true;
        const avatar = current_user_avatar
            ? is_def_avatar
                ? current_user_avatar
                : `${ApplicationConfig.internal_avatar_storage_path_url}${current_user_avatar}`
            : null;
        return (
            <>
                <Init_Theme_UI_format ui_format="web" theme="dark" />
                <header
                    className={`max-md:flex-col max-md:w-full shadow-violet-500/50 shadow-lg flex sticky top-0 z-2 justify-between ${rea_wrapper_border} ${
                        is_dark ? "bg-slate-800" : "bg-blue-100"
                    }`}
                    id="home"
                >
                    <div className="flex flex-wrap justify-start gap-7">
                        <Link href="/" className="ml-2 flex items-center justify-center ">
                            <img
                                src={"/icon.png"}
                                className=" w-[40px] h-[40px]  object-cover"
                                //  width={50} height={50}
                                alt={`${WebsiteConfigs.name}'s icon`}
                            />
                        </Link>
                        <Filter_animes_links is_dark={is_dark} />
                    </div>
                    <div className=" flex flex-wrap justify-between">
                        <Search_anime_element is_dark={is_dark} />
                        <Avatar_slider
                            is_web_format={is_web_format}
                            is_dark={is_dark}
                            img_src={avatar}
                        />
                    </div>
                </header>
            </>
        );
    };
    Footer = ({ is_dark }: { is_dark: boolean }) => {
        const style = ` p-2  ${is_dark ? "hover:bg-violet-500/10" : "hover:bg-blue-300/40"} `;
        return (
            <footer className={`   ${is_dark ? "bg-transparent" : "bg-blue-400/10"}`}>
                <div className={`flex flex-col h-auto ${rea_wrapper_border} `}>
                    <nav className="flex flex-wrap flex-row mx-2 justify-between">
                        <span className="mt-2 ml-2  flex  flex-row justify-between    w-full">
                            <span>
                                &copy; {ApplicationConfig.birth_year} -{" "}
                                {ApplicationConfig.this_year} {WebsiteConfigs.public_domain}
                            </span>
                        </span>
                        <UtilityJSX.LinkX is_dark={is_dark} className={style} href={"/right/terms"}>
                            Соглашение
                        </UtilityJSX.LinkX>
                        <UtilityJSX.LinkX
                            is_dark={is_dark}
                            className={style}
                            href={"/right/privacy"}
                        >
                            Конфиденциальность
                        </UtilityJSX.LinkX>
                        <UtilityJSX.LinkX
                            is_dark={is_dark}
                            className={style}
                            href={"/right/contacts"}
                        >
                            Контакты и поддержка
                        </UtilityJSX.LinkX>

                        {/* <UtilityJSX.LinkX
                            is_dark={is_dark}
                            className={style}
                            href={"/info/support_us"}
                        >
                            Поддержите нас
                        </UtilityJSX.LinkX> */}

                        <UtilityJSX.LinkX
                            className={` p-2  ${
                                is_dark ? "hover:bg-violet-500/10" : "hover:bg-blue-300/40"
                            } float-right  `}
                            is_dark={is_dark}
                            href={WebsiteConfigs.developer_website}
                        >
                            Сайт разработчика
                        </UtilityJSX.LinkX>
                    </nav>
                    <div className=" mx-2 mb-2 grid">
                        <div className=" bg-slate-500/30 h-[1px] m-2" />
                        <Link className={"flex w-max  "} href="/#home">
                            <img
                                src={"/icon.png"}
                                className="ml-2 size-8"
                                width={30}
                                height={30}
                                alt={`${WebsiteConfigs.name}'s icon`}
                            />
                            <span className=" ml-3 my-auto text-xl text-blue-500/80">
                                {WebsiteConfigs.normalized_name}.art
                            </span>
                        </Link>
                        {/* <span className="p-2 text-slate-500/80">Все материалы взяты из свободных источников и открытых Web API</span> */}
                        <span
                            className={`p-2 ${
                                is_dark ? "text-violet-400/80 " : "text-violet-900/80 "
                            }`}
                        >
                            Все представленные на данном сайте материалы являются собственностью их
                            изготовителя (владельца прав), охраняются международными правовыми
                            конвенциями и предназначены только для ознакомления, носят исключительно
                            ознакомительный и развлекательный характер.
                        </span>
                    </div>
                </div>
            </footer>
        );
    };
}
export const LayoutJSX = new LayoutClass();
