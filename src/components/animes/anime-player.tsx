import { AdsInKodikIsNotOurs } from "#/components/info/show-ads-in-kodik-are-not-mine-text";
import { BORDER } from "#/styles/style-constants";
export function AnimePlayer({ vid_src, nextEpisodeAt }: { vid_src: string; nextEpisodeAt?: string | null }) {
    const url = "https:" + vid_src;
    return (
        <section className={`flex flex-col p-2 ${BORDER}`} id="play">
            <section className="m-2 flex flex-col justify-center items-center flex-wrap " id="play">
                <AdsInKodikIsNotOurs />
                <iframe
                    title="плеер"
                    className="min-w-full min-h-[500px]"
                    src={url}
                    allowFullScreen={true}
                    allow="picture-in-picture; fullscreen;"
                />
            </section>
            {nextEpisodeAt && (
                <div className=" p-4">
                    <div className="">След. эпизод {nextEpisodeAt}</div>
                </div>
            )}
        </section>
    );
}
