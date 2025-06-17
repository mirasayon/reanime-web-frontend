export function DMCA_Protected({ is_dark }: { is_dark: boolean }) {
    return (
        <>
            <div
                className={` ${
                    is_dark ? "bg-slate-900" : " bg-slate-300"
                } mt-10 flex min-w-full min-h-[500px] `}
            >
                <p
                    className={` text-6xl  ${
                        is_dark ? "text-red-900" : " text-red-400"
                    } p-8 shadow-black drop-shadow-md `}
                >
                    Защищено требованиями собственника
                </p>
            </div>
        </>
    );
}
