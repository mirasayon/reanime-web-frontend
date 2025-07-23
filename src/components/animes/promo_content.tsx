import type { JsonDB } from "#T/shared/json_db";
import { rea_wrapper_border } from "#/styles/provider";

export function Trailer_Component({ trailer }: { trailer: JsonDB.ftype["promo"] }) {
    return (
        <div className={`flex m-4 max-md:grid ${rea_wrapper_border}`}>
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
