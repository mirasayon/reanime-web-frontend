"use client";
import { AvatarUpdate_ServerAction } from "#/actions/media/avatar-update.server-action";
import { UserServiceMediaConfigs } from "#/actions/media/config";
import { useState, useTransition } from "react";
import { IoIosCloudUpload } from "react-icons/io";
import { useToast } from "../layout/atoms-toasts-components/useToast";
import { internalErrTxt } from "#/integration/constants/messages-from-services";
import { useRouter } from "next/navigation";

export function UpdateAvatarForm({ currUrl }: { currUrl: string }) {
    const { success, error, info } = useToast();
    const router = useRouter();
    const [pending, startTransition] = useTransition();
    const [previewSrc, setPreviewSrc] = useState<string>();
    function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setPreviewSrc(url);
        }
    }

    async function UploadAvatarHandle(fd: FormData) {
        startTransition(async () => {
            const imageFile = fd.get(UserServiceMediaConfigs.avatar_file_HTML_INPUT_name) as File | null;
            if (!imageFile?.size) {
                return;
            }
            const res = await AvatarUpdate_ServerAction(imageFile, currUrl);
            if (res.middleErrors) {
                error(res.middleErrors.toString());
                return;
            }
            if (res?.res?.errors?.length) {
                error(res?.res?.errors.toString());
                return;
            }
            if (res?.res?.message) {
                success(res.res.message);
                window.location.reload();
                return;
            }
            if (res.internalError) {
                error(internalErrTxt);
                return;
            }
        });
    }
    return (
        <div>
            <div className="flex flex-col p-2 gap-4">
                {/* <h1 className="text-xl font-bold mb-4">Upload an Image</h1> */}

                {!previewSrc && (
                    <label
                        htmlFor={UserServiceMediaConfigs.avatar_file_HTML_INPUT_name}
                        className="p-4 flex flex-col justify-center items-center dark:bg-blue-950 bg-blue-100 cursor-pointer"
                    >
                        <div>Обновить аватарку</div>
                        <IoIosCloudUpload size={50} color="violet" />
                    </label>
                )}
                <form action={UploadAvatarHandle}>
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
                    {previewSrc && <img src={previewSrc} alt="preview" className="mb-4 max-h-48" />}
                    {previewSrc && (
                        <button
                            type="submit"
                            disabled={pending}
                            className={`animate-pulse px-4 py-2 bg-blue-600 text-white rounded cursor-pointer ${pending && "cursor-wait"}`}
                        >
                            Загрузить аватарку
                        </button>
                    )}
                </form>
            </div>
        </div>
    );
}
