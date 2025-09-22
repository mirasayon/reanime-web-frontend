// import { notFound } from "next/navigation";
// import type { SearchParams } from "#T/nextjs";
// import type { Metadata } from "next";
// import { filters_uids, list_anime_ru, metadata404, type filter_search_params } from "#/constants/common.constants";
// import { WebsiteConfigs } from "#/configs/website-settings.app-config";
// import { RadioGroupSelectCategory } from "./radio-group-select-category";
// import { _categories } from "#/static/anime_categories";
// import { Anime_List_Component } from "#/components/utilities/common/assembler-of-utilities.utilx";
// import { loadEnvFile } from "#/configs/environment-variables.main-config";
// import { kodikCategories } from "#/libs/kodik-api/categories";

// export default async function List_Page({ params, searchParams }: { params: Promise<{ filter_uid: string }>; searchParams: SearchParams }) {
//     const filter = (await params).filter_uid as filter_search_params;
//     if (!filters_uids.includes(filter)) {
//         return notFound();
//     }
//     type c = keyof typeof kodikCategories;
//     const res = await kodikCategories[filter as c](await searchParams);
//     if (!res) {
//         return notFound();
//     }

//     const res_url = (await loadEnvFile()).resource_service.url;
//     const { data, input } = res;
//     return (
//         <>
//             <h1 className=" font-bold text-center border-b-4 border-blue-300">
//                 По категориям: {_categories.find((w) => w.link_url.includes(filter))?.title}
//             </h1>
//             <RadioGroupSelectCategory current={filter} />
//             <Anime_List_Component resUrl={res_url} kodiks={data} />
//         </>
//     );
// }

// export async function generateMetadata({ params }: { params: Promise<{ filter_uid: string }> }): Promise<Metadata> {
//     const filter = (await params).filter_uid as filter_search_params;
//     if (!filters_uids.includes(filter)) {
//         return metadata404;
//     }
//     const desc = list_anime_ru[filter];
//     return {
//         title: `${desc} | ${WebsiteConfigs.public_domain}`,
//     } satisfies Metadata;
// }

