import type { IReady_Animes_DB } from "@reanime/resource-service/types/animes-db-types/ready-animes.types.js";

export function AnimeWatchPagePromoVideos({ trailer }: { trailer: IReady_Animes_DB["promo"] }) {
    return (
        <div className={`flex m-4 max-md:grid`}>
            {trailer?.map((item) => {
                if (item.hosting === "vk") return;
                const src_url: string = item.player_url.replace(/^http:/, "https:");
                return (
                    <iframe
                        className="aspect-video w-[400px] "
                        key={item.player_url}
                        src={src_url}
                        allow="picture-in-picture; "
                        allowFullScreen
                        title="тизер или трейлер"
                    />
                );
            })}
        </div>
    );
}
