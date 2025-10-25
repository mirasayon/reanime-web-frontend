export const UserServiceMediaConfigs = {
    avatar_file_name: "r6_one_avatar_image_file" as const,
    avatar_file_name_for_user_service: "one_avatar_image_file" as const,
    avatar_file_HTML_INPUT_name: "r6_avatar_file" as const,
} as const;
export type UserServiceMediaConfigs = (typeof UserServiceMediaConfigs)[keyof typeof UserServiceMediaConfigs];
export const supported_pfp_format = ["image/png", "image/jpeg", "image/jpg"];
