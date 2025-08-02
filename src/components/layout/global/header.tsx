import { rea_wrapper_border } from "#/styles/provider";
import { Filter_animes_links } from "#/components/anime_page/catalog_links";
import { Avatar_slider } from "#/components/layout/avatar_slider";
import { Search_Anime_in_Header } from "#/components/anime_page/search_anime";
import { WebsiteConfigs } from "#/configs/website";
import Link from "next/link";
import { UI_Menu } from "#/components/layout/menu";
import { Profile } from "reanime/user-service/response/response-data-types.js";
export function Layout_Header({ profile }: { profile?: Profile }) {
    return (
        <header
            className={`max-md:flex-col max-md:w-full shadow-violet-500/50 shadow-lg flex sticky top-0 z-2 justify-between ${rea_wrapper_border} dark:bg-slate-800 bg-blue-100 `}
            id="home"
        >
            <div className="flex flex-wrap justify-start gap-7">
                <Link href="/" className="ml-2 flex items-center justify-center ">
                    <img src={"/icon.png"} className=" w-[40px] h-[40px]  object-cover" alt={`${WebsiteConfigs.name}'s icon`} />
                </Link>
                <Filter_animes_links />
            </div>
            <div>
                <UI_Menu />
            </div>
            <div className=" flex flex-wrap justify-end">
                <Search_Anime_in_Header />
                <Avatar_slider profile={profile} />
            </div>
        </header>
    );
}
