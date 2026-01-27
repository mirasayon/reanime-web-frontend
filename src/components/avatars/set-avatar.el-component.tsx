"use client";
import { setProfileAvatar_ServerAction } from "#/actions/media/avatar-set.server-action";
import { userServiceMediaConfigs } from "#/actions/media/config";
import { useState, useTransition, type Dispatch, type SetStateAction } from "react";
import { IoIosCloudUpload } from "react-icons/io";
import { useToaster } from "../layout/atoms-toasts-components/useToast";
import { serverActionHandlerOnClient } from "#/integration/utils/server-action-handler-on-client";

export function SetAvatarForm({ setIsEditing }: { setIsEditing: Dispatch<SetStateAction<boolean>> }) {
    const [previewSrc, setPreviewSrc] = useState<string>();
    const toaster = useToaster();

    const [pending, startTransition] = useTransition();
    function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setIsEditing(true);
            setPreviewSrc(url);
        }
    }

    function UploadAvatarHandle(fd: FormData) {
        startTransition(async () => {
            const imageFile = fd.get(userServiceMediaConfigs.avatar_file_HTML_INPUT_name) as File | null;

            if (!imageFile?.size) {
                toaster.error("Файл не найден");
                return;
            }
            const res = await setProfileAvatar_ServerAction(fd);
            serverActionHandlerOnClient({
                res,
                error: toaster.error,
                onSuccessFunction: () => {
                    window?.location?.reload?.();
                },
            });
        });
    }
    return (
        <div className="">
            <form action={UploadAvatarHandle} className="flex flex-col ">
                <label
                    hidden={!!previewSrc}
                    htmlFor={userServiceMediaConfigs.avatar_file_HTML_INPUT_name}
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
                    name={userServiceMediaConfigs.avatar_file_HTML_INPUT_name}
                    id={userServiceMediaConfigs.avatar_file_HTML_INPUT_name}
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
