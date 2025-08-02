import { uploadImage } from "#/actions/media/avatar-upload";
import { UserServiceMediaConfigs } from "#/actions/media/config";
import delay from "delay";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoIosCloudUpload } from "react-icons/io";

export function UploadAvatar({}: {}) {
    const [previewSrc, setPreviewSrc] = useState<string>();
    const [clientErrors, setclientErrors] = useState<string[]>([]);
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
            return;
        }
        const res = await uploadImage(fd);
        if (res.errors.length) {
            setclientErrors(res.errors);
        }
        if (res.hash) {
            await delay(1000);
            _router.refresh();
        }
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
                        <div>Добавить аватарку</div>
                        <IoIosCloudUpload size={50} color="violet" />
                    </label>
                )}
                <form action={UploadAvatarHandle}>
                    <input
                        type="file"
                        name={UserServiceMediaConfigs.avatar_file_HTML_INPUT_name}
                        id={UserServiceMediaConfigs.avatar_file_HTML_INPUT_name}
                        accept="image/*"
                        //  accept="image/png, image/jpeg, image/jpg"
                        onChange={handleFileChange}
                        lang="ru"
                        hidden
                        className="block mb-4"
                    />
                    {previewSrc && <img src={previewSrc} alt="preview" className="mb-4 max-h-48" />}
                    {previewSrc && (
                        <button type="submit" className="animate-pulse px-4 py-2 bg-blue-600 text-white rounded cursor-pointer">
                            Загрузить аватарку
                        </button>
                    )}
                </form>
            </div>

            {clientErrors.length > 0 && <span>Ошибка: </span>}
            {clientErrors.length > 0 &&
                clientErrors.map((err, ind) => {
                    return (
                        <span key={`${err + ind}`} className=" text-red-700 dark:text-red-500">
                            {err}
                        </span>
                    );
                })}
        </div>
    );
}
