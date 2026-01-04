export function SubmitButtonForAuthForms({ pending, text }: { pending: boolean; text: string }) {
    return (
        <button
            className="p-2 mt-3 rounded-lg  dark:bg-blue-300/10 bg-blue-300/70 cursor-pointer hover:bg-blue-500/40 dark:hover:bg-blue-500/30"
            type="submit"
        >
            {pending ? "Загрузка..." : text}
        </button>
    );
}
