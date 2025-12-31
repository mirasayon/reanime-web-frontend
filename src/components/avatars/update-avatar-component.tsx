"use client";
import { AvatarUpdate_ServerAction } from "#/actions/media/avatar-update.server-action";
import { UserServiceMediaConfigs } from "#/actions/media/config";
import { useState, useTransition } from "react";
import { IoIosCloudUpload } from "react-icons/io";
import { useToaster } from "../layout/atoms-toasts-components/useToast";
import { useRouter } from "next/navigation";
import { handleSaResponseForClient } from "#/integration/utils/server-actions-responses-processor-from-client-environment";

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
            const imageFile = fd.get(UserServiceMediaConfigs.avatar_file_HTML_INPUT_name) as File | null;
            if (!imageFile?.size) {
                toaster.error("Нет файла для загрузки. Попробуйте другой файл");
                return;
            }
            const res = await AvatarUpdate_ServerAction(imageFile);
            return handleSaResponseForClient({
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
            <div className="flex flex-col p-1">
                {!previewSrc && (
                    <label
                        htmlFor={UserServiceMediaConfigs.avatar_file_HTML_INPUT_name}
                        className="p-1  flex flex-col justify-center items-center dark:bg-blue-950 bg-blue-100 cursor-pointer"
                    >
                        {/* <div>Обновить аватарку</div> */}
                        <IoIosCloudUpload size={30} color="violet" />
                    </label>
                )}
                <form action={onSubmitUploadAvatarHandler} className=" flex flex-col gap-2">
                    <input
                        type="file"
                        name={UserServiceMediaConfigs.avatar_file_HTML_INPUT_name}
                        id={UserServiceMediaConfigs.avatar_file_HTML_INPUT_name}
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
