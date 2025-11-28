"use client";
import type { Administrator_ResponseTypes } from "#user-service/shared/response-patterns/administrator.routes.js";
import type { Metadata } from "next";
import { useMemo, useState } from "react";

export type UserProfile = {
    id: string;
    created_at: Date | string;
    updated_at: Date | string;
    by_account_id: string;
    bio: string | null;
    nickname: string | null;
} | null;

export type User = {
    id: string;
    created_at: Date | string;
    updated_at: Date | string;
    type: "USER" | "ADMIN" | "DEVELOPER" | "TESTER";
    email: string | null;
    username: string;
    password_hash: string;
    is_activated: boolean;
    activation_link: string | null;
    profile: UserProfile;
};

export type MainUserListShowerProps = {
    users: Administrator_ResponseTypes.get_all_users;
    pageSizeOptions?: number[];
};

// Utility helpers
const shortId = (id: string) => `${id.slice(0, 8)}...${id.slice(-4)}`;
const parseDate = (d: Date | string) =>
    typeof d === "string" ? new Date(d) : d;
const formatDate = (d?: Date | string) => {
    if (!d) return "—";
    const dt = parseDate(d);
    return dt.toLocaleString();
};

const typeBadge = (t: User["type"]) => {
    switch (t) {
        case "ADMIN":
            return "bg-red-100 text-red-800";
        case "DEVELOPER":
            return "bg-blue-100 text-blue-800";
        case "TESTER":
            return "bg-yellow-100 text-yellow-800";
        default:
            return "bg-gray-100 text-gray-800";
    }
};
const selectStyles = "   cursor-pointer";
const selectWrapperStyles =
    "px-3 py-2 border rounded-md  cursor-pointer bg-slate-300 dark:bg-slate-800 cursor-pointer";
// Main component (default export)
export function MainUserListShower({
    users,
    pageSizeOptions = [10, 25, 50],
}: MainUserListShowerProps) {
    const [query, setQuery] = useState("");
    const [filterType, setFilterType] = useState<"ALL" | User["type"]>("ALL");
    const [sortBy, setSortBy] = useState<"created_at" | "username">(
        "created_at",
    );
    const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState<number>(pageSizeOptions[0]);
    const [modalUser, setModalUser] = useState<User | null>(null);

    // Filtered + sorted list
    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        let list = users.slice();
        if (filterType !== "ALL") {
            list = list.filter((u) => u.type === filterType);
        }
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
    }, [users, query, filterType, sortBy, sortDir]);

    // Pagination
    const total = filtered.length;
    const pages = Math.max(1, Math.ceil(total / pageSize));
    const pageSlice = filtered.slice((page - 1) * pageSize, page * pageSize);

    // Actions (these are UI-only — wire them to your API calls)
    const toggleActivation = (u: User) => {
        // Placeholder: call API to toggle activation. Here we just log.
        console.log("toggle activation for", u.id, "->", !u.is_activated);
        // Optional: optimistic UI update — but since users are passed as prop,
        // you should ideally lift state up or refetch after success.
        alert(`(UI demo) Would toggle activation for ${u.username}`);
    };

    const copyId = (id: string) => {
        navigator.clipboard?.writeText(id).then(() => alert("ID copied"));
    };

    return (
        <div className="p-4 bg-slate-100  dark:bg-slate-800">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                <h2 className="text-2xl font-semibold">Users ({total})</h2>

                <div className="flex gap-2 items-center">
                    <input
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value);
                            setPage(1);
                        }}
                        placeholder="Search by username / email / nickname / id"
                        className="px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
                    />

                    <select
                        value={filterType}
                        onChange={(e) => {
                            setFilterType(e.target.value as any);
                            setPage(1);
                        }}
                        className={selectWrapperStyles}
                    >
                        <option className={selectStyles} value="ALL">
                            All types
                        </option>
                        <option className={selectStyles} value="USER">
                            USER
                        </option>
                        <option className={selectStyles} value="ADMIN">
                            ADMIN
                        </option>
                        <option className={selectStyles} value="DEVELOPER">
                            DEVELOPER
                        </option>
                        <option className={selectStyles} value="TESTER">
                            TESTER
                        </option>
                    </select>

                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as any)}
                        className={selectWrapperStyles}
                    >
                        <option value="created_at">Sort by created</option>
                        <option value="username">Sort by username</option>
                    </select>
                    <button
                        onClick={() =>
                            setSortDir((s) => (s === "asc" ? "desc" : "asc"))
                        }
                        className="px-3 py-2 border rounded-md  cursor-pointer "
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
                        className={selectWrapperStyles}
                    >
                        {pageSizeOptions.map((s) => (
                            <option key={s} value={s}>
                                {s} / page
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="overflow-x-auto bg-transparent rounded-lg shadow">
                <table className="min-w-full text-sm">
                    <thead className="bg-transparent">
                        <tr>
                            <th className="px-4 py-3 text-left">ID</th>
                            <th className="px-4 py-3 text-left">User</th>
                            <th className="px-4 py-3 text-left">Email</th>
                            <th className="px-4 py-3 text-left">Type</th>
                            <th className="px-4 py-3 text-left">Activated</th>
                            <th className="px-4 py-3 text-left">Created</th>
                            <th className="px-4 py-3 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pageSlice.map((u) => (
                            <tr
                                key={u.id}
                                className="border-t hover:bg-gray-50/80 dark:hover:bg-gray-50/10"
                            >
                                <td className="px-4 py-3 align-middle">
                                    {shortId(u.id)}
                                </td>
                                <td className="px-4 py-3 align-middle">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-slate-800 flex items-center justify-center font-medium text-indigo-700 dark:text-indigo-500">
                                            {u.profile?.nickname?.[0]?.toUpperCase() ??
                                                u.username[0].toUpperCase()}
                                        </div>
                                        <div>
                                            <div className="font-medium">
                                                {u.username}
                                            </div>
                                            <div className="text-xs text-gray-500">
                                                {u.profile?.nickname ?? "—"}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-3 align-middle">
                                    {u.email ?? "—"}
                                </td>
                                <td className="px-4 py-3 align-middle">
                                    <span
                                        className={`px-2 py-1 rounded-full text-xs font-semibold ${typeBadge(
                                            u.type,
                                        )}`}
                                    >
                                        {u.type}
                                    </span>
                                </td>
                                <td className="px-4 py-3 align-middle">
                                    <label className="inline-flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            checked={u.is_activated}
                                            onChange={() => toggleActivation(u)}
                                            className="form-checkbox h-4 w-4 text-indigo-600"
                                        />
                                        <span className="text-sm">
                                            {u.is_activated ? "Yes" : "No"}
                                        </span>
                                    </label>
                                </td>
                                <td className="px-4 py-3 align-middle">
                                    {formatDate(u.created_at)}
                                </td>
                                <td className="px-4 py-3 align-middle">
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => setModalUser(u)}
                                            className="px-2 py-1 border rounded text-sm"
                                        >
                                            View
                                        </button>
                                        <button
                                            onClick={() => copyId(u.id)}
                                            className="px-2 py-1 border rounded text-sm"
                                        >
                                            Copy ID
                                        </button>
                                    </div>
                                </td>
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

            {/* Pagination controls */}
            <div className="flex items-center justify-between mt-4">
                <div className="text-sm text-gray-600">
                    Showing {Math.min((page - 1) * pageSize + 1, total)} -{" "}
                    {Math.min(page * pageSize, total)} of {total}
                </div>
                <div className="flex items-center gap-2">
                    <button
                        disabled={page <= 1}
                        onClick={() => setPage((p) => Math.max(1, p - 1))}
                        className=" cursor-pointer px-3 py-1 border rounded disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Prev
                    </button>
                    <div className="px-3 py-1 border rounded">
                        Page {page} / {pages}
                    </div>
                    <button
                        disabled={page >= pages}
                        onClick={() => setPage((p) => Math.min(pages, p + 1))}
                        className=" cursor-pointer px-3 py-1 border rounded disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Next
                    </button>
                </div>
            </div>

            {/* Modal */}
            {modalUser && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                    <div className="bg-slate-200 dark:bg-slate-900 rounded-lg w-11/12 md:w-1/2 p-4 shadow-lg">
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="text-lg font-semibold">
                                {modalUser.username} — profile
                            </h3>
                            <button
                                onClick={() => setModalUser(null)}
                                className="text-gray-500  cursor-pointer "
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
                                onClick={() => {
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
        </div>
    );
}
