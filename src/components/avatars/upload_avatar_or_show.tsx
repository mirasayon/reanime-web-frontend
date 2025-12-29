"use client";
import { SetAvatarForm } from "./set-avatar.el-component";
import { ShowAvatarElement } from "./show-avatar-for-logged-user";
import { useState } from "react";
export function UploadAvatarOrShowForLoggedAccountComponent({
    avatarUrl,
    username,
}: {
    avatarUrl: string | null;
    username: string;
}) {
    const [isEditing, setIsEditing] = useState(false);
    return (
        <div className=" flex flex-col">
            {!isEditing && <ShowAvatarElement hasCustomAvatar={!!avatarUrl} username={username} />}
            {!avatarUrl && <SetAvatarForm setIsEditing={setIsEditing} />}
        </div>
    );
}
