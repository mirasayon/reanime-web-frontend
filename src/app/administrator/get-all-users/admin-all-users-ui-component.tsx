"use client";
import { useGToaster } from "#/components/layout/atoms-toasts-components/useToast";
import { JustAvatarCircleComponent } from "#/components/users/dashboard/common";
import { Linker } from "#/components/utilities/common/linker-utility-component";
import type { Account } from "#user-service/databases/orm/client.js";
import type { Administrator_ResponseTypes } from "#user-service/shared/response-patterns/administrator.routes.js";
export type MainUserListShowerProps = {
    users: Administrator_ResponseTypes.get_all_users;
    pageSizeOptions?: number[];
};
import { useCopyToClipboard } from "react-use";
import { useState, type ReactNode } from "react";
type UserType = Administrator_ResponseTypes.get_all_users[number];

const __styles = {
    wrapper: "p-2 dark:bg-slate-800 bg-slate-100 flex flex-col",
    headerRow: "flex flex-col flex-wrap gap-2",
    title: "font-bold",
    controls: "flex flex-row  flex-wrap gap-2 items-center",
    input: "py-2 px-1 min-w-100 border outline-none rounded-md bg-slate-300 dark:bg-slate-700",
    select: "p-2 border rounded-md cursor-pointer bg-slate-300 dark:bg-slate-800",
    smallBtn:
        "p-1 border rounded text-sm cursor-pointer bg-slate-300 dark:bg-slate-700",
    tableWrapper: "bg-transparent rounded-lg shadow-xl flex",
    table: "min-w-full text-xs my-3",
    badgeBase: "px-2 py-1 rounded-full text-xs font-semibold",
    nextPrevStyles:
        " cursor-pointer px-3 py-1 border rounded disabled:opacity-50 disabled:cursor-not-allowed",
    modalBackdrop:
        "fixed inset-0 z-50 flex items-center justify-center bg-black/40",
    modalSheet:
        "bg-slate-200 dark:bg-slate-900 rounded-lg w-11/12 md:w-1/2 p-4 shadow-lg",
};

const shortId = (id: string) => `${id.slice(0, 8)}...${id.slice(-4)}`;
const parseDate = (d: Date | string) => {
    return typeof d === "string" ? new Date(d) : d;
};
const formatDate = (d?: Date | string) => {
    if (!d) {
        return "—";
    }
    const dt = parseDate(d);
    return dt.toLocaleString();
};
const map = {
    ADMIN: "bg-red-100 dark:bg-red-950 dark:text-slate-300 text-red-800",
    DEVELOPER: "bg-blue-100 dark:bg-blue-950 dark:text-slate-300 text-blue-800",
    TESTER: "bg-yellow-100 dark:bg-yellow-950 dark:text-slate-300 text-yellow-800",
    USER: "bg-gray-100 dark:bg-gray-950 dark:text-slate-300 text-gray-800",
} as const;
const typeBadgeClass = (t: Account["type"]) => {
    return `${__styles.badgeBase} ${map[t] ?? map.USER}`;
};

function getFilteredSorted(
    users: UserType[],
    opts: {
        query: string;
        filterType: "ALL" | Account["type"];
        sortBy: "created_at" | "username";
        sortDir: "asc" | "desc";
    },
) {
    const { query, filterType, sortBy, sortDir } = opts;
    const q = query.trim().toLowerCase();
    let list = users.slice();

    if (filterType !== "ALL") list = list.filter((u) => u.type === filterType);

    if (q) {
        list = list.filter((u) => {
            const nickname = u.profile?.nickname ?? "";
            return (
                u.username.toLowerCase().includes(q) ||
                (u.email ?? "").toLowerCase().includes(q) ||
                nickname.toLowerCase().includes(q) ||
                shortId(u.id).toLowerCase().includes(q)
            );
        });
    }

    list.sort((a, b) => {
        if (sortBy === "username") {
            return sortDir === "asc"
                ? a.username.localeCompare(b.username)
                : b.username.localeCompare(a.username);
        }
        const tA = parseDate(a.created_at).getTime();
        const tB = parseDate(b.created_at).getTime();
        return sortDir === "asc" ? tA - tB : tB - tA;
    });

    return list;
}
const arrSomeOptions = [
    "ID",
    "User",
    "Email",
    "Type",
    "Activated",
    "Created",
    "Actions",
] as const;
export function MainUserListShower({
    initialUsers,
    userServiceUrl,
    pageSizeOptions = [10, 25, 50, 100, 1000],
}: {
    initialUsers: Administrator_ResponseTypes.get_all_users;
    pageSizeOptions?: number[];
    userServiceUrl: string;
}) {
    const toaster = useGToaster();
    const [users] = useState<UserType[]>(initialUsers);
    const [query, setQuery] = useState("");
    const [filterType, setFilterType] = useState<"ALL" | Account["type"]>(
        "ALL",
    );
    const [sortBy, setSortBy] = useState<"created_at" | "username">(
        "created_at",
    );
    const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState<number>(pageSizeOptions[0]);
    const filtered = getFilteredSorted(users, {
        query,
        filterType,
        sortBy,
        sortDir,
    });
    const total = filtered.length;
    const pages = Math.max(1, Math.ceil(total / pageSize));
    const pageSlice = filtered.slice((page - 1) * pageSize, page * pageSize);

    const [, copyToClipboard] = useCopyToClipboard();
    function copyId(id: string) {
        try {
            copyToClipboard(id);
            return toaster.info("ID copied");
        } catch {
            return toaster.error("Error while copying");
        }
    }

    return (
        <div className={__styles.wrapper}>
            <div className={__styles.headerRow}>
                <h2 className={__styles.title}>Users ({total})</h2>

                <div className={__styles.controls}>
                    <input
                        value={query}
                        onChange={(e) => {
                            e.preventDefault();
                            setQuery(e.target.value);
                            return setPage(1);
                        }}
                        placeholder="Search by username / email / nickname / id"
                        className={__styles.input}
                    />

                    <select
                        value={filterType}
                        onChange={(e) => {
                            setFilterType(e.target.value as any);
                            setPage(1);
                        }}
                        className={__styles.select}
                    >
                        <option value="ALL">All types</option>
                        <option value="USER">USER</option>
                        <option value="ADMIN">ADMIN</option>
                        <option value="DEVELOPER">DEVELOPER</option>
                        <option value="TESTER">TESTER</option>
                    </select>

                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as any)}
                        className={__styles.select}
                    >
                        <option value="created_at">Sort by created</option>
                        <option value="username">Sort by username</option>
                    </select>

                    <button
                        onClick={() =>
                            setSortDir((s) => (s === "asc" ? "desc" : "asc"))
                        }
                        className={__styles.smallBtn}
                        title="Toggle sort direction"
                    >
                        {sortDir === "asc" ? "↑" : "↓"}
                    </button>

                    <select
                        value={pageSize}
                        onChange={(e) => {
                            setPageSize(Number(e.target.value));
                            setPage(1);
                        }}
                        className={__styles.select}
                    >
                        {pageSizeOptions.map((s) => (
                            <option key={s} value={s}>
                                {s} / page
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className={__styles.tableWrapper}>
                <table className={__styles.table}>
                    <thead>
                        <tr>
                            {arrSomeOptions.map((item) => {
                                return (
                                    <th
                                        key={item}
                                        className="px-4 py-3 text-left"
                                    >
                                        {item}
                                    </th>
                                );
                            })}
                        </tr>
                    </thead>
                    <tbody className="">
                        {pageSlice.map((u) => (
                            <tr
                                key={u.id}
                                className="border-y hover:bg-gray-50/80 dark:hover:bg-gray-50/10"
                            >
                                <TableDataWrapper>
                                    {shortId(u.id)}
                                </TableDataWrapper>
                                <TableDataWrapper>
                                    <div className="flex items-center gap-3">
                                        <JustAvatarCircleComponent
                                            altTitle={u.username + " avatar"}
                                            avatarUrl={
                                                userServiceUrl +
                                                "/v1/profile/avatar/view/" +
                                                u.username
                                            }
                                        />
                                        <div className="flex flex-col">
                                            <Linker
                                                clearTheDefaultStylings
                                                className="hover:underline"
                                                href={`/user/${u.username}`}
                                            >
                                                <div className="font-mono">
                                                    {"@" + u.username}
                                                </div>
                                            </Linker>
                                            <div className="text-xs text-gray-500">
                                                {u.profile?.nickname ?? "—"}
                                            </div>
                                        </div>
                                    </div>
                                </TableDataWrapper>
                                <TableDataWrapper>
                                    {u.email ?? "—"}
                                </TableDataWrapper>
                                <TableDataWrapper>
                                    <span className={typeBadgeClass(u.type)}>
                                        {u.type}
                                    </span>
                                </TableDataWrapper>
                                <TableDataWrapper>
                                    <label className="inline-flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            checked={u.is_activated}
                                            readOnly
                                            className="form-checkbox h-4 w-4 text-indigo-600"
                                        />
                                        <span className="text-sm">
                                            {u.is_activated ? "Yes" : "No"}
                                        </span>
                                    </label>
                                </TableDataWrapper>
                                <TableDataWrapper>
                                    {formatDate(u.created_at)}
                                </TableDataWrapper>
                                <TableDataWrapper>
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            copyId(u.id);
                                        }}
                                        className={__styles.smallBtn}
                                    >
                                        Copy ID
                                    </button>
                                </TableDataWrapper>
                            </tr>
                        ))}
                        {pageSlice.length === 0 && (
                            <tr>
                                <td
                                    colSpan={7}
                                    className="px-4 py-6 text-center text-gray-500"
                                >
                                    No users found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <div className="flex items-center justify-between mt-4">
                <div className="text-xs text-gray-600 dark:text-gray-200">
                    Showing {Math.min((page - 1) * pageSize + 1, total)} -{" "}
                    {Math.min(page * pageSize, total)} of {total}
                </div>
                <div className="flex items-center gap-2">
                    <button
                        disabled={page <= 1}
                        onClick={() => setPage((p) => Math.max(1, p - 1))}
                        className={__styles.nextPrevStyles}
                    >
                        Prev
                    </button>
                    <div className="px-3 py-1 border rounded">
                        Page {page} / {pages}
                    </div>
                    <button
                        disabled={page >= pages}
                        onClick={() => setPage((p) => Math.min(pages, p + 1))}
                        className={__styles.nextPrevStyles}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}
function TableDataWrapper({ children }: { children: ReactNode }) {
    return <td className="p-1">{children}</td>;
}
/**
    const [modalUser, setModalUser] = useState<UserType | null>(null);
 *     <button
                                        onClick={() => setModalUser(u)}
                                        className={__styles.smallBtn}
                                    >
                                        View
                                    </button>
 *    {modalUser && (
                <div className={__styles.modalBackdrop}>
                    <div className={__styles.modalSheet}>
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="text-lg font-semibold">
                                {modalUser.username} — profile
                            </h3>
                            <button
                                onClick={() => setModalUser(null)}
                                className="text-gray-500 cursor-pointer"
                            >
                                ✕
                            </button>
                        </div>

                        <div className="space-y-2 text-sm">
                            <div>
                                <strong>ID:</strong> {modalUser.id}
                            </div>
                            <div>
                                <strong>Email:</strong> {modalUser.email ?? "—"}
                            </div>
                            <div>
                                <strong>Type:</strong> {modalUser.type}
                            </div>
                            <div>
                                <strong>Activated:</strong>{" "}
                                {modalUser.is_activated ? "Yes" : "No"}
                            </div>
                            <div>
                                <strong>Created:</strong>{" "}
                                {formatDate(modalUser.created_at)}
                            </div>
                            <div>
                                <strong>Nickname:</strong>{" "}
                                {modalUser.profile?.nickname ?? "—"}
                            </div>
                            <div>
                                <strong>Bio:</strong>{" "}
                                {modalUser.profile?.bio ?? "—"}
                            </div>
                        </div>

                        <div className="mt-4 flex justify-end gap-2">
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    copyId(modalUser.id);
                                }}
                                className="px-3 py-1 border rounded cursor-pointer"
                            >
                                Copy ID
                            </button>
                            <button
                                onClick={() => setModalUser(null)}
                                className=" cursor-pointer px-3 py-1 bg-gray-200 dark:bg-slate-700 rounded"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
 */
