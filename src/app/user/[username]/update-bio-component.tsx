"use client";
import { useToaster } from "#/components/layout/atoms-toasts-components/useToast";
import { useTransition, type FormEvent } from "react";
import { serverActionHandlerOnClient } from "#/integration/utils/server-action-handler-on-client";
import { UpdateBio_ServerAction } from "#/actions/profile/update-bio-server-action";
export function UpdateBioComponent({
    username,
    setEditingFunction,
    existingBio,
}: {
    existingBio: string | null;
    setEditingFunction: React.Dispatch<React.SetStateAction<boolean>>;
    username: string;
}): React.JSX.Element {
    const toaster = useToaster();
    const [pending, startTransition] = useTransition();

    function formOnSubmitHandler(event: FormEvent<HTMLFormElement>) {
        startTransition(async (): Promise<void> => {
            event.preventDefault();
            const newBio = event.currentTarget["bio-text-area"].value as string;
            const res = await UpdateBio_ServerAction(newBio, "/user/" + username);
            serverActionHandlerOnClient({
                res,
                error: toaster.error,
            });
            setEditingFunction((pv) => false);
            return;
        });
        event.currentTarget.reset();
    }
    return (
        <form
            onSubmit={formOnSubmitHandler}
            id="comment_form"
            className={"dark:bg-slate-800 bg-blue-200 p-2 flex flex-wrap "}
        >
            <div className="w-full">
                <textarea
                    className={`rounded  outline-none dark:bg-slate-900 bg-blue-100 min-h-20 p-2`}
                    placeholder="Написать о себе"
                    name="bio-text-area"
                    id="bio-text-area"
                    required
                    {...(existingBio ? { defaultValue: existingBio } : {})}
                    maxLength={400}
                />
                <div className=" flex gap-2 p-1 justify-end">
                    <button
                        type="button"
                        onClick={(e) => {
                            e.preventDefault();
                            return setEditingFunction(false);
                        }}
                        className={`p-1 dark:bg-slate-500/40  bg-red-200 active:bg-blue-400 hover:bg-slate-500/80 cursor-pointer`}
                    >
                        Отмена
                    </button>
                    <button
                        type="submit"
                        className={`p-1 dark:bg-green-500/50 bg-slate-200 hover:bg-slate-300 active:bg-blue-400 hover:dark:bg-green-600/50 cursor-pointer`}
                    >
                        {pending ? "Сохраняю…" : "Сохранить"}
                    </button>
                </div>
            </div>
        </form>
    );
}
