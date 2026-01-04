import { FaClipboardList } from "react-icons/fa6";
import { IoCheckmarkDoneCircleOutline, IoCheckmarkDoneCircleSharp, IoEyeSharp } from "react-icons/io5";
import { RiDeleteBin4Fill, RiDeleteBinLine } from "react-icons/ri";

export function AddPlannedBtnComponent({ state }: { state: "create" | "delete" }) {
    return (
        <>
            <FaClipboardList color={state === "create" ? "silver" : "blue"} size={55} className="p-2" />
            <div className="pr-4">
                {state === "create" ? "Добавить в запланированный список" : "Удалить из в запланированного списка"}
            </div>
        </>
    );
}

export function AddToAbandonedListBtnComponent({ state }: { state: "create" | "delete" }) {
    return (
        <>
            {state === "create" ? (
                <RiDeleteBinLine size={60} className="p-3" />
            ) : (
                <RiDeleteBin4Fill size={60} className="p-3" />
            )}

            <div className="pr-4">
                {state === "create" ? "Добавить в заброшенные" : "Удалить из списка заброшенных"}
            </div>
        </>
    );
}

export function AddToCompletedListBtnComponent({ state }: { state: "create" | "delete" }) {
    return (
        <>
            {state === "create" ? (
                <IoCheckmarkDoneCircleOutline size={60} className="p-3" />
            ) : (
                <IoCheckmarkDoneCircleSharp size={60} className="p-3" />
            )}

            <div className="pr-4">
                {state === "create" ? "Добавить в просмотренные" : "Удалить из списка просмотренных"}
            </div>
        </>
    );
}

export function AddToCurrentWatchingListBtnComponent({ state }: { state: "create" | "delete" }) {
    return (
        <>
            <IoEyeSharp
                color={state === "create" ? "silver" : "violet"}
                size={60}
                className={` p-3 ${state === "delete" && "animate-pulse"} `}
            />

            <div className="pr-4">
                {state === "create" ? "Добавить в текущий список просмотра" : "Удалить из текущего списка просмотра"}
            </div>
        </>
    );
}
