"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { uploadImage } from "#/actions/media/avatar-upload";
import { Profile } from "reanime/user-service/response/response-data-types.js";
import { UserServiceMediaConfigs } from "#/actions/media/config";
import { Avatar, AvatarImage, AvatarFallback } from "#/components/users/my-profile";
import delay from "delay";
import { DeleteAvatar } from "#/actions/media/avatar-delete";
import { Logger } from "reanime/logger/chalk.js";
export function Upload_avatar_or_show({ profile }: { profile: Profile }) {
    const _router = useRouter();
    // const [is_changed, set_changed] = useState<boolean>(false);
    // const [is_hover, set_hover] = useState<boolean>(false);

    const [previewSrc, setPreviewSrc] = useState<string>();
    const [uploadedUrl, setUploadedUrl] = useState<string>();
    const [clientErrors, setclientErrors] = useState<string[]>([]);

    useEffect(() => {
        console.log(clientErrors);
    }, [clientErrors]);
    // This runs in the browser
    function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setPreviewSrc(url);
        }
    }
    async function deleteAvatarHandle(fd: FormData) {
        const res = await DeleteAvatar();
        if (res.errors.length) {
            setclientErrors(() => res.errors);
            return;
        }
        if (res.ok) {
            Logger.gray("DELETED");
            await delay(1000);
            _router.refresh();
        }
    }

    async function UploadAvatarHandle(fd: FormData) {
        const res = await uploadImage(fd);
        if (res.errors.length) {
            setclientErrors(res.errors);
        }
        if (res.hash) {
            setUploadedUrl(res.hash);
            await delay(1000);
            _router.refresh();
        }
    }
    return (
        <div className=" flex">
            {profile.avatar_url_hash && (
                <div className=" flex flex-col">
                    <Avatar className="w-28 h-28 shadow-md">
                        <AvatarImage
                            src={profile.avatar_url_hash ? `https://media-service.reanime.art/storage/avatar/${profile.avatar_url_hash}` : undefined}
                        />
                        <AvatarFallback className="text-lg font-semibold">{profile.nickname?.[0] || "U"}</AvatarFallback>
                    </Avatar>
                    <form action={deleteAvatarHandle} className=" flex p-2 m-2 ">
                        <button type="submit" className="p-2 bg-red-600 rounded cursor-pointer">
                            Удалить аватар
                        </button>
                    </form>
                </div>
            )}

            {!profile.avatar_url_hash && (
                <div className="flex flex-col p-2 gap-4">
                    <h1 className="text-xl font-bold mb-4">Upload an Image</h1>
                    <form action={UploadAvatarHandle}>
                        <input
                            type="file"
                            name={UserServiceMediaConfigs.avatar_file_name}
                            accept="image/*"
                            onChange={handleFileChange}
                            className="block mb-4"
                        />
                        {previewSrc && <img src={previewSrc} alt="preview" className="mb-4 max-h-48" />}
                        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
                            Upload
                        </button>
                    </form>

                    {uploadedUrl && (
                        <p className="mt-4">
                            Uploaded! View it{" "}
                            <a href={uploadedUrl} target="_blank" rel="noreferrer" className="text-blue-500 underline">
                                here
                            </a>
                        </p>
                    )}
                </div>
            )}

            {clientErrors.length > 0 && <span>Ошибка: </span>}
            {clientErrors.length > 0 &&
                clientErrors.map((err, ind) => {
                    return (
                        <span key={`${err + ind}`} className=" text-red-700 dark:text-violet-500">
                            {err}
                        </span>
                    );
                })}
        </div>
    );
}
