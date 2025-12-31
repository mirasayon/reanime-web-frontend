"use client";
import { SetAvatarForm } from "./set-avatar.el-component";
import { ShowAvatarElement } from "./show-avatar-for-logged-user";
import { useState } from "react";
export function UploadAvatarOrShowForLoggedAccountComponent({ avatarUrl }: { avatarUrl: string | null }) {
    const [isEditing, setIsEditing] = useState(false);
    return (
        <div className=" flex flex-col">
            {avatarUrl && !isEditing && <ShowAvatarElement avatarUrl={avatarUrl} />}
            {!avatarUrl && <SetAvatarForm setIsEditing={setIsEditing} />}
        </div>
    );
}
