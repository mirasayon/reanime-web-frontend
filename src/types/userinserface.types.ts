export type i_describe_genres = {
    english_name: string;
    russian_name: string;
    description: string;
};
export interface i_top_charts_anime_json {
    page_url: string;
    rating?: number;
    title: string;
    cover: string;
    description?: string;
}

export type valid_image_file = "jpeg" | "png" | "jpg";
