"use client";
import { SetAvatarForm } from "./set-avatar.el-component";
import type {
    AvatarPicture,
    Profile,
} from "#user-service/databases/orm/client.js";
import { ShowAvatarElement } from "./show-avatar-for-logged-user";
import { useState } from "react";
export function UploadAvatarOrShowForLoggedAccountComponent({
    profile,
    username,
}: {
    profile: Profile & { avatar: AvatarPicture | null };
    username: string;
}) {
    const [isEditing, setIsEditing] = useState(false);
    return (
        <div className=" flex flex-col">
            {!isEditing && (
                <ShowAvatarElement
                    hasCustomAvatar={!!profile.avatar?.url}
                    username={username}
                />
            )}
            {!profile.avatar?.url && (
                <SetAvatarForm setIsEditing={setIsEditing} />
            )}
        </div>
    );
}
