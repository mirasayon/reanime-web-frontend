import type { filter_search_params } from "#/constants/common.constants";

export type categories = {
    link_url: `/list/${filter_search_params}`;
    title: string;
};

export const _categories: categories[] = [
    {
        title: "Фильмы",
        link_url: "/list/movie",
    },
    {
        title: "Сериалы",
        link_url: "/list/series",
    },
    {
        title: "Онгоинги",
        link_url: "/list/ongoing",
    },
    {
        title: "Завершённые",
        link_url: "/list/released",
    },
    {
        title: "Популярные",
        link_url: "/list/popular",
    },
    {
        title: "Этот сезон",
        link_url: "/list/this_year",
    },
];
