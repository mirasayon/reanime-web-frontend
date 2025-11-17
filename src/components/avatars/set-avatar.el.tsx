"use client";
import { AvatarSet_ServerAction } from "#/actions/media/avatar-set.server-action";
import { UserServiceMediaConfigs } from "#/actions/media/config";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { IoIosCloudUpload } from "react-icons/io";
import { useToast } from "../layout/atoms-toasts-components/useToast";

export function SetAvatarForm({}: {}) {
    const [previewSrc, setPreviewSrc] = useState<string>();
    const { error, info, success } = useToast();

    const [pending, startTransition] = useTransition();
    const _router = useRouter();
    function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setPreviewSrc(url);
        }
    }

    async function UploadAvatarHandle(fd: FormData) {
        const imageFile = fd.get(UserServiceMediaConfigs.avatar_file_HTML_INPUT_name) as File | null;

        if (!imageFile?.size) {
            error("Файл не найден");
            return;
        }
        const res = await AvatarSet_ServerAction(fd);
        if (res.errors.length) {
            for (const err of res.errors) {
                error(err);
            }
        }
        if (res.uploaded) {
            success("Успешно добавлен");
            _router.refresh();
        }
    }
    return (
        <div className=" border-r-2 border-blue-500">
            {!previewSrc && (
                <div>
                    <img src="/_assets/default-avatars/m.jpg" className="w-48 h-48 object-cover p-1" alt="Аватарка по умолчанию" />
                </div>
            )}
            <form action={UploadAvatarHandle} className="flex flex-col ">
                <label
                    hidden={!!previewSrc}
                    htmlFor={UserServiceMediaConfigs.avatar_file_HTML_INPUT_name}
                    className="flex flex-col dark:bg-blue-950 bg-blue-100 cursor-pointer"
                >
                    <div className=" flex flex-col justify-center items-center rounded">
                        <div>Добавить аватарку</div>
                        <div>
                            <IoIosCloudUpload size={20} color="violet" />
                        </div>
                    </div>
                </label>{" "}
                <input
                    type="file"
                    name={UserServiceMediaConfigs.avatar_file_HTML_INPUT_name}
                    id={UserServiceMediaConfigs.avatar_file_HTML_INPUT_name}
                    accept="image/png, image/jpeg, image/jpg"
                    onChange={handleFileChange}
                    lang="ru"
                    hidden
                    required
                />
                {previewSrc && (
                    <>
                        <div className="">
                            <img src={previewSrc} alt="preview avatar image" className="m-2 h-48 w-48 object-cover" />
                        </div>
                        <button
                            type="submit"
                            className="animate-pulse  hover:animate-none hover:bg-emerald-400 active:hover:bg-emerald-200 p-1 mx-1 bg-emerald-600 text-white rounded cursor-pointer"
                        >
                            {pending ? "Загрузка..." : "Загрузить аватарку"}
                        </button>
                    </>
                )}
            </form>
        </div>
    );
}
