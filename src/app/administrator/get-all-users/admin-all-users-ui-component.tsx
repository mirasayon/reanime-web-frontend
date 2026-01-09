"use client";
import { JustAvatarCircleComponent } from "#/components/users/dashboard/common";
import { Linker } from "#/components/utilities/common/linker-utility-component";
export type MainUserListShowerProps = {
    users: ResponseTypesForAdministratorSection["get_all_users"];
    pageSizeOptions?: number[];
};
import { useState } from "react";
import type { ResponseTypesForAdministratorSection } from "#user-service/user-service-response-types-for-all.routes.ts";
import { makeAvatarFullUrl } from "#/components/utilities/common/view-avatar-by-username-url";
type UserType = ResponseTypesForAdministratorSection["get_all_users"][number];

const STYLES = {
    wrapper: "p-2 dark:bg-slate-800 bg-slate-100 flex flex-col",
    headerRow: "flex flex-col flex-wrap",
    title: "font-bold",
    controls: "flex flex-row  flex-wrap gap-2 items-center",
    input: "py-2 px-1 min-w-100 border outline-none rounded-md bg-slate-300 dark:bg-slate-700",
    select: "p-2 border rounded-md cursor-pointer bg-slate-300 dark:bg-slate-800",
    smallBtn: "p-1 border rounded text-sm cursor-pointer bg-slate-300 dark:bg-slate-700",
    table: "min-w-full text-xs my-3",
    badgeBase: "px-2 py-1 text-xs font-semibold text-center",
    nextPrevStyles: " cursor-pointer px-3 py-1 border rounded disabled:opacity-50 disabled:cursor-not-allowed",
};

function parseDate(d: Date | string) {
    return typeof d === "string" ? new Date(d) : d;
}
function formatDate(d: Date) {
    const dt = parseDate(d);
    return dt.toLocaleString();
}

function getFilteredSorted(
    users: UserType[],
    opts: {
        query: string;
        filterType: "ALL" | ResponseTypesForAdministratorSection["get_all_users"][number]["account_type"];
        sortBy: "created_at" | "username";
        sortDir: "asc" | "desc";
    },
) {
    const { query, filterType, sortBy, sortDir } = opts;
    const q = query.trim().toLowerCase();
    let list = users.slice();

    if (filterType !== "ALL") list = list.filter((u) => u.account_type === filterType);

    if (q) {
        list = list.filter((u) => {
            const nickname = u.nickname ?? "";
            return (
                u.username.toLowerCase().includes(q) ||
                (u.email ?? "").toLowerCase().includes(q) ||
                nickname.toLowerCase().includes(q) ||
                (u.id ?? "").toLowerCase().includes(q)
            );
        });
    }

    list.sort((a, b) => {
        if (sortBy === "username") {
            return sortDir === "asc" ? a.username.localeCompare(b.username) : b.username.localeCompare(a.username);
        }
        const tA = parseDate(a.created_at).getTime();
        const tB = parseDate(b.created_at).getTime();
        return sortDir === "asc" ? tA - tB : tB - tA;
    });

    return list;
}
const optionsList = ["User", "Email", "Type", "Created", "Updated"] as const;
export function MainUserListComponent({
    initialUsers,
    pageSizeOptions = [10, 25, 50, 100, 1000],
}: {
    initialUsers: ResponseTypesForAdministratorSection["get_all_users"];
    pageSizeOptions?: number[];
}) {
    const [users] = useState<UserType[]>(initialUsers);
    const [query, setQuery] = useState("");
    const [filterType, setFilterType] = useState<
        "ALL" | ResponseTypesForAdministratorSection["get_all_users"][number]["account_type"]
    >("ALL");
    const [sortBy, setSortBy] = useState<"created_at" | "username">("created_at");
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

    return (
        <div className={STYLES.wrapper}>
            <div className={STYLES.headerRow}>
                <h2 className={STYLES.title}>Users ({total})</h2>

                <div className={STYLES.controls}>
                    <input
                        value={query}
                        onChange={(e) => {
                            e.preventDefault();
                            setQuery(e.target.value);
                            return setPage(1);
                        }}
                        placeholder="Search by username / email / nickname / id"
                        className={STYLES.input}
                    />

                    <select
                        value={filterType}
                        onChange={(e) => {
                            setFilterType(e.target.value as any);
                            setPage(1);
                        }}
                        className={STYLES.select}
                    >
                        <option value="ALL">All types</option>
                        <option value="USER">USER</option>
                        <option value="ADMIN">ADMIN</option>
                        <option value="DEVELOPER">DEVELOPER</option>
                        <option value="TESTER">TESTER</option>
                    </select>

                    <select value={sortBy} onChange={(e) => setSortBy(e.target.value as any)} className={STYLES.select}>
                        <option value="created_at">Sort by created</option>
                        <option value="username">Sort by username</option>
                    </select>

                    <button
                        onClick={() => setSortDir((s) => (s === "asc" ? "desc" : "asc"))}
                        className={STYLES.smallBtn}
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
                        className={STYLES.select}
                    >
                        {pageSizeOptions.map((s) => (
                            <option key={s} value={s}>
                                {s} / page
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <table className={STYLES.table}>
                <thead>
                    <tr>
                        {optionsList.map((item) => {
                            return (
                                <th key={item} className="px-4 py-3 text-left">
                                    {item}
                                </th>
                            );
                        })}
                    </tr>
                </thead>
                <tbody>
                    {pageSlice.map((u) => (
                        <tr key={u.id} className="border-y hover:bg-gray-50/80 dark:hover:bg-gray-50/10">
                            <td className="">
                                <div className="flex items-center gap-3">
                                    <JustAvatarCircleComponent
                                        altTitle={u.username + " avatar"}
                                        avatarUrl={makeAvatarFullUrl(u.avatar)}
                                    />
                                    <div className="flex flex-col">
                                        <Linker
                                            clearTheDefaultStylings
                                            className="hover:underline"
                                            href={`/user/${u.username}`}
                                        >
                                            <div className="font-mono">{"@" + u.username}</div>
                                        </Linker>
                                        <div className="text-xs text-gray-500">{u.nickname ?? "—"}</div>
                                    </div>
                                </div>
                            </td>
                            <td className="p-1">{u.email ?? "No email"}</td>
                            <td className={"p-1"}>{u.account_type}</td>
                            <td className="p-1">{formatDate(u.created_at)}</td>
                            <td className="p-1">{formatDate(u.updated_at)}</td>
                        </tr>
                    ))}
                    {pageSlice.length === 0 && (
                        <tr>
                            <td colSpan={7} className="px-4 py-6 text-center text-gray-500">
                                No users found
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className="flex items-center justify-between mt-4">
                <div className="text-xs text-gray-600 dark:text-gray-200">
                    Showing {Math.min((page - 1) * pageSize + 1, total)} - {Math.min(page * pageSize, total)} of {total}
                </div>
                <div className="flex items-center gap-2">
                    <button
                        disabled={page <= 1}
                        onClick={() => setPage((p) => Math.max(1, p - 1))}
                        className={STYLES.nextPrevStyles}
                    >
                        Prev
                    </button>
                    <div className="px-3 py-1 border rounded">
                        Page {page} / {pages}
                    </div>
                    <button
                        disabled={page >= pages}
                        onClick={() => setPage((p) => Math.min(pages, p + 1))}
                        className={STYLES.nextPrevStyles}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}
