"use client";
import { AvatarUpdate_ServerAction } from "#/actions/media/avatar-update.server-action";
import { userServiceMediaConfigs } from "#/actions/media/config";
import { useState, useTransition } from "react";
import { IoIosCloudUpload } from "react-icons/io";
import { useToaster } from "../layout/atoms-toasts-components/useToast";
import { useRouter } from "next/navigation";
import { serverActionHandlerOnClient } from "#/integration/utils/server-action-handler-on-client";

export function UpdateAvatarForm() {
    const toaster = useToaster();
    const router = useRouter();
    const [pending, startTransition] = useTransition();
    const [previewSrc, setPreviewSrc] = useState<string>();
    function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setPreviewSrc(url);
        } else {
            window?.location?.reload?.();
        }
    }

    function onSubmitUploadAvatarHandler(fd: FormData) {
        startTransition(async () => {
            const imageFile = fd.get(userServiceMediaConfigs.avatar_file_HTML_INPUT_name) as File | null;
            if (!imageFile?.size) {
                toaster.error("Нет файла для загрузки. Попробуйте другой файл");
                return;
            }
            const res = await AvatarUpdate_ServerAction(imageFile);
            return serverActionHandlerOnClient({
                res,
                error: toaster.error,
                onSuccessFunction: () => {
                    window?.location?.reload?.();
                    router.refresh();
                },
            });
        });
    }
    return (
        <div>
            <div className="flex flex-col">
                {!previewSrc && (
                    <label
                        htmlFor={userServiceMediaConfigs.avatar_file_HTML_INPUT_name}
                        className="p-1 gap-2 flex flex-row justify-center items-center dark:bg-blue-950 bg-blue-300 cursor-pointer"
                    >
                        {" "}
                        <IoIosCloudUpload size={15} color="violet" />
                        <span>Обновить</span>
                    </label>
                )}
                <form action={onSubmitUploadAvatarHandler} className=" flex flex-col gap-2">
                    <input
                        type="file"
                        name={userServiceMediaConfigs.avatar_file_HTML_INPUT_name}
                        id={userServiceMediaConfigs.avatar_file_HTML_INPUT_name}
                        accept="image/png, image/jpeg, image/jpg"
                        onChange={handleFileChange}
                        lang="ru"
                        hidden
                        className="block mb-4"
                    />
                    {previewSrc && <img src={previewSrc} alt="preview" className="h-48 w-48 object-cover" />}
                    {previewSrc && (
                        <button
                            type="submit"
                            disabled={pending}
                            className={`animate-pulse hover:animate-none hover:bg-blue-400 active:bg-blue-200 p-1 bg-blue-600 text-white rounded cursor-pointer ${
                                pending && "cursor-wait"
                            }`}
                        >
                            {pending ? "Загрузка..." : "Загрузить аватарку"}
                        </button>
                    )}
                </form>
            </div>
        </div>
    );
}
