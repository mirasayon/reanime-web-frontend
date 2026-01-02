import type { Metadata } from "next";
import { WebsiteConfigs } from "#/configs/website-settings.app-config";
import Link from "next/link";
export default function __NotFoundPage() {
    return (
        <div className={"justify-center items-center text-center flex flex-col text-xl mb-40"}>
            <Link href={"/"}>
                <img
                    src={"/_assets/page-not-found.png"}
                    loading="lazy"
                    width={743 / 3}
                    height={418 / 3}
                    alt={"not found"}
                />
            </Link>
            <div className=" flex flex-col gap-2 justify-center items-center text-center">
                <p className="text-2xl">Извините, но страница, которую вы ищете, не существует.</p>
                <Link
                    className=" text-xl p-2.5 border-[0.19rem] border-solid border-blue-500 hover:bg-violet-500/40"
                    href={"/"}
                >
                    Вернуться на главную страницу
                </Link>
            </div>
        </div>
    );
}
export const metadata: Metadata = {
    title: `Страница не найдена | ${WebsiteConfigs.public_domain}`,
};
