export function SubmitBtnComponent({
    children,
    isPending,
    onClickHandler,
}: {
    isPending: boolean;
    children: React.ReactNode;
    onClickHandler: React.MouseEventHandler<HTMLButtonElement>;
}) {
    return (
        <button
            type="submit"
            onClick={onClickHandler}
            disabled={isPending}
            className={`${
                isPending && "cursor-wait"
            }  cursor-pointer dark:bg-blue-900/30 bg-violet-300 flex justify-center items-center`}
        >
            {children}
        </button>
    );
}
