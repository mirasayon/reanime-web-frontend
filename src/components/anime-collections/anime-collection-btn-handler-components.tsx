"use client";
import {
    AddPlannedBtnComponent,
    AddToAbandonedListBtnComponent,
    AddToCurrentWatchingListBtnComponent,
    AddToCompletedListBtnComponent,
} from "./anime-collection-buttons";
import { SubmitBtnComponent } from "./anime-collection-submit-create-btn";
import { useTransition } from "react";
import {
    addPlannedAnimeServerAction,
    addToAbandonedAnimeServerAction,
    addToCompletedAnimeServerAction,
    addToCurrentAnimeServerAction,
    deleteFromAbandonedAnimeServerAction,
    deleteFromCompletedAnimeServerAction,
    deleteFromCurrentAnimeServerAction,
    deletePlannedAnimeServerAction,
} from "#/actions/anime-bookmarks/anime-bookmarks-server-actions";
import { useToaster } from "#/components/layout/atoms-toasts-components/useToast";
import { serverActionHandlerOnClient } from "#/integration/utils/server-action-handler-on-client";
import type { ServerActionResponse } from "#T/integrator-main-types";

export function AddAnimeToPlannedForm({ animeId, state }: { animeId: number; state: "delete" | "create" }) {
    const [isPending, startTransition] = useTransition();
    const toaster = useToaster();
    function onClickHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        return startTransition(async () => {
            let res: ServerActionResponse;
            if (state === "create") {
                res = await addPlannedAnimeServerAction(animeId);
            } else {
                res = await deletePlannedAnimeServerAction(animeId);
            }
            return serverActionHandlerOnClient({ res, error: toaster.error });
        });
    }
    return (
        <SubmitBtnComponent isPending={isPending} onClickHandler={onClickHandler}>
            <AddPlannedBtnComponent state={state} />
        </SubmitBtnComponent>
    );
}

export function AddAnimeToCompletedForm({ animeId, state }: { animeId: number; state: "delete" | "create" }) {
    const [isPending, startTransition] = useTransition();
    const toaster = useToaster();
    function onClickHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        return startTransition(async () => {
            let res: ServerActionResponse;
            if (state === "create") {
                res = await addToCompletedAnimeServerAction(animeId);
            } else {
                res = await deleteFromCompletedAnimeServerAction(animeId);
            }
            return serverActionHandlerOnClient({ res, error: toaster.error });
        });
    }
    return (
        <SubmitBtnComponent isPending={isPending} onClickHandler={onClickHandler}>
            <AddToCompletedListBtnComponent state={state} />
        </SubmitBtnComponent>
    );
}

export function AddAnimeToWatchingForm({ animeId, state }: { animeId: number; state: "delete" | "create" }) {
    const [isPending, startTransition] = useTransition();
    const toaster = useToaster();
    function onClickHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        return startTransition(async () => {
            let res: ServerActionResponse;
            if (state === "create") {
                res = await addToCurrentAnimeServerAction(animeId);
            } else {
                res = await deleteFromCurrentAnimeServerAction(animeId);
            }
            return serverActionHandlerOnClient({ res, error: toaster.error });
        });
    }
    return (
        <SubmitBtnComponent isPending={isPending} onClickHandler={onClickHandler}>
            <AddToCurrentWatchingListBtnComponent state={state} />
        </SubmitBtnComponent>
    );
}

export function AddAnimeToAbandonedForm({ animeId, state }: { animeId: number; state: "delete" | "create" }) {
    const [isPending, startTransition] = useTransition();
    const toaster = useToaster();
    function onClickHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        return startTransition(async () => {
            let res: ServerActionResponse;
            if (state === "create") {
                res = await addToAbandonedAnimeServerAction(animeId);
            } else {
                res = await deleteFromAbandonedAnimeServerAction(animeId);
            }
            return serverActionHandlerOnClient({ res, error: toaster.error });
        });
    }
    return (
        <SubmitBtnComponent isPending={isPending} onClickHandler={onClickHandler}>
            <AddToAbandonedListBtnComponent state={state} />
        </SubmitBtnComponent>
    );
}
