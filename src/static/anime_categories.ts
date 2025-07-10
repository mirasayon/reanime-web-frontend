import { filter_search_params } from "#app/list/[filter_uid]/page";
import { i_describe_genres } from "#T/userinserface";

export type categories = {
    link_url: `/list/${filter_search_params}`;
    title: string;
};
export type genresType = {
    title: string;
    link_url: `/genres/${string}`;
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
        title: "Этот год",
        link_url: "/list/this_year",
    },
];
export const typed_description_genres: Omit<i_describe_genres, "description">[] = [
    {
        english_name: "Slice of Life",
        russian_name: "Повседневность",
    },
    {
        english_name: "Romance",
        russian_name: "Романтика",
    },
    {
        english_name: "Comedy",
        russian_name: "Комедия",
    },
    {
        english_name: "Drama",
        russian_name: "Драма",
    },
    {
        english_name: "Mystery",
        russian_name: "Детектив",
    },
    {
        english_name: "Action",
        russian_name: "Экшен",
    },

    {
        english_name: "Ecchi",
        russian_name: "Этти",
    },
    {
        english_name: "Hentai",
        russian_name: "Хентай",
    },
    {
        english_name: "Yaoi",
        russian_name: "Яой",
    },

    {
        english_name: "Yuri",
        russian_name: "Юри",
    },

    {
        english_name: "Fantasy",
        russian_name: "Фэнтези",
    },
    {
        english_name: "School",
        russian_name: "Школа",
    },

    {
        english_name: "Seinen",
        russian_name: "Сэйнэн",
    },
    {
        english_name: "Historical",
        russian_name: "Исторический",
    },
    {
        english_name: "Parody",
        russian_name: "Пародия",
    },
    {
        english_name: "Harem",
        russian_name: "Гарем",
    },
    {
        english_name: "Josei",
        russian_name: "Дзёсей",
    },
    {
        english_name: "Adventure",
        russian_name: "Приключения",
    },
    {
        english_name: "Samurai",
        russian_name: "Самураи",
    },
    {
        english_name: "Super Power",
        russian_name: "Супер сила",
    },
    {
        english_name: "Military",
        russian_name: "Военное",
    },
    {
        english_name: "Supernatural",
        russian_name: "Сверхъестественное",
    },
    {
        english_name: "Thriller",
        russian_name: "Триллер",
    },
    {
        english_name: "Martial Arts",
        russian_name: "Боевые искусства",
    },
    {
        english_name: "Sci-Fi",
        russian_name: "Научная фантастика",
    },
    {
        english_name: "Shounen ai",
        russian_name: "Сёнен-ай",
    },
    {
        english_name: "Work Life",
        russian_name: "Работа",
    },
    {
        english_name: "Shounen",
        russian_name: "Сёнен",
    },
    {
        english_name: "Psychological",
        russian_name: "Психологический триллер ",
    },
    {
        english_name: "Music",
        russian_name: "Музыка",
    },
    {
        english_name: "Dementia",
        russian_name: "Безумие",
    },
    {
        english_name: "Shoujo",
        russian_name: "Сёдзё",
    },
    {
        english_name: "Shoujo Ai",
        russian_name: "Сёдзё-ай",
    },
    {
        english_name: "Sports",
        russian_name: "Спорт",
    },
    {
        english_name: "Mecha",
        russian_name: "Меха",
    },
    {
        english_name: "Gourmet",
        russian_name: "Гурман",
    },
    {
        english_name: "Vampire",
        russian_name: "Вампиры",
    },
    {
        english_name: "Erotica",
        russian_name: "Эротика",
    },
    {
        english_name: "Space",
        russian_name: "Космос",
    },
    {
        english_name: "Horror",
        russian_name: "Ужасы",
    },
    {
        english_name: "Kids",
        russian_name: "Детское (Кодомо)",
    },
    {
        english_name: "Demons",
        russian_name: "Демоны",
    },
    {
        english_name: "Game",
        russian_name: "Игры",
    },
    {
        english_name: "Police",
        russian_name: "Полиция",
    },
    {
        english_name: "Cars",
        russian_name: "Машины",
    },
];

export const genres: genresType[] = typed_description_genres.map((gen) => {
    return {
        title: gen.russian_name,
        link_url: `/genres/${gen.english_name.toLowerCase()}`,
    };
});
